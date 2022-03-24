import { useContext } from "react"
import styles from './header.module.scss'
import { IconCancel } from "../Icon"
import { Context } from "../../context/context"

const MenuContainer = ({ isActiveMobile, children, className, onHide, icon, title }) => {

  const { lang: { Cancel } } = useContext(Context);

  return (
    <div className={`${styles.menuContainerAdvanced} ${className ? className : ""} ${isActiveMobile ? "active" : ""}`}>
      <div>
        <div className={`${styles.menuContainerAdvancedTitle}`}>
          <div>
            <div>{icon}<span>{title}</span></div>
            <div onClick={onHide} className={`${styles.menuContainerCancel}`}>{Cancel} <IconCancel /></div>
          </div>
        </div>
        <div className={`${styles.menuContainerAdvancedInner}`}>
          {children}
        </div>
      </div>
      <div onClick={onHide}></div>
    </div>
  )
}

export default MenuContainer;