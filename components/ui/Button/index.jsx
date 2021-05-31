import styles from './button.module.scss'
import Link from 'next/link'
import Icon from "../../Icon"

const Button = ({ children, variant, className, onClick, as, link, isActive }) => {

  const getStyles = () => {
    switch (variant) {
      case "radial-dark":
        return `${styles.button} ${styles.radial} ${styles.dark}`
      case "dark":
        return `${styles.button} ${styles.dark}`
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
      case "link":
        return `${styles.link} ${styles.secondaryLink}`
      case "collapse":
        return `${styles.collapse}`
    }
  }

  const render = () => {
    switch (as) {
      case "link":
        return <Link href={`..${link}`} passHref>
          <a className={`${getStyles()} ${className ? className : ""}`} onClick={onClick}>{children}</a>
        </Link>
      case "url":
        return <a className={`${getStyles()} ${className ? className : ""}`} href={link} target="_blank" onClick={onClick}>{children}</a>
      case "collapse":
        return <button onClick={onClick} className={`${getStyles()} ${isActive ? "active" : ""} ${className ? className : ""}`}>
          <div>{children}</div>
          <div className="ml-3"><Icon variant="chevron-up" /></div>
        </button>
      default:
        return <button onClick={onClick} className={`${getStyles()} ${className ? className : ""}`}>
          {children}
        </button>
    }
  }

  return render();
}

export default Button;
