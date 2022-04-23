import { Container, Row, Col, Badge } from "react-bootstrap"
import Block from "../../components/Block"
import styles from './carousel.module.scss'
import typographyStyles from "../../styles/global/typography.module.scss"
import shortid from "shortid"
import { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Button from "../../components/ui/Button"

const Carousel = ({ data, isVisible }) => {

  const options = {
    slidesPerView: 4,
    spaceBetween: 30,
    modules: [Navigation, Pagination, Autoplay],
    loop: data.hasOwnProperty('loop') ? data.loop : true,
    autoplay: data.autoplayDt ? {
      delay: 5000,
      disableOnInteraction: false
    } : {
      delay: 50000,
      disableOnInteraction: false
    },
    pagination: {
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    breakpoints: {
      300: {
        slidesPerView: 1,
        spaceBetween: 30,
        autoplay: data.autoplayMb ? {
          delay: 4000,
          disableOnInteraction: false
        } : false,
      },
      767: {
        slidesPerView: 2.3,
        spaceBetween: 30,
      },
      1100: {
        slidesPerView: data.slidesMd ? data.slidesMd : 3.3,
        spaceBetween: 30
      },
      1500: {
        slidesPerView: data.slidesLg ? data.slidesLg : 4.3,
        spaceBetween: 30
      }
    }
  }

  return (
    <div className={`${styles.carousel} ${data.variant ? data.variant : ""} ${data.className ? data.className : ""} ${isVisible ? "active" : ""}`}>
      <Container>
        <Row>
          <Col className="text-center mb-4 mb-md-0">
            {data.img && <img className={`${styles.carouselImg} entry-1`} src={`/img/${data.img}`} />}
            {data.title && <h3 className={`${typographyStyles.textTitleSemi} mt-4 mb-2 entry-2`}>{data.title}</h3>}
            {data.description && <div className={`${typographyStyles.textSubTitle} entry-3`}><p className="mb-0">{data.description}</p></div>}
          </Col>
        </Row>
      </Container>
      <div className={`${styles.carouselSwiperOverflow} ${data.variant ? data.variant : ""} entry-4`}>
        <Swiper {...options}>
          {data.columns.map((item, i) => (
            <SwiperSlide key={`${shortid.generate()}`}>
              <Block variant={data.variant} data={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {data.button && <div className={`${styles.carouselButton} ${data.variant ? data.variant : ""} mt-5 mb-4`}><Button size="lg" as="link" link={data.button.link} variant={data.button.variant}>{data.button.name}</Button></div>}
    </div>
  );
}

export default Carousel;
