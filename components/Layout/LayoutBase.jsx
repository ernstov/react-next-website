import {useState, useEffect, useRef} from "react"
import styles from './layout.module.scss'
import Scrollbar from 'react-smooth-scrollbar'
import Router from "next/router"

const LayoutBase = ({ children }) => {

  useEffect(()=>{
    const start = (e) => {
      scrollB.current?.scrollbar.scrollTo(0, 0, 500);
    };

    Router.events.on("routeChangeStart", start);
    return () => {
      Router.events.off("routeChangeStart", start);
    };
  }, [])

  const scrollB = useRef(null);

  return (
    <div className={`${styles.layoutBase}`}>
      <Scrollbar className="scoll-bar" ref={e => { if (e && !scrollB.current) { scrollB.current=e; }}}>
        {children}
      </Scrollbar>
    </div>
  )
}

export default LayoutBase;
