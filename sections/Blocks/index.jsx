import React, { useEffect, useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import typographyStyles from "../../styles/global/typography.module.scss"

import styles from './blocks.module.scss'

const Blocks = ({ data, isVisible }) => {

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        setVisible(true)
      }, 200)
    }
  }, [isVisible])

  return (
    <div className={`${styles.blocks} ${visible ? "active" : ""}`}>
      <Container>
        <Row>
          <Col md={12}>
            {data.title && <h3 className={`${typographyStyles.textTitleSemi} text-center mb-5 entry-1`}>{data.title}</h3>}
            {data.img &&
              <img className="blocks-img entry-2" src={`/img/${data.img}`} />
            }
          </Col>
        </Row>
        <Row className="mt-5">
          {data.columns.map((column, i) => (
            <Col className="blocks-col" key={`ci-${i}`} md={6}>
              <div className={`blocks-item entry-${i + 1}`}>
                <h3 className={`${typographyStyles.textTitleSm2} mb-3`}>{column.title}</h3>
                <p dangerouslySetInnerHTML={{ __html: column.description }}></p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Blocks;
