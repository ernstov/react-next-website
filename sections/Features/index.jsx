import React, { useEffect, useState } from "react"
import styles from './features.module.scss'
import Button from '../../components/ui/Button'
import typographyStyles from "../../styles/global/typography.module.scss"
import { Container, Row, Col, Badge } from "react-bootstrap"
import presetsStyles from "../../styles/global/presets.module.scss"

const Features = ({ data, isVisible }) => {

  const [visible, setVisible] = useState(false)
  const { img, column1, column2, buttons } = data

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        setVisible(true)
      }, 1000)
    }
  }, [isVisible])

  return (
    <div className={`${styles.features} ${data.variant ? data.variant : ""} ${visible ? "active" : ""}`}>
      <Container>
        <Row>
          <Col className="order-2 order-md-1" md={5}>
            <div className={`${styles.featuresImgOuter}`}><div className={`${styles.featuresImgContainer}`}><img className={`${styles.featuresImg}`} src={`/img/${column1.img}`}/></div></div>
          </Col>
          <Col className="pl-1 pl-md-5 order-1 order-md-2" md={7}>
            <div className="d-flex align-items-center"><img className="mr-2" src={`/img/${column1.labelImg}`} /><span className={`${typographyStyles.labelPrimaryMd}`}>{column1.label}</span></div>
            <div className="mt-2"><span className={`${typographyStyles.titleDemiWhite}`}>{column1.title}</span></div>
            <p className={`${typographyStyles.textWhiteRegular} mt-3`}>{column1.description}</p>
            <ul className={`${presetsStyles.listPrimary} dark`}>
              {column1.list.map((item, i) => (
                <li key={`li-${i}`}>{item.title}</li>
              ))}
            </ul>
          </Col>
        </Row>
        <Row className="mt-4 mt-md-5">
          <Col>
            <div><span className={`${typographyStyles.labelPrimaryMd}`} dangerouslySetInnerHTML={{ __html: column2.label }}></span></div>
            <div className="mt-4">
              {column2.list.map((item, i) => (
                <div className="d-flex mb-5" key={`li-${i}`}>
                  <div><img className="mr-3" src={`/img/${item.img}`}/></div>
                  <div>
                    <div className="mb-2"><span className={`${typographyStyles.titleDemiWhite} lh-1`}>{item.title}</span></div>
                    <div className="mw-650"><span className={`${typographyStyles.textWhiteRegularSm}`}>{item.description}</span></div>
                  </div>
                </div>
              ))}
            </div>
            <div className={`${styles.buttons} mt-5 entry-4`}>
              {data.buttons && data.buttons.map((button, i) => (
                <Button link={button.link} as={`${button.as ? button.as : "link"}`} variant={button.variant} className={`${button.className ? button.className : ""} ${i < data.buttons.length-1 ? "mb-2 mr-3" : ""}`} key={`bi-${i}`}>{button.name}</Button>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Features;
