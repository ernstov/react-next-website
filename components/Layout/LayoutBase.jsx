import styles from './layout.module.scss'

const LayoutBase = ({ children, isWrap, variant, isSmoothScroll }) => {

  return (
    <div className={`${styles.layoutBase} ${!isWrap ? "no-wrap" : ""} ${variant ? variant : ""} ${!isSmoothScroll ? "not-smooth" : ""}`}>
      {children}
    </div>
  )
}

export default LayoutBase;
