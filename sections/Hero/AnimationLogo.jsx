import React, { useEffect, useRef } from "react"
import styles from './hero.module.scss'
import animationData from '../../components/animations/lightHorizontal.json'
import Lottie from 'lottie-web'

const AnimationLogo = ({isVisible}) => {

  const animationContainer = useRef(null)
  let animation = null

  useEffect(() => {
    animation = Lottie.loadAnimation({
      container: animationContainer.current,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      animationData: animationData,
    });
  }, [])

  useEffect(() => {
    if(isVisible && animation) {
      setTimeout(()=>{
        animation.play()
      }, 1000)
    } 
  }, [isVisible])

  return (
    <div ref={animationContainer}></div>
  );
}

export default AnimationLogo;
