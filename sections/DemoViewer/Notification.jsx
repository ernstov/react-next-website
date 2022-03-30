import { useEffect, useState, useContext } from "react"
import styles from './demoViewer.module.scss'
import { Context } from "../../context/context"
import { IconCancel, IconLockAdv } from "../../components/Icon"

const Notification = () => {

  const [active, setActive] = useState(false)
  const [n, setN] = useState("")
  const { app } = useContext(Context);

  useEffect(() => {
    if (app.demoNotification) {
      setActive(true)
      setN(app.demoNotification)
    }else{
      setActive(false)
    }
  }, [app])

  return (
    <div className={`${styles.error} notification ${active ? "active" : ""}`}>
      <div className={`${styles.errorClose}`} onClick={() => setActive(false)}><IconCancel /></div>
      <div className={`${styles.errorIcon}`}><IconLockAdv /></div>
      <div className={`${styles.errorMessage}`}>{n}</div>
    </div>
  );
}

export default Notification;
