import React, { useEffect, useState } from "react"
import styles from './hero.module.scss'
import Button from '../../components/ui/Button'
import typographyStyles from "../../styles/global/typography.module.scss"
import appConfig from "../../configs/appConfig"
import Animation from "./AnimationLogo"

const Hero = ({ data, isVisible }) => {

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        setVisible(true)
      }, appConfig.entryDelay * 2)
    }
  }, [isVisible])

  const renderAnimation = (name) => {
    switch (name) {
      case "logo":
        return <div className={`${styles.homeAnimation}`}><Animation isVisible={isVisible} /></div>
    }
  }

  const render = () => {
    switch (data.variant) {
      case "small":
        return <div className={`${styles.inner}`}>
          {data.img &&
            <img className={`${styles.img} entry-1 ${data.imgCL ? data.imgCL : ""} mb-3`} src={data.isExternal ? data.img : `/img/${data.img}`} />
          }
          <h1 className={`${typographyStyles.textTitle} mb-2 mb-md-2 entry-1 mx-auto ${data.titleCL ? data.titleCL : "mw-410"}`} dangerouslySetInnerHTML={{ __html: data.title }}></h1>
          <p className={`${typographyStyles.textSubTitle} entry-2 mx-auto ${data.descriptionCL ? data.descriptionCL : "mw-410"}`} dangerouslySetInnerHTML={{ __html: data.description }}></p>
        </div>
      case "base":
      default:
        return <div className={`${styles.inner}`}>
          {data.animation ?
            <div className="entry-1">{renderAnimation(data.animation)}</div>
            :
            data.img && <img className={`${styles.img} entry-1 ${data.imgCL ? data.imgCL : ""}`} src={data.isExternal ? data.img : `/img/${data.img}`} />
          }
          <h1 className={`${typographyStyles.textTitle} mb-2 mb-md-2 entry-1 mx-auto ${data.titleCL ? data.titleCL : "mw-410"}`} dangerouslySetInnerHTML={{ __html: data.title }}></h1>
          <p className={`${typographyStyles.textSubTitle} entry-2 mx-auto ${data.descriptionCL ? data.descriptionCL : "mw-410"}`} dangerouslySetInnerHTML={{ __html: data.description }}></p>

          {data.markets &&
            <div className={`${styles.appsMarkets} entry-3`}>
              {data.markets.map((market, i) => (
                <a href={market.link} target="blank" key={`mi-${i}`}><img src={`/img/${market.img}`} alt="" /></a>
              ))}
            </div>
          }

          <div className={`${styles.buttons} ${data.btnsClassName ? data.btnsClassName : ""} entry-4`}>
            {data.buttons && data.buttons.map((button, i) => (
              data.isBlank ?
                <Button link={button.link} as={`${button.as ? button.as : "link"}`} variant={button.variant} className={`${button.className ? button.className : ""} ${i < data.buttons.length ? "mb-2" : ""}`} key={`bi-${i}`}>{button.name}</Button> :
                <Button link={button.link} as={`${button.as ? button.as : "link"}`} variant={button.variant} className={`${button.className ? button.className : ""} ${i < data.buttons.length ? "mb-2" : ""}`} key={`bi2-${i}`}>{button.name}</Button>
            ))}
          </div>
        </div>

    }
  }

  return (
    <div className={`${styles.hero} ${data.className ? data.className : ""} ${data.variant ? data.variant : ""} ${visible ? "active" : ""}`}>
      {render()}
    </div>
  );
}

export default Hero;
