import React, { useState, useEffect, useRef, useContext } from "react";
import { Container, Row, Col, Badge } from "react-bootstrap";
import Icon from "../../components/Icon";
import Scrollbar from 'react-smooth-scrollbar';
import Block from "../../components/Block";
import { Swiper, SwiperSlide } from "swiper/react"
import { Context } from '../../context/context';
import { useRouter } from "next/router"
import styles from './tranding.module.scss'
import SwiperCore, { Pagination } from 'swiper/core';
import typographyStyles from "../../styles/global/typography.module.scss"

SwiperCore.use([Pagination]);

const Tranding = ({ data, isVisible }) => {

  const { app } = useContext(Context);
  const router = useRouter()

  const options = {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: false,
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
        slidesPerView: 1.3,
        spaceBetween: 30,
      },
      767: {
        slidesPerView: 3.3,
        spaceBetween: 30,
      },
      1100: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      1500: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    }
  }

  return (
    <div className={`${styles.tranding} ${isVisible ? "active" : ""}`}>
      <Container className="tranding-container title">
        <Row>
          <Col>
            <div className="d-flex align-items-center mb-4 entry-1"><h3 className={`${typographyStyles.textTitleSm2} mb-0`}>{data.title}</h3><Icon className="ml-2 op-05" variant="tranding-icon" /></div>
          </Col>
        </Row>
      </Container>
      <Scrollbar>
        <Container className="tranding-container entry-2">
          <Row>
            {app?.trands?.map((trandData, i) => (
              <Col key={`t-${i}`} xl={6}>
                <div className="tranding-tags">
                  <h5 className={`${typographyStyles.textLabel}`}>{data.trands[i].name}</h5>
                  <Scrollbar>
                    <div className="tranding-tags-container">
                      {trandData.map((item, i) => (
                        window.innerWidth < 767 ?
                          <Badge onClick={() => router.push("/download")} key={`bi-${i}`} className="mr-2 mb-0 mb-md-2" variant="cover">{item.name}</Badge>
                          :
                          i < data.limitDesktop &&
                          <Badge onClick={() => router.push("/download")} key={`bi-${i}`} className="mr-2 mb-0 mb-md-2" variant="cover">{item.name}</Badge>
                      ))}
                    </div>
                  </Scrollbar>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </Scrollbar>
      <Container className="tranding-container title">
        <Row className="mb-4 mt-s">
          <Col>
            <h3 className={`${typographyStyles.textTitleSm2} mb-1 entry-3`}>{data.titleContent}</h3>
            <div className="d-flex align-items-center entry-4"><p className={`${typographyStyles.textSmall} mb-0`}>{data.description}</p></div>
          </Col>
        </Row>
      </Container>
      <div className="tranding-swiper-overflow">
        <Container className="tranding-container-swiper entry-5">
          <Row>
            <Col>
              <Swiper {...options}>
                {data?.content?.length && data.content.map((item, i) => (
                  <SwiperSlide key={`bi-${i}`}>
                    <Block data={item} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Tranding;
