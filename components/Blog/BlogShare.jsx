import React, { useContext, useEffect, useState } from "react";
import Icon from "../Icon";
import typographyStyles from "../../styles/global/typography.module.scss"
import styles from './blog.module.scss'
import { Context } from "../../context/context"
import appConfig from "../../configs/appConfig"

const BlogShare = ({ data, className }) => {

  const { lang: { Sharethis, } } = useContext(Context)
  const [location, setLocation] = useState(null)

  useEffect(()=>{
    setLocation(window.location)
  },[])

  return (
    <div className={`${styles.blogShare} ${className ? className : ""}`}>
      <div>
        <div className="mb-2"><span className={`${typographyStyles.textBook}`}>{Sharethis}:</span></div>
        <div className="blog-share-inner">
          {appConfig.share.map((share, i) => (
            <a key={`bsi-${i}`} className="mr-2" href={`${share.link}${location}${share.isText ? `&text=${data.title}` : ""}`} target="_blank"><Icon variant={share.icon} /></a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogShare;