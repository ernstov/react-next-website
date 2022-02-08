import React, { useEffect, useState, useRef } from "react"
import styles from './hero.module.scss'
import Button from '../../components/ui/Button'
import typographyStyles from "../../styles/global/typography.module.scss"
import appConfig from "../../configs/appConfig"
import LiveDemo from "../../components/LiveDemo"
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';
import Animation from "./AnimationNewsApi2"

const HeroLanding = ({ data, isVisible, liveDemos }) => {

  const [visible, setVisible] = useState(false);
  const [swiper, setSwiper] = useState(null)

  const onNext = () => {
    swiper.slideNext()
  }

  const onPrev = () => {
    swiper.slidePrev()
  }

  const options = {
    slidesPerView: 1,
    initialSlide: 1,
    spaceBetween: 30,
    centeredSlides: true,
    modules:[Navigation, Pagination],
    loop: false,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    breakpoints: {
      300: {
        slidesPerView: 1.2,
        spaceBetween: 15,
      },
      767: {
        slidesPerView: 1.5,
        spaceBetween: 30
      },
      1100: {
        slidesPerView: 2,
        spaceBetween: 30
      }
    }
  }

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        setVisible(true)
      }, appConfig.entryDelay * 2)
    }
  }, [isVisible])

  const renderAnimation = (name) => {
    switch (name) {
      case "newsApi":
        return <Animation />
    }
  }

  const render = () => {
    switch (data.variant) {
      default:
        return <div className={`${styles.innerLanding}`}>
          <h1 className={`${typographyStyles.textTitle} mb-4 entry-1 d-block d-md-none mx-auto ${data.titleCL ? data.titleCL : "mw-410"}`} dangerouslySetInnerHTML={{ __html: data.title }}></h1>
          {data.animation ?
            <div className={`${styles.animationLanding} ${data.imgCL ? data.imgCL : ""} entry-1`}>{renderAnimation(data.animation)}</div>
            :
            data.img && <div className={`${styles.imgLanding} entry-1 ${data.imgCL ? data.imgCL : ""}`}><img src={data.isExternal ? data.img : `/img/${data.img}`} /></div>
          }
          <h1 className={`${typographyStyles.textTitle} mb-2 entry-1 d-none d-md-block mx-auto ${data.titleCL ? data.titleCL : "mw-410"}`} dangerouslySetInnerHTML={{ __html: data.title }}></h1>
          <p className={`${typographyStyles.textSubTitle3} entry-2 mx-auto ${data.descriptionCL ? data.descriptionCL : "mw-410"}`} dangerouslySetInnerHTML={{ __html: data.description }}></p>

          {data.markets &&
            <div className={`${styles.appsMarkets} entry-3`}>
              {data.markets.map((market, i) => (
                <a href={market.link} target="blank" key={`mi-${i}`}><img src={`/img/${market.img}`} alt="" /></a>
              ))}
            </div>
          }

          <div className={`${styles.buttonsLp} ${data.btnsClassName ? data.btnsClassName : ""} entry-4`}>
            {data.buttons && data.buttons.map((button, i) => (
              data.isBlank ?
                <Button link={button.link} as={`${button.as ? button.as : "link"}`} variant={button.variant} className={`${button.className ? button.className : ""} ${i < data.buttons.length ? "mb-2" : ""}`} key={`bi-${i}`}>{button.name}</Button> :
                <Button link={button.link} as={`${button.as ? button.as : "link"}`} variant={button.variant} className={`${button.className ? button.className : ""} ${i < data.buttons.length ? "mb-2" : ""}`} key={`bi2-${i}`}>{button.name}</Button>
            ))}
          </div>
        </div>

    }
  }

  return (
    <div className={`${styles.heroLp} ${data.className ? data.className : ""} ${data.variant ? data.variant : ""} ${visible ? "active" : ""}`}>
      {render()}
      <div className={`${styles.heroDemoSlider}`}>
        <Swiper {...options} onSwiper={(swiper) => setSwiper(swiper)}>
          {liveDemos.map((liveDemo, i) => (
            <SwiperSlide key={`dc-${i}`}>
              {({ isActive }) => (
                <LiveDemo data={liveDemo} onNext={onNext} isFirst={i == 0} isLast={i == liveDemos.length-1} onPrevious={onPrev} variant="slider" isActive={isActive} />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default HeroLanding;
