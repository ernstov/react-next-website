import React, { useEffect, useState, useContext } from "react"
import styles from './hero.module.scss'
import Button from '../../components/ui/Button'
import typographyStyles from "../../styles/global/typography.module.scss"
import presetsStyles from "../../styles/global/presets.module.scss"
import appConfig from "../../configs/appConfig"
import { Container, Row, Col } from "react-bootstrap"
import Badge from '../../components/ui/Badge'
import LiveDemo from "../../components/LiveDemo"
import Animation from "./AnimationNewsApi"
import {scrollTo} from "../../utils"

const HeroSpecial = ({ data, isVisible, isWrap, liveDemo }) => {

  const [visible, setVisible] = useState(false)
  const { list, label, buttons, isBlank, img, isExternal, imgCL, titleCL, descriptionCL, description, title, btnsClassName, className, variant, animation, listAdv } = data
  const { scrollB } = useContext(Context)

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        setVisible(true)
      }, appConfig.entryDelay * 2)
    }
  }, [isVisible])

  useEffect(()=>{
    document.querySelectorAll('[href*="#"]').forEach((item)=>{
      item.addEventListener("click", onScrollToSection)
    })

    return ()=> {
      document.querySelectorAll('[href*="#"]').forEach((item)=>{
        item.removeEventListener("click", onScrollToSection)
      })
    }
  },[])

  
  const onScrollToSection = (e) => {
    e.preventDefault()
    const id = e.target.href.split("#")[1]

    scrollTo(id, isWrap, scrollB)
  }

  const renderAnimation = (name) => {
    switch (name) {
      case "newsApi":
        return <Animation />
    }
  }

  return (
    <div className={`${styles.hero} ${className ? className : ""} ${variant ? variant : ""} ${visible ? "active" : ""}`}>
      <Container className="p-0">
        <Row className="position-relative">
          <Col xl={5} className="d-flex align-items-center position-relative z-1">
            <div className={`${styles.heroSpcInner}`}>
              <div className={`${styles.imgSpcContainer} entry-1 order-2`}>
                {animation && <div>{renderAnimation(animation)}</div>}
                {img && <img className={`${styles.imgAdvacned} ${imgCL ? imgCL : ""}`} src={isExternal ? img : `/img/${img}`} />}
              </div>
              {label && <Badge className="mb-2 entry-1" label={label} variant={`secondary`} />}
              <h1 className={`${typographyStyles.textTitleHero} ${styles.heroTitleSpc} mb-4 entry-1 order-1 ${titleCL ? titleCL : "mw-410"}`} dangerouslySetInnerHTML={{ __html: title }}></h1>
              <div className={`${styles.heroSpcDesc} order-3`}>
                <p className={`${typographyStyles.textSubTitle3} entry-2 ${descriptionCL ? descriptionCL : "mw-410"}`} dangerouslySetInnerHTML={{ __html: description }}></p>
                {listAdv &&
                  <div className={`${presetsStyles.listAdvHero} entry-3`}>
                    {listAdv.label && <div className="mb-2"><span className={`${typographyStyles.textMediumD}`}>{listAdv.label}</span></div>}
                    <ul>
                      {listAdv.items.map((item, i) => (
                        <li key={`lai-${i}`} dangerouslySetInnerHTML={{ __html: item }}></li>
                      ))}
                    </ul>
                  </div>
                }
                {list &&
                  <ul className={`${presetsStyles.listHero} entry-3`}>
                    {list.map((item, i) => (
                      <li key={`lui-${i}`} dangerouslySetInnerHTML={{ __html: item }}></li>
                    ))}
                  </ul>
                }
                <div className={`${styles.buttonsSpc} ${btnsClassName ? btnsClassName : ""} entry-4`}>
                  {buttons && buttons.map((button, i) => (
                    isBlank ?
                      <Button link={button.link} as={`${button.as ? button.as : "link"}`} variant={button.variant} className={`${button.className ? button.className : ""} ${i < buttons.length ? "mb-2" : ""}`} key={`bi-${i}`}>{button.name}</Button> :
                      <Button link={button.link} as={`${button.as ? button.as : "link"}`} variant={button.variant} className={`${button.className ? button.className : ""} ${i < buttons.length ? "mb-2" : ""}`} key={`bi2-${i}`}>{button.name}</Button>
                  ))}
                </div>
              </div>
            </div>
          </Col>
          <Col className={`${styles.liveDemoContainer}`} xl={7}>
            <LiveDemo data={liveDemo}/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HeroSpecial;
