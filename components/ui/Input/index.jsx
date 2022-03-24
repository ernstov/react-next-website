import { useState, useRef, useEffect } from "react"
import styles from './input.module.scss'
import * as bootstrapValidate from 'bootstrap-validate'
import Label from "../Label"
import moment from "moment"

const Input = ({ variant, className, placeholder, name, onChange, defaultValue, type, required, label, value, filter }) => {

  const [isFocus, setIsFocus] = useState(false)
  const inputR = useRef(null)
  const [valid, setValid] = useState(null)
  const [v, setV] = useState(value)

  useEffect(() => {
    setV(value)
  }, [value])

  useEffect(() => {
    validate();
  }, []);

  const onChangeValue = (e) => {
    if (filter) {
      switch (filter) {
        case "date":
          const te = e.target.value.replace(/[^0-9]/g,'')
          const p1 = te.slice(0, 4)
          const p2 = te.slice(4, 6)
          const p3 = te.slice(6, 8)

          let result = ""

          if(p1) result += (Number(p1) < Number(moment().format('YYYY')) + 1) ? p1 : moment().format('YYYY')
          if(p2) result += `-${(Number(p2) < 13) ? p2 : 12}`
          if(p3) result += `-${(Number(p3) < 32) ? p3 : 31}`

          if (onChange) onChange({ target: { value: result }})
          break;
        default:
          if (onChange) onChange(e)
          break;
      }
    } else {
      if (onChange) onChange(e)
    }
  }

  const validate = () => {
    switch (name) {
      case 'card-number':
        bootstrapValidate(inputR.current, 'regex:^[0-9]{16}$:', setValidaion);
        break;
      case 'cvc':
        bootstrapValidate(inputR.current, 'regex:^[0-9]{3,}$:', setValidaion);
        break;
      case 'email':
        bootstrapValidate(inputR.current, 'email:', setValidaion);
        break;
      case 'address':
        bootstrapValidate(inputR.current, 'min:5:', setValidaion);
        break;
      case 'phone':
        bootstrapValidate(inputR.current, 'min:6:', setValidaion);
        break;
      case 'name':
      case 'first-name':
      case 'last-name':
      case 'lastName':
        bootstrapValidate(inputR.current, 'min:2:', setValidaion);
        break;
      case 'city':
        bootstrapValidate(inputR.current, 'min:2:', setValidaion);
        break;
      case 'card-number':
        bootstrapValidate(inputR.current, 'min:2:', setValidaion);
        break;
      case 'zip':
        bootstrapValidate(inputR.current, 'regex:^(?:[A-Z0-9]+([- ]?[A-Z0-9]+)*)?$:Enter a valid Zip code!', setValidaion);
        break;
      // case 'startingOn':
      // case 'endingOn':
      //   bootstrapValidate(inputR.current, 'regex:^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$:Enter a valid Date!', setValidaion);
      //   break;
      case 'password':
      case 'password2':
      case 'current-password':
        bootstrapValidate(inputR.current, 'min:6:', setValidaion);
        // bootstrapValidate(inputR.current, 'regex:^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])(?!.* ).{6,}$:', setValidaion);
        break;
    }
  };

  const setValidaion = (isValid) => {
    setValid(isValid)
  };

  const renderInput = () => {
    switch (type) {
      case "textarea":
        return <textarea
          type={"textarea"}
          placeholder={placeholder}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          name={name}
          defaultValue={defaultValue}
          value={v}
          onChange={onChangeValue}
          required={required ? required : false}
          ref={inputR}
        ></textarea>
      case "text":
      default:
        return <input
          type={type ? type : "text"}
          placeholder={placeholder}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          name={name}
          defaultValue={defaultValue}
          value={v}
          onChange={onChangeValue}
          required={required ? required : false}
          ref={inputR}
        />
    }
  }

  const render = () => {
    switch (variant) {
      case "base":
      case "form":
      default:
        return <div className={`${styles.input} ${variant ? variant : ""} ${isFocus ? "focus" : ""} ${className ? className : ""} ${valid == null ? "" : valid ? "valid" : "not-valid"}`}>
          {label && <Label label={label} />}
          {renderInput()}
        </div>
    }
  }

  return render();
}

export default Input;
