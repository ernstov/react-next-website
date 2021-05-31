import styles from './header.module.scss'

const MenuUser = () => {

  return (
    <div className={`${styles.menuUser}`}>
      <img src='/img/account-icon.svg' />
    </div>
  )
}

export default MenuUser;