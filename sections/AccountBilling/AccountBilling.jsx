import { useState, useContext, useEffect, useRef, useMemo } from "react"
import { Container, Row, Col, Badge, Form } from "react-bootstrap"
import Block from "../../components/Block"
import styles from './billing.module.scss'
import typographyStyles from "../../styles/global/typography.module.scss"
import { Context } from "../../context/context"
import appConfig from "../../configs/appConfig"
import Button from "../../components/ui/Button"
import Icon from "../../components/Icon"
import Select from "react-select"
import presetsStyles from "../../styles/global/presets.module.scss"
import { customSingleValue, scrollBar } from '../../components/ui/Helpers/UiComponents'
import BillingPlanService from "../../services/BillingPlanService"
import UserBillingService from "../../services/UserBillingService"
import countryList from 'react-select-country-list'
import Label from "../../components/ui/Label"
import {
  useStripe,
  useElements,
  CardElement
} from "@stripe/react-stripe-js"


const AccountBilling = ({ data, isVisible }) => {

  console.log("data", isVisible);

  const { lang: { Startplan, plan, APIplan, BillingUSD, Monthly, Yearly, mo, yr, Save10, Billingdetails, CardNumber, CardholderName, CVC, Expiration, digitcode } } = useContext(Context)
  const { optionsExpirationMonths, optionsExpirationYears, pricing: { plans } } = data
  const form = useRef(null)
  const [isProcess, setIsProcess] = useState(false)
  const optionsCountry = useMemo(() => countryList().getData(), [])
  const [visible, setVisible] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState({ value: 0, label: plans.list[0].name })
  const [isYearly, setIsYearly] = useState(false)
  const [billingPlan, setBillingPlan] = useState([])
  const stripe = useStripe();
  const elements = useElements();


  const CARD_OPTIONS = {
    style: {
      base: {
        'color': '#32325d',
        'fontFamily': '"Helvetica Neue", Helvetica, sans-serif',
        'fontSmoothing': 'antialiased',
        'fontSize': '16px',
        '::placeholder': {
          color: '#aab7c4',
        },
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a',
      },
    },
  };

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

  useEffect(() => {
    BillingPlanService.getAllBillingPlans()
      .then((res) => {
        setBillingPlan(res);
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

      const cardElement = elements.getElement(CardElement)

      // TODO : call create subscription api
      const body = {
        billingMode: isYearly ? "YEARLY" : "MONTHLY",
        billingPlanId: billingPlan[selectedPlan.value].id,
        userId: 1,
        email: "alfa@gmail.com"
      }
      const data = await UserBillingService.addPlan(body);
      // Use card Element to tokenize payment details
      let { error, paymentIntent } = await stripe.confirmCardPayment(data.clientSecret, {
        payment_method: {
          card: cardElement,
          billing_details: {
            email: 'beta@gmail.com'
          }
        }
      });
    }
  }

  return (
    <div className={`${styles.accountBilling} ${data.className ? data.className : ""} ${visible ? "active" : ""}`}>
      <Block className="entry-3" variant="badge-wrap">
        <form name="billingForm" ref={form} onSubmit={onSubmit}>
          <Container fluid className="p-0">
            <Row>
              <Col md={6} className="mb-4">
                <Label label={APIplan} />
                <Select
                  defaultValue={selectedPlan}
                  onChange={setSelectedPlan}
                  className={`${presetsStyles.selectLight} mb-4`}
                  classNamePrefix={'acr-select'}
                  options={billingPlan.map((plan, i) => ({ value: i, label: plan.planName }))}
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
                      <span className={`${typographyStyles.titleDemi}`}>${billingPlan[selectedPlan.value] ? billingPlan[selectedPlan.value].monthlyPrice : 0}<span className={`${typographyStyles.tinyD} op-05`}>/{mo}</span></span>
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
                      <span className={`${typographyStyles.titleDemi}`}>${billingPlan[selectedPlan.value] ? billingPlan[selectedPlan.value].yearlyPrice : 0}<span className={`${typographyStyles.tinyD} op-05`}>/{yr}</span></span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`${styles.badge}`}><span>{Save10}</span></div>
                  </div>
                </div>
              </Col>
              <Col md={6} className="mb-4 d-flex align-items-center">
                <Block className="w-100" variant="stick">
                  <div><span className={`${typographyStyles.titleSmallD} ${typographyStyles.c7}`}>{billingPlan[selectedPlan.value] ? billingPlan[selectedPlan.value].planName : ""} {plan}</span></div>
                  <div className="mt-3 mb-3"><span className={`${typographyStyles.textRomanSm} ${typographyStyles.c7}`}>{billingPlan[selectedPlan.value] ? billingPlan[selectedPlan.value].description : ""}</span></div>
                  <ul className="list-gray">
                    {billingPlan[selectedPlan.value] ? billingPlan[selectedPlan.value].features.split(",").map((feature, i) => (
                      <li key={`lif-${i}`}><span className={`${typographyStyles.c7}`}>{feature}</span></li>
                    )) : ""}
                  </ul>
                </Block>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col><div className={`${styles.bilingTitles}`}><Icon className="mr-2" variant="lock" /><span className={`${typographyStyles.textSubTitleM}`}>{Billingdetails}</span></div></Col>
            </Row>
            <Row>
              <Col md={12} className="mb-4">
                <div className={`${styles.cardLabel}`}><Label label={CardNumber} /><div><img src="/img/visa.png" alt="" /><img src="/img/master.png" alt="" /><img src="/img/card.png" alt="" /></div></div>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="mb-4">
                <CardElement options={CARD_OPTIONS} />
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
                <Button disabled={isProcess} className="w-100" variant="primary-notround-large" >{Startplan}</Button>
              </Col>
            </Row>
          </Container>
        </form>
      </Block>
    </div >
  );
}

export default AccountBilling;
