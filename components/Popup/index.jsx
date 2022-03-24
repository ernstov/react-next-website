import React, { useEffect, useState, useContext } from "react";
import styles from './popup.module.scss'
import { useRouter } from "next/router"
import { Context } from "../../context/context"
import { IconCancel } from "../Icon"

const Popup = ({ title, children, isActive, onClose, position, titleSize, className }) => {

  return (
    <div className={`${styles.popup} ${className ? className : ""} ${isActive ? "active" : ""} ${position ? position : ""}`}>
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
    </div>
  );
}

export default Popup;
