import { Container, Row, Col } from "react-bootstrap"
import React, { useState, useRef, useContext, useEffect } from "react";
import styles from './header.module.scss'
import MenuToggler from "./MenuTogglerRect"
import MenuContainer from "./MenuContainerAdvanced"
import MenuUser from "./MenuUserDemo"
import appConfig from "../../configs/appConfig"
import Button from "../ui/Button"
import { Context } from "../../context/context"
import Logo from "./LogoPrimary"
import AuthService from "../../services/AuthService"
import { IconLock, IconFolder, IconMenu, IconFilter, IconInfoFill, IconAccount } from "../Icon"
import Filter from "../../sections/DemoViewer/Filter";

const HeaderDemo = ({ variant }) => {

  const { app, dispatchApp, lang: { Documentation, GetAPIKey, APIMenu, Filters, Advancedsearchtips, Myaccount } } = useContext(Context);
  const [isVisible, setIsVisible] = useState(false);
  const [isActiveMobile, setIsActiveMobile] = useState(false)
  let sub = useRef({})

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, appConfig.entryDelay)
  }, [])

  const hideAll = () => {
    setIsActiveMobile(false);
  }

  const render = () => {
    switch (variant) {
      default:
        return <div className={`${styles.headerDemo} fixed ${isVisible ? "visible" : ""}`}>
          <Container fluid>
            <Row>
              <Col xs={3}>
                <Button className={`documentation-button`} as={"link"} variant="dark-simple" size={"tn"} link={`https://docs.goperigon.com`}><IconFolder className={`${styles.headerIcon}`} />{Documentation}</Button>
                <div className={styles.menuTogglerDemo}>
                  <MenuToggler isActiveMobile={isActiveMobile} setIsActiveMobile={() => setIsActiveMobile(!isActiveMobile)} />
                </div>
              </Col>
              <Col xs={6} className={`logoCenter`}>
                <Logo />
              </Col>
              <Col xs={3}>
                <div className={`${styles.headerActionsDemo}`}>
                  {!app.user && <Button className={`api-button`} variant="dark-simple" size={"tn"} as="link" link={`/sign-in`}><IconLock className={`${styles.headerIcon}`} />{GetAPIKey}</Button>}
                  <MenuUser dark />
                </div>
              </Col>
            </Row>
          </Container>

          <MenuContainer
            isActiveMobile={isActiveMobile}
            onHide={() => setIsActiveMobile(false)}
            title={APIMenu}
            icon={<IconMenu />}
          >
            <Button className="w-100 justify-content-start mb-2" as={"url"} variant="light-simple" size={"tn"} link={`https://docs.goperigon.com`}><IconFolder className={`${styles.headerIcon}`} />{Documentation}</Button>
            <Button className="w-100 justify-content-start mb-2" as={"url"} variant="light-simple" size={"tn"} link={`https://docs.goperigon.com/docs/search-concepts`}><IconInfoFill className={`${styles.headerIcon}`} />{Advancedsearchtips}</Button>
            <Button className="w-100 justify-content-start mb-2" as={"link"} variant="light-simple" size={"tn"} link={`/sign-in`}><IconLock className={`${styles.headerIcon}`} />{GetAPIKey}</Button>
            <Button className="w-100 justify-content-start mb-4" as={"link"} variant="light-simple" size={"tn"} link={`/sign-in`}><IconAccount className={`${styles.headerIcon}`} />{Myaccount}</Button>

            <Button className="w-100" as={"link"} variant="light-simple" link={`/`}><img className={`${styles.headerButtonLogo}`} src="/img/logo-dark.svg"/></Button>
          </MenuContainer>

          <MenuContainer
            isActiveMobile={app.isActiveFilter}
            onHide={() => dispatchApp({ type: 'SET_APP_VALUES', data: { isActiveFilter: false } })}
            title={Filters}
            icon={<IconFilter />}
          >
            <Filter isDisableTitle onClickSearch={()=>setIsActiveMobile(false)}/>
          </MenuContainer>
        </div>
    }
  }

  return render()
}

export default HeaderDemo;
