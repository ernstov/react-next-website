import React, { useEffect, useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import typographyStyles from "../../styles/global/typography.module.scss"
import styles from './quote.module.scss'

const Quote = ({ data, isVisible }) => {

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        setVisible(true)
      }, 1000)
    }
  }, [isVisible])

  return (
    <div className={`${styles.quote} sect-spacer-lg ${visible ? "active" : ""}`}>
      <Container>
        <Row>
          <Col md={8} className="d-flex align-items-center justify-content-center">
            <div className="quote-inner">
              <div className="quote-icon"><span className="d-block entry-1">“</span></div>
              <div className="entry-1"><span className={`${typographyStyles.textRoman}`}>{data.description}</span></div>
              <div className="mt-3 entry-2"><span className={`${typographyStyles.textRomanSm} op-05`}>{data.author.name}, {data.author.title}</span></div>
            </div>
          </Col>
          <Col md={4} className="text-center text-md-left pt-4 pt-md-0">
            <img className="quote-img entry-3" src={`/img/${data.author.img}`} alt=""/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Quote;
