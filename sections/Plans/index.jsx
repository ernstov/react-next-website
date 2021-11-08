import { useState, useContext, useEffect } from "react"
import { Container, Row, Col, Badge } from "react-bootstrap"
import Block from "../../components/Block"
import { Swiper, SwiperSlide } from "swiper/react"
import styles from './plans.module.scss'
import typographyStyles from "../../styles/global/typography.module.scss"
import SwiperCore, { Pagination } from 'swiper/core'
import AvancedSwitch from "../../components/ui/AdvancedSwitch"
import { Context } from "../../context/context"
import Particles from '../../components/Particles'
import appConfig from "../../configs/appConfig"

SwiperCore.use([Pagination]);

const Plans = ({ data, isVisible }) => {

  const [isYearly, setIsYearly] = useState(false)
  const { lang: { Monthly, Yearly, discount10 } } = useContext(Context);

  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        setVisible(true)
      }, appConfig.entryDelay*2)
    }
  }, [isVisible])

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
        slidesPerView: 1,
        initialSlide: 1,
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
    <div className={`${styles.plans} ${data.className ? data.className : ""} ${visible ? "active" : ""}`}>
      <div className={`${styles.plansContainer}`}>
        <div className="text-center mb-5">
          <div className={`${styles.switch} entry-1`}>
            <div><span>{Monthly}</span></div>
            <AvancedSwitch active={isYearly} onChange={(e) => setIsYearly(!isYearly)} />
            <div><div><span>{Yearly}</span></div><div className={`${styles.discount}`}><span>{discount10}</span></div></div>
          </div>
        </div>
        <div className="entry-3">
          <Swiper {...options}>
            {data.list.map((item, i) => (
              <SwiperSlide className="pl-3 pr-3" key={`ci-${i}`}>
                <Block isYearly={isYearly} variant={data.variant} data={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className={`${styles.columns} mt-5 mb-2 entry-4`}>
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
    </div>
  );
}

export default Plans;
