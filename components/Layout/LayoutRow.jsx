import { useState, useEffect } from 'react'
import styles from './layout.module.scss'

const LayoutRow = ({ children, isActiveSidebar }) => {

  const [activeSidebar, setActiveSidebar] = useState(isActiveSidebar);

  useEffect(()=>{
    setActiveSidebar(isActiveSidebar);
  }, [isActiveSidebar])

  return (
    <div className={`${styles.layoutBaseRow} ${activeSidebar ? "activeSidebar" : ""}`}>
      <div>{children[0] && children[0]}</div>
      <div>{children[1] && children[1]}</div>
    </div>
  )
}

export default LayoutRow;
