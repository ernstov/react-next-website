import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Icon from "../../components/Icon";
import Link from 'next/link'
import styles from './sidebar.module.scss'
import appConfig from "../../configs/appConfig"
import { useRouter } from "next/router"

const Sidebar = ({ variant, isVisible }) => {

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

  return (
    <div className={`${styles.sidebar} ${isSidebarActive ? "active" : ""} ${visible ? "active" : ""} ${variant ? variant : ""}`}>
      <div onClick={()=>setIsSidebarActive(!isSidebarActive)} className={`${styles.sidebarToggler}`}><Icon variant={isSidebarActive ? "close" : "menu"}/></div>
      {appConfig.accountNavigation.map((item, i)=>(
        <Link key={`si-${i}`} href={item.link} passHref><a className={`${styles.sidebarLink} ${isActive(item.link) ? "active" : ""}`}><span>{item.name}</span></a></Link>
      ))}
    </div>
  );
}

export default Sidebar;
