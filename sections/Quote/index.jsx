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
          <Col lg={8} className="d-flex align-items-center justify-content-center">
            <div className="quote-inner">
              <div className="quote-icon"><span className="d-block entry-1">“</span></div>
              <div className="entry-1"><span className={`${typographyStyles.textMediumLg}`}>{data.description}</span></div>
              <div className="mt-3 entry-2 d-none d-lg-block"><span className={`${typographyStyles.textAuthor}`}>{data.author.name}, {data.author.title}</span></div>
            </div>
          </Col>
          <Col lg={4} className="pt-4 pt-md-0">
            <div className="d-flex justify-content-center justify-content-md-start"><img className="quote-img entry-3" src={`/img/${data.author.img}`} alt=""/></div>
            <div className="d-block d-lg-none mt-3 entry-2 text-center"><span className={`${typographyStyles.textAuthor}`}>{data.author.name}, {data.author.title}</span></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Quote;
