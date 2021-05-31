import styles from './header.module.scss'

const MenuToggler = ({ isActiveMobile, setIsActiveMobile }) => {

  return (
    <div className={`${styles.menuToggler} ${isActiveMobile ? "is-menu-open" : ""}`} onClick={() => setIsActiveMobile(!isActiveMobile)}>
      <div>
        <span></span>
        <span></span>
        <span></span>
        <div></div>
      </div>
    </div>
  )
}

export default MenuToggler;