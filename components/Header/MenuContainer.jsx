import styles from './header.module.scss'

const MenuContainer = ({ isActiveMobile, children }) => {

  return (
    <div className={`${styles.menuContainer} ${isActiveMobile ? "active" : ""}`}>
      {children}
    </div>
  )
}

export default MenuContainer;