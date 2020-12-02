import React, { useEffect, useState, useContext, useRef } from "react";
import { Container, Row, Col, } from "react-bootstrap";
import { Context } from "../../context/context";
import {settings} from "../../data/settings";

import './Sidebar.scss';

const Sidebar = ({ data, isVisible }) => {

  const { scrollB, page } = useContext(Context);
  const [scrollTop, setScrollTop] = useState(0);
  const [delta, setDelta] = useState(0);
  const isCanDetect = useRef(true);

  useEffect(() => {
    if (scrollB.current) scrollB.current.scrollbar.addListener((status) => {
      if(window.innerWidth < 768) {
        if (isCanDetect.current) {
          isCanDetect.current = false;
          setScrollTop(scrollTop => {setDelta(scrollTop - status.offset.y); return status.offset.y;})
  
          const timer = setTimeout(() => {
            isCanDetect.current = true;
            clearTimeout(timer);
          }, 100)
        }
      }
    });
  }, [scrollB])

  return (
    <div className={`sidebar ${delta < 0 && settings.sidebar.for.indexOf(page.currentPage) != -1 ? "active" : ""} ${isVisible ? "active" : ""}`}>
      {data &&
        <Container fluid>
          <Row>
            <Col>
              <div className="d-flex align-items-center">
                <div className="sidebar-logo">
                  <img src={`./assets/img/${data.img}`} alt="" />
                </div>
                <div>
                  <div className="sidebar-title"><span>{data.title}</span></div>
                  <div className="sidebar-description"><span>{data.description}</span></div>
                  <div className="sidebar-label"><span>{data.label}</span></div>
                </div>
              </div>
            </Col>
            <Col className="d-flex align-items-center justify-content-end">
              <div><a className={`btn w-100 btn-${data.button.variant}`} target="blank" href={data.button.link}>{data.button.name}</a></div>
            </Col>
          </Row>
        </Container>
      }
    </div>
  );
}

export default Sidebar;
