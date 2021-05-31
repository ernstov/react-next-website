import styles from './layout.module.scss'

const LayoutBase = ({ children }) => {

  return (
    <div className={`${styles.layoutBase}`}>
      {children}
    </div>
  )
}

export default LayoutBase;
