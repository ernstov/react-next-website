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
import UserBillingService from "../../services/UserBillingService"
import ApiKey from "../../components/ui/ApiKey"

const AccountOverview = ({ data, isVisible }) => {

  const { lang: { Update, BusinessName, HomeCountry, Email, Firstname, Lastname, UseofAPI, Changepassword, Status, Plan, Billing, Nextpayment, Changeplan, Apiaccess, OfRequests, ViewKeys, APIDocs, APIUsage, UpdatePassword, currentPassword, newPassword, Passwordmustbe6 } } = useContext(Context)
  const form = useRef(null)
  const [isProcess, setIsProcess] = useState(false)
  const optionsCountry = useMemo(() => countryList().getData(), [])
  const [userBilling, setUserBilling] = useState({ User: {}, BillingPlan: {} })
  const [useage, setUseage] = useState(null);
  const [country, setCountry] = useState(null);
  const router = useRouter()
  const [oldPassword, setOldPassword] = useState("")
  const [password, setPassword] = useState("")
  const [password2, setPassword2] = useState("")
  const formChangePassword = useRef(null)
  const [notValid, setNotValid] = useState(true)

  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        setVisible(true)
      }, appConfig.entryDelay * 2)
    }
  }, [isVisible])

  useEffect(() => {
    UserBillingService.getUser()
      .then((res) => {
        setUserBilling(res)
        setUseage(res.User.usage)
        setCountry(res.User.homeCountry)
      });
  }, [])
  const onSubmit = async (e) => {
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
      fields.usage = useage
      fields.homeCountry = country
      await UserBillingService.updateUser(fields);

    }

  }

  let amount = "0$"
  if (userBilling.billingAmount && userBilling.billingMode) {
    amount = `${userBilling.billingAmount}$/${userBilling.billingMode && userBilling.billingMode.charAt(0)}`
  }

  const onSubmitChangePassword = (e) => {
    e.preventDefault();
    e.stopPropagation();
  }

  const onChange = () => {
    if (!oldPassword || !password || !password2 || formChangePassword.current.querySelectorAll(".not-valid").length > 0 || (!password != !password2)) {
      setNotValid(true)
    } else {
      setNotValid(false)
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
                    <InputPreview variant="flat-light" defaultValue={userBilling.status || "ACTIVE"} label={Status} />
                  </Col>
                  <Col md={8} className={`${styles.inputRow} mb-4`}>
                    <Container fluid className={`${styles.inputContainer}`}>
                      <Row>
                        <Col md={6}><InputPreview variant="flat" defaultValue={userBilling.BillingPlan.planName || "Free Trial"} label={Plan} /></Col>
                        <Col md={6} className="d-flex align-items-end mt-4 mt-md-0"><Button className="w-100" variant="outline-secondary-notround-small">{Changeplan}</Button></Col>
                      </Row>
                    </Container>
                  </Col>
                  <Col md={4} className="mb-4 mb-md-0">
                    <InputPreview variant="flat" defaultValue={amount} label={Billing} />
                  </Col>
                  <Col md={8} className={`${styles.inputRow} mb-4 mb-md-0`}>
                    <Container fluid className={`${styles.inputContainer}`}>
                      <Row>
                        <Col md={6}><InputPreview variant="flat" defaultValue={userBilling.nextPaymentAt || "N/A"} label={Nextpayment} /></Col>
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
                  <Col md={12} className="mb-4">
                    <Label label={Apiaccess} />
                    <ApiKey value={userBilling?.User?.apiKey} />
                  </Col>
                  {/* <Col md={4} className="mb-4">
                    <InputPreview variant="flat" defaultValue={"AD7^#****"} label={ViewKeys} />
                  </Col>
                  <Col md={8} className={`${styles.inputRow} mb-4`}>
                    <Container fluid className={`${styles.inputContainer}`}>
                      <Row>
                        <Col md={6} className="d-flex align-items-end"><Button className="w-100" variant="outline-secondary-notround-small">{ViewKeys}</Button></Col>
                        <Col md={6} className="d-flex align-items-end"><Button className="w-100 mt-4 mt-md-0" variant="outline-secondary-notround-small">{APIDocs}</Button></Col>
                      </Row>
                    </Container>
                  </Col> */}
                  <Col md={6} className="mb-4 mb-md-0">
                    <InputPreview variant="flat" defaultValue={"12,933 <span class='inputLight ml-1'>past 30 days</span>"} label={OfRequests} />
                  </Col>
                  {/* <Col md={6} className="d-flex align-items-end"><Button className="w-100" variant="outline-secondary-notround-small">{APIUsage}</Button></Col> */}
                </Row>
              </Container>
            </Block>
          </Col>
        </Row>
      </Container>
      <Container fluid className="p-0">
        <Row>
          <Col md={8}>
            <Block className={`${styles.overviewForm} entry-4`} variant="badge-wrap">
              <form name="overviewForm" onSubmit={onSubmit} ref={form}>
                <Container fluid className="p-0">
                  <Row>
                    <Col md={6} className="mb-4">
                      <Input placeholder={`John`} defaultValue={userBilling.User.firstName} name="firstName" variant="flat" label={Firstname} required />
                    </Col>
                    <Col md={6} className="mb-4">
                      <Input placeholder={`Smith`} defaultValue={userBilling.User.lastName} name="lastName" variant="flat" label={Lastname} required />
                    </Col>
                    <Col md={6} className="mb-4">
                      <Input placeholder={`sample@gmail.com`} defaultValue={userBilling.User.email} name="email" variant="flat" label={Email} required />
                    </Col>
                    <Col md={6} className="mb-4">
                      <Label label={HomeCountry} />
                      <Select
                        value={{ label: country }}
                        onChange={e => setCountry(e.label)}
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
                              value={data.label1}
                              custom
                              defaultChecked={data.label1 === userBilling.User.usage}
                              checked={data.label1 === useage}
                              onChange={e => setUseage(e.target.value)}
                              type="radio"
                              id={data.label1}
                              label={data.label1}
                            />
                          </Col>
                          <Col md={4}>
                            <Form.Check
                              className="custom-checkbox-light mb-3 mb-md-0"
                              value={data.label2}
                              custom
                              defaultChecked={data.label2 === userBilling.User.usage}
                              checked={data.label2 === useage}
                              onChange={e => setUseage(e.target.value)}
                              type="radio"
                              id={data.label2}
                              name="usage"
                              label={data.label2}
                            />
                          </Col>
                          <Col md={3}>
                            <Form.Check
                              className="custom-checkbox-light"
                              defaultChecked={data.label3 === userBilling.User.usage}
                              checked={data.label3 === useage}
                              value={data.label3}
                              custom
                              onChange={e => setUseage(e.target.value)}
                              type="radio"
                              id={data.label3}
                              label={data.label3}
                            />
                          </Col>
                        </Row>
                      </Container>
                    </Col>
                    <Col md={6} className="mb-4">
                      <Input placeholder={`Sample Co Inc.`} defaultValue={userBilling.User.businessName} name="businessName" variant="flat" label={BusinessName} required />
                    </Col>
                    <Col md={12}>
                      <Button disabled={isProcess} className="w-100" variant="primary-notround-large">{Update}</Button>
                    </Col>
                  </Row>
                </Container>
              </form>
            </Block>
          </Col>
        </Row>
      </Container>
      <Container fluid className="mt-4 p-0 mb-g">
        <Row>
          <Col>
            <div className="mt-3 mb-3 entry-1"><span className={`${typographyStyles.header3}`}>{Changepassword}</span></div>
          </Col>
        </Row>
        <Row>
          <Col md={8}>
            <Block className="entry-3" variant="badge-wrap">
              <form name="contactForm" onSubmit={onSubmitChangePassword} ref={formChangePassword}>
                <Container fluid className="p-0">
                  <Row>
                    <Col md={6} className="mb-4">
                      <Input name="current-password" type="password" variant="flat" label={currentPassword} required onChange={(e) => { onChange(); setOldPassword(e.target.value) }} />
                    </Col>
                    <Col md={6} className="mb-4">

                    </Col>
                    <Col md={6} className="mb-4">
                      <Input name="password" variant="flat" type="password" label={newPassword} required onChange={(e) => { onChange(); setPassword(e.target.value) }} />
                      <div className="d-flex align-items-start mt-2"><Icon variant="lock" className={`${styles.signinLock}`} /><span className={`${typographyStyles.textRomanTiny} op-05 d-block lh-1`}>{Passwordmustbe6}</span></div>
                    </Col>
                    <Col md={6} className="mb-4">
                      <Input name="password2" variant="flat" type="password" label={newPassword} required onChange={(e) => { onChange(); setPassword2(e.target.value) }} />
                    </Col>
                    <Col md={12}>
                      <Button disabled={isProcess || notValid} className="w-100" variant="primary-notround-large">{UpdatePassword}</Button>
                    </Col>
                  </Row>
                </Container>
              </form>
            </Block>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AccountOverview;
