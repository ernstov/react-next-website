import { useState, useContext, useEffect, useRef, useMemo } from "react"
import { Container, Row, Col, Badge, Form } from "react-bootstrap"
import Block from "../../components/Block"
import styles from './billing.module.scss'
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
import { numberWithCommas } from "../../utils/"

const AccountBilling = ({ data, isVisible }) => {

  const { lang: { Startplan, plan, APIplan, BillingUSD, Monthly, Yearly, mo, yr, Save10, Billingdetails, CardNumber, CardholderName, CVC, Expiration, digitcode } } = useContext(Context)
  const { optionsExpirationMonths, optionsExpirationYears, pricing: { plans } } = data
  const form = useRef(null)
  const [isProcess, setIsProcess] = useState(false)
  const optionsCountry = useMemo(() => countryList().getData(), [])
  const [visible, setVisible] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState({ value: 0, label: plans.list[0].name })
  const [isYearly, setIsYearly] = useState(false)

  const customStyles = {
    container: provided => ({
      ...provided,
      minWidth: "0",
      width: "100%"
    })
  };

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
    <div className={`${styles.accountBilling} ${data.className ? data.className : ""} ${visible ? "active" : ""}`}>
      <Block className="entry-3" variant="badge-wrap">
        <form name="billingForm" onSubmit={onSubmit} ref={form}>
          <Container fluid className="p-0">
            <Row>
              <Col md={6} className="mb-4">
                <Label label={APIplan} />
                <Select
                  defaultValue={selectedPlan}
                  onChange={setSelectedPlan}
                  className={`${presetsStyles.selectLight} mb-4`}
                  classNamePrefix={'acr-select'}
                  options={plans.list.map((plan, i) => ({ value: i, label: plan.name }))}
                  components={{
                    SingleValue: customSingleValue,
                    MenuList: scrollBar,
                  }}
                />
                <Label label={BillingUSD} />
                <div className={`${styles.stylesRadio} mb-2 ${!isYearly ? "active" : ""}`}>
                  <div className={`${styles.stylesRadioInner}`}>
                    <Form.Check
                      className="custom-checkbox-light mb-3 mb-md-0"
                      value={false}
                      custom
                      defaultChecked={true}
                      onChange={(e) => { setIsYearly(e.target.value == "true") }}
                      type="radio"
                      id={`use-period-monthly`}
                      name="period"
                      label={Monthly}
                    />
                    <div>
                      <span className={`${typographyStyles.titleDemi}`}>${plans.list[selectedPlan.value].price}<span className={`${typographyStyles.tinyD} op-05`}>/{mo}</span></span>
                    </div>
                  </div>
                </div>
                <div className={`${styles.stylesRadio}  ${isYearly ? "active" : ""}`}>
                  <div className={`${styles.stylesRadioInner}`}>
                    <Form.Check
                      className="custom-checkbox-light mb-3 mb-md-0"
                      value={true}
                      custom
                      onChange={(e) => { setIsYearly(e.target.value == "true") }}
                      type="radio"
                      id={`use-period-yearly`}
                      name="period"
                      label={Yearly}
                    />
                    <div>
                      <span className={`${typographyStyles.titleDemi}`}>${numberWithCommas(Math.floor(plans.list[selectedPlan.value].price * 12 * 0.9))}<span className={`${typographyStyles.tinyD} op-05`}>/{yr}</span></span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`${styles.badge}`}><span>{Save10}</span></div>
                  </div>
                </div>
              </Col>
              <Col md={6} className="mb-4 d-flex align-items-center">
                <Block className="w-100" variant="stick">
                  <div><span className={`${typographyStyles.titleSmallD} ${typographyStyles.c7}`}>{plans.list[selectedPlan.value].name} {plan}</span></div>
                  <div className="mt-3 mb-3"><span className={`${typographyStyles.textRomanSm} ${typographyStyles.c7}`}>{plans.list[selectedPlan.value].description}</span></div>
                  <ul className="list-gray">
                    {plans.list[selectedPlan.value].features.map((feature, i) => (
                      <li key={`lif-${i}`}><span className={`${typographyStyles.c7}`}>{feature}</span></li>
                    ))}
                  </ul>
                </Block>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col><div className={`${styles.bilingTitles}`}><Icon className="mr-2" variant="lock" /><span className={`${typographyStyles.textSubTitleM}`}>{Billingdetails}</span></div></Col>
            </Row>
            <Row>
              <Col md={6} className="mb-4">
                <div className={`${styles.cardLabel}`}><Label label={CardNumber} /><div><img src="/img/visa.png" alt="" /><img src="/img/master.png" alt="" /><img src="/img/card.png" alt="" /></div></div>
                <Input name="card-number" variant="flat" placeholder="1111 2222 3333 4444" required />
              </Col>
              <Col md={6} className="mb-4">
                <Container fluid className="p-0">
                  <Row>
                    <Col>
                      <Input name="cvc" variant="flat" label={CVC} placeholder="000" required />
                    </Col>
                    <Col className="d-flex align-items-end pb-3">
                      <span className={`${typographyStyles.tinyReg}`}>{digitcode}</span>
                    </Col>
                  </Row>
                </Container>
              </Col>
              <Col md={6} className="mb-4">
                <Input name="name" variant="flat" placeholder="Andrii Smith" label={CardholderName} required />
              </Col>
              <Col md={6}>
                <Container fluid className="p-0">
                  <Row>
                    <Col md={6} className="pb-3 pb-md-0">
                      <Label label={Expiration} />
                      <Select
                        onChange={e => { }}
                        styles={customStyles}
                        className={`${presetsStyles.selectLight} white`}
                        classNamePrefix={'acr-select'}
                        options={optionsExpirationMonths}
                        placeholder={`MM`}
                        components={{
                          SingleValue: customSingleValue,
                          MenuList: scrollBar,
                        }}
                      />
                    </Col>
                    <Col md={6} className="d-flex align-items-end pb-3 pb-md-0">
                      <Select
                        onChange={e => { }}
                        styles={customStyles}
                        className={`${presetsStyles.selectLight} white`}
                        classNamePrefix={'acr-select'}
                        options={optionsExpirationYears}
                        placeholder={`YYYY`}
                        components={{
                          SingleValue: customSingleValue,
                          MenuList: scrollBar,
                        }}
                      />
                    </Col>
                  </Row>
                </Container>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <div className="text-center mb-4">
                  <span className={`${typographyStyles.textMediumReg}`}>{data.description}</span>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Button disabled={isProcess} className="w-100" variant="primary-notround-large">{Startplan}</Button>
              </Col>
            </Row>
          </Container>
        </form>
      </Block>
    </div >
  );
}

export default AccountBilling;
