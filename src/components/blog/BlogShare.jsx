import React, { useState } from "react";
import Icon from "../Icon";
import { settings } from "../../data/settings";

import "./Blog.scss"

const BlogShare = ({ data, className }) => {

  return (
    <div className={`blog-share ${className ? className : ""}`}>
      <div>
        <div className="mb-2"><span className="text-book">{settings.texts.Sharethis}:</span></div>
        <div className="blog-share-inner">
          {settings.share.map((share, i) => (
            <a key={`bsi-${i}`} className="mr-2" href={`${share.link}${window.location}${share.isText ? `&text=${data.title}` : ""}`} target="_blank"><Icon variant={share.icon} /></a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogShare;