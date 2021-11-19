import styles from './layout.module.scss'

const LayoutBase = ({ children, isWrap, variant }) => {

  return (
    <div className={`${styles.layoutBase} ${!isWrap ? "no-wrap" : ""} ${variant ? variant : ""}`}>
      {children}
    </div>
  )
}

export default LayoutBase;
