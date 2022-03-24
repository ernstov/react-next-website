import React, { useEffect, useState } from "react";
import Icon from "../Icon";
import styles from './blog.module.scss'
import appConfig from "../../configs/appConfig"

const BlogShare = ({ data, className }) => {

  const [location, setLocation] = useState(null)

  useEffect(() => {
    setLocation(window.location)
  }, [])

  return (
    <div className={`${styles.blogShare} ${className ? className : ""}`}>
      <div className={`${styles.blogShareInner}`}>
        {appConfig.shareBlog.map((share, i) => (
          <a
            key={`bsi-${i}`}
            className="mr-2"
            href={`${share.link}${location}${share.isText ? `&text=${data.title}` : ""}`}
            target="_blank">
            <Icon variant={share.icon} />
          </a>
        ))}
      </div>
    </div>
  );
}

export default BlogShare;