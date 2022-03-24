import React, {useContext} from "react"
import styles from './blog.module.scss'
import { Context } from "../../context/context";

const BlogAuthor = ({ data, className }) => {

  const {name, photo : {url}} = data;
  const { lang: { by } } = useContext(Context)

  return (
    <div className={`${styles.blogAuthor} ${className ? className : ""}`}>
      <div className="blog-author-img" style={{backgroundImage: `url(${url})`}}></div> <span className="mr-1">{by}</span> <span>{name}</span>
    </div>
  );
}

export default BlogAuthor;