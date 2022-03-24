import { useState, useEffect } from "react"
import styles from './radio.module.scss'

const Radio = ({ options, className, onChange, value, disable }) => {

  const [active, setActive] = useState("")

  useEffect(() => {
    if (value) setActive(value)
    if (value == '') setActive("")
  }, [value])

  const onClickOption = (option) => {

    const setOption = () => {
      setActive(active == option ? "" : option)
      if (onChange) onChange(active == option ? "" : option)
    }

    if (disable) {
      if (disable.indexOf(option) == -1) {
        setOption()
      }
    } else {
      setOption()
    }

  }

  return <div className={`${styles.root} ${className ? className : ""}`}>
    {options.map((option, i) => (
      <div onClick={() => onClickOption(option)} className={`${styles.option} ${active == option ? "active" : ""}`} key={`oi-${i}`}>{option}</div>
    ))}
  </div>
}

export default Radio;
