import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import styles from './htmlViewer.module.scss'

const HtmlViewer = ({ data, isVisible }) => {

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        setVisible(true)
      }, 500)
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