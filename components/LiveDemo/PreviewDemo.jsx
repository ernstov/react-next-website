import React, { useContext, useState } from "react"
import { Context } from "../../context/context"
import styles from './preview.module.scss'
import Icon from "../Icon"
import { useEffect } from "react"
import appConfig from "../../configs/appConfig"
import moment from "moment"
import ScrollContainer from 'react-indiana-drag-scroll'
import { IconPositive, IconNegative, IconNeutral } from "../Icon"

const Preview = ({ data, relatedCount }) => {

  const { lang: { Mostly, sentimentT } } = useContext(Context)
  const [sourceImg, setSourceImg] = useState("")
  const { source, authorsByline, imageUrl, title, summary, topics, sentiment, pubDate, content, url, labels } = data

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

  const getIcon = () => {
    switch (getSentiment()) {
      case "Neutral":
        return <div className={`${styles.previewFeedback} neutral`}><IconNeutral /></div>
      case "Negative":
        return <div className={`${styles.previewFeedback} negative`}><IconNegative /></div>
      case "Positive":
      default:
        return <div className={`${styles.previewFeedback} positive`}><IconPositive /></div>
    }
  }

  return <div className={`${styles.previewDemo}`}>
    {data &&
      <>
        <div className={`${styles.previewRowDateDemo}`}>
          <div className={`${styles.previewDateDemo}`}>{moment(pubDate).format('MMM D, YYYY ∙ h:mmA')}</div>
          <div>
            <ScrollContainer className={`scroll-container`}>
              {topics?.length &&
                <div className={`${styles.previewRowTagsDemo}`}>
                  {topics.map((topic, i) => (
                    <div className={`${styles.previewTagDemo}`} key={`ti-${i}`}>{topic.name}</div>
                  ))}
                </div>
              }
            </ScrollContainer>
          </div>
        </div>
        <div className={`${styles.previewRowTitle}`}>
          <div className={`${styles.previewTitleDemo}`}>
            <h3>{title}</h3>
          </div>
          {imageUrl &&
            <div className={`${styles.previewImgDemo}`}>
              <img width="60px" height="45px" src={`${imageUrl}`} />
            </div>
          }
        </div>
        <div className={`${styles.previewRowSource}`}>
          <div className={`${styles.previewSourceLinkDemo}`}>
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
        {content &&
          <div className={`${styles.previewDemoContent}`}>
            <span>{summary?.slice(0, 80)}{summary?.length > 50 && "..."}</span>
          </div>
        }
        <div className={`${styles.previewRowCharacters2}`}>
          {getSentiment() &&
            <div>
              <div>{getIcon()}</div><span className={`${styles.previewCharactersStrong} ${getSentiment()?.toLowerCase()}`}>{Mostly} {getSentiment()}</span>
            </div>
          }
          <div className={`${styles.previewLabels} ml-1`}>
            {labels.map((label, i) => (
              <div className={`${styles.previewLabelDemo}`} key={`lti-${i}`}>{label.name}</div>
            ))}
          </div>
        </div>
      </>
    }
  </div>
}

export default Preview;
