import React from 'react'
import moment from 'moment'
import Link from 'next/link'
import styles from './blog.module.scss'
import typographyStyles from "../../styles/global/typography.module.scss"
import { IconPost, IconRect } from '../Icon'

export const ArticlePreview = React.memo((props) => {
  const { title, subTitle, created_at, alias, blogTags, className, timeToRead, thumbnail } = props

  return (
    <article className={`${styles.blogArticle} ${className ? className : ""}`}>
      <div className="blog-article__title-wrapper">
        <div className="blog-article__date">
          <div className={`${styles.blogArticleIcon}`}><IconPost /></div>
          <span className={`${typographyStyles.textMediumLgt2}`}>{created_at && moment(created_at).format('MMM D, YYYY')}</span>
          <div className={`${styles.blogArticleRect}`}><IconRect /></div>
          <span className={`blog-article__time-read ${typographyStyles.textMediumLgt2}`}>{timeToRead ? timeToRead : 1}m read</span>
        </div>
        <Link className="blog-article__title" href={`/wire/${alias}`}>
          <h3 className="blog-article__title">{title}</h3>
        </Link>
        <p className="blog-article__description">{subTitle}</p>
        {blogTags &&
          <div className={`${styles.blogTagsList}`}>
            {blogTags.map((tag, i) => (
              <div key={`fd-${i}`} className={`${styles.blogTag} mr-2`}>{tag.name}</div>
            ))}
          </div>
        }
      </div>
      <Link href={`/wire/${alias}`}>
        <div className="blog-article__cover-wrapper">{thumbnail && <img className="blog-article__cover" src={thumbnail?.url} alt="cover" />}</div>
      </Link>
    </article>
  )
})