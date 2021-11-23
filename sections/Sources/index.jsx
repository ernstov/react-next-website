import React, { useState, useEffect } from "react";
import Icon from "../../components/Icon";
import Media from "./media";
import presetsStyles from "../../styles/global/presets.module.scss"
import appConfig from "../../configs/appConfig"

import styles from './sources.module.scss'

const Sources = ({ data, isVisible }) => {

  const [isActive, setIsActive] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(()=>{
    if(isVisible) {
      setTimeout(()=>{
        setVisible(true)
      }, appConfig.entryDelay)
    }
  }, [isVisible])

  return (
    <div className={`${styles.sources} ${visible ? "active" : ""}`}>
      <div className={`sources-toggler ${isActive ? "active" : ""}`} onClick={() => setIsActive(!isActive)}><Icon variant="show-more" /></div>
      <div className={`sources-inner ${isActive ? "active" : ""}`}>
        <Media data={data} isVisible={isVisible} />
        <div className="sources-list">
          <div className="sources-list-c c1 text-center">
            <div>
              <div className="mb-1">
                <div className="sources-list-label entry-1">
                  <span>{data.label_1}</span>
                </div>
              </div>
              <div>
                <div className="sources-list-label s2 entry-2">
                  <span>{data.label_2}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="sources-list-c">
            <div className="sources-phone entry-3">
              <h2 className="sources-phone-title "><span className="d-none d-xl-block">{data.title}</span><span className="d-block d-xl-none">{data.label_1} {data.label_2}</span></h2>
              <ul className={`${presetsStyles.listPrimary} lp entry-4`}>
                {data.list.map((item, i) => (
                  <li key={`li-${i}`}>{item.name}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sources;
