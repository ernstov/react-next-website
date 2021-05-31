import { Container, Row, Col, Badge } from "react-bootstrap"
import Block from "../../components/Block"
import { Swiper, SwiperSlide } from "swiper/react"
import styles from './carousel.module.scss'
import typographyStyles from "../../styles/global/typography.module.scss"
import SwiperCore, {Pagination} from 'swiper/core';

SwiperCore.use([Pagination]);

const Carousel = ({ data, isVisible }) => {

  const options = {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 5000,
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
      },
      767: {
        slidesPerView: 2.3,
        spaceBetween: 30,
      },
      1100: {
        slidesPerView: 3.3,
        spaceBetween: 30
      },
      1500: {
        slidesPerView: 4.3,
        spaceBetween: 30
      }
    }
  }

  return (
    <div className={`${styles.carousel} ${data.className ? data.className : ""} ${isVisible ? "active" : ""}`}>
      <Container>
        <Row>
          <Col className="text-center mb-4 mb-md-0">
            {data.img && <img className={`${styles.carouselImg} entry-1`} src={`/img/${data.img}`} />}
            {data.title && <h3 className={`${typographyStyles.textTitleSemi} mt-4 mb-4 entry-2`}>{data.title}</h3>}
            {data.description && <div className="entry-3"><p className="mb-0">{data.description}</p></div>}
          </Col>
        </Row>
      </Container>
      <div className={`${styles.carouselSwiperOverflow} entry-4`}>
        <Swiper {...options}>
          {data.columns.map((item, i) => (
            <SwiperSlide key={`ci-${i}`}>
              <Block variant={data.variant} data={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Carousel;
