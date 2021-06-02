import { useState } from "react"
import styles from './input.module.scss'
import Label from "../Label"

const PreviewInput = ({ variant, className, placeholder, name, defaultValue, type, label }) => {

  const [valid, setValid] = useState(null)

  const render = () => {
    switch (variant) {
      case "base":
      case "form":
      default:
        return <div className={`${styles.inputPreview} ${variant ? variant : ""} ${className ? className : ""}`}>
          {label && <Label label={label} />}
          <div className="inputInner" dangerouslySetInnerHTML={{ __html: defaultValue }}></div>
        </div>
    }
  }

  return render();
}

export default PreviewInput;
