import React, { useContext, useState, useEffect, useRef } from "react";
import styles from './toc.module.scss'
import { IconContents, IconTop } from "../Icon"
import { Context } from "../../context/context"
import { getOffset } from "../../utils"

const Toc = ({ className, offset, container }) => {

  const { lang: { Contents, Backtotop } } = useContext(Context)
  const { scrollB } = useContext(Context)
  const [position, setPosition] = useState(0)
  const [headers, setHeaders] = useState([])
  const [activeParent, setActiveParent] = useState(null)
  const [activeChild, setActiveChild] = useState(null)
  const isCanDetect = useRef(true)

  useEffect(() => {
    if (container.current) {
      const c = container.current
      const headers = c.querySelectorAll("h2, h3")
      const temp = []
      let i = 0

      headers.forEach((elm) => {
        if (elm.nodeName == "H2") {
          i = temp.push({ parent: elm, sub: [] })
        }
        if (elm.nodeName == "H3" && temp.length > 0) {
          temp[i - 1].sub = [...temp[i - 1].sub, elm]
        }
      })

      setHeaders(temp)
    }
  }, [])

  useEffect(() => {
    if (scrollB.current && headers.length) scrollB.current.scrollbar.addListener((status) => {
      const dist = Math.abs(getOffset(container.current).top - offset)

      if (isCanDetect.current) {
        headers.map((h2, i) => {
          const rect = h2.parent.getBoundingClientRect()
          if ((rect.top - 120) <= 0 && activeParent != i) setActiveParent(i)
          if (rect.top > 140 && activeParent == i) setActiveParent(null)

          if (h2.sub?.length) {
            h2.sub.map((sub, z) => {
              const rect = sub.getBoundingClientRect()
              if ((rect.top - 120) <= 0 && activeChild != z) setActiveChild(z)
              if (rect.top > 140 && activeChild == z) setActiveChild(null)
            })
          }
        })
      }

      if ((getOffset(container.current).top - offset) < 0) {
        if ((container.current.offsetHeight - offset - 200) - dist > 0) {
          setPosition(dist)
        }
      } else {
        setPosition(0)
      }
    })
  }, [scrollB, headers])

  const scrollTop = () => {
    if (scrollB.current) {
      scrollB.current.scrollbar.scrollTo(0, 0, 500)
      isCanDetect.current = false

      setTimeout(() => {
        setActiveParent(null)
        setActiveChild(null)
      }, 500)

      setTimeout(()=>{
        isCanDetect.current = true
      }, 1000)
    }
  }

  const jumpTo = (elm, i, type) => {
    const positionW = elm.offsetTop
    if (scrollB.current) {
      isCanDetect.current = false
      scrollB.current.scrollbar.scrollTo(0, positionW + 200, 500)

      if(type == "parent") {
        setActiveParent(i)
        setActiveChild(null)
      }
      if(type == "child") {
        setActiveChild(i)
      }

      setTimeout(()=>{
        isCanDetect.current = true
      }, 1000)
    }
  }

  return (
    headers.length > 0 &&
    <div style={{ transform: `translateY(${position}px)` }} className={`${styles.toc} ${className ? className : ""}`}>
      <div className={`${styles.tocTitle}`}><IconContents /><span>{Contents}</span></div>
      <div className={`${styles.tocInner}`}>
        {headers.map((h2, i) => (
          <div key={`hh2-${i}`}>
            <div onClick={() => jumpTo(h2.parent, i, "parent")} className={`${styles.parent} ${activeParent == i ? "active" : ""}`}><span>{h2.parent.textContent}</span></div>
            {h2.sub &&
              <div className={`${styles.tocSub} ${activeParent == i ? "active" : ""}`}>
                {h2.sub.map((h3, z) => (
                  <div onClick={() => jumpTo(h3, z, "child")} key={`hh3-${i}-${z}`} className={`${styles.child} ${activeChild == z ? "active" : ""}`}>{h3.textContent}</div>
                ))}
              </div>}
          </div>
        ))}
      </div>
      <div onClick={scrollTop} className={`${styles.backToTop} ${position > 0 ? "active" : ""}`}><span>{Backtotop}</span><IconTop /></div>
    </div>
  );
}

export default Toc;
