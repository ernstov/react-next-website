import { Container, Row, Col } from "react-bootstrap"
import { useState, useRef, useContext, useEffect } from "react";
import styles from './header.module.scss'
import footerStyles from "../Footer/footer.module.scss"
import MenuToggler from "./MenuToggler"
import MenuContainer from "./MenuContainer"
import MenuUser from "./MenuUser"
import Link from "next/link"
import appConfig from "../../configs/appConfig"
import Button from "../ui/Button"
import Router, { useRouter } from "next/router"
import { Context } from "../../context/context"
import Logo from "./Logo"
import Icon from "../Icon"


const Header = ({ data, path, isLoggedIn, variant }) => {

  const { app } = useContext(Context);
  const [isVisible, setIsVisible] = useState(false);
  const [isActiveMobile, setIsActiveMobile] = useState(false)
  const { headerNavigation } = appConfig
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, appConfig.entryDelay)
  }, [])

  const hideAll = () => {
    setIsActiveMobile(false);
  }

  const isActive = (link) => {
    if (link == "/") {
      return router.pathname == link
    } else {
      if (router.pathname == link) {
        return true
      } else {
        return router.pathname.indexOf(link) != -1
      }
    }
  }

  const render = () => {
    switch (variant) {
      default:
        return <div className={`${styles.header} fixed ${isVisible ? "visible" : ""}`}>
          <Container fluid>
            <Row>
              <Col xs={3}>
              </Col>
              <Col xs={6} className={`logoCenter`}>
                <Logo />
              </Col>
              <Col xs={3}>
                <div className={`${styles.headerActions}`}>
                  {(appConfig.header.button && appConfig.header.button.exclude.indexOf(path) == -1) && <Button className={`${styles.headerButton}`} variant="primary-home" href={appConfig.header.button.link}>{appConfig.header.button.name}</Button>}
                  <div className={`${styles.headerToggler} visible`}><MenuToggler isActiveMobile={isActiveMobile} setIsActiveMobile={() => setIsActiveMobile(!isActiveMobile)} /></div>
                </div>
              </Col>
            </Row>
          </Container>
          <MenuContainer isActiveMobile={isActiveMobile}>
            <div className="menu-container-top">
              <div className="menu-container-title">
                <Link onClick={() => hideAll(true)} href="/"><img className={`${styles.logoMobile}`} src={`/img/logo-mobile.svg`} /></Link>
              </div>
              <div className="menu-container-stores">
                {appConfig.navigationAdditional.stores && appConfig.navigationAdditional.stores.map((store, i) => (
                  <a key={`sti-${i}`} target="blank" href={store.link}><img className={`${footerStyles.footerStore} ml-2 mr-2`} src={`/img/${store.img}`} alt="" /></a>
                ))}
              </div>
              <ul>
                {appConfig.navigation.map((nav, i) => (
                  !nav.excludeNav && <li key={`ni-${i}`}><Link onClick={() => hideAll(true)} href={nav.link}>{nav.name}</Link></li>
                ))}
              </ul>
            </div>
            <div className="menu-container-bottom">
              <div className="menu-container-socials">
                {appConfig.footer.socials.map((social, i) => (
                  <a key={`ski-${i}`} href={social.link} target="blank"><Icon variant={social.icon} /></a>
                ))}
              </div>
              <div className="menu-container-links">
                {appConfig.navigationAdditional.links.map((row, i) => (
                  <div key={`rki-${i}`}>
                    {row.row.map((link, i) => (
                      <div key={`lki-${i}`}><Link onClick={() => hideAll(true)} href={link.link}>{link.name}</Link> {i < row.row.length - 1 ? <span>&bull;</span> : ""}</div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </MenuContainer>
        </div>
      case "business":
        return <div className={`${styles.header} fixed ${isVisible ? "visible" : ""}`}>
          <Container fluid>
            <Row>
              <Col lg={3} xs={12} className="d-flex align-items-center justify-content-center justify-content-lg-start">
                <Logo />
                <div className={`${styles.mobileActions}`}>
                  <MenuUser />
                  {!isLoggedIn && <div className={`${styles.headerToggler}`}><MenuToggler isActiveMobile={isActiveMobile} setIsActiveMobile={() => setIsActiveMobile(!isActiveMobile)} /></div>}
                </div>
              </Col>
              <Col lg={6} xs={6} className={`${styles.navigationCenter}`}>
                {!isLoggedIn &&
                  <div className={`${styles.navigation}`}>
                    {headerNavigation.map((link, i) => (
                      (link.show == 0 || (link.show == 1 && !app.isAuth) || (link.show == 2 && app.isAuth)) && <Button className={`${isActive(link.link) ? "active" : ""} ml-1 mr-1`} link={link.link} key={`mn-${i}`} as="link" variant="light">{link.name}</Button>
                    ))}
                  </div>
                }
              </Col>
              <Col lg={3} xs={3} className={`${styles.headerDesktopActions}`}>
                <div className={`${styles.headerActions}`}>
                  <MenuUser />
                  {!isLoggedIn && <div className={`${styles.headerToggler}`}><MenuToggler isActiveMobile={isActiveMobile} setIsActiveMobile={() => setIsActiveMobile(!isActiveMobile)} /></div>}
                </div>
              </Col>
            </Row>
          </Container>
          {!isLoggedIn &&
            <MenuContainer className="business" isActiveMobile={isActiveMobile}>
              <ul>
                {headerNavigation.map((link, i) => (
                  <li onClick={() => hideAll(true)} key={`ni-${i}`}><Link href={link.link}>{link.name}</Link></li>
                ))}
              </ul>
            </MenuContainer>
          }
        </div>
    }
  }

  return render()
}

export default Header;
