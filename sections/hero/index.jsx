import React, { useEffect, useState } from "react"
import styles from './hero.module.scss'
import Button from '../../components/ui/Button'
import typographyStyles from "../../styles/global/typography.module.scss"

const Hero = ({ data, isVisible }) => {

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        setVisible(true)
      }, 1000)
    }
  }, [isVisible])

  return (
    <div className={`${styles.hero} ${data.variant ? data.variant : ""} ${visible ? "active" : ""}`}>
      <div className={`${styles.inner}`}>
        {data.img &&
          <img className={`${styles.img} entry-1 ${data.imgCL ? data.imgCL : ""}`} src={data.isExternal ? data.img : `/img/${data.img}`} />
        }
        <h1 className={`${typographyStyles.textTitle} mb-4 mb-md-5 entry-1 mx-auto ${data.titleCL ? data.titleCL : "mw-410"}`} dangerouslySetInnerHTML={{ __html: data.title }}></h1>
        <p className={`${typographyStyles.textSubTitle} entry-2 mx-auto ${data.descriptionCL ? data.descriptionCL : "mw-410"}`} dangerouslySetInnerHTML={{ __html: data.description }}></p>

        {data.markets &&
          <div className={`${styles.appsMarkets} entry-3`}>
            {data.markets.map((market, i) => (
              <a href={market.link} target="blank" key={`mi-${i}`}><img src={`/img/${market.img}`} alt="" /></a>
            ))}
          </div>
        }

        <div className={`${styles.buttons} entry-4`}>
          {data.buttons && data.buttons.map((button, i) => (
            data.isBlank ? 
            <Button href={button.link} as="url" variant={button.variant} className={`w-100 ${i < data.buttons.length ? "mb-2" : ""}`} key={`bi-${i}`}>{button.name}</Button> :
            <Button href={button.link} className={`w-100 ${i < data.buttons.length ? "mb-2" : ""}`} key={`bi-${i}`}>{button.name}</Button>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Hero;
