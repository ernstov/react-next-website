import { useState, useContext } from "react"
import { Container, Row, Col, Badge } from "react-bootstrap"
import Block from "../../components/Block"
import { Swiper, SwiperSlide } from "swiper/react"
import styles from './plans.module.scss'
import typographyStyles from "../../styles/global/typography.module.scss"
import SwiperCore, { Pagination } from 'swiper/core'
import AvancedSwitch from "../../components/ui/AdvancedSwitch"
import { Context } from "../../context/context"
import Particles from '../../components/Particles'

SwiperCore.use([Pagination]);

const Plans = ({ data, isVisible }) => {

  const [isYearly, setIsYearly] = useState(false)
  const { lang: { Monthly, Yearly, discount10 } } = useContext(Context);

  const options = {
    slidesPerView: 4,
    loop: false,
    pagination: {
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    breakpoints: {
      300: {
        slidesPerView: 1.2,
      },
      767: {
        slidesPerView: 2.3,
      },
      1100: {
        slidesPerView: 3.3,
      },
      1500: {
        slidesPerView: 4,
      }
    }
  }

  return (
    <div className={`${styles.plans} ${data.className ? data.className : ""} ${isVisible ? "active" : ""}`}>
      <div className={`${styles.plansContainer}`}>
        <div className="text-center mb-5">
        <div className={`${styles.switch}`}>
          <div><span>{Monthly}</span></div>
          <AvancedSwitch active={isYearly} onChange={(e) => setIsYearly(!isYearly)} />
          <div><div><span>{Yearly}</span></div><div><span>{discount10}</span></div></div>
        </div></div>
        <Swiper {...options}>
          {data.list.map((item, i) => (
            <SwiperSlide className="pl-3 pr-3" key={`ci-${i}`}>
              <Block isYearly={isYearly} variant={data.variant} data={item} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={`${styles.columns} mt-5 mb-2`}>
          <Container>
            <Row>
              {data.columns.map((item, i) => (
                <Col className="pb-3" md={6} key={`cri-${i}`}>
                  <Block variant={item.variant} data={item} />
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      </div>
      <Particles />
    </div>
  );
}

export default Plans;
