import styles from './header.module.scss'
import typographyStyles from "../../styles/global/typography.module.scss"
import { useRouter } from "next/router"
import { Context } from '../../context/context'
import { useContext } from 'react'

const MenuUserDemo = ({dark}) => {
  const { app } = useContext(Context)
  const router = useRouter()

  return (
    <div className={`${styles.menuUserDemo}`}>
      {app.user ?
        <div onClick={() => router.push("/account/overview")} className={`${styles.userDetails}`} role="button">
          <div className={`${styles.userAvatar}`}>{app.user.firstName && app.user.firstName[0]}</div>
        </div>
        :
        <img onClick={() => router.push("/sign-in")} className={`${styles.userEmptyIcon}`} src={dark ? '/img/account-icon-dark.svg' : '/img/account-icon.svg'} />
      }
    </div>
  )
}

export default MenuUserDemo;
