import { useState, useContext, useEffect, useRef } from "react"
import { Container, Row, Col, Badge, Collapse } from "react-bootstrap"
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
import presetsStyles from "../../styles/global/presets.module.scss"

const Signin = ({ data, isVisible }) => {

  const { lang: { SignIn, Email, Password, Notregisteredyet, Signup } } = useContext(Context)
  const form = useRef(null)
  const [isProcess, setIsProcess] = useState(false)
  const [visible, setVisible] = useState(false)
  const router = useRouter()
  const [notValid, setNotValid] = useState(true)
  const [login, setLogin] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        setVisible(true)
      }, appConfig.entryDelay * 2)
    }
  }, [isVisible])

  useEffect(() => {
    if (!login || !password || form.current.querySelectorAll(".not-valid").length > 0) {
      setNotValid(true)
    } else {
      setNotValid(false)
    }
  }, [login, password])

  const onSubmit = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsProcess(true)

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
        setIsProcess(false)
      }, error => {
        setError(error)
        setIsProcess(false)
        
        setTimeout(()=>{
          setError(null)
        }, 5000)
      })
    }
  }

  return (
    <>
      <div className={`${styles.signin} ${data.className ? data.className : ""} ${visible ? "active" : ""}`}>
        <Collapse in={error}>
          <div className={`${styles.signinError} pb-4 ${visible ? "active" : ""}`}>
            <Container fluid className="p-0">
              <Row>
                <Col>
                  <div className={`${presetsStyles.labelError}`}><span>{error}</span></div>
                </Col>
              </Row>
            </Container>
          </div>
        </Collapse>
        <Block className="entry-3" variant="badge-wrap">
          <form name="contactForm" onSubmit={onSubmit} ref={form}>
            <Container fluid className="p-0">
              <Row>
                <Col md={12} className="mb-4">
                  <Input name="email" variant="flat" label={Email} required onChange={(e) => { setLogin(e.target.value) }} />
                </Col>
                <Col md={12} className="mb-4">
                  <Input name="password" variant="flat" type="password" label={Password} required onChange={(e) => { setPassword(e.target.value) }} />
                </Col>
                <Col md={12}>
                  <Button disabled={isProcess || notValid} className="w-100" variant="primary-notround-large">{SignIn}</Button>
                </Col>
              </Row>
            </Container>
          </form>
        </Block>
      </div>
      <div className={`${styles.signinBottom} ${visible ? "active" : ""}`}>
        <Container fluid className="entry-3 p-0">
          <Row>
            <Col><span>{Notregisteredyet}</span> <Button link="/sign-up" as="link" variant="link">{Signup}</Button></Col>
          </Row>
        </Container>
      </div>
      <div className="pb-5">
        <div className={`${styles.signinBadge} mt-3 mb-5 ${visible ? "active" : ""}`}>
          <Container fluid className="p-0 entry-3">
            <Row>
              <Col><div className={`${presetsStyles.labelSecondaryLight}`}><span>{data.label}</span></div></Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default Signin;
