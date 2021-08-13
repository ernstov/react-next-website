import React from "react";
import styles from './blog.module.scss'

const BlogAuthor = ({ data, className }) => {

  const {name, photo : {url}} = data;

  return (
    <div className={`${styles.blogAuthor} ${className ? className : ""}`}>
      <div className="blog-author-img" style={{backgroundImage: `url(${url})`}}></div> <span>{name}</span>
    </div>
  );
}

export default BlogAuthor;