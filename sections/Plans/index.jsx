import { useState, useContext, useEffect } from "react"
import { Container, Row, Col, Badge } from "react-bootstrap"
import Block from "../../components/Block"
import styles from './plans.module.scss'
import AvancedSwitch from "../../components/ui/AdvancedSwitch"
import { Context } from "../../context/context"
import appConfig from "../../configs/appConfig"
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';

const Plans = ({ data, isVisible }) => {

  const [isYearly, setIsYearly] = useState(false)
  const { lang: { Monthly, Yearly, discount10 } } = useContext(Context);

  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        setVisible(true)
      }, appConfig.entryDelay)
    }
  }, [isVisible])

  const options = {
    slidesPerView: 4,
    modules:[Navigation, Pagination],
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
        centeredSlides: true,
        spaceBetween: 0,
        initialSlide: 1,
        slidesPerView: 1.3,
      },
      767: {
        slidesPerView: 2.3,
      },
      991: {
        slidesPerView: 3.3,
      },
      1100: {
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
              <SwiperSlide key={`ci-${i}`}>
                <Block isYearly={isYearly} variant={data.variant} data={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className={`${styles.columns} mt-5 mb-2 entry-4`}>
          <Container>
            <Row>
              {data.columns.map((item, i) => (
                <Col className="pb-3" md={4} key={`cri-${i}`}>
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
