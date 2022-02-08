import React, { useEffect, useRef } from "react"
import animationData from '../../components/animations/animationMedia.json'
import Lottie from 'lottie-web'

const AnimationMedia = () => {

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
    <div ref={animationContainer}></div>
  );
}

export default AnimationMedia;
