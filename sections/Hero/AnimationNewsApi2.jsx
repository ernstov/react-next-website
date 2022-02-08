import React, { useEffect, useRef } from "react"
import styles from './hero.module.scss'
import animationData from '../../components/animations/newsApiHero.json'
import Lottie from 'lottie-web'

const AnimationNewsApi2 = () => {

  const animationContainer = useRef(null)

  useEffect(() => {
    const animation = Lottie.loadAnimation({
      container: animationContainer.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animationData,
    });
    return () => animation.destroy()
  }, [])

  return (
    <div ref={animationContainer}></div>
  );
}

export default AnimationNewsApi2;
