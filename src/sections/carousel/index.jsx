import React, { useState, useEffect, useRef, useContext } from "react";
import { Container, Row, Col, Badge } from "react-bootstrap";
import Icon from "../../components/Icon";
import Block from "../../components/block";
import Swiper from 'react-id-swiper';
import { Context } from '../../context/context';

import 'swiper/swiper.scss'
import './Carousel.scss';

const Carousel = ({ data, isVisible }) => {

  const [swiper, setSwiper] = useState(null);
  const swiperRef = useRef(null);
  const { pages } = useContext(Context);

  const options = {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
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
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1100: {
        slidesPerView: 4,
        spaceBetween: 30
      },
      1500: {
        slidesPerView: 4,
        spaceBetween: 30
      }
    }
  }

  return (
    <div className={`carousel ${isVisible ? "active" : ""}`}> 
      <Container>
        <Row>
          <Col className="text-center mb-4 mb-md-0">
            {data.img && <img className="carousel-img entry-1" src={`/assets/img/${data.img}`} />}
            {data.title && <h3 className="text-title-semi mt-4 mb-4 entry-2">{data.title}</h3>}
            {data.description && <div className="entry-3"><p className="mb-0">{data.description}</p></div>}
          </Col>
        </Row>
      </Container>
      <div className="carousel-swiper-overflow entry-4">
        <Swiper {...options} ref={swiperRef}>
          {data.columns.map((item, i) => (
            <div key={`ci-${i}`}>
              <Block variant={data.variant} data={item} />
            </div>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Carousel;
