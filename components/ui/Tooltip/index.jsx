import styles from './tooltip.module.scss'
import typographyStyles from '../../../styles/global/typography.module.scss'

const Tooltip = ({ label }) => {

  return <div className={`${styles.tooltip}`}>
    <span className={`${typographyStyles.smallD}`}>{label}</span>
  </div>
}

export default Tooltip;
