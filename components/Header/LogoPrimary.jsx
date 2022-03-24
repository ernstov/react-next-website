import { useState, useRef, useContext, useEffect } from "react";
import styles from './header.module.scss'
import Link from "next/link"

const Logo = () => {

  const [isCenter, setIsCenter] = useState(false);

  return (
    <Link href="/">
      <div className={`${styles.logoPrimary} ${isCenter ? "center-logo" : ""}`}>
        <img src="/img/logo-primary.svg" />
        <img src="/img/logo-shape.svg" />
      </div>
    </Link>
  )
}

export default Logo;