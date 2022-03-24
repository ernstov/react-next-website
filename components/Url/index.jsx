import React, { useEffect, useState, useContext } from "react";
import styles from './url.module.scss'
import { useRouter } from "next/router"
import { Context } from "../../context/context"

const Url = ({ link }) => {

  const { lang: { GET, Copy, Copied } } = useContext(Context)
  const [isCopied, setIsCopied] = useState(false)

  const onCopy = () => {
    navigator.clipboard.writeText(link)
    setIsCopied(true)

    setTimeout(()=>{
      setIsCopied(false)
    }, 3000)
  }

  return (
    <div className={`${styles.url}`}>
      <div className={`${styles.type}`}>
        {GET}
      </div>
      <div className={`${styles.input}`}>
        <div className={`${styles.inputText}`}>{link}</div>
        <div onClick={onCopy} className={`${styles.copy} ${isCopied ? "copied" : ""}`}>
          <span>{Copy}</span>
          <span>{Copied}</span>
        </div>
      </div>
    </div>
  );
}

export default Url;
