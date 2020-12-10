import React, {useEffect, useState} from "react";
import { Container, Row, Col, } from "react-bootstrap";
import {Link} from "@reach/router";

import './About.scss';

const About = ({ data, isVisible }) => {

  const [visible, setVisible] = useState(false);

  useEffect(()=>{
    if(isVisible) {
      setTimeout(()=>{
        setVisible(true)
      }, 500)
    }
  }, [isVisible])

  return (
    <div className={`about ${visible ? "active" : ""}`}>
      <Container>
        <Row>
          <Col lg={6}>
            <h2 className={`text-title-light entry-1 ${data.titleCL ? data.titleCL : "mw-450"}`}>{data.title}</h2>
          </Col>
          <Col lg={6} className="about-button entry-2">
            <div><Link className={`btn w-100 btn-${data.button.variant}`} to={data.button.link}>{data.button.name}</Link></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
