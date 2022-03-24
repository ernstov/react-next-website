import React, {useContext} from "react";
import { Context } from "../../context/context";
import ts from "../../styles/global/typography.module.scss"

import styles from './blog.module.scss'

const BlogTags = ({ data, className, onChange }) => {

  const { lang: { Findmoreabout } } = useContext(Context)

  return (
    <div className={`${styles.blogTags} ${className ? className : ""}`}>
      <div><span className={`${ts.titleSmallD} ${ts.c8}`}>{Findmoreabout}:</span></div>
      <div className="blog-tags-inner">
        {data.map((tag, i) => (
          <div onClick={()=>{if(onChange) onChange(tag.id)}} key={`bgi-${i}`} className={`${styles.blogTag} mr-2 large`}>{tag.name}</div>
        ))}
      </div>
    </div>
  );
}

export default BlogTags;