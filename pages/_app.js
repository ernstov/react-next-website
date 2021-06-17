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

export default function App({ Component, pageProps }) {

  const [lang, setLang] = useState(languages[appConfig.lang])
  const [loaderState, setLoaderState] = useState("load")
  const router = useRouter()
  const scrollB = useRef(null)
  const [isLoader, setIsLoader] = useState(true)

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
    user: {}
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

    const start = (e) => {
      dispatchApp({ type: "SET_LOADING", data: { isLoading: true, nextPage: e } });
      scrollB.current?.scrollbar.scrollTo(0, 0, 500);
      setLoaderState("preload")
      const userData = getCurrentUserData()
      if (userData?.sub && userData?.email)
        dispatchApp({ type: "SET_USER", data: { user: { id: userData.sub, email: userData.email } } })
    };
    const end = (e) => {
      dispatchApp({ type: "SET_LOADING", data: { isLoading: false, nextPage: e } });
      setLoaderState("loaded")
    };

    setTimeout(() => {
      setLoaderState("loaded")
    }, 500)

    const userData = getCurrentUserData()
    if (userData?.sub && userData?.email)
      dispatchApp({ type: "SET_USER", data: { user: { id: userData.sub, email: userData.email } } })

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
    return router.pathname.indexOf("/account") != -1 || router.pathname.indexOf("/documentation") != -1
  }

  const isLoggedIn = () => {
    return router.pathname.indexOf("/account") != -1 || router.pathname.indexOf("/documentation") != -1
  }

  const getSidebarVariant = () => {
    if (router.pathname.indexOf("/account") != -1) return "account"
    if (router.pathname.indexOf("/documentation") != -1) return "documentation"
  }

  return <Context.Provider value={{ app, dispatchApp, lang, scrollB }}>
    <LayoutBase>
      {isLoader && <Loader loaderState={loaderState} />}
      <Header isLoggedIn={isLoggedIn()} />
      {isSidebar() && <Sidebar variant={getSidebarVariant()} />}
      <Scrollbar className="scoll-bar" ref={e => { if (e && !scrollB.current) { scrollB.current = e; } }}>
        <Component {...pageProps} path={router.pathname} />
      </Scrollbar>
    </LayoutBase>
  </Context.Provider>
}