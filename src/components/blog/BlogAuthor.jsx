import React, { useState } from "react";
import { Link } from "@reach/router";

import "./Blog.scss"
import { settings } from "../../data/settings";

const BlogAuthor = ({ data, className }) => {

  const {name, photo : {url}} = data;

  return (
    <div className={`blog-author ${className ? className : ""}`}>
      <div className="blog-author-img" style={{backgroundImage: `url(${url})`}}></div> <span>{name}</span>
    </div>
  );
}

export default BlogAuthor;