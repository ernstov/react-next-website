import React, { useEffect, useState, useContext, useRef } from "react";
import BlogAuthor from "../../components/Blog/BlogAuthor";
import BlogTags from "../../components/Blog/BlogTags";
import BlogShare from "../../components/Blog/BlogShare";
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import { dateFormat, isObjectEmpty } from "../../utils";
import { Context } from "../../context/context";
import { useRouter } from "next/router";
import typographyStyles from "../../styles/global/typography.module.scss"
import Icon from "../../components/Icon"
import appConfig from "../../configs/appConfig"
import ScrollContainer from 'react-indiana-drag-scroll'
import ApiService from '../../services/ApiService'
import uniqBy from 'lodash.uniqby'
import Button from "../../components/ui/Button"
import { v4 as uuidv4 } from 'uuid'
import { IconPost, IconRect } from '../../components/Icon'
import BlogShareFluid from "../../components/Blog/BlogShareFluid"
import Link from "next/link"

import listStyles from '../Postlist/postslist.module.scss'
import styles from './postviewer.module.scss'

const PostViewer = ({ isVisible, data }) => {

  const [visible, setVisible] = useState(false)
  const { lang: { m, read, TheWire, Browsebytopic } } = useContext(Context)
  const router = useRouter()
  const [tags, setTags] = useState([])
  const container = useRef(null)

  const getArticlesRequest = () => {
    ApiService.getArticles().then(response => {
      if (response) {
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

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        setVisible(true)
      }, appConfig.entryDelay)
    }
  }, [isVisible])

  const onTagChange = (e) => {
    router.push(`/wire/topic/${e}`);
  }

  return (
    <div className={`${styles.post} ${data.className ? data.className : ""} ${visible ? "active" : ''}`}>
      <div className={`${listStyles.blogHeader}`}>
        <div className={`${listStyles.blogContainer}`}>
          <Link href="/wire"><span>{TheWire}</span></Link>
        </div>
      </div>
      <div className={`${listStyles.blogContainer} entry-1`}>
        <div className={`${listStyles.tagsContainer}`}>
          <h3>{Browsebytopic}</h3>
          <ScrollContainer className={`scroll-container`}>
            <div className={`${listStyles.tagsWrapper}`}>
              {tags?.length > 0 && tags.map((item, i) =>
                <Button
                  size="sm"
                  variant="light-simple"
                  as="link"
                  link={`/wire/topic/${item.id}`}
                  className={`mr-2`}
                  key={uuidv4()}>{item?.name}
                </Button>
              )
              }
            </div>
          </ScrollContainer>
        </div>
      </div>
      <div ref={container} className={`${listStyles.blogContainer} entry-4 mt-4 mt-md-5`}>
        <BlogShareFluid container={container} offset={100} data={data} />
        {!isObjectEmpty(data) ? <>
          <div className={`${styles.postDate}`}>
            <div className={`${styles.blogArticleIcon}`}><IconPost /></div>
            <span className={`${typographyStyles.textMediumLgt2}`}>{dateFormat(data.created_at, "mmm dd, yyyy")}</span>
            <div className={`${styles.blogArticleRect}`}><IconRect /></div>
            <span className={`blog-article__time-read ${typographyStyles.textMediumLgt2}`}>{data.timeToRead ? data.timeToRead : "1"}{m} {read}</span>
          </div>
          <h3 className={`${styles.postTitle}`}>{data.title}</h3>
          <div>
            {data.blog_author && <BlogAuthor data={data.blog_author} />}
          </div>
          <div className={`${styles.postThumb}`} style={{ backgroundImage: `url(${data.thumbnail.url})` }}></div>
          <div className={`${styles.blogContent}`}>
            <ReactMarkdown plugins={[gfm]} allowDangerousHtml={true}>{data.body}</ReactMarkdown>
          </div>
          <div>
            <div className={`${styles.postShare}`}>
              <BlogShare data={data} />
            </div>
            <div className={`${styles.postFooter}`}>
              {data.blogTags && <BlogTags onChange={onTagChange} data={data.blogTags} />}
            </div>
          </div> </> :
          <div className={`${styles.postLoader}`}>
            <Icon variant="loader" />
          </div>
        }
      </div>
    </div >
  );
}

export default PostViewer;