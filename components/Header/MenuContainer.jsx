import styles from './header.module.scss'

const MenuContainer = ({ isActiveMobile, children, className, onHide }) => {

  return (
    <div className={`${styles.menuContainer} ${className ? className : ""} ${isActiveMobile ? "active" : ""}`}>
      <div onClick={onHide}></div>
      <div>
        {children}
      </div>
    </div>
  )
}

export default MenuContainer;