import React from "react"
import Icon from "../Icon"
import styles from './loader.module.scss'

const Loader = () => {

  return (
    <div className={`${styles.loader}`}>
      <Icon variant="loader" />
    </div>
  );
}

export default Loader;