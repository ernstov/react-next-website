import React, { useEffect, useState } from "react";

import './Sources.scss';

const Media = ({ data }) => {

  const [isPlay, setIsPlay] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsPlay(true);
    }, 300)
  }, [])

  return <div className={`sources-media ${isPlay ? "play" : ""}`}>
      {data.brands.map((brand, i) => (
        <div key={`ri-${i}`} className="sources-media-row">
          <div className={`sources-media-row-imgs v${i}`}>
            <img src={`./assets/img/${brand.img}`} />
            <img src={`./assets/img/${brand.img}`} />
          </div>
        </div>
      ))}
    </div>;

}

export default Media;
