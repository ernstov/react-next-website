import { useState, useContext, useEffect, useRef } from "react"
import { Container, Row, Col, Badge, Form } from "react-bootstrap"
import Block from "../../components/Block"
import styles from './signin.module.scss'
import typographyStyles from "../../styles/global/typography.module.scss"
import { Context } from "../../context/context"
import appConfig from "../../configs/appConfig"
import Button from "../../components/ui/Button"
import Input from "../../components/ui/Input"
import Icon from "../../components/Icon"
import AuthService from "../../services/AuthService"
import { useRouter } from 'next/router'

const Signin = ({ data, isVisible }) => {

  const { lang: { Signup, SignIn, APIplan, Viewpricingplans, Firstname, Lastname, Email, Password, Passwordmustbe, Ihaveread, EndUserAgreement } } = useContext(Context)
  const form = useRef(null)
  const [isProcess, setIsProcess] = useState(false)
  const [visible, setVisible] = useState(false)
  const router = useRouter()

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

    if (e.target.querySelectorAll(".not-valid").length > 0) {
      setIsProcess(false)
    } else {
      const formData = new FormData(e.target)
      let fields = {}

      formData.forEach((value, key) => {
        fields[key] = value
      })

      AuthService.login(JSON.stringify(fields)).then(response => {
        let routeTo = "/account/overview"
        router.push(routeTo)
      })

    }

  }

  return (
    <div className={`${styles.signin} ${data.className ? data.className : ""} ${visible ? "active" : ""}`}>
      <Block className="entry-3" variant="badge-wrap">
        <form name="contactForm" onSubmit={onSubmit} ref={form}>
          <Container fluid className="p-0">
            <Row>
              <Col md={12} className="mb-4">
                <Input name="email" variant="flat" label={Email} required />
              </Col>
              <Col md={12} className="mb-4">
                <Input name="password" variant="flat" type="password" label={Password} required />
                <div className="d-flex align-items-start mt-2"><Icon variant="lock" className={`${styles.signinLock}`} /><span className={`${typographyStyles.textRomanTiny} op-05 d-block lh-1`}>{Passwordmustbe}</span></div>
              </Col>
              <Col md={12}>
                <Button disabled={isProcess} className="w-100" variant="primary-notround-large">{SignIn}</Button>
              </Col>
            </Row>
          </Container>
        </form>
      </Block>
    </div>
  );
}

export default Signin;
