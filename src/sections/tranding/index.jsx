import React, { useState, useEffect, useRef, useContext } from "react";
import { Container, Row, Col, Badge } from "react-bootstrap";
import Icon from "../../components/Icon";
import Scrollbar from 'react-smooth-scrollbar';
import Block from "../../components/block";
import Swiper from 'react-id-swiper';
import { Context } from '../../context/context';

import 'swiper/swiper.scss'
import './Tranding.scss';

const Tranding = ({ data, isVisible }) => {

  const [swiper, setSwiper] = useState(null);
  const swiperRef = useRef(null);
  const { pages } = useContext(Context);

  useEffect(() => {
    if (swiperRef.current) {
      const slides = document.querySelectorAll('.swiper-slide');

      slides.forEach((slide) => {
        slide.addEventListener('mouseover', onSlideClick);
      })

      document.addEventListener('mouseover', onOutsideOver);

    }

    return () => {
      const slides = document.querySelectorAll('.swiper-slide');

      slides.forEach((slide) => {
        slide.removeEventListener('mouseover', onSlideClick);
      })

      document.removeEventListener('mouseover', onOutsideOver);

    }
  }, [swiperRef])

  const onSlideClick = (e) => {
    const slides = document.querySelectorAll('.swiper-slide');

    slides.forEach((slide) => {
      slide.classList.remove("clicked");
    })

    e.target.closest(".swiper-slide").classList.add("clicked");
  }

  const onOutsideOver = (e) => {
    if (!e.target.closest(".swiper-slide")) {
      const slides = document.querySelectorAll('.swiper-slide');

      slides.forEach((slide) => {
        slide.classList.remove("clicked");
      })
    }
  }

  const options = {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: false,
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
        slidesPerView: 2,
        spaceBetween: 30,
        loop: true,
      },
      767: {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
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
    <div className={`tranding ${isVisible ? "active" : ""}`}>
      <Container className="tranding-container title">
        <Row>
          <Col>
            <div className="d-flex align-items-center mb-4 entry-1"><h3 className="text-title-sm mb-0">{data.title}</h3><Icon className="ml-2 op-05" variant="tranding-icon" /></div>
          </Col>
        </Row>
      </Container>
      <Scrollbar>
        <Container className="tranding-container entry-2">
          <Row>
            {pages.trands.map((trandData, i) => (
              <Col key={`t-${i}`} xl={6}>
                <div className="tranding-tags">
                  <h5 className="text-label">{data.trands[i].name}</h5>
                  <Scrollbar>
                    <div className="tranding-tags-container">
                      {trandData.data.map((item, i) => (
                        window.innerWidth < 767 ?
                          <Badge key={`bi-${i}`} className="mr-2 mb-0 mb-md-2" variant="cover">{item.name}</Badge>
                          :
                          i < data.limitDesktop &&
                          <Badge key={`bi-${i}`} className="mr-2 mb-0 mb-md-2" variant="cover">{item.name}</Badge>
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
            <h3 className="text-title-sm mb-1 entry-3">{data.titleContent}</h3>
            <div className="d-flex align-items-center entry-4"><p className="text-small mb-0">{data.description}</p></div>
          </Col>
        </Row>
      </Container>
      <div className="tranding-swiper-overflow">
        <Container className="tranding-container-swiper entry-5">
          <Row>
            <Col>
              <Swiper {...options} ref={swiperRef}>
                {data.content && data.content.map((item, i) => (
                  <div key={`bi-${i}`}>
                    <Block data={item} />
                  </div>
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
