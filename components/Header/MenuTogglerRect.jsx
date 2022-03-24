import styles from './header.module.scss'

const MenuTogglerRect = ({ isActiveMobile, setIsActiveMobile }) => {

  return (
    <div className={`${styles.menuTogglerRect} ${isActiveMobile ? "is-menu-open" : ""}`} onClick={() => setIsActiveMobile(!isActiveMobile)}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}

export default MenuTogglerRect;