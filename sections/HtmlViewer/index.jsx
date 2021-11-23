import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import appConfig from "../../configs/appConfig"

import styles from './htmlViewer.module.scss'

const HtmlViewer = ({ data, isVisible }) => {

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        setVisible(true)
      }, appConfig.entryDelay)
    }
  }, [isVisible])

  return (
    <div className={`${styles.htmlViewer} mb-s ${visible ? "active" : ""}`}>
      <Container>
        <Row>
          <Col  className="entry-4">
            <div dangerouslySetInnerHTML={{ __html: data.html }}></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HtmlViewer;
