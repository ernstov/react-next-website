import React, { useEffect, useState, useContext } from "react";
import Icon from "../../components/Icon";
import styles from './liveDemo.module.scss'
import { Context } from "../../context/context"
import dynamic from 'next/dynamic'
import Preview from "./Preview"
import HighLightsService from "../../services/HighLightsService"
import { numberWithCommas } from "../../utils"

const Response = dynamic(() => import('./Response'), {
  ssr: false
});

const LiveDemo = ({ data, isVisible, variant, isActive, onPrevious, onNext, isFirst, isLast }) => {

  const { lang: { results, Livedemo } } = useContext(Context)
  const { title, demo, id } = data
  const [url, setUrl] = useState("")
  const [articles, setArticles] = useState(demo)
  const [article, setArticle] = useState({})
  const [count, setCount] = useState(0)
  const [relatedCount, setRelatedCount] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (id != null || typeof id != "undefined") {
      setIsLoading(true);

      HighLightsService
        .getHighlight({
          id
        })
        .then(({ result: { articles, numResults, status }, query }) => {
          if (status == 200) {
            if (articles.length) {
              const article = articles[0]
              setArticle(article)
              setRelatedCount(article.cluster ? (article.cluster.uniqueCount + article.cluster.reprintCount - 1) : 0)
            }
            articles.forEach(article => { delete article.cluster })
            setCount(numResults)
            setArticles(articles)
            setUrl(`api.goperigon.com${query}&apiKey=[KEY]`)
            setIsLoading(false)
            setTimeout(()=>{
              setIsLoaded(true)
            }, 300)
          }
        })
    }
  }, [])

  return (
    <div className={`${styles.liveDemo} ${data.className ? data.className : ""} ${isVisible ? "active" : ""}`}>
      <div className="entry-1">
        <div className={`${styles.liveDemoTitle} ${variant} ${isActive ? "active" : ""}`}>
          {variant == "slider" &&
            <div className="arrow" onClick={() => onPrevious ? onPrevious() : () => { }}>
              <Icon className={`${styles.liveDemoArrow} ${isFirst ? "d-none" : ""}`} variant="chevron-left" />
            </div>
          }
          <div className={`${styles.liveDemoTitleInner}`}>
            <Icon variant="search-adv" /><span dangerouslySetInnerHTML={{ __html: title }}></span>
          </div>
          {variant == "slider" &&
            <div className="arrow" onClick={() => onPrevious ? onNext() : () => { }}>
              <Icon className={`${styles.liveDemoArrow} ${isLast ? "d-none" : ""}`} variant="chevron-right" />
            </div>
          }
        </div>
        <div className={`${styles.liveDemoRequest}`}>
          <div className={`${styles.liveDemoMethod}`}>GET</div>
          <div className={`${styles.liveDemoUrl} swiper-no-swiping`} dangerouslySetInnerHTML={{ __html: url }}></div>
        </div>
        <div className={`${styles.liveDemoLoadedContent} ${isLoading ? "" : "loaded"}`}>
          {isLoading ? <Icon variant="loader" /> : <>
            <div className={`${styles.liveDemoLoadedContentInner} ${isLoaded ? "loaded" : ""}`}>
              <div className={`${styles.liveDemoInner}`}>
                <div className={`${styles.liveDemoCount}`}>
                  <span className={`${styles.liveDemoCountBadge}`}>{numberWithCommas(count)} {results}</span> <span className={`${styles.liveDemoCountLabel}`}>{Livedemo}</span>
                </div>
                <div className={`${styles.liveDemoCode}`}>
                  <Response data={articles} />
                </div>
              </div>
              <div className={`${styles.liveDemoPreview} ${variant = "slider" ? variant : ""} ${isActive ? "active" : ""}`}>
                <Preview data={article} relatedCount={relatedCount} />
              </div>
            </div>
          </>
          }
        </div>

      </div>
    </div>
  );
}

export default LiveDemo;
