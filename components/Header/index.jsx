import { Container, Row, Col } from "react-bootstrap"
import { useState } from "react";
import styles from './header.module.scss'
import presetsStyles from '../../styles/global/presets.module.scss'
import MenuToggler from "./MenuToggler"
import MenuContainer from "./MenuContainer"
import MenuUser from "./MenuUser"
import Icon from "../Icon"
import Link from "next/link"
import appConfig from "../../configs/appConfig"
import Button from "../ui/Button"
import Router, { useRouter } from "next/router"

const Header = ({ data, path }) => {

  const [isActiveMobile, setIsActiveMobile] = useState(false)
  const { headerNavigation } = appConfig
  const router = useRouter()

  return (
    <>
      <div className={`${styles.header}`}>
        <Container fluid>
          <Row>
            <Col xs={3} className="d-flex align-items-center">
              <Link href="/"><img className={`${presetsStyles.logo} active`} src='/img/logo.svg' /></Link>
            </Col>
            <Col xs={6} className={`${presetsStyles.flexCenter}`}>
              <div className={`${styles.navigation}`}>
                {headerNavigation.map((link, i) => (
                  <Button className={`${router.pathname == link.link ? "active" : ""} ml-1 mr-1`} link={link.link} key={`mn-${i}`} as="link" variant="light">{link.name}</Button>
                ))}
              </div>
            </Col>
            <Col xs={3}>
              <div className={`${styles.headerActions}`}>
                <MenuUser />
                <div className={`${styles.headerToggler}`}><MenuToggler isActiveMobile={isActiveMobile} setIsActiveMobile={() => setIsActiveMobile(!isActiveMobile)} /></div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <MenuContainer isActiveMobile={isActiveMobile}>
        <ul>
          {headerNavigation.map((link, i) => (
            <li key={`ni-${i}`}><Link onClick={() => hideAll(true)} href={link.link}>{link.name}</Link></li>
          ))}
        </ul>
      </MenuContainer>
    </>
  )
}

export default Header;
