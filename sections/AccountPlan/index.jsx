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
import { useRouter } from 'next/router'
import UserBillingService from "../../services/UserBillingService"

const AccountPlan = ({ data, isVisible }) => {

  const { lang: { Complete, BusinessName, HomeCountry, SelectOne, Howdidyouhearaboutus, UseofAPI } } = useContext(Context)
  const { optionsHow } = data
  const form = useRef(null)
  const [isProcess, setIsProcess] = useState(false)
  const optionsCountry = useMemo(() => countryList().getData(), [])
  const [userBilling, setUserBilling] = useState({User:{}, BillingPlan: {}})
  const [useage, setUseage] = useState(null);
  const [country, setCountry] = useState(null);
  const [hearAboutUs, setHearAboutUs] = useState(null);
  const router = useRouter()

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
        setHearAboutUs(res.User.hearAboutUs)
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
      fields.hearAboutUs = hearAboutUs
      await UserBillingService.updateUser(fields);
    }

  }

  return (
    <div className={`${styles.accountPlan} ${data.className ? data.className : ""} ${visible ? "active" : ""}`}>
      <Block className="entry-3" variant="badge-wrap">
        <form name="planForm" onSubmit={onSubmit} ref={form}>
          <Container fluid className="p-0">
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
              <Input defaultValue={userBilling.User.businessName} name="businessName" variant="flat" label={BusinessName} required />
              </Col>
              <Col md={6} className="mb-4">
                <Label label={HomeCountry} />
                <Select
                  value={{ label: country}}
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
              <Col md={6} className="mb-4">
                <Label label={Howdidyouhearaboutus} />
                <Select
                  value={{ label: hearAboutUs}}
                  onChange={e => setHearAboutUs(e.label)}
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
