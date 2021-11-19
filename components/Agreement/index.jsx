import styles from './agreement.module.scss'
import Button from "../ui/Button"
import typographyStyles from "../../styles/global/typography.module.scss"

const Agreement = () => {

  return <div className={`${styles.agreement}`}>
    <span className={`${typographyStyles.textMediumM}`}>Use of Perigon data services or the Perigon API is subject to the <Button link="/EULA.pdf" as="url" variant="link-gray">End User License Agreement</Button></span>
  </div>

}

export default Agreement;