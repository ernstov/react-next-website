import { useState, useContext, useEffect } from "react"
import styles from './selectButtons.module.scss'
import Button from "../Button"
import { Context } from "../../../context/context"
import shortid from "shortid"

const SelectButtons = ({ options, onChange, value }) => {

  const { lang: {
    Save,
  } } = useContext(Context);

  const [v, setV] = useState(value)

  useEffect(() => {
    setV(value)
  }, [value])

  return <div className={`${styles.selectButtons}`}>
    {options.map((option, i) => (
      <Button
        variant="light-simple"
        className={`${styles.selectButton} ${v == option.value ? "active" : ""}`}
        onClick={() => setV(option.value)}
        key={`${shortid.generate()}`}
        size="spc"
      >
        <div>
          <div>{option.value}</div>
          {option.description && <span dangerouslySetInnerHTML={{ __html: option.description }}></span>}
        </div>
      </Button>
    ))}

    <Button
      variant="secondary"
      className={`${styles.saveButton}`}
      onClick={() => onChange ? onChange(v) : null}
      size="spc"
    >
      {Save}
    </Button>
  </div>

}

export default SelectButtons;