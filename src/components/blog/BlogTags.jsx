import React, { useState } from "react";
import { Badge } from "react-bootstrap";

import { settings } from "../../data/settings";

import "./Blog.scss"

const BlogTags = ({ data, className }) => {

  return (
    <div className={`blog-tags ${className ? className : ""}`}>
      <div className="mb-2"><span className="text-book">{settings.texts.Filedunder}:</span></div>
      <div className="blog-tags-inner">
        {data.map((tag, i) => (
          <Badge key={`bgi-${i}`} className="mr-2" variant="cover">{tag.name}</Badge>
        ))}
      </div>
    </div>
  );
}

export default BlogTags;