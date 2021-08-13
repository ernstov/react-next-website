import { useReducer, useState, useEffect, useRef } from "react"
import { Context } from "../context/context"
import reducerApp from "../context/reducerApp"
import appConfig from "../configs/appConfig"
import languages from "../configs/languages"
import Router, { useRouter } from "next/router"
import { LayoutBase, LayoutRow } from "../components/Layout"
import Scrollbar from "react-smooth-scrollbar"
import Loader from "../components/Loader/"
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import { getCurrentUserData } from "../utils/AuthUtils"
import "../styles/main.scss"
import 'swiper/swiper.scss'
import 'swiper/components/lazy/lazy.scss'
// import 'jsoneditor-react/es/editor.min.css';
import ApiService from "../services/ApiService"
import BottomMenu from "../components/BottomMenu"
import { isWrap } from "../utils";

export default function App({ Component, pageProps }) {

  const [lang, setLang] = useState(languages[appConfig.lang])
  const [loaderState, setLoaderState] = useState("load")
  const router = useRouter()
  const scrollB = useRef(null)
  const [isLoader, setIsLoader] = useState(true)
  const [wrap, setWrap] = useState(true)

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
    user: {},
    trands: [],
    blog: [],
  });

  useEffect(() => {
    if (router.pathname.indexOf("/account") != -1 || router.pathname.indexOf("/documentation") != -1) {
      setTimeout(() => {
        setIsLoader(false)
      }, 1200)
    } else {
      setIsLoader(true)
    }
  }, [router.pathname])

  useEffect(() => {

    if(!isWrap()) setWrap(false)

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

    const userData = getCurrentUserData()

    if (!isAuth(userData)) {
      router.push("/sign-in")
    } else {
      dispatchApp({ type: "SET_USER", data: { user: { id: userData.sub, email: userData.email } } })
    }

    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);

    ApiService.getPages()
    .then((responses) => Promise.all(responses.map((response) => response.json())))
    .then((result) => {
      dispatchApp({ type: "SET_APP_VALUES", data: { trands: result.slice(0, 4), blog: result.slice(4, 5)[0] } });
    })
    .catch((err) => console.error(err));

    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, [])

  const isSidebar = () => {
    return router.pathname.indexOf("/account") != -1 || router.pathname.indexOf("/documentation") != -1
  }

  const isLoggedIn = () => {
    return router.pathname.indexOf("/account") != -1 || router.pathname.indexOf("/documentation") != -1
  }

  const getSidebarVariant = () => {
    if (router.pathname.indexOf("/account") != -1) return "account"
    if (router.pathname.indexOf("/documentation") != -1) return "documentation"
  }

  const isAuth = (userData) => {
    if (router.pathname.indexOf("/account") >= 0 || router.pathname.indexOf("/details") >= 0) {
      return userData?.sub && userData?.email && userData?.exp > Date.now()
    }
    return true
  }

  const getHeaderVariant = () => {
    if(router.pathname.indexOf("/account") != -1 || router.pathname.indexOf("/documentation") != -1 || router.pathname.indexOf("/business") != -1) return "business"
  }

  const isHome = () => {
    return router.pathname.indexOf("/account") == -1 || router.pathname.indexOf("/documentation") == -1 || router.pathname.indexOf("/business") == -1
  }


  return <Context.Provider value={{ app, dispatchApp, lang, scrollB }}>
    <LayoutBase isWrap={wrap}>
      {isLoader && <Loader loaderState={loaderState} />}
      {wrap && <Header path={router.pathname} variant={getHeaderVariant()} isLoggedIn={isLoggedIn()} />}
      {isHome() && <BottomMenu path={router.pathname} data={appConfig.bottomMenu}/>}
      {isSidebar() && <Sidebar variant={getSidebarVariant()} />}
      <Scrollbar className="scoll-bar" ref={e => { if (e && !scrollB.current) { scrollB.current = e; } }}>
        <Component {...pageProps} path={router.pathname} />
      </Scrollbar>
    </LayoutBase>
  </Context.Provider>
}