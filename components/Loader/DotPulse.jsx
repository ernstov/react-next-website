import styles from './loader.module.scss'

const DotPulse = ({ className }) => {

  return <div className={`${styles.dotPulse} ${className ? className : ""}`}>
    <div></div>
  </div>

}

export default DotPulse;