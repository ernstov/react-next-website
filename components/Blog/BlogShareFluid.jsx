import React, { useEffect, useState, useContext } from "react";
import Icon from "../Icon";
import styles from './blog.module.scss'
import appConfig from "../../configs/appConfig"
import { Context } from "../../context/context";
import { getOffset } from "../../utils"

const BlogShareFluid = ({ data, className, offset, container }) => {

  const [location, setLocation] = useState(null)
  const { scrollB } = useContext(Context)
  const [position, setPosition] = useState(0)

  useEffect(() => {
    setLocation(window.location)
  }, [])

  useEffect(() => {
    if (scrollB.current) scrollB.current.scrollbar.addListener((status) => {
      const dist = Math.abs(getOffset(container.current).top - offset)

      if ((getOffset(container.current).top - offset) < 0) {
        if ((container.current.offsetHeight - offset - 200) - dist > 0) {
          setPosition(dist)
        }
      } else {
        setPosition(0)
      }
    })
  }, [scrollB])

  return (
    <div style={{ transform: `translateY(${position}px)` }} className={`${styles.blogShareFluid} ${className ? className : ""}`}>
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
  );
}

export default BlogShareFluid;