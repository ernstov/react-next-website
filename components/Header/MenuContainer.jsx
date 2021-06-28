import styles from './header.module.scss'

const MenuContainer = ({ isActiveMobile, children, className }) => {

  return (
    <div className={`${styles.menuContainer} ${className ? className : ""} ${isActiveMobile ? "active" : ""}`}>
      {children}
    </div>
  )
}

export default MenuContainer;