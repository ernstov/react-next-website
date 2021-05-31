import {useReducer, useState, useEffect} from "react"
import { Context } from "../context/context"
import reducerApp from "../context/reducerApp"
import appConfig from "../configs/appConfig"
import languages from "../configs/languages"
import Router, {useRouter} from "next/router"

import "../styles/main.scss"
import 'swiper/swiper.scss'
import 'swiper/components/lazy/lazy.scss'


export default function App({ Component, pageProps }) {

  const [lang, setLang] =  useState(languages[appConfig.lang]);
  const router = useRouter()

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

  useEffect(()=>{
    const start = (e) => {
      dispatchApp({type: "SET_LOADING", data: {isLoading:true, nextPage: e}});
    };
    const end = (e) => {
      dispatchApp({type: "SET_LOADING", data: {isLoading:false, nextPage: e}});
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, [])

  return <Context.Provider value={{ app, dispatchApp, lang }}>
    <Component {...pageProps} path={router.pathname}/>
  </Context.Provider>
}