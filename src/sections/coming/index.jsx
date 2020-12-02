import React, {useEffect, useState} from "react";
import { Container, Row, Col, } from "react-bootstrap";

import './Coming.scss';

const ComingSoon = ({ data, isVisible }) => {

  const [visible, setVisible] = useState(false);

  useEffect(()=>{
    if(isVisible) {
      setTimeout(()=>{
        setVisible(true)
      }, 500)
    }
  }, [isVisible])

  return (
    <div className={`coming-soon ${visible ? "active" : ""}`}>
      <Container>
        <Row>
          <Col lg={12}>
            <h2 className="entry-1 text-center">{data.title}</h2>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ComingSoon;
