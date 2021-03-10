import React, { useReducer, useEffect, useState, useRef } from "react";
import Header from "../components/header/Header";
import { Context } from "../context/context";
import reducerLayout from "../context/reducerLayout";
import reducerPages from "../context/reducerPages";
import reducerSettings from "../context/reducerSettings";
import reducerNotifi from "../context/reducerNotifi";
import Loader from "../components/loader/Loader";
import Scrollbar from 'react-smooth-scrollbar';
import SmoothScrollbar from 'smooth-scrollbar';
import StopScrollPlugin from "../utils/plugins/ScrollStop";
import Sidebar from "../sections/sidebar";
import OnImagesLoaded from 'react-on-images-loaded';
import ContentManager from "../services/ContentManager";
import PosedRouter from "../components/pseudorouter";
import { settings } from "../data/settings";
import ReactDynamicImport from "react-dynamic-import";
import { globalHistory } from "@reach/router";
import { isWrap } from "../utils";
import Page from "../pages/Page";

SmoothScrollbar.use(StopScrollPlugin);

import "./App.scss";
import "../styles/style.scss";

const App = () => {

  const [state, dispatchLayout] = useReducer(reducerLayout, {
    loadderState: "load", // load
    isShowContent: false, // false
    preloadStatus: "loading",
    headerState: "",
  });

  const [loadedSettings, dispatchSettings] = useReducer(reducerSettings, {
    navigation: []
  });

  const [pages, dispatchPages] = useReducer(reducerPages, {});
  const [notification, dispatchNotifi] = useReducer(reducerNotifi, {});
  const [components, setComponents] = useState([]);
  const [page, setPage] = useState({ currentPage: window.location.pathname, previousPage: null });
  const scrollB = useRef(null);
  const [wrap, setWrap] = useState(true);

  useEffect(() => {
    if (pages && pages.trands) {
      dispatchLayout({ type: "SET_LAYOUT", data: { isShowContent: true } });
    }
  }, [pages])

  useEffect(() => {
    importComponents();
    ContentManager({ dispatchPages, dispatchNotifi });

    setWrap(isWrap());

    globalHistory.listen((params) => {

      setWrap(isWrap());

      dispatchLayout({ type: "SET_LAYOUT", data: { loadderState: "preload" } });

      if (scrollB) {
        setTimeout(() => {
          scrollB.current.scrollbar.scrollTo(0, 0, 0);

          setTimeout(() => {
            dispatchLayout({ type: "SET_LAYOUT", data: { loadderState: "loaded" } });
          }, 500)
        }, 300)
      }

      setPage(prevState => ({ ...prevState, currentPage: params.location.pathname }));
    })
  }, [])

  const loaded = () => {
    setTimeout(() => {
      document.querySelector("#loader-bg").remove();

      setTimeout(() => {
        if (document.querySelector(".loader-inner")) document.querySelector(".loader-inner").classList.add("hide");
      }, 600)

      setTimeout(() => {
        dispatchLayout({ type: "SET_LAYOUT", data: { loadderState: "loaded" } });
      }, 1200)

    }, 100);
  }

  const importComponent = (name, link, data, i) => {
    const loader = () => import(`../pages/${name}`);
    const Component = ReactDynamicImport({ loader });

    return <Component key={`r-${i}`} path={link} data={data} />
  }

  const importDefault = (id) => {
    return <Page key={`${id}`} default />
  }

  const importComponents = () => {
    const comps = [];

    comps.push(importDefault("idefault"));

    settings.navigation.map((nav, i) => {
      if (nav.component) {
        comps.push(importComponent(nav.component, nav.link, nav.data, i));
      }

      if (nav.sub) {
        nav.sub.columns.forEach((column) => {
          column.links.forEach((link, z) => {
            link.component && comps.push(importComponent(link.component, link.link, link.data, i + z));
          });

        })
      }
    })

    setComponents(comps);

    return comps;
  }

  return (
    <Context.Provider value={{ loadedSettings, dispatchLayout, pages, dispatchPages, scrollB, page }}>
      <Loader loaderState={state.loadderState} />
      <Sidebar data={settings.sidebar} />
      {wrap && <Header state={state.headerState} />}
      <div className={`app-inner ${!wrap ? "no-wrap" : ""}`}>
        <Scrollbar className="scoll-bar" ref={e => { if (e) { scrollB.current = e; e.scrollbar.track.xAxis.element.remove(); } }}>
          <OnImagesLoaded
            onLoaded={loaded}
            onTimeout={loaded}
            timeout={7000}
          >
            <PosedRouter isPause={state.isPause} isDisabledPreloader={state.isDisabledPreloader}>
              {state.isShowContent && components}
            </PosedRouter>
          </OnImagesLoaded>
        </Scrollbar>
      </div>
    </Context.Provider>
  );
}

export default App;
