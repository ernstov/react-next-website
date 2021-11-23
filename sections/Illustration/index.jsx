import React, { useEffect, useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import styles from './illustration.module.scss'
import Image from "next/image"
import appConfig from "../../configs/appConfig"

const Illustration = ({ data, isVisible }) => {

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        setVisible(true)
      }, appConfig.entryDelay)
    }
  }, [isVisible])

  return (
    <div className={`${styles.illustration} ${visible ? "active" : ""}`}>
      <Container>
        <Row>
          <Col className={`${styles.container} entry-1`}>
            <Image width={data.width} height={data.height} src={`/img/${data.img}`} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Illustration;
