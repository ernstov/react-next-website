import typographyStyles from "../../../styles/global/typography.module.scss"
import presetsStyles from "../../../styles/global/presets.module.scss"

const Label = ({ variant, className, label }) => {

  return <div className={`${presetsStyles.labelMargin} ${className ? className : ""}`}><span className={`${typographyStyles.labelForm}`}>{label}</span></div>;
}

export default Label;
