import React, { useEffect, useRef } from "react"
import styles from './hero.module.scss'
import animationData from '../../components/animations/newsApi.json'
import Lottie from 'lottie-web'

const AnimationNewsApi = () => {

  const animationContainer = useRef(null)
  let animation = null

  useEffect(() => {
    animation = Lottie.loadAnimation({
      container: animationContainer.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animationData,
    });
  }, [])

  return (
    <div ref={animationContainer} className={`${styles.hero}`}></div>
  );
}

export default AnimationNewsApi;
