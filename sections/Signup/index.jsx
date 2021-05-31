import { useState, useContext, useEffect, useRef } from "react"
import { Container, Row, Col, Badge, Form } from "react-bootstrap"
import Block from "../../components/Block"
import styles from './signup.module.scss'
import typographyStyles from "../../styles/global/typography.module.scss"
import AvancedSwitch from "../../components/ui/AdvancedSwitch"
import { Context } from "../../context/context"
import appConfig from "../../configs/appConfig"
import Button from "../../components/ui/Button"
import Input from "../../components/ui/Input"
import Icon from "../../components/Icon"
import Select from "react-select"
import presetsStyles from "../../styles/global/presets.module.scss"
import { customSingleValue, scrollBar } from '../../components/ui/Helpers/UiComponents'

const Signup = ({ data, isVisible }) => {

  const { lang: { Signup, SignIn, APIplan, Viewpricingplans, Firstname, Lastname, Email, Password, Passwordmustbe, Ihaveread, EndUserAgreement } } = useContext(Context)
  const { bottom, options } = data
  const form = useRef(null)
  const [isProcess, setIsProcess] = useState(false)
  const [isAgreed, setIsAgreed] = useState(false)

  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        setVisible(true)
      }, appConfig.entryDelay * 2)
    }
  }, [isVisible])

  const onSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsProcess(true)

    if (e.target.querySelectorAll(".not-valid").length > 0) {
      setIsProcess(false)
    } else {
      const formData = new FormData(e.target)
      let json = {
      }
      let fields = {}

      formData.forEach((value, key) => {
        fields[key] = value
      })

      json.user = fields

      fetch(appConfig.apis.signup, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(json)
      }).then(response => response.json())
        .then(result => {
          setIsProcess(false)
          console.log(result)
        })
    }

  }

  return (
    <div className={`${styles.signup} ${data.className ? data.className : ""} ${visible ? "active" : ""}`}>
      <Block className="entry-3" variant="badge-wrap">
        <form name="contactForm" onSubmit={onSubmit} ref={form}>
          <Container fluid className="p-0">
            <Row>
              <Col md={6} className="mb-4">
                <Select
                  defaultValue={options[0]}
                  onChange={e => { }}
                  className={`${presetsStyles.selectLight}`}
                  classNamePrefix={'acr-select'}
                  options={options}
                  components={{
                    SingleValue: customSingleValue,
                    MenuList: scrollBar,
                  }}
                />
              </Col>
              <Col md={6} className="mb-4 d-flex align-items-center">
                <Button link="/pricing" as="link" variant="link-nondec">{Viewpricingplans}</Button>
              </Col>
              <Col md={6} className="mb-4">
                <Input name="first-name" variant="flat" label={Firstname} required />
              </Col>
              <Col md={6} className="mb-4">
                <Input name="last-name" variant="flat" label={Lastname} required />
              </Col>
              <Col md={6} className="mb-4">
                <Input name="email" variant="flat" label={Email} required />
              </Col>
              <Col md={6} className="mb-4">
                <Input name="password" variant="flat" label={Password} required />
                <div className="d-flex align-items-start mt-2"><Icon variant="lock" className={`${styles.signupLock}`} /><span className={`${typographyStyles.textRomanTiny} op-05 d-block lh-1`}>{Passwordmustbe}</span></div>
              </Col>
              <Col className="d-flex justify-content-center pb-4 align-items-center">
                <Form.Check
                  className="custom-checkbox-light"
                  value={"1"}
                  custom
                  checked={isAgreed}
                  onChange={() => setIsAgreed(!isAgreed)}
                  type="checkbox"
                  id={`agree-item`}
                  label=""
                />
                <span className={`${typographyStyles.textMediumM} op-05 mr-1`}>{Ihaveread}</span><Button link="/agreement" as="link" variant="link-gray">{EndUserAgreement}</Button>
              </Col>
              <Col md={12}>
                <Button disabled={isProcess || !isAgreed} className="w-100" variant="primary-notround-large">{Signup}</Button>
              </Col>
            </Row>
          </Container>
        </form>
      </Block>
      <div className="text-center mt-4 entry-4"><span className={`${typographyStyles.textMediumD} mr-1`}>{bottom}</span><Button as="link" link="/sign-in" variant="link">{SignIn}</Button></div>
    </div>
  );
}

export default Signup;
