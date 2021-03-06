import { useContext, useState, useEffect } from "react"
import styles from './query.module.scss'
import { IconSearch } from "../../Icon"
import { Context } from "../../../context/context"
import { IconInfo } from "../../Icon"
import Popup from "../../Popup"
import { Container, Row, Col } from "react-bootstrap"

const Query = ({ placeholder, info, onInfoOpen, onChange, value, onEnterPress }) => {

  const { lang: { AdvancedSearch, Advancedsearch } } = useContext(Context)
  const [isSearchTips, setIsSearchTips] = useState(false)
  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth)
    }
  }, [])

  const onInputChange = (e) => {
    if (onChange) onChange(e.target.value)
  }

  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      if (onEnterPress) onEnterPress()
    }
  }

  return <div className={`${styles.query}`}>
    <IconSearch className={`querySearchIcon`} />
    <input value={value} onChange={onInputChange} onKeyPress={onKeyPress} placeholder={placeholder} type="text" />
    <div className="position-relative h-100">
      <div onClick={(e) => { setIsSearchTips(!isSearchTips); if (onInfoOpen && !isSearchTips) onInfoOpen(); }} className={`${styles.queryRule}`}>
        <div className={`${styles.queryInfo}`}>
          <div><IconInfo /></div>
        </div>
        <span>
          {AdvancedSearch}
        </span>
      </div>
      {windowWidth > 880 &&
        <Popup
          className="d-none d-lg-block"
          position={windowWidth > 1600 ? "center" : "right"}
          isActive={isSearchTips}
          title={Advancedsearch}
          onClose={() => setIsSearchTips(false)}
        >
          {info()}
        </Popup>
      }
    </div>
  </div>
}

export default Query;
