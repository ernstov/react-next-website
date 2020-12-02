import React, { useRef, useEffect } from "react";
import { OverlayTrigger, Tooltip, Button } from "react-bootstrap";
import { settings } from "../../data/settings";
import Icon from "../../components/Icon";

import './Block.scss';

const Block = ({ data, i, variant }) => {

  const render = () => {
    switch (variant) {
      case "fluid":
        return <div className="block fluid">
          <div className="block-title">
            {data.title && <h3 className="text-title-lg">{data.title}</h3>}
            {data.description && <p className="text-medium-reg mb-0">{data.description}</p>}
          </div>

          {data.img && 
            <div className={`block-img ${data.imgClass ? data.imgClass : ""}`}>
              <img src={`/assets/img/${data.img}`} alt=""/>
            </div>
          }

          {data.additional &&
            <div className="block-additional">
              <p className="text-sub-md mb-0">{data.additional}</p>
            </div>
          }

        </div>
      default:
        return <div className="block">
          <div className="block-img" style={{ background: `url(./assets/img/${data.img})` }}>
            {data.label && <div className="block-label">{data.label}</div>}
          </div>
          <div className="block-content">
            <div className="block-source">
              <div className="d-flex align-items-center text-tiny">
                <img className="mr-2" src={`./assets/img/${data.sourceLogo}`} alt="" />
                <span>{data.source}</span>
              </div>
              <div>
                <span className="text-small-2">{data.date}</span>
              </div>
            </div>
            <div className="mt-2">
              <span className="text-medium">{data.title}</span>
            </div>
          </div>
          <div className="block-tooltip">
            <div className="block-tooltip-title">
              <div className="block-tooltip-avatar">
                <img src={`./assets/img/${data.comment.avatar}`} alt="" />
              </div>
              <div className="block-tooltip-author">
                {data.comment.author}
              </div>
              <div className="text-small">
                {settings.texts.said}:
              </div>
            </div>
            <div>
              <Button className="mt-3" variant="spec"><Icon variant="flag" />{settings.texts.InaccurateInfo}</Button>
            </div>
          </div>
        </div>
    }
  }

  return render();
}

export default Block;
