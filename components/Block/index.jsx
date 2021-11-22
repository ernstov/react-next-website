import { useContext } from "react"
import styles from './block.module.scss'
import typographyStyles from "../../styles/global/typography.module.scss"
import { Context } from "../../context/context"
import { numberWithCommas } from "../../utils/"
import Button from "../ui/Button"
import { useRouter } from "next/router"

const Block = ({ data, i, variant, isYearly, children, className }) => {

  const { lang: { USD, month, Startnow } } = useContext(Context);
  const router = useRouter()


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
      case "plan":
        return <div className={`${styles.block} ${className ? className : ""} plan`}>
          <div className={`${styles.blockTopShape}`} style={{ backgroundColor: data.color }}></div>
          <div className={`${styles.blockContent}`}>
            <h3 className={`${typographyStyles.textDemi2} ${typographyStyles.fontBase} text-center mb-0`}>{data.name}</h3>
            <div className={`text-center mb-1`}><span className={`${typographyStyles.tinyLabel}`}>{data.label}</span></div>
            <div className={`text-center `}><span className={`${typographyStyles.textMediumReg} `}>{data.description}</span></div>
            <div className={`${styles.blockPrice} mt-2`}>
              <div><span className={`${typographyStyles.textDemi2}`}>${numberWithCommas(Math.floor(data.price * (isYearly ? 0.9 : 1)))}</span></div>
              <div className={"ml-1"}>
                <div><span className={`${typographyStyles.tinyLab} lh-1 d-block`}>{USD}</span></div>
                <div><span className={`${typographyStyles.textSubMd} lh-1 d-block`}>/{month}</span></div>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <ul className={`list-plan mt-2 mb-0 ${data.variant}`}>
                {data.features.map((feature, i) => (
                  <li key={`fi-${i}`}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
          <div onClick={() => router.push("/sign-up")} className={`${styles.blockBottomShape} text-center`} style={{ backgroundColor: data.color }}>
            <span className={`${typographyStyles.textWhiteDemi}`}>{Startnow}</span>
          </div>
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
