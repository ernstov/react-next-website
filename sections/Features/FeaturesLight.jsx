import React, { useEffect, useState } from "react"
import styles from './features.module.scss'
import Button from '../../components/ui/Button'
import typographyStyles from "../../styles/global/typography.module.scss"
import { Container, Row, Col, Badge } from "react-bootstrap"
import Animation from "./AnimationMedia"

const FeaturesLight = ({ data, isVisible }) => {

  const [visible, setVisible] = useState(false)
  const { img, column1, column2, buttons, animation } = data

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        setVisible(true)
      }, 1000)
    }
  }, [isVisible])


  const renderAnimation = (name) => {
    switch (name) {
      case "animationMedia":
        return <Animation />
    }
  }

  return (
    <div className={`${styles.featuresLight} ${data.variant ? data.variant : ""} ${visible ? "active" : ""}`}>
      <Container>
        <Row>
          <Col className="d-flex justify-content-center justify-content-md-start align-items-center" md={6}>
            {animation && <div className={`${styles.featuresLightAnimation} entry-2`}>{renderAnimation(animation)}</div>}
            {img && <img className={`${styles.featuresLightImg} entry-2`} src={`/img/${img}`} alt="" />}
          </Col>
          <Col md={6}>
            <div className={`${styles.featuresBadgeContainer}`}>
              <div className={`${styles.featuresBadge} entry-1`}><span dangerouslySetInnerHTML={{ __html: column2.label }}></span></div>
            </div>
            <div className={`${styles.featuresList} mt-5 mt-md-4 entry-2`}>
              {column2.list.map((item, i) => (
                <div className={`d-flex ${styles.mb}`} key={`li-${i}`}>
                  <div><img className="mr-3" src={`/img/${item.img}`} /></div>
                  <div>
                    <div className="mb-2 d-flex align-items-center"><span className={`${typographyStyles.titleDemiSpc} lh-1`}>{item.title}</span>{item.titleImg && <img className={`${styles.featuresTitleImg}`} src={`/img/${item.titleImg}`} alt={item.titleImg} />}</div>
                    <div className="mw-650"><span className={`${typographyStyles.textSubTitle}`}>{item.description}</span></div>
                  </div>
                </div>
              ))}
            </div>
            <div className={`${styles.featuresButtons} entry-3`}>
              {data.buttons && data.buttons.map((button, i) => (
                <Button link={button.link} as={`${button.as ? button.as : "link"}`} variant={button.variant} className={`${button.className ? button.className : ""} ${i < data.buttons.length - 1 ? "mb-2 mr-3" : ""}`} key={`bi-${i}`}>{button.name}</Button>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default FeaturesLight;
