import {useState, useEffect, useRef} from "react"
import { Container, Row, Col, Badge } from "react-bootstrap"
import Block from "../../components/Block"
import styles from './carousel.module.scss'
import typographyStyles from "../../styles/global/typography.module.scss"
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';
import shortid from "shortid"

const CarouselDark = ({ data, isVisible }) => {

  const [swiper, setSwiper] = useState(null)
  const swiperContainer = useRef(null)

  const options = {
    slidesPerView: 4,
    spaceBetween: 30,
    modules:[Navigation, Pagination],
    loop: data.hasOwnProperty('loop') ? data.loop : true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    breakpoints: {
      300: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      767: {
        slidesPerView: data.slidesMd ? data.slidesMd : 2.3,
        spaceBetween: 30
      },
      1100: {
        slidesPerView: data.slidesLg ? data.slidesLg : 3.3,
        spaceBetween: 30
      }
    }
  }

  // useEffect(()=>{

  //   let pagination = null
  //   let img = null
  //   let arrowLeft = null
  //   let arrowRight = null

  //   if(swiper) {
  //     pagination = swiperContainer.current.querySelector(".swiper-pagination")
  //     img = pagination.querySelector("img")
  //     arrowLeft = document.createElement('img')
  //     arrowRight = document.createElement('img')

  //     if(!img) {
  //       arrowLeft.classList.add("pagination-left")
  //       arrowRight.classList.add("pagination-right")
  //       arrowLeft.src = "/img/arrow-left.png"
  //       arrowRight.src = "/img/arrow-right.png"

  //       pagination.prepend(arrowLeft)
  //       pagination.append(arrowRight)

  //       arrowLeft.addEventListener("click", prev)
  //       arrowRight.addEventListener("click", next)
  //     }
  //   }

  //   return () => {
  //     if(arrowLeft) arrowLeft.removeEventListener("click", prev)
  //     if(arrowRight) arrowRight.removeEventListener("click", next)
  //   }
  // }, [swiper])

  // const next = () => {
  //   swiper.slideNext()
  // }

  // const prev = () => {
  //   swiper.slidePrev()
  // }

  return (
    <div className={`${styles.carouselDark} ${data.className ? data.className : ""} ${isVisible ? "active" : ""}`}>
      <Container>
        <Row>
          <Col className="text-center">
            {data.img && <img className={`${styles.carouselImg} entry-1`} src={`/img/${data.img}`} />}
            {data.title && <h3 className={`${typographyStyles.textTitleSemiPrimary} mt-4 mb-2 entry-2`}>{data.title}</h3>}
            {data.description && <div className={`${typographyStyles.textSubTitle} entry-3`}><p className="mb-0">{data.description}</p></div>}
          </Col>
        </Row>
      </Container>
      <div ref={swiperContainer} className={`${styles.carouselSwiperOverflow} entry-4`}>
        <Swiper {...options} onSwiper={(swiper) => setSwiper(swiper)}>
          {data.columns.map((item, i) => (
            <SwiperSlide key={`${shortid.generate()}`}>
              <Block variant={data.variant} data={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default CarouselDark;
