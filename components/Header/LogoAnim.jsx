import { useState, useRef, useContext, useEffect } from "react";
import styles from './header.module.scss'
import { Context } from "../../context/context"
import animationData from '../animations/logoAnimation.json'
import Lottie from 'lottie-web'
import Link from "next/link"

const Logo = () => {

  const [isCenter, setIsCenter] = useState(false);
  const handAnimationContainer = useRef(null);
  const { scrollB, page, app } = useContext(Context);
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

  return (
    <Link href="/"><div className={`hag ${styles.headerAnimationSvg} ${isCenter ? "center-logo" : ""}`} ref={handAnimationContainer}></div></Link>
  )
}

export default Logo;