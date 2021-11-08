import React, { useEffect, useState } from "react"
import styles from './hero.module.scss'
import Button from '../../components/ui/Button'
import typographyStyles from "../../styles/global/typography.module.scss"
import presetsStyles from "../../styles/global/presets.module.scss"
import appConfig from "../../configs/appConfig"
import { Container, Row, Col } from "react-bootstrap"
import Badge from '../../components/ui/Badge'
import dynamic from 'next/dynamic'

const Hero = ({ data, isVisible }) => {

  const [visible, setVisible] = useState(false)
  const { list, label, buttons, isBlank, img, isExternal, imgCL, titleCL, descriptionCL, description, title, btnsClassName, className, variant, animation } = data

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        setVisible(true)
      }, appConfig.entryDelay * 2)
    }
  }, [isVisible])

  const renderAnimation = (name) => {
    switch (name) {
      case "newsApi":
        const Animation = dynamic(() => import('./AnimationNewsApi'))
        return <Animation />
    }
  }

  return (
    <div className={`${styles.hero} ${className ? className : ""} ${variant ? variant : ""} ${visible ? "active" : ""}`}>
      <Container>
        <Row className="position-relative">
          <Col lg={6} className="d-flex align-items-center position-relative z-1">
            <div>
              {label && <Badge className="mb-2 entry-1" label={label} variant={`secondary`} />}
              <h1 className={`${typographyStyles.textTitleHero} mb-3 entry-1 ${titleCL ? titleCL : "mw-410"}`} dangerouslySetInnerHTML={{ __html: title }}></h1>
              <p className={`${typographyStyles.textSubTitleHero} entry-2 ${descriptionCL ? descriptionCL : "mw-410"}`} dangerouslySetInnerHTML={{ __html: description }}></p>
              {list &&
                <ul className={`${presetsStyles.listHero} entry-3`}>
                  {list.map((item, i) => (
                    <li key={`lui-${i}`}>{item}</li>
                  ))}
                </ul>
              }
              <div className={`${styles.buttonsAdvanced} ${btnsClassName ? btnsClassName : ""} entry-4`}>
                {buttons && buttons.map((button, i) => (
                  isBlank ?
                    <Button link={button.link} as={`${button.as ? button.as : "link"}`} variant={button.variant} className={`${button.className ? button.className : ""} ${i < buttons.length ? "mb-2" : ""}`} key={`bi-${i}`}>{button.name}</Button> :
                    <Button link={button.link} as={`${button.as ? button.as : "link"}`} variant={button.variant} className={`${button.className ? button.className : ""} ${i < buttons.length ? "mb-2" : ""}`} key={`bi2-${i}`}>{button.name}</Button>
                ))}
              </div>
            </div>
          </Col>
          <Col className={`${styles.imgAdvacnedContainer}`} lg={6}>
            {animation ?
              <div className="entry-1">{renderAnimation(animation)}</div>
              :
              img && <img className={`${styles.imgAdvacned} entry-1 ${imgCL ? imgCL : ""}`} src={isExternal ? img : `/img/${img}`} />
            }
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Hero;
