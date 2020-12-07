import React, { useState } from "react";
import { Link } from "@reach/router";

import "./Blog.scss"
import { settings } from "../../data/settings";

const BlogAuthor = ({ data, className }) => {

  return (
    <div className={`blog-author ${className ? className : ""}`}>

    </div>
  );
}

export default BlogAuthor;