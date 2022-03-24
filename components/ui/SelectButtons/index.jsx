import { useState, useContext } from "react"
import styles from './selectButtons.module.scss'
import Button from "../Button"
import { Context } from "../../../context/context"
import shortid from "shortid"

const SelectButtons = ({ options, onChange, value }) => {

  const { lang: {
    Save,
  } } = useContext(Context);

  const [v, setV] = useState(value)

  return <div className={`${styles.selectButtons}`}>
    {options.map((option, i) => (
      <Button
        variant="light-simple"
        className={`${styles.selectButton} ${v == option ? "active" : ""}`}
        onClick={() => setV(option) } 
        key={`${shortid.generate()}`}
        size="spc"
      >
        {option}
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