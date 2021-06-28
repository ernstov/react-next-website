import React, { useState, useEffect } from 'react';
import {Container, Row, Col} from "react-bootstrap";

import styles from './stores.module.scss'

const Stores = ({ data, isVisible }) => {

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        setVisible(true)
      }, 500)
    }
  }, [isVisible])

  return (
    <div className={`${styles.stores} ${visible ? "active" : ""}`}>
      <Container>
        <Row>
          <Col>
            <div className="stores-wrapper entry-2">
              {data.stores.map((item, i) => (
                <a target="blank" key={`si-${i}`} href={item.link}>
                  <img className="stores-wrapper__item" src={`/img/${item.img}`} alt="app" />
                </a>
              ))}
            </div>
            <section className="download-container entry-4">
              <div className="download-description">
                <p className="download-description__title">{data?.additional?.title}</p>
                <p className="download-description__text">{data?.additional?.text}</p>
              </div>
            </section>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Stores