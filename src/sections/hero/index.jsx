import React, { useEffect, useState } from "react";
import {Link} from "@reach/router";

import './Hero.scss';

const Hero = ({ data, isVisible }) => {

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        setVisible(true)
      }, 1000)
    }
  }, [isVisible])

  return (
    <div className={`hero ${data.variant ? data.variant : ""} ${visible ? "active" : ""}`}>
      <div className="hero-inner">
        {data.img &&
          <img className={`hero-img entry-1 ${data.imgCL ? data.imgCL : ""}`} src={`/assets/img/${data.img}`} />
        }
        <h1 className={`text-title mb-4 mb-md-5 entry-1 mx-auto ${data.titleCL ? data.titleCL : "mw-410"}`} dangerouslySetInnerHTML={{ __html: data.title }}></h1>
        <p className={`text-sub-title entry-2 mx-auto ${data.descriptionCL ? data.descriptionCL : "mw-410"}`} dangerouslySetInnerHTML={{ __html: data.description }}></p>

        {data.markets &&
          <div className="hero-apps-markets entry-3">
            {data.markets.map((market, i) => (
              <a href={market.link} target="blank" key={`mi-${i}`}><img src={`./assets/img/${market.img}`} alt="" /></a>
            ))}
          </div>
        }

        <div className="hero-buttons entry-4">
          {data.buttons && data.buttons.map((button, i) => (
            data.isBlank ? 
            <a href={button.link} target="blank" className={`btn btn-${button.variant} w-100 ${i < data.buttons.length ? "mb-2" : ""}`} key={`bi-${i}`}>{button.name}</a> :
            <Link to={button.link} className={`btn btn-${button.variant} w-100 ${i < data.buttons.length ? "mb-2" : ""}`} key={`bi-${i}`}>{button.name}</Link>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Hero;
