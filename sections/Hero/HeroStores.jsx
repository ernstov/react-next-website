import React, { useEffect, useState, useContext } from "react"
import styles from './hero.module.scss'
import Button from '../../components/ui/Button'
import ts from "../../styles/global/typography.module.scss"
import presetsStyles from "../../styles/global/presets.module.scss"
import appConfig from "../../configs/appConfig"
import { Container, Row, Col } from "react-bootstrap"

const HeroStores = ({ data, isVisible, isWrap }) => {

  const [visible, setVisible] = useState(false)
  const {  img, isExternal, imgCL, titleCL, descriptionCL, description, title, stores, className, variant } = data

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        setVisible(true)
      }, appConfig.entryDelay * 2)
    }
  }, [isVisible])

  return (
    <div className={`${styles.hero} ${className ? className : ""} ${variant ? variant : ""} ${visible ? "active" : ""}`}>
      <Container>
        <Row className="position-relative">
          <Col className={`${styles.imgStoreContainer}`} lg={6}>
            {
              img && <img className={`${styles.imgStores} entry-1 ${imgCL ? imgCL : ""}`} src={isExternal ? img : `/img/${img}`} />
            }
          </Col>
          <Col lg={6} className={`${styles.heroStoresInner}`}>
            <div>
              <h1 className={`${ts.titleLargeHero} mb-0 entry-1 ${titleCL ? titleCL : "mw-410"}`} dangerouslySetInnerHTML={{ __html: title }}></h1>
              <p className={`${ts.subtitleLarge} entry-2 ${descriptionCL ? descriptionCL : ""}`} dangerouslySetInnerHTML={{ __html: description }}></p>
              <div className={`${styles.stores} entry-2 mt-4`}>
              {stores?.map((item, i) => (
                <a target="blank" key={`si-${i}`} href={item.link}>
                  <img className={`${styles.storesItem}`} src={`/img/${item.img}`} alt="app" />
                </a>
              ))}
            </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HeroStores;