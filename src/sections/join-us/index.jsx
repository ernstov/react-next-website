import React, { useEffect, useState } from "react";
import { Container, Row, Col, } from "react-bootstrap";
import { Link } from "@reach/router";

import './JoinUs.scss';

const JoinUs = ({ data, isVisible }) => {

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        setVisible(true)
      }, 1000)
    }
  }, [isVisible])

  return (
    <div className={`join-us ${visible ? "active" : ""}`}>
      <Container>
        <Row>
          <Col lg={12}>
            <div className="join-us-inner mb-4 entry-2">
              <Container fluid>
                <Row>
                  <Col md={7}>
                    <h4 className="text-title-smd">{data.title}</h4>
                    <p>{data.description}</p>
                    {data.list &&
                      <>
                        <div>{data.list.title}</div>
                        <ul className="list-primary p-0 mt-2">{data.list.items.map((item, i) => (
                          <li key={`li-${i}`}>{item}</li>
                        ))}
                        </ul>
                      </>
                    }
                  </Col>
                  <Col md={5} className="text-center text-md-right">
                    <img className="join-us-img" src={`/assets/img/${data.img}`} alt="" />
                  </Col>
                </Row>
              </Container>
            </div>
            <div className="join-us-footer mb-s entry-2">
              <Container fluid>
                <Row>
                  <Col md={12}>
                    <h4 className="text-title-smd">{data.footer.title}</h4>
                    <p>{data.footer.description}</p>
                  </Col>
                </Row>
              </Container>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default JoinUs;
