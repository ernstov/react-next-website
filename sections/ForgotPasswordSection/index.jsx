import { useState, useContext, useEffect, useRef } from "react"
import { Container, Row, Col, Badge, Collapse } from "react-bootstrap"
import Block from "../../components/Block"
import styles from './forgotPassword.module.scss'
import typographyStyles from "../../styles/global/typography.module.scss"
import { Context } from "../../context/context"
import appConfig from "../../configs/appConfig"
import Button from "../../components/ui/Button"
import Input from "../../components/ui/Input"
import Icon from "../../components/Icon"
import AuthService from "../../services/AuthService"
import { useRouter } from 'next/router'
import presetsStyles from "../../styles/global/presets.module.scss"

const forgotPassword = ({ data, isVisible }) => {

  const { lang: { Email, ResetPassword, Notregisteredyet } } = useContext(Context)
  const form = useRef(null)
  const [isProcess, setIsProcess] = useState(false)
  const [visible, setVisible] = useState(false)
  const router = useRouter()
  const [notValid, setNotValid] = useState(true)
  const [login, setLogin] = useState("")
  const [error, setError] = useState("")
  const { label, label2, completedTitle, completedDescription } = data
  const [isCompleted, setIsCompleted] = useState(true)

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        setVisible(true)
      }, appConfig.entryDelay * 2)
    }
  }, [isVisible])

  useEffect(() => {
    if (!login || form.current.querySelectorAll(".not-valid").length > 0) {
      setNotValid(true)
    } else {
      setNotValid(false)
    }
  }, [login])

  const onSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
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
        setIsProcess(false)
        let routeTo = "/account/overview"
        router.push(routeTo)
        setIsCompleted(true)
      }, error => {
        setError(error)
        setIsProcess(false)
        setTimeout(() => {
          setError(null)
        }, 5000)
      })
    }
  }

  return (
    <>
      <div className={`${styles.forgotPassword} ${data.className ? data.className : ""} ${visible ? "active" : ""}`}>
        <Collapse in={error}>
          <div className={`${styles.forgotPasswordError} pb-4 ${visible ? "active" : ""}`}>
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
          {!isCompleted ?
            <form name="contactForm" onSubmit={onSubmit} ref={form}>
              <Container fluid className="p-0">
                <Row>
                  <Col md={12} className="mb-4">
                    <Input name="email" variant="flat" label={Email} required onChange={(e) => { setLogin(e.target.value) }} />
                  </Col>
                  <Col md={12}>
                    <Button disabled={isProcess || notValid} className="w-100" variant="primary-notround-large">{ResetPassword}</Button>
                  </Col>
                </Row>
              </Container>
            </form>
            :
            <Container>
              <Row>
                <Col>
                  <div className={`${styles.completedIcon} text-center mb-3`}><Icon variant="completed-circle" /></div>
                  <div className="text-center mb-3"><span className={`${typographyStyles.titleDemi}`}>{completedTitle}</span></div>
                  <div className="text-center"><span className={`${typographyStyles.textLg}`}>{completedDescription}</span></div>
                </Col>
              </Row>
            </Container>
          }

        </Block>
      </div>
      <div className={`${styles.forgotPasswordBottom} ${visible ? "active" : ""}`}>
        <Container fluid className="entry-3 p-0">
          <Row>
            <Col md={12}><span>{label}</span> <a href="mailto:data@goperigon.com">data@goperigon.com</a></Col>
            <Col md={12}><span dangerouslySetInnerHTML={{ __html: label2 }}></span></Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default forgotPassword;
