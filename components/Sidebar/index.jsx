import React, { useEffect, useState, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Icon from "../../components/Icon";
import Link from 'next/link'
import styles from './sidebar.module.scss'
import appConfig from "../../configs/appConfig"
import { useRouter } from "next/router"
import { Context } from "../../context/context"
import typographyStyles from "../../styles/global/typography.module.scss"
import AuthService from "../../services/AuthService";

const Sidebar = ({ variant, isVisible, isWrap }) => {

  const { lang: { SignOut, Gettingstarted, Searchapi }, dispatchApp } = useContext(Context)
  const [visible, setVisible] = useState(false)
  const [isSidebarActive, setIsSidebarActive] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        setVisible(true)
      }, appConfig.entryDelay)
    }
  }, [isVisible])

  const isActive = (link) => {
    return router.pathname == link
  }

  const onLogout = () => {
    AuthService.logout().then(() => {
      dispatchApp({ type: 'SET_USER', data: { user: undefined } })
      router.push("/sign-in")
    })
    .catch((e) => console.log(e))
  }

  const render = () => {
    switch (variant) {
      case "account":
        return <>
          {appConfig.accountNavigation.map((item, i) => (
            <Link key={`si-${i}`} href={item.link} passHref><a className={`${styles.sidebarLink} ${isActive(item.link) ? "active" : ""}`}><span>{item.name}</span></a></Link>
          ))}
          <a onClick={onLogout} className={`${styles.sidebarLink} cursor-pointer`}><span>{SignOut}</span></a>
        </>;

      case "documentation":
        return <>
          <Link href={"/documentation"} passHref><a className={`${styles.sidebarLink} ${isActive("/documentation") ? "active" : ""}`}><span>{Gettingstarted}</span></a></Link>
          <div className={`${styles.sidebarPadding} mt-3 mb-3`}><span className={`${typographyStyles.labelBig}`}>{Searchapi}</span></div>
          {appConfig.documentationNavigation.map((item, i) => (
            <Link key={`si-${i}`} href={item.link} passHref><a className={`${styles.sidebarLink} ${isActive(item.link) ? "active" : ""}`}><span>{item.name}</span></a></Link>
          ))}

        </>;
    }
  }

  return (
    <div className={`${styles.sidebar} ${isSidebarActive ? "active" : ""} ${!isWrap ? "no-wrap" : ""} ${visible ? "active" : ""} ${variant ? variant : ""}`}>
      {/* <div onClick={() => setIsSidebarActive(!isSidebarActive)} className={`${styles.sidebarToggler}`}><Icon variant={isSidebarActive ? "close" : "menu"} /></div> */}
      {render()}
    </div>
  );
}

export default Sidebar;
