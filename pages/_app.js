import { useReducer, useState, useEffect, useRef } from "react"
import { Context } from "../context/context"
import reducerApp from "../context/reducerApp"
import appConfig from "../configs/appConfig"
import languages from "../configs/languages"
import Router, { useRouter } from "next/router"
import { LayoutBase } from "../components/Layout"
import Scrollbar from "react-smooth-scrollbar"
import Header from "../components/Header"
import HeaderDemo from "../components/Header/HeaderDemo"
import Sidebar from "../components/Sidebar"
import "../styles/main.scss"
import BottomMenu from "../components/BottomMenu"
import { isWrap, isSmoothScroll, scrollTo } from "../utils"
import Agreement from "../components/Agreement"
import "notyf/notyf.min.css"
import TagManager from 'react-gtm-module'
import UserBillingService from "../services/UserBillingService"
import Loader from "../components/Loader"
import moment from "moment"
import DemoError from "../sections/DemoViewer/Error"
import DemoNotification from "../sections/DemoViewer/Notification"

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const tagManagerArgs = {
  gtmId: appConfig.gtmId,
}

export default function App({ Component, pageProps }) {

  const [lang, setLang] = useState(languages[appConfig.lang])
  const [loaderState, setLoaderState] = useState("load")
  const router = useRouter()
  const scrollB = useRef(null)
  const [isLoader, setIsLoader] = useState(false)
  const [wrap, setWrap] = useState(true)
  const [smooth, setSmooth] = useState(true)
  const [checkedUserState, setCheckedUserState] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const [app, dispatchApp] = useReducer(reducerApp, {
    isLoading: false,
    isDataLoading: false,
    currentData: null,
    activeFilters: 2,
    filter: "Top",
    dataPosts: {},
    headlinesUpdated: 1,
    offset: null,
    nextPage: router.asPath,
    isAuth: false,
    user: null,
    trands: [],
    blog: [],
    selectedFilters: {
      sortBy: "Time",
      showResults: true,
      noReprints: true,
      domains: [],
      topics: [],
      categories: [],
      startingOn: moment().subtract("1", "days").format("YYYY-MM-DD"),
      includeArticle: true,
      includeVideo: true,
      noPaywalled: false,
      noNonnews: false,
      noOpinions: false,
      noPaidNews: false,
      noPressReleases: false,
      noRoundups: false,
    },
    isActiveFilter: false,
    categories: [],
    topics: [],
    demoError: "",
    isButtonDisabled: false,
    isAnimLoading: false,
    trigerSearch: false,
  });

  const isAuth = () => !!app.user
  const userIsAdmin = () => {
    return !!app.user && app.user.isAdmin
  }

  useEffect(() => {
    UserBillingService.getUser()
      .then(user => dispatchApp({ type: "SET_USER", data: { user } }))
      .finally(() => setCheckedUserState(true))

    onResize()

    window.addEventListener("resize", onResize)

    return () => {
      window.removeEventListener("resize", onResize)
    }
  }, [])

  const onResize = () => {
    var doc = document.documentElement
    doc.style.setProperty('--vh', (window.innerHeight * .01) + 'px');
  }

  useEffect(() => {
    if (checkedUserState) {
      if ((isAccount() || isAdmin()) && !isAuth()) {
        router.push({ pathname: "/sign-in", query: { redirect: router.pathname } })
      } else if ((router.pathname === '/sign-in' || router.pathname === '/sign-up') && isAuth()) {
        router.push("/account/overview")
      } else if (isAdmin() && !userIsAdmin()) {
        router.push("/account/overview")
      }
    }
  }, [router.pathname, checkedUserState])

  useEffect(() => {

    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 720)
    }

    if (!isWrap()) setWrap(false)
    setSmooth(isSmoothScroll)
    TagManager.initialize(tagManagerArgs)

    const start = (e) => {
      dispatchApp({ type: "SET_LOADING", data: { isLoading: true, nextPage: e } });

      if (router.asPath.indexOf("#") == -1) scrollB.current?.scrollbar.scrollTo(0, 0, 500)

      setLoaderState("preload")
    };
    const end = (e) => {
      dispatchApp({ type: "SET_LOADING", data: { isLoading: false, nextPage: e } });
      setLoaderState("loaded")
    };

    setTimeout(() => {
      setLoaderState("loaded")
    }, 500)

    if (router.asPath.indexOf("#") >= 0) {
      setTimeout(() => {
        scrollB.current?.scrollbar.scrollTo(0, 0, 0)
        window.scrollTo(0, 0);
      }, 10)
      setTimeout(() => {
        const ltmp = router.asPath.split("#")
        const id = ltmp[ltmp.length - 1]
        scrollTo(id, isWrap(), scrollB)
      }, 1000)
    }

    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);

    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, [])

  const isSidebar = () => {
    return router.pathname.indexOf("/account") != -1 ||
      router.pathname.indexOf("/documentation") != -1 ||
      router.pathname.indexOf("/admin") != -1
  }

  const getSidebarVariant = () => {
    if (router.pathname.indexOf("/account") != -1) return "account"
    if (router.pathname.indexOf("/documentation") != -1) return "documentation"
    if (router.pathname.indexOf("/admin") != -1) return "admin"
  }

  const isHome = () => {
    return router.pathname == "/"
  }

  const isAccount = () => {
    return !!router.pathname?.includes("/account")
  }

  const isDemo = () => {
    return !!router.pathname?.includes("/data-solutions/demo")
  }

  const isAdmin = () => {
    return !!router.pathname?.includes("/admin")
  }

  const isDocumentation = () => {
    return !!router.pathname?.includes("/documentation")
  }

  const getLayoutVariant = () => {

    if (isAccount()) return 'account'
    if (isDemo()) return 'demo'

    return ''
  }

  return <Context.Provider value={{ app, dispatchApp, lang, scrollB, isMobile, checkedUserState }}>
    <LayoutBase isSmoothScroll={smooth} variant={getLayoutVariant()} isWrap={wrap && !isHome()}>
      {isLoader && <Loader loaderState={loaderState} />}
      {(wrap && !isHome() && !isDemo()) && <Header path={router.pathname} variant={`advanced`} isLoggedIn={isAuth()} />}
      {(wrap && isDemo()) && <HeaderDemo path={router.pathname} isLoggedIn={isAuth()} />}
      {isHome() && <BottomMenu path={router.pathname} data={appConfig.bottomMenu} />}
      {isSidebar() && <Sidebar isWrap={wrap} variant={getSidebarVariant()} />}
      <Scrollbar damping={0.2} className="scoll-bar" ref={e => { if (e && !scrollB.current) { scrollB.current = e; } }}>
        <div><Component {...pageProps} path={router.pathname} /></div>
        {(isAccount() || isDocumentation()) && <Agreement />}
      </Scrollbar>
      <DemoError />
      <DemoNotification />
    </LayoutBase>
  </Context.Provider>
}
