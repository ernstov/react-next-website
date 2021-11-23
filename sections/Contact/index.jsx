import React, { useEffect, useState, useContext } from "react"
import { Container, Row, Col, Collapse, Card } from "react-bootstrap"
import Icon from "../../components/Icon"
import { Context } from "../../context/context"
import apiConfig from "../../configs/apiConfig"
import styles from './contact.module.scss'
import typographyStyles from "../../styles/global/typography.module.scss"
import Button from "../../components/ui/Button"
import Input from "../../components/ui/Input"
import Select from "react-select"
import { customSingleValue, scrollBar } from '../../components/ui/Helpers/UiComponents'
import presetsStyles from "../../styles/global/presets.module.scss"
import appConfig from "../../configs/appConfig"

const Contact = ({ data, isVisible, question, isWrap }) => {

  const [visible, setVisible] = useState(false)
  const { title, description, buttons, label } = data
  const { lang: { Submit, Name, yourEmail, SelectOne, Typeyourmessagehere, successMessage } } = useContext(Context)
  const [isProcess, setIsProcess] = useState(false)
  const [isCompleted, setIsCompleted] = useState(false)

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        setVisible(true)
      }, 500)
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
        user: {}
      }
      let fields = {}

      formData.forEach((value, key) => {
        fields[key] = value
      })

      json = fields

      fetch(apiConfig.contact, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(json)
      }).then(response => response.json())
        .then(result => {
          setIsProcess(false)
          setIsCompleted(true)
          console.log(result)
        })
    }

  }

  return (
    <div className={`${styles.contact} ${data.className ? data.className : ""} ${visible ? "active" : ""}`} id="contact">
      <Container fluid className="p-0">
        <Row>
          <Col lg={4} className="text-center text-md-left">
            {title && <h2 className={`${typographyStyles.textDemi2} ${typographyStyles.fontBase} entry-1`}>{title}</h2>}
            {description && <p className={`${typographyStyles.textDemiGrey} mb-4 entry-2`}>{description}</p>}
            {buttons && <div>{buttons.map((button, i) => (
              <div key={`cb-${i}`} className={`entry-${i + 2}`}><Button size="sm" as="url-same" link={button.link} className={`${button.className ? button.className : ""} justify-content-start mb-3`} variant="dark-np"><Icon variant={button.icon} /><span className="ml-2">{button.name}</span></Button></div>
            ))}</div>}
            {label && <div><span className={`${typographyStyles.textRomanSm} d-block mb-3 mb-md-0 entry-4`}>{label}</span></div>}
          </Col>
          <Col lg={8} className="entry-4">
            {isCompleted ?
              <div className={`${styles.success}`}>
                <span className={`${typographyStyles.textSubMd}`}>{successMessage}</span>
              </div>
              :
              <form name="contactForm" onSubmit={onSubmit}>
                <Container fluid className="p-0">
                  <Row>
                    <Col md={6} className="pl-3 pl-md-5">
                      <Input className="mb-3" placeholder={Name} name="name" required />
                      <Input className="mb-3" tyle="email" required placeholder={yourEmail} name="email" />
                      <Select
                        placeholder={SelectOne}
                        name="select"
                        className={`${presetsStyles.selectLight} white neutral mb-4`}
                        classNamePrefix={'acr-select'}
                        options={[{value: "Option 1", label: "Option 1"}, {value: "Option 2", label: "Option 2"}, {value: "Option 2", label: "Option 2"}]}
                        components={{
                          SingleValue: customSingleValue,
                          MenuList: scrollBar,
                        }}
                      />
                    </Col>
                    <Col md={6}>
                      <Input className="h-100" type="textarea" placeholder={Typeyourmessagehere} name="message" />
                    </Col>
                  </Row>
                  <Row className="mt-3">
                    <Col md={6}></Col><Col md={6} className="text-right"><Button size="sm" disabled={isProcess} className="w-100" variant="primary">{Submit}</Button></Col>
                  </Row>
                </Container>
              </form>
            }
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
