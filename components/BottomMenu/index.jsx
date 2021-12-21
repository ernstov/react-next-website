import React, { useEffect, useState, useContext, useRef } from "react";
import { Container, Row, Col, } from "react-bootstrap";
import { Context } from "../../context/context";
import Button from "../ui/Button"

import styles from './bottomMenu.module.scss'

const BottomMenu = ({ data, isVisible, path }) => {

  const { scrollB, page } = useContext(Context);
  const [scrollTop, setScrollTop] = useState(0);
  const [delta, setDelta] = useState(0);
  const isCanDetect = useRef(true);

  useEffect(() => {
    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [])

  const onScroll = (e) => {
    if (window.innerWidth < 768) {
      if (isCanDetect.current) {
        isCanDetect.current = false;
        setScrollTop(scrollTop => { 
          setDelta(parseInt(scrollTop - window.scrollY)); return window.scrollY; })

        const timer = setTimeout(() => {
          isCanDetect.current = true;
          clearTimeout(timer);
        }, 100)
      }
    }
  }

  return (
    <div className={`${styles.bottomMenu} ${delta < 0 && data.for.indexOf(path) != -1 ? "active" : ""} ${isVisible ? "active" : ""}`}>
      {data &&
        <Container fluid>
          <Row>
            <Col>
              <div className="d-flex align-items-center">
                <div className="bottomMenu-logo">
                  <img width={57} height={57} src={`/img/${data.img}`} alt="" />
                </div>
                <div>
                  <div className="bottomMenu-title"><span>{data.title}</span></div>
                  <div className="bottomMenu-description"><span>{data.description}</span></div>
                  <div className="bottomMenu-label"><span>{data.label}</span></div>
                </div>
              </div>
            </Col>
            <Col className="d-flex align-items-center justify-content-end">
              <div><Button as="url" className="w-100 pl-4 pr-4" link={data.button.link} variant={`${data.button.variant}`}>{data.button.name}</Button></div>
            </Col>
          </Row>
        </Container>
      }
    </div>
  );
}

export default BottomMenu;
