import styles from './badge.module.scss'

const Badge = ({ label, variant, className }) => {

  return <div className={`${styles.badge} ${className ? className : ""} ${variant ? variant : ""}`}>{label}</div>

}

export default Badge;