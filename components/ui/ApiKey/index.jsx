import { useState, useEffect, useRef } from "react";
import styles from './apiKey.module.scss'

const ApiKey = ({ className, value }) => {

  const [done, setDone] = useState(false)

  const onCopy = () => {
    navigator.clipboard.writeText(value).then(() => {
      setDone(true)

      setTimeout(()=>{
        setDone(false)
      }, 4000)
    }, () => {
      console.error('Async: Could not copy text: ', err);
    });
  }

  return (
    <div class={`${styles.apiKey} ${className ? className : ""}`}>
      <div>
        <input disabled defaultValue={value} type='text' />
        <button onClick={onCopy} className={`${styles.button} ${done ? "done" : ""}`}></button>
      </div>
    </div>
  )

}

export default ApiKey;