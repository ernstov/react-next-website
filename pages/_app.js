import { useReducer, useState, useEffect, useRef } from "react"
import { Context } from "../context/context"
import reducerApp from "../context/reducerApp"
import appConfig from "../configs/appConfig"
import languages from "../configs/languages"
import Router, { useRouter } from "next/router"
import { LayoutBase } from "../components/Layout"
import Scrollbar from "react-smooth-scrollbar"
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import "../styles/main.scss"
import 'swiper/swiper.scss'
import 'swiper/components/lazy/lazy.scss'
import BottomMenu from "../components/BottomMenu"
import { isWrap, isSmoothScroll } from "../utils"
import Agreement from "../components/Agreement"
import "notyf/notyf.min.css"
import TagManager from 'react-gtm-module'
import UserBillingService from "../services/UserBillingService"
import Loader from "../components/Loader"

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
  });

  const isAuth = () => !!app.user

  useEffect(() => {
    UserBillingService.getUser()
      .then(user => dispatchApp({ type: "SET_USER", data: { user } }))
      .finally(() => setCheckedUserState(true))
  }, [])

  useEffect(() => {
    if (checkedUserState) {
      if (isAccount() && !isAuth()) {
        router.push({ pathname: "/sign-in", query: { redirect: router.pathname } })
      } else if (router.pathname === '/sign-in' && isAuth()) {
        router.push("/account/overview")
      }
    }
  }, [router.pathname, checkedUserState])

  useEffect(() => {

    if (!isWrap()) setWrap(false)
    setSmooth(isSmoothScroll)
    TagManager.initialize(tagManagerArgs)

    const start = (e) => {
      dispatchApp({ type: "SET_LOADING", data: { isLoading: true, nextPage: e } });
      scrollB.current?.scrollbar.scrollTo(0, 0, 500);
      setLoaderState("preload")
    };
    const end = (e) => {
      dispatchApp({ type: "SET_LOADING", data: { isLoading: false, nextPage: e } });
      setLoaderState("loaded")
    };

    setTimeout(() => {
      setLoaderState("loaded")
    }, 500)

    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);

    // ApiService.getPages()
    // .then((responses) => Promise.all(responses.map((response) => response.json())))
    // .then((result) => {
    //   dispatchApp({ type: "SET_APP_VALUES", data: { trands: result.slice(0, 4), blog: result.slice(4, 5)[0] } });
    // })
    // .catch((err) => console.error(err));

    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, [])

  const isSidebar = () => {
    return router.pathname.indexOf("/account") != -1 || router.pathname.indexOf("/documentation") != -1
  }

  const getSidebarVariant = () => {
    if (router.pathname.indexOf("/account") != -1) return "account"
    if (router.pathname.indexOf("/documentation") != -1) return "documentation"
  }

  const isHome = () => {
    return router.pathname == "/"
  }

  const isAccount = () => {
    return !!router.pathname?.includes("/account")
  }

  const isDocumentation = () => {
    return !!router.pathname?.includes("/documentation")
  }

  return <Context.Provider value={{ app, dispatchApp, lang, scrollB }}>
    <LayoutBase isSmoothScroll={smooth} variant={isAccount() ? 'account' : ""} isWrap={wrap && !isHome()}>
      {isLoader && <Loader loaderState={loaderState} />}
      {(wrap && !isHome()) && <Header path={router.pathname} variant={`advanced`} isLoggedIn={isAuth()} />}
      {isHome() && <BottomMenu path={router.pathname} data={appConfig.bottomMenu} />}
      {isSidebar() && <Sidebar isWrap={wrap} variant={getSidebarVariant()} />}
      <Scrollbar damping={0.2} className="scoll-bar" ref={e => { if (e && !scrollB.current) { scrollB.current = e; } }}>
        <div><Component {...pageProps} path={router.pathname} /></div>
        {(isAccount() || isDocumentation()) && <Agreement />}
      </Scrollbar>
    </LayoutBase>
  </Context.Provider>
}
