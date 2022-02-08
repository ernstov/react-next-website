import React, { useContext, useState } from "react"
import { Context } from "../../context/context"
import styles from './preview.module.scss'
import Icon from "../Icon"
import { useEffect } from "react"
import appConfig from "../../configs/appConfig"
import moment from "moment"
import { numberWithCommas } from "../../utils"

const Preview = ({ data, relatedCount }) => {

  const { lang: { Tophit, chars, Mostly, sentimentT, Relatedto, otherarticles } } = useContext(Context)
  const [sourceImg, setSourceImg] = useState("")
  const { source, authorsByline, imageUrl, title, summary, topics, sentiment, pubDate, content, url, cluster } = data

  useEffect(() => {
    if (source?.domain) {
      fetch(`${appConfig.blogApi}/sources?domain=${source?.domain}`)
        .then(response => response.json())
        .then(result => {
          if (result.length) setSourceImg(result[0].logoFavIcon.url)
        });
    }
  }, [source])

  const getSentiment = () => {
    if (sentiment) {
      const result = Object.keys(sentiment).reduce((a, b) => sentiment[a] > sentiment[b] ? a : b)
      return result.charAt(0).toUpperCase() + result.slice(1)
    }

  }

  return <div className={`${styles.preview}`}>
    {data &&
      <>
        <div className={`${styles.previewRowDate}`}>
          <div className={`${styles.previewTopHit}`}>{Tophit}</div>
          <div className={`${styles.previewDate}`}>{moment(pubDate).format('MMM D, YYYY ∙ h:mmA')}</div>
        </div>
        <div className={`${styles.previewRowTitle}`}>
          {imageUrl &&
            <div className={`${styles.previewImg}`}>
              <img width="60px" height="45px" src={`${imageUrl}`} />
            </div>
          }
          <div className={`${styles.previewTitle}`}>
            <h3>{title}</h3>
            <span>{summary?.slice(0, 50)}{summary?.length > 50 && "..."}</span>
          </div>
        </div>
        <div className={`${styles.previewRowSource}`}>
          <div className={`${styles.previewSourceLink}`}>
            {sourceImg && <img width="16px" height="16px" src={sourceImg} alt="" />}
            <a href={url} target="_blank">{source?.domain} <Icon variant="link" /></a>
          </div>
          {authorsByline &&
            <div className={`${styles.previewAuthor}`}>
              <img width="16px" height="16px" src={`/img/isobel.png`} alt="" />
              <span>{authorsByline}</span>
            </div>
          }
        </div>
        {topics?.length &&
          <div className={`${styles.previewRowTags}`}>
            {topics.map((topic, i) => (
              <div className={`${styles.previewTag}`} key={`ti-${i}`}>{topic.name}</div>
            ))}
          </div>
        }
        <div className={`${styles.previewRowCharacters2}`}>
          <div>
            <div className={`${styles.previewCharactersIcon}`}><Icon variant="tag" /></div>
            <span className={`${styles.previewCharactersStrong}`}>{content?.length && numberWithCommas(content?.length)}</span>
            <span>{chars} ∙</span>
          </div>
          <div>
            <span className={`${styles.previewCharactersStrong}`}>{Mostly} {getSentiment()}</span>
            <span className="mr-0">{sentimentT}</span>
          </div>
        </div>
        <div className={`${styles.previewRowCharacters}`}>
          <div className={`${styles.previewCharactersIcon}`}><Icon variant="tag" /></div>
          <span>{Relatedto}</span>
          <span className={`${styles.previewCharactersStrong}`}>{relatedCount}</span>
          <span>{otherarticles}</span>
        </div>
      </>
    }
  </div>
}

export default Preview;
