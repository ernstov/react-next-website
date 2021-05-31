import { Container, Row, Col } from "react-bootstrap"
import { useState, useRef, useContext, useEffect } from "react";
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
import {Context} from "../../context/context"
import animationData from '../animations/logoAnimation.json'
import Lottie from 'lottie-web'

const Header = ({ data, path }) => {

  const [isVisible, setIsVisible] = useState(false);
  const [isActiveMobile, setIsActiveMobile] = useState(false)
  const { headerNavigation } = appConfig
  const router = useRouter()
  const [isCenter, setIsCenter] = useState(false);
  const handAnimationContainer = useRef(null);
  const { scrollB, page } = useContext(Context);
  const isPlayed = useRef(null);
  const isCanPlay = useRef(null);
  let handAnimation = null;

  useEffect(() => {
    handAnimation = Lottie.loadAnimation({
      container: handAnimationContainer.current,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      animationData: animationData,
      onSegmentStart: () => { console.log(1) }
    });

    document.addEventListener("wheel", onWheel)

    if (scrollB.current) scrollB.current.scrollbar.addListener((status) => {
      if (status.offset.y > 30) {
        if (!isPlayed.current && !isCanPlay.current) {
          handAnimation.playSegments([0, 70], true);
          setTimeout(() => {
            isCanPlay.current = true;
          }, 1000)
          isPlayed.current = true;
          setIsCenter(true);
        }
      }
      if (status.offset.y < 30) {
        if (isPlayed.current && isCanPlay.current) {
          handAnimation.playSegments([90, 181], true);
          isPlayed.current = false;
          setIsCenter(false);
          setTimeout(() => {
            isCanPlay.current = false;
          }, 1000)
        }
      }
    });

    setTimeout(() => {
      setIsVisible(true);
    }, appConfig.entryDelay)

    return () => {
      document.removeEventListener("wheel", onWheel)
    }
  }, [])

  const onWheel = (e) => {
    if (scrollB.current.scrollbar.offset.y < 30) {
      if (isPlayed.current && isCanPlay.current) {
        handAnimation.playSegments([90, 181], true);
        isPlayed.current = false;
        setIsCenter(false);
        setTimeout(() => {
          isCanPlay.current = false;
        }, 1000)
      }
    }
  }

  const hideAll = () => {
    setIsActiveMobile(false);
  }

  return (
    <>
      <div className={`${styles.header} fixed ${isVisible ? "visible" : ""}`}>
        <Container fluid>
          <Row>
            <Col xs={3} className="d-flex align-items-center">
              <Link href="/"><div className={`${styles.headerAnimationSvg}`} ref={handAnimationContainer}></div></Link>
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
        <MenuContainer isActiveMobile={isActiveMobile}>
        <ul>
          {headerNavigation.map((link, i) => (
            <li key={`ni-${i}`}><Link onClick={() => hideAll(true)} href={link.link}>{link.name}</Link></li>
          ))}
        </ul>
      </MenuContainer>
      </div>
    </>
  )
}

export default Header;
