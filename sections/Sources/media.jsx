import React, { useEffect, useState } from "react";

import styles from './sources.module.scss'

const Media = ({ data }) => {

  const [isPlay, setIsPlay] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsPlay(true);
    }, 300)
  }, [])

  return <div className={`${styles.sourcesMedia} ${isPlay ? "play" : ""}`}>
      {data.brands.map((brand, i) => (
        <div key={`ri-${i}`} className="sources-media-row">
          <div className={`sources-media-row-imgs v${i}`}>
            <img src={`/img/${brand.img}`} />
            <img src={`/img/${brand.img}`} />
          </div>
        </div>
      ))}
    </div>;

}

export default Media;
