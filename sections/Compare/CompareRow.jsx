import React, {useState, useEffect} from "react"
import { OverlayTrigger, Tooltip } from "react-bootstrap"
import styles from './compare.module.scss'
import Icon from "../../components/Icon"

const CompareRow = ({ data, index }) => {

  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth)
    }
}, [])

  const renderRowInner = (column, i) => {
    switch (column.type) {
      case "available":
        return <div className={`${styles.compareAvailable} ${i == 1 ? "primary" : ""}`} key={`cri-${i}`}><Icon variant="rectangle" /></div>
      case "unavailable":
        return <div className={`${styles.compareUnAvailable} ${i == 1 ? "primary" : ""}`} key={`cri-${i}`}><Icon variant="close-bold" /></div>
      case "logo":
        return <div className={`${styles.compareLogo}`} key={`cri-${i}`}><img width="47px" height="47px" src={`/img/${column.img}`} alt="logo" /></div>
      case "logo-text":
        return <div className={`${styles.compareLogoText}`} key={`cri-${i}`}>{column.name}</div>
      case "title":
        return <div className={`${styles.compareTitle}`} key={`cri-${i}`}><span dangerouslySetInnerHTML={{ __html: column.name }}></span></div>
      case "row-name":
        return <div className={`${styles.compareRowName} ${column.tooltip ? "with-tooltip" : ""}`} key={`cri-${i}`}>
          {column.tooltip ?
            <OverlayTrigger
              key={`${index}-${i}`}
              placement={windowWidth > 880 ? "right" : "bottom"}
              overlay={
                <Tooltip id={`tooltip-${index}-${i}`}>
                  <div dangerouslySetInnerHTML={{ __html: column.tooltip }}></div>
                </Tooltip>
              }
            >
              <div>{column.name}</div>
            </OverlayTrigger>
            :
            <div>{column.name}</div>
          }
        </div>
      case "text":
      default:
        return <div className={`${styles.compareText} ${i == 1 ? "primary" : ""}`} key={`cri-${i}`}>{column.name}</div>
    }
  }

  return (
    <div className={`${styles.compareRow}`}>
      {data.map((item, i) => (
        renderRowInner(item, i)
      ))}
    </div>
  );
}

export default CompareRow;
