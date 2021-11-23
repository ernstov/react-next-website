import React, { useState, useEffect, useContext } from "react";
import { Badge } from "react-bootstrap";
import ApiService from '../../services/ApiService'
import { ArticlePreview } from '../../components/Blog/ArticlePreview'
import { v4 as uuidv4 } from 'uuid'
import uniqBy from 'lodash.uniqby'
import appConfig from "../../configs/appConfig";
import Follow from "../Follow";
import { filterIt } from "../../utils";
import { Context } from "../../context/context";
import presetsStyles from "../../styles/global/typography.module.scss"

import styles from './postslist.module.scss'

const PostList = (props) => {
  const { app, lang: { Postsnotfound, } } = useContext(Context);
  const [articlesList, setArticlesList] = useState(null)
  const [tags, setTags] = useState(null)
  const [selectedTag, setSelectedTag] = useState(app.tag ? app.tag : null)
  const { data } = props

  const getArticlesRequest = () => {
    ApiService.getArticles().then(response => {
      if (response) {
        setArticlesList(response)
        getTags(response)
      }
    })
  }

  const getTags = (articles) => {
    if (!articles?.length) return

    const tagArrs = articles.map(article => {
      return article?.blogTags
    })

    const allTags = tagArrs.flat(1)
    setTags(uniqBy(allTags, 'name'))
  }

  useEffect(() => {
    getArticlesRequest()
  }, []);

  const renderArticles = () => {
    let articles = [];

    articlesList.forEach((article) => {
      if (selectedTag != null) {
        const stags = filterIt(article.blogTags, selectedTag, "name");
        if (stags.length > 0) articles.push(<ArticlePreview {...article} key={uuidv4()} />);
      } else {
        articles.push(<ArticlePreview {...article} key={uuidv4()} />);
      }
    })

    return articles?.length ? articles : <div className="text-center p-4"><span className="">{Postsnotfound}</span></div>;
  }

  return (
    <div className={`${styles.blog}`}>
      <div className={`${styles.blogHeader}`}>
        <img src={`/img/wire-img.svg`} alt="" />
      </div>
      <header className={`${styles.blogHeaderWrapper}`}>
        <h1 className={`${styles.blogPageTitle} ${presetsStyles.textTitle}`}>{data?.pageTitle}</h1>
        <p className={`${styles.blogSubtitle} ${presetsStyles.textSubTitle}`}>{data?.pageSubtitle}</p>
      </header>
      <div className={`${styles.doubleSectionWrapper}`}>
        <div className={`${styles.tagsWrapper}`}>
          <h3 className="tags-wrapper__title">{data?.tagsText}</h3>
          {
            tags?.length && tags.map((item, i) => <Badge onClick={() => setSelectedTag(item.name == selectedTag ? null : item.name)} className={`mr-2 mb-2 ${item.name == selectedTag ? "active" : ""}`} variant="cover" key={uuidv4()}>{item?.name}</Badge>)
          }
        </div>
        <div className={`${styles.subscribeWrapper}`}>
          <p className="subscribe-wrapper__text">{data?.subscribeForm?.title}</p>
          <Follow data={{ ...appConfig.follow, bg: "white" }} variant={'form-only'} />
        </div>
      </div>
      <section className={`${styles.blogContainer}`}>
        <div className={`${styles.blogSectionTitleWrapper}`}>
          <h2 className={`${styles.blogSectionTitle}`}>{selectedTag != null ? selectedTag : data?.articlesTitle}</h2>
        </div>
        {
          articlesList?.length && renderArticles()
        }
      </section>
    </div>
  );
}

export default PostList;