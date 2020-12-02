import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import './Typer.scss';

const Typer = ({ data, isVisible }) => {

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        setVisible(true)
      }, 1000)
    }
  }, [isVisible])

  return (
    <div className={`typer sect-spacer ${visible ? "active" : ""}`}>
      <Container>
        <Row>
          <Col md={6} className="d-flex align-items-center justify-content-center">
            <img className="typer-img entry-1" src={`/assets/img/${data.img}`} />
          </Col>
          <Col md={6} className="d-flex d-block justify-content-center">
            <div className="typer-container entry-1">
              <h3 className="text-title-md entry-2">{data.title}</h3>
              <ul>
                {data.list.map((item, i) => (
                  <li className={`entry-${i+1}`}  key={`li-${i}`} dangerouslySetInnerHTML={{ __html: item.name }}></li>
                ))}
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Typer;
