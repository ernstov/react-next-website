import styles from './header.module.scss'
import typographyStyles from "../../styles/global/typography.module.scss"
import { useRouter } from "next/router"
import { Context } from '../../context/context'
import { useContext } from 'react'

const MenuUser = () => {
  const { app } = useContext(Context)
  const router = useRouter()

  return (
    <div className={`${styles.menuUser}`}>
      {app.user ?
        <div className={`${styles.userDetails}`}>
          <span className={`${typographyStyles.titleDemi} mr-3`}>{app.user.firstName}</span>
          <div onClick={()=>router.push("/account/overview")} className={`${styles.userAvatar}`}>{app.user.firstName && app.user.firstName[0]}</div>
        </div>
        :
        <img onClick={()=>router.push("/sign-in")} className={`${styles.userEmptyIcon}`} src='/img/account-icon.svg' />
      }
    </div>
  )
}

export default MenuUser;
