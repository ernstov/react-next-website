import React from 'react'
import moment from 'moment'
import Link from 'next/link'
import styles from './blog.module.scss'
import typographyStyles from "../../styles/global/typography.module.scss"

export const ArticlePreview = React.memo((props) => {
  const { title, subTitle, created_at, alias, body, timeToRead, thumbnail:{url} } = props

  return (
    <article className={styles.blogArticle}>
      <div className="blog-article__title-wrapper">
        <div className="blog-article__date">
          <span className={`${typographyStyles.textMediumLgt}`}>{created_at && moment(created_at).format('MMM D, YYYY')}</span>
          <span className={`blog-article__time-read ${typographyStyles.textMediumLgt}`}>{timeToRead ? timeToRead : 1}m read</span>
        </div>
        <Link className="blog-article__title" href={`/wire/${alias}`}>
          <h3 className="blog-article__title">{title}</h3>
        </Link>
        <p className="blog-article__description">{subTitle}</p>
      </div>
      <Link href={`/wire/${alias}`}>
        {url && <div className="blog-article__cover-wrapper"><img className="blog-article__cover" src={url} alt="cover" /></div>}
      </Link>
    </article>
  )
})