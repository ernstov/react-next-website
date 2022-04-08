import React from "react";
import styles from './popup.module.scss'
import { IconCancel } from "../Icon"

const Popup = ({ title, children, isActive, onClose, position, titleSize, className, variant }) => {

  const renderInner = () => {
    switch (variant) {
      case "small":
        return <>
          <div className={`${styles.popupContainerSmall} popup-container`}>
            <div className={`${styles.popupTitleSmall} ${titleSize ? titleSize : ""}`}>
              {title}
            </div>
            <div className={`${styles.popupInnerSmall}`}>
              {children}
            </div>
          </div>
        </>

      default:
        return <>
          <div className={`${styles.popupBg}`}></div>
          <div className={`${styles.popupContainer} popup-container`}>
            <div className={`${styles.popupTitle} ${titleSize ? titleSize : ""}`}>
              {title}
              <div onClick={() => onClose ? onClose() : null} className={`${styles.popupClose}`}>
                <IconCancel />
              </div>
            </div>
            <div className={`${styles.popupInner}`}>
              {children}
            </div>
          </div>
        </>
    }
  }

  return (
    <div className={`${styles.popup} ${className ? className : ""} ${variant ? variant : ""} ${isActive ? "active" : ""} ${position ? position : ""}`}>
      {renderInner()}
    </div>
  );
}

export default Popup;
