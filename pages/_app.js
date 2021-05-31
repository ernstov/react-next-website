import { useReducer, useState, useEffect, useRef} from "react"
import { Context } from "../context/context"
import reducerApp from "../context/reducerApp"
import appConfig from "../configs/appConfig"
import languages from "../configs/languages"
import Router, { useRouter } from "next/router"
import { LayoutBase, LayoutRow } from "../components/Layout"
import Scrollbar from "react-smooth-scrollbar"
import Loader from "../components/Loader/"
import Header from "../components/Header"

import "../styles/main.scss"
import 'swiper/swiper.scss'
import 'swiper/components/lazy/lazy.scss'
// import 'jsoneditor-react/es/editor.min.css';

export default function App({ Component, pageProps }) {

  const [lang, setLang] = useState(languages[appConfig.lang]);
  const [loaderState, setLoaderState] = useState("load");
  const router = useRouter()
  const scrollB = useRef(null);

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
  });

  useEffect(() => {
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
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, [])

  return <Context.Provider value={{ app, dispatchApp, lang, scrollB }}>
    <LayoutBase>
      <Loader loaderState={loaderState} />
      <Header />
      <Scrollbar className="scoll-bar" ref={e => { if (e && !scrollB.current) { scrollB.current = e; } }}>
        <Component {...pageProps} path={router.pathname} />
      </Scrollbar>
    </LayoutBase>
  </Context.Provider>
}