import styles from './header.module.scss'
import typographyStyles from "../../styles/global/typography.module.scss"
import { useRouter } from "next/router"
import { getLoggedInData } from "../../utils/AuthUtils"

const MenuUser = () => {
  const data = getLoggedInData()
  const router = useRouter()

  return (
    <div className={`${styles.menuUser}`}>
      {data ?
        <div className={`${styles.userDetails}`}>
          <span className={`${typographyStyles.titleDemi} mr-3`}>{data.firstName}</span>
          <div onClick={()=>router.push("/account/overview")} className={`${styles.userAvatar}`}>{data.firstName && data.firstName[0]}</div>
        </div>
        :
        <img onClick={()=>router.push("/sign-in")} className={`${styles.userEmptyIcon}`} src='/img/account-icon.svg' />
      }
    </div>
  )
}

export default MenuUser;
