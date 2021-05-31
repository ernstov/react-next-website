import {useContext} from "react"
import styles from './button.module.scss'
import Link from 'next/link'
import Icon from "../../Icon"
import { Context } from "../../../context/context"

const Button = ({ children, variant, className, onClick, as, link, isActive, disabled, jump }) => {

  const { scrollB } = useContext(Context)

  const getStyles = () => {
    switch (variant) {
      case "radial-dark":
        return `${styles.button} ${styles.radial} ${styles.dark}`
      case "dark":
        return `${styles.button} ${styles.dark}`
      case "dark-np":
        return `${styles.button} ${styles.dark} np`
      case "light-wide":
        return `${styles.button} ${styles.wide} ${styles.light}`
      case "light":
      default:
        return `${styles.button} ${styles.light}`
      case "light-d":
        return `${styles.button} ${styles.lightD}`
      case "secondary":
        return `${styles.button} ${styles.secondary}`
      case "dark-square":
        return `${styles.button} ${styles.dark} ${styles.square}`
      case "dark-square-large":
        return `${styles.button} ${styles.dark} ${styles.square} ${styles.large}`
      case "primary-arrow":
        return `${styles.button} ${styles.primary} ${styles.arrow}`
      case "primary-arrow-down":
        return `${styles.button} ${styles.primary} ${styles.arrow}`
      case "primary":
        return `${styles.button} ${styles.primary}`
      case "outline-primary":
        return `${styles.button} ${styles.primaryOutline}`
      case "link":
        return `${styles.link} ${styles.secondaryLink}`
      case "collapse":
        return `${styles.collapse}`
    }
  }

  const getIcons = () => {
    switch (variant) {
      case "primary-arrow":
        return <span className="ml-3"><Icon variant="arrow-right" /></span>
      case "primary-arrow-down":
        return <span className="ml-3"><Icon variant="arrow-down" /></span>
      default:
        return <></>
    }
  }

  const onClickIn = () => {

    if (jump) scrollTo(jump)
    if (onClick) onClick()
  }

  const scrollTo = (elmId) => {
    const position = document.querySelector(`#${elmId}`).offsetTop;
    scrollB.current.scrollbar.scrollTo(0, position, 1000);
  }

  const render = () => {
    switch (as) {
      case "link":
        return <Link href={`..${link}`} passHref>
          <a className={`${getStyles()} ${className ? className : ""}`} onClick={onClickIn}>{children} {getIcons()}</a>
        </Link>
      case "url":
        return <a className={`${getStyles()} ${className ? className : ""}`} href={link} target="_blank" onClick={onClickIn}>{children} {getIcons()}</a>
      case "url-same":
        return <a className={`${getStyles()} ${className ? className : ""}`} href={link} onClick={onClickIn}>{children} {getIcons()}</a>
      case "collapse":
        return <button onClick={onClickIn} disabled={disabled ? disabled : false} className={`${getStyles()} ${isActive ? "active" : ""} ${className ? className : ""}`}>
          <div>{children}</div>
          <div className="ml-3"><Icon variant="chevron-up" /></div>
        </button>
      default:
        return <button disabled={disabled ? disabled : false} onClick={onClickIn} className={`${getStyles()} ${className ? className : ""}`}>
          {children} {getIcons()}
        </button>
    }
  }

  return render();
}

export default Button;
