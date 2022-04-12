import React, { useContext, useState, useRef } from "react"
import { Context } from "../../context/context"
import styles from './preview.module.scss'
import Icon from "../Icon"
import { useEffect } from "react"
import appConfig from "../../configs/appConfig"
import ps from "../../styles/global/presets.module.scss"
import moment from "moment"
import ScrollContainer from 'react-indiana-drag-scroll'
import { IconPositive, IconNegative, IconNeutral, IconMinusCircle, IconVideo, IconPlusCircle } from "../Icon"
import Popup from "../../components/Popup"
import { filterIt } from "../../utils"

const Preview = ({ data, onChange }) => {

  const { app, dispatchApp, lang: { Mostly, label, Excludefromresults, Video, Medium, Showonlyvideos, Excludevideos, Topic, Addtoquery, Removefromquery, Category } } = useContext(Context)
  const [sourceImg, setSourceImg] = useState("")
  const { source, authorsByline, imageUrl, title, summary, topics, sentiment, pubDate, content, url, labels, medium, categories } = data
  const [activeLabels, setActiveLabels] = useState(labels.map(() => false))
  const [activeTopic, setActiveTopic] = useState(topics.map(() => false))
  const [activeCategory, setActiveCategory] = useState(categories.map(() => false))
  const [activeVideo, setActiveVideo] = useState(false)
  const [windowWidth, setWindowWidth] = useState(0)
  const isChange = useRef(false)

  useEffect(() => {
    setActiveLabels(labels.map(() => false))
  }, [labels])

  useEffect(() => {
    setWindowWidth(window.innerWidth)
  }, [])

  useEffect(() => {
    if (onChange && isChange.current) {
      setTimeout(() => {
        onChange()
        isChange.current = false
      }, 500)
    }
  }, [app.selectedFilters.noNonnews, app.selectedFilters.noOpinions, app.selectedFilters.includeArticle, app.selectedFilters.includeVideo, app.selectedFilters.topics])

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

  const isCategoryAvailable = (category) => {
    if (!app.selectedFilters.categories) return false

    const result = filterIt(app.selectedFilters.categories, category, "value")
    return result.length > 0 ? true : false
  }

  const isTopicAvailable = (topic) => {
    if (!app.selectedFilters.topics) return false

    const result = filterIt(app.selectedFilters.topics, topic, "value")
    return result.length > 0 ? true : false
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

  const onExcludeLabel = (label) => {
    if (label == "Non-news") dispatchApp({ type: 'SET_DEMO_FILTER', data: { noNonnews: true } })
    if (label == "Opinion") dispatchApp({ type: 'SET_DEMO_FILTER', data: { noOpinions: true } })

    setActiveLabels(c => c.map(() => false))
    isChange.current = true
  }

  const onShowOnlyVideo = () => {
    dispatchApp({ type: 'SET_DEMO_FILTER', data: { includeArticle: false, includeVideo: true } })
    setActiveVideo(false)
    isChange.current = true
  }

  const onExcludeVideo = () => {
    dispatchApp({ type: 'SET_DEMO_FILTER', data: { includeArticle: true, includeVideo: false } })
    setActiveVideo(false)
    isChange.current = true
  }

  const onRemoveCategory = (categoryName) => {
    dispatchApp({ type: 'SET_DEMO_FILTER', data: { categories: app.selectedFilters.categories.filter((c) => c.value != categoryName) } })
    setActiveCategory(c => c.map(() => false))
    isChange.current = true
  }

  const onAddCategory = (categoryName) => {
    dispatchApp({ type: 'SET_DEMO_FILTER', data: { categories: [...app.selectedFilters.categories, { value: categoryName, label: categoryName }] } })
    setActiveCategory(c => c.map(() => false))
    isChange.current = true
  }

  const onRemoveTopic = (topicName) => {
    dispatchApp({ type: 'SET_DEMO_FILTER', data: { topics: app.selectedFilters.topics.filter((c) => c.value != topicName) } })
    setActiveTopic(c => c.map(() => false))
    isChange.current = true
  }

  const onAddTopic = (topicName) => {
    dispatchApp({ type: 'SET_DEMO_FILTER', data: { topics: [...app.selectedFilters.topics, { value: topicName, label: topicName }] } })
    setActiveTopic(c => c.map(() => false))
    isChange.current = true
  }

  return <div className={`${styles.previewDemo}`}>
    {data &&
      <>
        <div className={`${styles.previewRowDateDemo}`}>
          <div className={`${styles.previewDateDemo}`}>{moment(pubDate).format('MMM D, YYYY ∙ h:mmA')}</div>
          <div>

            {(topics?.length > 0 || categories?.length > 0) &&
              <div className={`${styles.previewRowTagsDemo}`}>
                <ScrollContainer vertical={false} className={`scroll-container`}>
                  <div className={`${styles.previewRowTagsDemoInner}`}>
                    {categories?.map((category, i) => (
                      <div className={`${styles.previewTagDemo} ${activeCategory[i] ? 'active' : ''}`} key={`ti-${i}`}>
                        <span onClick={() => {
                          setActiveTopic(topics.map(() => false))
                          setActiveCategory(c => c.map((lb, z) => z == i ? !lb : false))
                        }}>
                          {category.name}
                        </span>
                      </div>
                    ))}
                    {topics?.map((topic, i) => (
                      <div className={`${styles.previewTagDemo} ${activeTopic[i] ? 'active' : ''}`} key={`ti-${i}`}>
                        <span onClick={() => {
                          setActiveCategory(categories.map(() => false))
                          setActiveTopic(c => c.map((lb, z) => z == i ? !lb : false))
                        }}>
                          {topic.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </ScrollContainer>
                {categories?.map((category, i) => (
                  <Popup
                    key={`tfic-${i}`}
                    variant="small"
                    isActive={activeCategory[i]}
                    title={Category}
                    position={windowWidth < 500 ? "right" : "left"}
                  >
                    {isCategoryAvailable(category.name) ?
                      <div className={`${ps.removeRow}`} onClick={() => onRemoveCategory(category.name)}><IconMinusCircle /> {Removefromquery}</div>
                      :
                      <div className={`${ps.addRow}`} onClick={() => onAddCategory(category.name)}><IconPlusCircle /> {Addtoquery}</div>
                    }
                  </Popup>
                ))}
                {topics?.map((topic, i) => (
                  <Popup
                    key={`tfi-${i}`}
                    variant="small"
                    isActive={activeTopic[i]}
                    title={Topic}
                    position={windowWidth < 500 ? "right" : "left"}
                  >
                    {isTopicAvailable(topic.name) ?
                      <div className={`${ps.removeRow}`} onClick={() => onRemoveTopic(topic.name)}><IconMinusCircle /> {Removefromquery}</div>
                      :
                      <div className={`${ps.addRow}`} onClick={() => onAddTopic(topic.name)}><IconPlusCircle /> {Addtoquery}</div>
                    }
                  </Popup>
                ))}
              </div>
            }
          </div>
        </div>
        <div className={`${styles.previewRowTitle} justify-content-between`}>
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
          {labels?.length > 0 &&
            <div className={`${styles.previewLabels} ml-1`}>
              {labels.map((l, i) => (
                <div className={`${styles.previewLabelDemo}`} key={`lti-${i}`}>
                  <span className={`${activeLabels[i] ? 'active' : ''}`} onClick={() => setActiveLabels(c => c.map((lb, z) => z == i ? !lb : lb))}>{l.name}</span>
                  <Popup
                    variant="small"
                    isActive={activeLabels[i]}
                    title={label}
                  >
                    <div className={`${ps.removeRow}`} onClick={() => onExcludeLabel(l.name)}><IconMinusCircle /> {Excludefromresults}</div>
                  </Popup>
                </div>
              ))}
            </div>
          }
          {medium == "Video" && <div className={`${styles.previewVideo}`}>
            <span onClick={() => setActiveVideo(!activeVideo)}><IconVideo />{Video}</span>
            <Popup
              variant="small"
              isActive={activeVideo}
              title={Medium}
              position={windowWidth < 500 ? "right" : "left"}
            >
              <div className={`${ps.addRow} border-bottom`} onClick={() => onShowOnlyVideo()}><IconPlusCircle /> {Showonlyvideos}</div>
              <div className={`${ps.removeRow}`} onClick={() => onExcludeVideo()}><IconMinusCircle /> {Excludevideos}</div>
            </Popup>
          </div>}
        </div>
      </>
    }
  </div>
}

export default Preview;
