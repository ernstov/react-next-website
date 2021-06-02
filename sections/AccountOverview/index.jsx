import { useState, useContext, useEffect, useRef, useMemo } from "react"
import { Container, Row, Col, Badge, Form } from "react-bootstrap"
import Block from "../../components/Block"
import styles from './overview.module.scss'
import typographyStyles from "../../styles/global/typography.module.scss"
import AvancedSwitch from "../../components/ui/AdvancedSwitch"
import { Context } from "../../context/context"
import appConfig from "../../configs/appConfig"
import Button from "../../components/ui/Button"
import Input from "../../components/ui/Input"
import InputPreview from "../../components/ui//Input/previewInput"
import Icon from "../../components/Icon"
import Select from "react-select"
import presetsStyles from "../../styles/global/presets.module.scss"
import { customSingleValue, scrollBar } from '../../components/ui/Helpers/UiComponents'
import countryList from 'react-select-country-list'
import Label from "../../components/ui/Label"
import { useRouter } from 'next/router'

const AccountOverview = ({ data, isVisible }) => {

  const { lang: { Update, BusinessName, HomeCountry, Email, Firstname, Lastname, UseofAPI, Changepassword, Status, Plan, Billing, Nextpayment, Changeplan, Apiaccess, OfRequests, ViewKeys, APIDocs, APIUsage } } = useContext(Context)
  const form = useRef(null)
  const [isProcess, setIsProcess] = useState(false)
  const optionsCountry = useMemo(() => countryList().getData(), [])
  const router = useRouter()

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

      router.push("/account/billing")  // temporally

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
    <div className={`${styles.accountOverview} ${data.className ? data.className : ""} ${visible ? "active" : ""}`}>
      <Container fluid className="p-0 mb-g">
        <Row>
          <Col>
            <div className="mt-3 mb-3 entry-1"><span className={`${typographyStyles.header3}`}>{data.title}</span></div>
          </Col>
        </Row>
        <Row>
          <Col xl={6}>
            <Block className={`entry-2 mb-xl-0 mb-4`} variant="badge-wrap">
              <Container fluid className="p-0">
                <Row>
                  <Col md={4} className="mb-4">
                    <InputPreview variant="flat" defaultValue={"Active"} label={Status} />
                  </Col>
                  <Col md={8} className={`${styles.inputRow} mb-4`}>
                    <Container fluid className={`${styles.inputContainer}`}>
                      <Row>
                        <Col md={6}><InputPreview variant="flat" defaultValue={"Standard"} label={Plan} /></Col>
                        <Col md={6} className="d-flex align-items-end mt-4 mt-md-0"><Button className="w-100" variant="outline-secondary-notround-small">{Changeplan}</Button></Col>
                      </Row>
                    </Container>
                  </Col>
                  <Col md={4} className="mb-4 mb-md-0">
                    <InputPreview variant="flat" defaultValue={"$395/mo"} label={Billing} />
                  </Col>
                  <Col md={8} className={`${styles.inputRow} mb-4 mb-md-0`}>
                    <Container fluid className={`${styles.inputContainer}`}>
                      <Row>
                        <Col md={6}><InputPreview variant="flat" defaultValue={"July 16, 2021"} label={Nextpayment} /></Col>
                        <Col md={6} className="d-flex align-items-end"><Button className="w-100 mt-4 mt-md-0" variant="outline-secondary-notround-small">{Billing}</Button></Col>
                      </Row>
                    </Container>
                  </Col>
                </Row>
              </Container>
            </Block>
          </Col>
          <Col xl={6}>
            <Block className={`entry-2`} variant="badge-wrap">
              <Container fluid className={`${styles.inputContainer}`}>
                <Row>
                  <Col md={4} className="mb-4">
                    <InputPreview variant="flat" defaultValue={"AD7^#****"} label={ViewKeys} />
                  </Col>
                  <Col md={8} className={`${styles.inputRow} mb-4`}>
                    <Container fluid className={`${styles.inputContainer}`}>
                      <Row>
                        <Col md={6} className="d-flex align-items-end"><Button className="w-100" variant="outline-secondary-notround-small">{ViewKeys}</Button></Col>
                        <Col md={6} className="d-flex align-items-end"><Button className="w-100 mt-4 mt-md-0" variant="outline-secondary-notround-small">{APIDocs}</Button></Col>
                      </Row>
                    </Container>
                  </Col>
                  <Col md={6} className="mb-4 mb-md-0">
                    <InputPreview variant="flat" defaultValue={"12,933 <span class='inputLight'>past 30 days</span>"} label={OfRequests} />
                  </Col>
                  <Col md={6} className="d-flex align-items-end"><Button className="w-100" variant="outline-secondary-notround-small">{APIUsage}</Button></Col>
                </Row>
              </Container>
            </Block>
          </Col>
        </Row>
      </Container>
      <Block className={`${styles.overviewForm} entry-4`} variant="badge-wrap">
        <form name="overviewForm" onSubmit={onSubmit} ref={form}>
          <Container fluid className="p-0">
            <Row>
              <Col md={6} className="mb-4">
                <Input placeholder={`John`} name="first-name" variant="flat" label={Firstname} required />
              </Col>
              <Col md={6} className="mb-4">
                <Input placeholder={`Smith`} name="last-name" variant="flat" label={Lastname} required />
              </Col>
              <Col md={6} className="mb-4">
                <Input placeholder={`sample@gmail.com`} name="email" variant="flat" label={Email} required />
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
            </Row>
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
                        defaultChecked={true}
                        onChange={() => { }}
                        type="radio"
                        id={`use-of-api-1`}
                        name="use-of-api"
                        label={data.label1}
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
                        label={data.label2}
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
                        label={data.label3}
                      />
                    </Col>
                  </Row>
                </Container>
              </Col>
              <Col md={6} className="mb-4">
                <Input placeholder={`Sample Co Inc.`} name="business-name" variant="flat" label={BusinessName} required />
              </Col>
              <Col md={12}>
                <Button disabled={isProcess} className="w-100" variant="primary-notround-large">{Update}</Button>
                <Button disabled={isProcess} className="w-100 mt-4" variant="link-nondec">{Changepassword}</Button>
              </Col>
            </Row>
          </Container>
        </form>
      </Block>
    </div>
  );
}

export default AccountOverview;
