import { useContext, useEffect, useState } from "react"
import styles from './block.module.scss'
import typographyStyles from "../../styles/global/typography.module.scss"
import { Context } from "../../context/context"
import { numberWithCommas } from "../../utils/"
import Button from "../ui/Button"
import { useRouter } from "next/router"
import Link from "next/link"
import { OverlayTrigger, Tooltip } from "react-bootstrap"
import presetsStyles from "../../styles/global/presets.module.scss"

const Block = ({ data, i, variant, isYearly, children, className }) => {

  const { dispatchApp, lang: { USD, month, Startnow } } = useContext(Context);
  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth)
    }
  }, [])

  const getButtonOptions = (button) => {
    if (button.link) return { link: button.link, as: "link" }
    if (button.jump) return { jump: button.jump }
  }

  const render = () => {
    switch (variant) {
      case "stick":
        return <div className={`${styles.blockStick} ${className ? className : ""}`}>{children}</div>
      case "badge-wrap":
        return <div className={`${styles.blockBadgeWrap} ${className ? className : ""}`}>{children}</div>
      case "badge":
        return <div className={`${styles.blockBadge} ${className ? className : ""} h-100`}>
          <h3 className={`${typographyStyles.textDemi2} ${typographyStyles.fontBase} text-center mb-0`}>{data.name}</h3>
          <div className={`text-center `}><span className={`${typographyStyles.textMediumReg} `}>{data.description}</span></div>
          <div className="mt-4 d-flex justify-content-center">
            <ul className="list-outline">
              {data.list.map((item, i) => (
                <li key={`bli-${i}`}>{item}</li>
              ))}
            </ul>
          </div>
          {data.button &&
            <div className="text-center">
              <Button size="sm" {...getButtonOptions(data.button)} variant={data.button.variant}>{data.button.name}</Button>
            </div>
          }
        </div>
      case "badge-plans":
        return <div className={`${styles.blockBadgePlans} ${className ? className : ""} h-100`}>
          <div>
            <h3 className={`${typographyStyles.textDemi2} ${typographyStyles.fontBase} text-center mb-0`} dangerouslySetInnerHTML={{ __html: data.name }}></h3>
            {data.label && <div className="text-center mt-2"><div className={`${styles.badge}`}><span>{data.label}</span></div></div>}
            {data.description && <div className={`text-center `}><span className={`${typographyStyles.textMediumReg} `}>{data.description}</span></div>}
            <div className="mt-3 d-flex justify-content-center">
              <ul className="list-plan-2">
                {data.list.map((item, i) => (
                  <li key={`bli-${i}`}>{item.name}
                    {item.tooltip &&
                      <div className="ml-2">
                        <OverlayTrigger
                          key={`c-${data.name}-${i}`}
                          placement={windowWidth > 880 ? "right" : "bottom"}
                          overlay={
                            <Tooltip id={`tooltip-c-${data.name}-${i}`}>
                              <div dangerouslySetInnerHTML={{ __html: item.tooltip }}></div>
                            </Tooltip>
                          }
                        >
                          <img className={`${presetsStyles.infoIcon}`} src={`/img/info.png`} />
                        </OverlayTrigger>
                      </div>
                    }
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {data.button &&
            <div className="text-center">
              <Button {...getButtonOptions(data.button)} variant={data.button.variant}>{data.button.name}</Button>
            </div>
          }
        </div>
      case "plan":
        return <div className={`${styles.block} ${className ? className : ""} plan`}>
          <div className={`${styles.blockTopShape}`} style={{ backgroundColor: data.color }}></div>
          <div className={`${styles.blockContent}`}>
            <h3 className={`${typographyStyles.textDemi2} ${typographyStyles.fontBase} text-center mb-0`}>{data.name}</h3>
            {data.label && <div className={`text-center mb-1`}><span className={`${typographyStyles.tinyLabel}`}>{data.label}</span></div>}
            <div className={`text-center `}><span className={`${typographyStyles.textMediumReg} `}>{data.description}</span></div>
            <div className={`${styles.blockPrice} mt-2 mb-2`}>
              <div><span className={`${typographyStyles.textDemi2}`}>${numberWithCommas(Math.floor(data.price * (isYearly ? 0.9 : 1)))}</span></div>
              <div className={"ml-1"}>
                <div><span className={`${typographyStyles.tinyLab} lh-1 d-block`}>{USD}</span></div>
                <div><span className={`${typographyStyles.textSubMd} lh-1 d-block`}>/{month}</span></div>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <ul className={`list-plan-2 mt-2 mb-0 ${data.variant}`}>
                {data.features.map((feature, i) => (
                  <li key={`fi-${i}`}>{feature.name}
                    {feature.tooltip &&
                      <div className="ml-2">
                        <OverlayTrigger
                          key={`${data.name}-${i}`}
                          placement={windowWidth > 880 ? "right" : "bottom"}
                          overlay={
                            <Tooltip id={`tooltip-${data.name}-${i}`}>
                              <div dangerouslySetInnerHTML={{ __html: feature.tooltip }}></div>
                            </Tooltip>
                          }
                        >
                          <img className={`${presetsStyles.infoIcon}`} src={`/img/info.png`} />
                        </OverlayTrigger>
                      </div>
                    }
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <Link href={`/sign-up?planName=${data.name}`} passHref>
            <a>
              <div className={`${styles.blockBottomShape} text-center`} style={{ backgroundColor: data.color }}>
                <span style={{ color: data.btnTextColor }} className={`${typographyStyles.textWhiteDemi}`}>{Startnow}</span>
              </div>
            </a>
          </Link>
        </div>
      case "fluid":
        return <div className={`${styles.block} ${className ? className : ""} fluid`}>
          <div className={`block-title`}>
            {data.title && <h3 className={`${typographyStyles.textTitleLg}`}>{data.title}</h3>}
            {data.description && <p className={`${typographyStyles.textSubTitleHero} mb-0`}>{data.description}</p>}
          </div>

          {data.img &&
            <div className={`block-img ${data.imgClass ? data.imgClass : ""}`}>
              <img src={data.img} alt="" />
            </div>
          }

          {data.additional &&
            <div className={`block-additional`}>
              <p className={`${typographyStyles.textSubMd} mb-0`}>{data.additional}</p>
            </div>
          }
        </div>
      case "fluid-dark":
        return <div className={`${styles.block} ${className ? className : ""} fluid-dark`}>
          <div className={`block-title`}>
            {data.title && <h3 className={`${typographyStyles.textTitleLg2}`}>{data.title}</h3>}
            {data.description && <p className={`${typographyStyles.textSubTitleHero2} mb-0`}>{data.description}</p>}
          </div>

          {data.img &&
            <div className={`block-img ${data.imgClass ? data.imgClass : ""}`}>
              <img src={data.img} alt="" />
            </div>
          }

          {data.additional &&
            <div className={`block-additional`}>
              <p className={`${typographyStyles.textSubMd} mb-0`}>{data.additional}</p>
            </div>
          }
        </div>
      default:
        return <div className={`${styles.block}`}>
          <div className={`block-img`} style={{ background: `url(${data.img})` }}>
            {data.label && <div className={`block-label`}>{data.label}</div>}
          </div>
          <div className={`block-content`}>
            <div className={`block-source`}>
              <div className={`${typographyStyles.textTiny} d-flex align-items-center`}>
                <img className="mr-2" src={data.sourceLogo} alt="" />
                <span>{data.source}</span>
              </div>
              <div>
                <span className={`${typographyStyles.textSmall2}`}>{data.date}</span>
              </div>
            </div>
            <div className="mt-2">
              <a href={data.url} target="_blank" ><span className={`${typographyStyles.textMedium}`}>{data.title}</span></a>
            </div>
          </div>
        </div>
    }
  }

  return render();
}

export default Block;
