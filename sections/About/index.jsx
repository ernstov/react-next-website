import React, {useEffect, useState} from "react";
import { Container, Row, Col, } from "react-bootstrap";
import Button from "../../components/ui/Button";
import typographyStyles from "../../styles/global/typography.module.scss"
import appConfig from "../../configs/appConfig"

import styles from './about.module.scss'

const About = ({ data, isVisible }) => {

  const [visible, setVisible] = useState(false);

  useEffect(()=>{
    if(isVisible) {
      setTimeout(()=>{
        setVisible(true)
      }, appConfig.entryDelay)
    }
  }, [isVisible])

  return (
    <div className={`${styles.about} ${visible ? "active" : ""}`}>
      <Container>
        <Row>
          <Col lg={6}>
            <h2 className={`${typographyStyles.textTitleLight} entry-1 ${data.titleCL ? data.titleCL : "mw-450"}`}>{data.title}</h2>
          </Col>
          <Col lg={6} className="about-button entry-2">
            <div><Button className={`w-100`} link={data.button.link} variant={data.button.variant}>{data.button.name}</Button></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
