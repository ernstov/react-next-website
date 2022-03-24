import { useState } from "react"
import styles from './collapseAdvanced.module.scss'
import { Collapse } from "react-bootstrap"
import Button from "../Button"

const CollapseAdvanced = ({ title, children, className, style, isClearable, onClear }) => {

  const [open, setOpen] = useState(false)

  return <div style={style} className={`${styles.root} ${className ? className : ""}`}>
    <Button
      onClick={() => setOpen(!open)}
      aria-expanded={open}
      variant="collapse-advanced"
      size="spc"
      className="w-100"
    >
      <div className={`${styles.row}`}>
        <div className={`${styles.rowTitle}`}><div className={`${styles.icon} ${open ? "open" : ""}`}></div> {title}</div>
        {isClearable && <div onClick={() => { if (onClear) onClear() }} className={`${styles.iconClose}`}></div>}
      </div>
    </Button>
    <Collapse in={open}>
      <div>
        <div className={`${styles.inner}`}>
          {children}
        </div>
      </div>
    </Collapse>
  </div>
}

export default CollapseAdvanced;
