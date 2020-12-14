import React, { useState, useEffect, useRef, useContext } from "react";
import { Link } from "@reach/router";
import './Header.scss';
import Lottie from 'lottie-web';
import animationData from '../animations/logoAnimation.json';
import { Context } from "../../context/context";
import { settings } from "../../data/settings";
import { Button } from 'react-bootstrap';
import Icon from "../Icon";

const Header = () => {

  const [isVisible, setIsVisible] = useState(false);
  const [isCenter, setIsCenter] = useState(false);
  const handAnimationContainer = useRef(null);
  const { scrollB, page } = useContext(Context);
  const isPlayed = useRef(null);
  const isCanPlay = useRef(null);
  const [isActiveMobile, setIsActiveMobile] = useState(false);
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

    return () => {
      document.removeEventListener("wheel", onWheel)
    }
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 1500)
  }, []);

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
    <div className={`header fixed ${isVisible ? "visible" : ""} ${isCenter ? "center-logo" : ""}`}>
      <Link onClick={() => hideAll(true)} to="/"><div className="header-animation-svg" ref={handAnimationContainer}></div></Link>
      {(settings.header.button && settings.header.button.exclude.indexOf(page.currentPage) == -1) && <Link className="header-button btn btn-primary" to={settings.header.button.link}>{settings.header.button.name}</Link>}
      <div className={`menu-toggler ${isActiveMobile ? "is-menu-open" : ""}`} onClick={() => setIsActiveMobile(!isActiveMobile)}>
        <div className="bars"><span></span><span></span><span></span>
          <div className="other-bar"></div>
        </div>
      </div>
      <div className={`menu-container ${isActiveMobile ? "active" : ""}`}>
        <div className="menu-container-top">
          <div className="menu-container-title">
            <Link onClick={() => hideAll(true)} to="/"><img className="logo-mobile" src={`/assets/img/logo-mobile.svg`} /></Link>
          </div>
          <div className="menu-container-stores">
            {settings.navigationAdditional.stores && settings.navigationAdditional.stores.map((store, i) => (
              <a key={`sti-${i}`} target="blank" href={store.link}><img className="footer-store ml-2 mr-2" src={`/assets/img/${store.img}`} alt="" /></a>
            ))}
          </div>
          <ul>
            {settings.navigation.map((nav, i) => (
              !nav.excludeNav && <li key={`ni-${i}`}><Link onClick={() => hideAll(true)} to={nav.link}>{nav.name}</Link></li>
            ))}
          </ul>
        </div>
        <div className="menu-container-bottom">
          <div className="menu-container-socials">
            {settings.footer.socials.map((social, i) => (
              <a key={`ski-${i}`} href={social.link} target="blank"><Icon variant={social.icon} /></a>
            ))}
          </div>
          <div className="menu-container-links">
            {settings.navigationAdditional.links.map((row, i) => (
              <div key={`rki-${i}`}>
                {row.row.map((link, i) => (
                  <div key={`lki-${i}`}><Link onClick={() => hideAll(true)} to={link.link}>{link.name}</Link> {i < row.row.length - 1 ? <span>&bull;</span> : ""}</div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;