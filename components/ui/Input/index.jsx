import { useState, useRef, useEffect } from "react"
import styles from './input.module.scss'
import * as bootstrapValidate from 'bootstrap-validate';

const Input = ({ variant, className, placeholder, name, onChange, defaultValue, type, required }) => {

  const [isFocus, setIsFocus] = useState(false)
  const inputR = useRef(null)
  const [valid, setValid] = useState(null)

  useEffect(() => {
    validate();
  }, []);

  const validate = () => {
    switch (name) {
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
        bootstrapValidate(inputR.current, 'min:2:', setValidaion);
        break;
      case 'lastName':
        bootstrapValidate(inputR.current, 'min:2:', setValidaion);
        break;
      case 'city':
        bootstrapValidate(inputR.current, 'min:2:', setValidaion);
        break;
      case 'zip':
        bootstrapValidate(inputR.current, 'regex:^(?:[A-Z0-9]+([- ]?[A-Z0-9]+)*)?$:Enter a valid Zip code!', setValidaion);
        break;
      case 'password':
        bootstrapValidate(inputR.current, 'regex:^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])(?!.* ).{10,}$:Enter a password that contains at least 10 characters, one special character, a capital letter, and a number!', setValidaion);
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
          onChange={onChange}
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
          onChange={onChange}
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
          {renderInput()}
        </div>
    }
  }

  return render();
}

export default Input;