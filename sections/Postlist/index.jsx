import React, { useEffect, useContext, useState } from "react";
import { ArticlePreview } from '../../components/Blog/ArticlePreview'
import { v4 as uuidv4 } from 'uuid'
import appConfig from "../../configs/appConfig";
import Follow from "../Follow";
import { filterIt } from "../../utils";
import { Context } from "../../context/context";
import ts from "../../styles/global/typography.module.scss"
import Button from "../../components/ui/Button"
import ScrollContainer from 'react-indiana-drag-scroll'
import Icon, { IconEmail } from "../../components/Icon"
import Link from "next/link"

import styles from './postslist.module.scss'

const PostList = (props) => {
  const { app, lang: { Postsnotfound, TheWire, Browsebytopic } } = useContext(Context);
  const { data, tags, posts, tagId, isVisible } = props
  const [visible, setVisible] = useState(false)

  const renderArticles = () => {
    let articles = [];

    posts.forEach((article) => {
      if (tagId) {
        const stags = filterIt(article.blogTags, parseInt(tagId), "id");
        if (stags.length > 0) articles.push(<ArticlePreview className="mb-4" {...article} key={uuidv4()} />);
      } else {
        articles.push(<ArticlePreview className="mb-4" {...article} key={uuidv4()} />);
      }
    })

    return articles?.length ? articles : <div className="text-center p-4"><span className="">{Postsnotfound}</span></div>;
  }

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        setVisible(true)
      }, appConfig.entryDelay)
    }
  }, [isVisible])

  const getTitle = () => {
    const stags = filterIt(tags, parseInt(tagId), "id");
    return stags?.length ? stags[0].name : ""
  }

  return (
    <div className={`${styles.blog} ${visible ? "active" : ''}`}>
      <div className={`${styles.blogHeader}`}>
        <div className={`${styles.blogContainer}`}>
          <Link href={`/wire`}><span>{TheWire}</span></Link>
        </div>
      </div>
      <div className={`${styles.blogContainer} entry-1`}>
        <div className={`${styles.tagsContainer}`}>
          <h3>{Browsebytopic}</h3>
          <ScrollContainer className={`scroll-container`}>
            <div className={`${styles.tagsWrapper}`}>
              {tags?.length && tags.map((item, i) =>
                <Button
                  size="sm"
                  variant="light-simple"
                  as="link"
                  link={`/wire/topic/${item.id}`}
                  className={`mr-2 ${item.id == tagId ? "active" : ""}`}
                  key={uuidv4()}>{item?.name}
                </Button>
              )
              }
            </div>
          </ScrollContainer>
        </div>
      </div>
      <div className={`${styles.blogContainer} entry-3 mt-3 mt-md-5 mb-4`}>
        <div className={`${styles.subscribeWrapper}`}>
          <div className={`${styles.subscribeIcon}`}>
            <IconEmail />
          </div>
          <div className={`${styles.subscribeForm}`}>
            <div className={`${styles.subscribeInner}`}>
              <span className={`${ts.textLg} ${ts.c8}`}>{data?.subscribeForm?.title}</span>
              </div>
            <Follow data={{ ...appConfig.follow, bg: "white" }} variant={'form-blog'} />
          </div>
        </div>
      </div>
      <section className={`${styles.blogContainer} entry-4`}>
        <div className={`${styles.blogSectionTitleWrapper}`}>
          <h2 className={`${styles.blogSectionTitle}`}>{tagId ? getTitle() : data?.articlesTitle}</h2>
        </div>
        {
          posts?.length ? renderArticles() : <div className={`${styles.blogLoader}`}><Icon variant="loader" /></div>
        }
      </section>
    </div>
  );
}

export default PostList;