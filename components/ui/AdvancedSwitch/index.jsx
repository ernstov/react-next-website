import React from "react"
import styles from './switch.module.scss'

const AdvancedSwitch = ({ onChange, label, className, active }) => {

  const onClick = () => {
    onChange(!active);
  }

  return <div className={`${styles.advancedSwitch} ${className ? className : ""} ${active ? "active" : ""}`} onClick={onClick}>
    <div className="advanced-switch-label">{label}</div>
  </div>
}

export default AdvancedSwitch;