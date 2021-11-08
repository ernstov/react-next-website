import React, { useEffect, useState } from "react"
import styles from './features.module.scss'
import Button from '../../components/ui/Button'
import typographyStyles from "../../styles/global/typography.module.scss"
import { Container, Row, Col, Badge } from "react-bootstrap"
import presetsStyles from "../../styles/global/presets.module.scss"
import Particles from '../../components/Particles'

const FeaturesSimple = ({ data, isVisible }) => {

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
    <div className={`${styles.features} simple ${data.variant ? data.variant : ""} ${visible ? "active" : ""}`}>
      <Container>
        <Row>
          <Col>
            <div className="entry-1 text-center text-md-left"><span className={`${typographyStyles.labelPrimarySem}`} dangerouslySetInnerHTML={{ __html: column2.label }}></span></div>
            <div className="mt-5 mt-md-4 entry-2">
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
            <div className={`${styles.buttons} mt-5 entry-3`}>
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

export default FeaturesSimple;
