import { useState, useContext, useEffect, useRef, useMemo } from "react"
import { Container, Row, Col, Badge, Form } from "react-bootstrap"
import Block from "../../components/Block"
import styles from './plan.module.scss'
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
import countryList from 'react-select-country-list'
import Label from "../../components/ui/Label"

const AccountPlan = ({ data, isVisible }) => {

  const { lang: { Complete, BusinessName, HomeCountry, SelectOne, Howdidyouhearaboutus, UseofAPI } } = useContext(Context)
  const { optionsHow } = data
  const form = useRef(null)
  const [isProcess, setIsProcess] = useState(false)
  const optionsCountry = useMemo(() => countryList().getData(), [])

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
              <Col md={12} className="pb-4">
                <Container fluid className="p-0">
                  <Row>
                    <Col md={12} className="pb-3"><Label label={UseofAPI} /></Col>
                    <Col md={5}>
                      <Form.Check
                        className="custom-checkbox-light mb-3 mb-md-0"
                        value={"1"}
                        custom
                        onChange={() => { }}
                        type="radio"
                        id={`use-of-api-1`}
                        name="use-of-api"
                        label="Business or Commercial"
                      />
                    </Col>
                    <Col md={4}>
                      <Form.Check
                        className="custom-checkbox-light mb-3 mb-md-0"
                        value={"2"}
                        custom
                        onChange={() => { }}
                        type="radio"
                        id={`use-of-api-2`}
                        name="use-of-api"
                        label="Personal Project"
                      />
                    </Col>
                    <Col md={3}>
                      <Form.Check
                        className="custom-checkbox-light"
                        value={"3"}
                        custom
                        onChange={() => { }}
                        type="radio"
                        id={`use-of-api-3`}
                        name="use-of-api"
                        label="Academic"
                      />
                    </Col>
                  </Row>
                </Container>
              </Col>
              <Col md={6} className="mb-4">
                <Input name="business-name" variant="flat" label={BusinessName} required />
              </Col>
              <Col md={6} className="mb-4">
                <Label label={HomeCountry} />
                <Select
                  defaultValue={{ label: "United States", value: "US" }}
                  onChange={e => { }}
                  className={`${presetsStyles.selectLight} white`}
                  classNamePrefix={'acr-select'}
                  options={optionsCountry}
                  components={{
                    SingleValue: customSingleValue,
                    MenuList: scrollBar,
                  }}
                />
              </Col>
              <Col md={6} className="mb-4">
                <Label label={Howdidyouhearaboutus} />
                <Select
                  onChange={e => { }}
                  className={`${presetsStyles.selectLight} white`}
                  classNamePrefix={'acr-select'}
                  options={optionsHow}
                  placeholder={`${SelectOne}`}
                  components={{
                    SingleValue: customSingleValue,
                    MenuList: scrollBar,
                  }}
                />
              </Col>
              <Col md={12}>
                <Button disabled={isProcess} className="w-100" variant="primary-notround-large">{Complete}</Button>
              </Col>
            </Row>
          </Container>
        </form>
      </Block>
    </div>
  );
}

export default AccountPlan;
