import React, { useState, useEffect, useContext } from "react";
import { Badge } from "react-bootstrap";
import { ApiService } from '../../../services/ApiService'
import { ArticlePreview } from '../../../components/blog/ArticlePreview'
import { v4 as uuidv4 } from 'uuid'
import uniqBy from 'lodash.uniqby'
import { settings } from "../../../data/settings"
import Follow from "../../follow";
import { filterIt } from "../../../utils";
import {Context} from "../../../context/context";

import "./PostList.scss";

const PostList = (props) => {
  const {pages} = useContext(Context)
  const [articlesList, setArticlesList] = useState(null)
  const [tags, setTags] = useState(null)
  const [selectedTag, setSelectedTag] = useState(pages.tag ? pages.tag : null)
  const { data } = props

  const getArticlesRequest = () => {
    ApiService.get('/blogs?_sort=created_at:DESC').then(response => {
      if (response?.data) {
        setArticlesList(response.data)
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
    if (articlesList === null) {
      getArticlesRequest()
    }

    if (articlesList?.length && tags === null) {
      getTags(articlesList)
    }

  }, [articlesList, tags]);

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

    return articles?.length ? articles : <div className="text-center p-4"><span className="">{settings.texts.Postsnotfound}</span></div>;
  }

  return (
    <div className="blog">
      <div className="blog-header">
        <img src={`/assets/img/wire-img.svg`} alt="" />
      </div>
      <header className="blog-header-wrapper">
        <h1 className="blog-page-title text-title">{data?.pageTitle}</h1>
        <p className="blog-subtitle text-sub-title">{data?.pageSubtitle}</p>
      </header>
      <div className="double-section-wrapper">
        <div className="tags-wrapper">
          <h3 className="tags-wrapper__title">{data?.tagsText}</h3>
          {
            tags?.length && tags.map((item, i) => <Badge onClick={() => setSelectedTag(item.name == selectedTag ? null : item.name)} className={`mr-2 mb-2 ${item.name == selectedTag ? "active" : ""}`} variant="cover" key={uuidv4()}>{item?.name}</Badge>)
          }
        </div>
        <div className="subscribe-wrapper">
          <p className="subscribe-wrapper__text">{data?.subscribeForm?.title}</p>
          <Follow data={{...settings.follow, bg:"white"}} variant={'form-only'} />
        </div>
      </div>
      <section className="blog-container">
        <div className="blog-section-title-wrapper">
          <h2 className="blog-section-title">{selectedTag != null ? selectedTag : data?.articlesTitle}</h2>
        </div>
        {
          articlesList?.length && renderArticles()
        }
      </section>
    </div>
  );
}

export default PostList;