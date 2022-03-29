import { useEffect, useState, useContext } from "react"
import styles from './demoViewer.module.scss'
import { Context } from "../../context/context"
import { IconCancel, IconInfoCurve } from "../../components/Icon"

const Error = () => {

  const [active, setActive] = useState(false)
  const [e, setE] = useState("")
  const { app } = useContext(Context);

  useEffect(() => {
    if (app.demoError) {
      setActive(true)
      setE(app.demoError)
    }
  }, [app])

  return (
    <div className={`${styles.error} ${active ? "active" : ""}`}>
      <div className={`${styles.errorClose}`} onClick={() => setActive(false)}><IconCancel /></div>
      <div className={`${styles.errorIcon}`}><IconInfoCurve /></div>
      <div className={`${styles.errorMessage}`}>{e}</div>
    </div>
  );
}

export default Error;
