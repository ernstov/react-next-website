import React, {useContext} from "react";
import { Badge } from "react-bootstrap";
import { Context } from "../../context/context";

import styles from './blog.module.scss'

const BlogTags = ({ data, className, onChange }) => {

  const { lang: { Filedunder, } } = useContext(Context)

  return (
    <div className={`${styles.blogTags} ${className ? className : ""}`}>
      <div className="mb-2"><span className="text-book">{Filedunder}:</span></div>
      <div className="blog-tags-inner">
        {data.map((tag, i) => (
          <Badge onClick={()=>{if(onChange) onChange(tag.name)}} key={`bgi-${i}`} className="mr-2" variant="cover">{tag.name}</Badge>
        ))}
      </div>
    </div>
  );
}

export default BlogTags;