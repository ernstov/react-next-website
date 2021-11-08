import { useState, useEffect, useRef } from "react";
import styles from './apiKey.module.scss'

const ApiKey = ({ className, value }) => {

  return (
    <div class={`${styles.apiKey} ${className ? className : ""}`}>
      <div>
        <input disabled defaultValue={value} type='text' />
        <button className={`${styles.button}`}>
          <img src="/img/copy.svg" alt="" />
        </button>
      </div>
    </div>
  )

}

export default ApiKey;