import { Container, Row, Col } from "react-bootstrap"
import React, { useState, useRef, useContext, useEffect } from "react";
import styles from './header.module.scss'
import footerStyles from "../Footer/footer.module.scss"
import MenuToggler from "./MenuToggler"
import MenuContainer from "./MenuContainer"
import MenuUser from "./MenuUser"
import Link from "next/link"
import appConfig from "../../configs/appConfig"
import Button from "../ui/Button"
import { useRouter } from "next/router"
import { Context } from "../../context/context"
import Logo from "./Logo"
import Icon from "../Icon"
import { filterItFull } from "../../utils"
import typographyStyles from '../../styles/global/typography.module.scss'
import shortid from "shortid";
import AuthService from "../../services/AuthService";

const Header = ({ data, path, isLoggedIn, variant }) => {

  const { app, dispatchApp, lang: { GetTheApp, Gettingstarted, Searchapi, Journalistapi, SignOut } } = useContext(Context);
  const [isVisible, setIsVisible] = useState(false);
  const [isActiveMobile, setIsActiveMobile] = useState(false)
  const { headerNavigation, mobileNavigation, accountNavigation } = appConfig
  const [subActive, setSubActive] = useState(0)
  let sub = useRef({})
  const [line, setLine] = useState({ width: 80, position: sub.current })
  const router = useRouter()
  let subRef = useRef([])

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, appConfig.entryDelay)
  }, [])

  useEffect(() => {
    setTimeout(() => {
      const el = subRef.current[subActive]
      setLine({ width: el?.offsetWidth - 16 * 2, position: el?.offsetLeft + 16 })
    }, 500)
  }, [subActive, router.pathname])

  useEffect(() => {
    if (filterItFull(headerNavigation, getParentLink(), "link")[0]?.sub) {
      filterItFull(headerNavigation, getParentLink(), "link")[0].sub.map((link, i) => {
        if (isActive(link.link)) {
          setSubActive(i)
        }
      })
    }
  }, [router.pathname])

  const hideAll = () => {
    setIsActiveMobile(false);
  }

  const isDocumentation = () => {
    return router.pathname.indexOf("/documentation") != -1
  }

  const isAccount = () => {
    return router.pathname.indexOf("/account") != -1
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

  const isActiveSub = (link) => {
    if (link == "/" || router.pathname == "/") {
      return router.pathname == link
    } else {
      if (router.pathname == link) {
        return true
      } else {
        return link.indexOf(getParentLink()) != -1
      }
    }
  }

  const getParentLink = () => {
    const l = router.pathname.split("/")

    return `/${l[1]}`
  }

  const onLogout = () => AuthService.logout().then(() => {
    dispatchApp({ type: 'SET_USER', data: { user: undefined } })
    router.push("/sign-in")
  })
    .catch((e) => console.log(e))

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
                  !nav.excludeNav && <li onClick={() => hideAll(true)} key={`${shortid.generate()}`}><Link href={nav.link}>{nav.name}</Link></li>
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
                      <div onClick={() => hideAll(true)} key={`lki-${i}`}><Link href={link.link}>{link.name}</Link> {i < row.row.length - 1 ? <span>&bull;</span> : ""}</div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </MenuContainer>
        </div>
      case "advanced":
        return <div className={`${styles.header} advanced fixed ${isVisible ? "visible" : ""}`}>
          <div>
            <Container fluid>
              <Row>
                <Col lg={3} xs={12} className="d-flex align-items-center">
                  <Logo />
                  <div className={`${styles.mobileActions} ${isActiveMobile ? "active" : ""}`}>
                    <div className={`${styles.headerToggler}`}><MenuToggler isActiveMobile={isActiveMobile} setIsActiveMobile={() => setIsActiveMobile(!isActiveMobile)} /></div>
                  </div>
                </Col>
                <Col lg={6} xs={6} className={`${styles.navigationCenter}`}>
                  {!isAccount() && !isDocumentation() &&
                    <div className={`${styles.navigation}`}>
                      {headerNavigation.map((link, i) => (
                        (link.show == 0 || (link.show == 1 && !app.isAuth) || (link.show == 2 && app.isAuth)) && <Button className={`${isActiveSub(link.link) ? "active" : ""} ml-1 mr-1`} link={link.link} key={`mn-${i}`} as="link" variant="light-simple">{link.name}</Button>
                      ))}
                    </div>
                  }
                </Col>
                <Col lg={3} xs={3} className={`${styles.headerDesktopActions}`}>
                  <div className={`${styles.headerActions}`}>
                    <MenuUser />
                    {!isAccount() && <div className={`${styles.headerToggler}`}><MenuToggler isActiveMobile={isActiveMobile} setIsActiveMobile={() => setIsActiveMobile(!isActiveMobile)} /></div>}
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          {filterItFull(headerNavigation, getParentLink(), "link")[0]?.sub &&
            <div className={`${styles.subNavigation}`}>
              <div className={`${styles.subNavigationInner}`}>
                {filterItFull(headerNavigation, getParentLink(), "link")[0].sub.map((link, i) => (
                  <div ref={e => { subRef.current[i] = e }}><Button onClick={() => setSubActive(i)} className={`${isActive(link.link) ? "active" : ""} pl-3 pr-3`} link={link.link} key={`mn-${i}`} as="link" variant="flat-light">{link.name}</Button></div>
                ))}
                <div style={{ maxWidth: `${line.width}px`, transform: `translateX(${line.position}px)` }} className={`${styles.subLine}`}></div>
              </div>
            </div>
          }
          <MenuContainer className="business" isActiveMobile={isActiveMobile} onHide={() => setIsActiveMobile(false)}>
            <div className="menu-container-top">
              <div className="menu-container-title">
                <Link onClick={() => hideAll(true)} href="/"><img className={`${styles.logoMobile}`} src={`/img/logo-light.svg`} /></Link>
              </div>
            </div>
            <div className="menu-container-middle">
              {isDocumentation() &&
                <>
                  <ul>
                    <li onClick={() => hideAll(true)} className={`${router.pathname == "/documentation" ? "active" : ""}`}><Link href={"/documentation"}>{Gettingstarted}</Link></li>
                  </ul>
                  <div className="mb-2"><span className={typographyStyles.labelMenu}>{Searchapi}</span></div>
                  <ul className="mb-2">
                    {appConfig.documentationSearchApiNavigation.map((item, i) => (
                      <li className={`${router.pathname == item.link ? "active" : ""}`} onClick={() => hideAll(true)} key={`${shortid.generate()}`}><Link href={item.link}>{item.name}</Link></li>
                    ))}
                  </ul>
                  <div className="mb-2"><span className={typographyStyles.labelMenu}>{Journalistapi}</span></div>
                  <ul className="mb-2">
                    {appConfig.documentationJournalistApiNavigation.map((item, i) => (
                      <li className={`${router.pathname == item.link ? "active" : ""}`} onClick={() => hideAll(true)} key={`${shortid.generate()}`}><Link href={item.link}>{item.name}</Link></li>
                    ))}
                  </ul>
                </>}
              {isAccount() &&
                <ul>
                  {accountNavigation.map((item, i) => (
                    <li className={`${router.pathname == item.link ? "active" : ""}`} onClick={() => hideAll(true)} key={`${shortid.generate()}`}><Link href={item.link} passHref><a className={`${styles.sidebarLink} ${isActive(item.link) ? "active" : ""}`}><span>{item.name}</span></a></Link></li>
                  ))}
                  <li><a onClick={onLogout} className={`${styles.sidebarLink}`}><span>{SignOut}</span></a></li>
                </ul>
              }
              {(!isAccount() && !isDocumentation()) &&
                mobileNavigation.map((sect, i) => (
                  <div className="pb-3" key={`sdr-${i}`}>
                    <div><span className={typographyStyles.labelMenu}>{sect.label}</span></div>
                    <ul>
                      {sect.links.map((nav, z) => (
                        <li onClick={() => hideAll(true)} key={`${shortid.generate()}`}><Link href={nav.link}>{nav.name}</Link></li>
                      ))}
                    </ul>
                  </div>
                ))
              }
              {(!isDocumentation() && !isAccount()) &&
                <div className="menu-container-stores">
                  <span className="menu-container-badge">{GetTheApp}</span>
                  {appConfig.navigationAdditional.stores && appConfig.navigationAdditional.stores.map((store, i) => (
                    <a key={`sti-${i}`} target="blank" href={store.link}><img className={`${footerStyles.footerStore} mt-2`} src={`/img/${store.img}`} alt="" /></a>
                  ))}
                </div>
              }
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
                      <div onClick={() => hideAll(true)} key={`lki-${i}`}><Link href={link.link}>{link.name}</Link></div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </MenuContainer>
        </div>
    }
  }

  return render()
}

export default Header;
