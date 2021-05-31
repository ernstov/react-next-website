import {useState, useEffect, useRef} from "react";
import styles from './loader.module.scss'

const Loader = ({ loaderState }) => {

  const [state, setState] = useState(loaderState)
  const time = useRef("")
  const delay = 600;

  useEffect(()=>{
    if(loaderState == "preload") {
      time.current = Date.now()
      setState("start")
    }else {
      const delta = Date.now() - time.current

      setTimeout(()=>{
        setState("loaded")

      }, delta < delay ? delay - delta : 0 )

    }
  },[loaderState])

  return <div className={`${styles.loader} ${state}`}>
      <div className="lodaer-shape"></div>
      <div className="loader-img"><img src="/img/loader.svg"/></div>
      <div className="lodaer-shape-2"></div>
    </div>

}

export default Loader;