import { useContext, forwardRef } from "react"
import styles from './button.module.scss'
import Link from 'next/link'
import Icon from "../../Icon"
import { Context } from "../../../context/context"
import appConfig from "../../../configs/appConfig"

const Button = (props, ref) => {

  const { children, variant, className, onClick, as, link, isActive, disabled, jump, size } = props

  const { scrollB } = useContext(Context)

  const getStyles = () => {
    switch (variant) {
      case "radial-dark":
        return `${styles.button} ${styles.radial} ${styles.dark} ${size}`
      case "dark":
        return `${styles.button} ${styles.dark} ${size}`
      case "dark-np":
        return `${styles.button} ${styles.dark} np ${size}`
      case "light-wide":
        return `${styles.button} ${styles.wide} ${styles.light} ${size}`
      case "light-d":
        return `${styles.button} ${styles.lightD} ${size}`
      case "secondary":
        return `${styles.button} ${styles.secondary} ${size}`
      case "dark-square":
        return `${styles.button} ${styles.dark} ${styles.square} ${size}`
      case "dark-square-large":
        return `${styles.button} ${styles.dark} ${styles.square} ${styles.large} ${size}`
      case "primary-arrow":
        return `${styles.button} ${styles.primary} ${styles.arrow} ${size}`
      case "primary-arrow-down":
        return `${styles.button} ${styles.primary} ${styles.arrow} ${size}`
      case "primary":
        return `${styles.button} ${styles.primary} ${size}`
      case "primaryY":
        return `${styles.button} ${styles.primaryY} ${size}`
      case "primary-home":
        return `${styles.button} ${styles.primaryHome} ${size}`
      case "primary-white":
        return `${styles.button} ${styles.primaryWhite} ${size}`
      case "primary-notround":
        return `${styles.button} ${styles.primary} ${styles.notRound} ${size}`
      case "primary-notround-large":
        return `${styles.button} ${styles.primaryY} ${styles.notRound} ${styles.large} ${size}`
      case "outline-secondary-notround-small":
        return `${styles.button} ${styles.small} ${styles.secondaryOutline} ${styles.notRound} ${size}`
      case "outline-primary":
        return `${styles.button} ${styles.primaryOutline} ${size}`
      case "outline-info":
        return `${styles.button} ${styles.outlineInfo} ${size}`
      case "outline-light":
        return `${styles.button} ${styles.outlineLight} ${size}`
      case "link":
        return `${styles.link} ${styles.secondaryLink} ${size}`
      case "link-gray":
        return `${styles.link} ${styles.grayLink} ${size}`
      case "link-nondec":
        return `${styles.linkNon} ${styles.secondaryLink} ${size}`
      case "collapse":
        return `${styles.collapse} ${size}`
      case "flat-light":
        return `${styles.flatLight} ${size}`
      case "light-simple":
        return `${styles.button} ${styles.lightSimple} ${size}`
      case "dark-simple":
        return `${styles.button} ${styles.darkSimple} ${size}`
      case "outline-arrow":
        return `${styles.button} ${styles.outlineArrow} ${styles.arrow} ${size}`
      case "rounded-dark":
        return `${styles.buttonR} ${styles.darkLight} ${size}`
      case "light-adv":
        return `${styles.button} ${styles.lightAdv} ${size}`
      case "primary-shadow":
        return `${styles.button} ${styles.primaryShadow} ${size}`
      case "secondary-shadow":
        return `${styles.button} ${styles.secondaryShadow} ${size}`
      case "collapse-advanced":
        return `${styles.button} ${styles.collapseAdvanced} ${size}`
      case "white":
        return `${styles.button} ${styles.white} ${size}`
      case "light":
      default:
        return `${styles.button} ${styles.light} ${size}`
    }
  }

  const getIcons = () => {
    switch (variant) {
      case "primary-arrow":
        return <span className="ml-3"><Icon variant="chevron-right-bold" /></span>
      case "outline-arrow":
        return <span className="ml-3"><Icon variant="chevron-right-bold" /></span>
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
    const elm = document.querySelector(`#${elmId}`)
    const position = elm.getBoundingClientRect().top
    const positionW = elm.offsetTop

    if (window.innerWidth > 880) {
      scrollB.current.scrollbar.scrollTo(0, positionW, 1000)
    } else {
      window.scrollTo({
        top: window.pageYOffset + position - appConfig.headerHeightMd - 100,
        behavior: "smooth"
      })
    }
  }

  const render = () => {
    switch (as) {
      case "link":
        return link ?
          <Link ref={ref} href={`${link}`} passHref>
            <a className={`${getStyles()} ${className ? className : ""}`} onClick={onClickIn}>{children} {getIcons()}</a>
          </Link> :
          <div className={`not-link ${getStyles()} ${className ? className : ""}`} onClick={onClickIn}>{children} {getIcons()}</div>
      case "url":
        return <a ref={ref} className={`${getStyles()} ${className ? className : ""}`} href={link} target="_blank" onClick={onClickIn}>{children} {getIcons()}</a>
      case "url-same":
        return <a ref={ref} className={`${getStyles()} ${className ? className : ""}`} href={link} onClick={onClickIn}>{children} {getIcons()}</a>
      case "collapse":
        return <button ref={ref} onClick={onClickIn} disabled={disabled ? disabled : false} className={`${getStyles()} ${isActive ? "active" : ""} ${className ? className : ""}`}>
          <div>{children}</div>
          <div className="ml-3"><Icon variant="chevron-up" /></div>
        </button>
      case "div":
        return <div ref={ref} disabled={disabled ? disabled : false} onClick={onClickIn} className={`${getStyles()} ${className ? className : ""}`}>
          {children} {getIcons()}
        </div>
      default:
        return <button ref={ref} disabled={disabled ? disabled : false} onClick={onClickIn} className={`${getStyles()} ${className ? className : ""}`}>
          {children} {getIcons()}
        </button>
    }
  }

  return render();
}

const forwardedButton = forwardRef(Button);

export default forwardedButton;
