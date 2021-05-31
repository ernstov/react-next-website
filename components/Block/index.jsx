import styles from './block.module.scss'
import typographyStyles from "../../styles/global/typography.module.scss"

const Block = ({ data, i, variant }) => {

  const render = () => {
    switch (variant) {
      case "fluid":
        return <div className={`${styles.block} fluid`}>
          <div className={`block-title`}>
            {data.title && <h3 className={`${typographyStyles.textTitleLg}`}>{data.title}</h3>}
            {data.description && <p className={`${typographyStyles.textMediumReg} mb-0`}>{data.description}</p>}
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
