import styles from './button.module.scss'
import Link from 'next/link'
import Icon from "../../Icon"

const Button = ({ children, variant, className, onClick, as, link, isActive, disabled }) => {

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
      default:
        return <></>

    }
  }

  const render = () => {
    switch (as) {
      case "link":
        return <Link href={`..${link}`} passHref>
          <a className={`${getStyles()} ${className ? className : ""}`} onClick={onClick}>{children} {getIcons()}</a>
        </Link>
      case "url":
        return <a className={`${getStyles()} ${className ? className : ""}`} href={link} target="_blank" onClick={onClick}>{children} {getIcons()}</a>
      case "url-same":
        return <a className={`${getStyles()} ${className ? className : ""}`} href={link} onClick={onClick}>{children} {getIcons()}</a>
      case "collapse":
        return <button onClick={onClick} disabled={disabled ? disabled : false} className={`${getStyles()} ${isActive ? "active" : ""} ${className ? className : ""}`}>
          <div>{children}</div>
          <div className="ml-3"><Icon variant="chevron-up" /></div>
        </button>
      default:
        return <button disabled={disabled ? disabled : false} onClick={onClick} className={`${getStyles()} ${className ? className : ""}`}>
          {children} {getIcons()}
        </button>
    }
  }

  return render();
}

export default Button;
