import React from 'react'
import moment from 'moment'
import { Link } from "@reach/router";
import "./Blog.scss"

export const ArticlePreview = React.memo((props) => {
  const { title, subTitle, created_at, alias, body, timeToRead, thumbnail:{url} } = props

  return (
    <article className="blog-article-wrapper">
      <div className="blog-article__title-wrapper">
        <div className="blog-article__date">
          <span className="text-medium-lgt">{created_at && moment(created_at).format('MMM D, YYYY')}</span>
          <span className="blog-article__time-read text-medium-lgt">{timeToRead ? timeToRead : 1}m read</span>
        </div>
        <Link className="blog-article__title" to={`/wire/${alias}`}>
          <h3 className="blog-article__title">{title}</h3>
        </Link>
        <p className="blog-article__description">{subTitle}</p>
      </div>
      <Link to={`/wire/${alias}`} className="blog-article__cover-wrapper">
        {url && <img className="blog-article__cover" src={url} alt="cover" />}
      </Link>
    </article>
  )
})