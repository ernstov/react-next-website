import styles from './layout.module.scss'

const LayoutBase = ({ children, isWrap }) => {

  return (
    <div className={`${styles.layoutBase} ${!isWrap ? "no-wrap" : ""}`}>
      {children}
    </div>
  )
}

export default LayoutBase;
