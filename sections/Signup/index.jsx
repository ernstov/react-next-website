import { useState, useContext, useEffect, useRef } from "react"
import { Container, Row, Col, Badge, Form, Collapse } from "react-bootstrap"
import Block from "../../components/Block"
import styles from './signup.module.scss'
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
import AuthService from "../../services/AuthService"
import { useRouter } from 'next/router'

const ALLOWED_COUPONS = {}

const Signup = ({ data, isVisible }) => {

  const { dispatchApp, lang: { Signup, SignIn, APIplan, Viewpricingplans, Firstname, Lastname, Email, Password, trialIncluded, Passwordmustbe6, Ihaveread, EndUserAgreement } } = useContext(Context)
  const { bottom, options } = data
  const form = useRef(null)
  const [isProcess, setIsProcess] = useState(false)
  const [isAgreed, setIsAgreed] = useState(false)
  const [error, setError] = useState(null)

  const [visible, setVisible] = useState(false)
  const router = useRouter()

  const [billingPlanOptions, setBillingPlanOptions] = useState([{value: "Hacker News", label: "Hacker News (Free)"}, ...options])
  const [selectedPlan, setSelectedPlan] = useState(billingPlanOptions.find(el => el.value === "Standard"))

  useEffect(() => {
    if (!router.isReady || !router.query) {
      return
    }

    const { planName, coupon } = router.query

    if (coupon && ALLOWED_COUPONS[coupon]) {
      setBillingPlanOptions([ALLOWED_COUPONS[coupon], ...options])
      setSelectedPlan(ALLOWED_COUPONS[coupon])
    } else if (planName) {
      const plan = billingPlanOptions.find(el => el.value === router.query.planName)
      if (plan) {
        setSelectedPlan(plan)
      }
    }
  }, [router.isReady])

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        setVisible(true)
      }, appConfig.entryDelay)
    }
  }, [isVisible])

  const onSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsProcess(true)

    if (e.target.querySelectorAll(".not-valid").length === 0) {
      const formData = new FormData(e.target)
      let fields = {}

      formData.forEach((value, key) => {
        fields[key] = value
      })

      try {
        const user = await AuthService.signup(JSON.stringify(fields));
        dispatchApp({ type: 'SET_USER', data: { user } });
        await router.push({
          pathname: "/account/details",
          query: { billingPlan: fields.billingPlan, name: fields.firstName }
        });
      } catch (e) {
        setError(e);
        setTimeout(() => setError(null), 5000);
        console.log(e);
      }
    }

    setIsProcess(false)
  }

  return (
    <div className={`${styles.signup} ${data.className ? data.className : ""} ${visible ? "active" : ""}`}>
      <Collapse in={error}>
        <div className={`${styles.signupError} pb-4 ${visible ? "active" : ""}`}>
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
              <Col md={6} className="mb-4 mb-md-0">
                <Select
                  value={selectedPlan}
                  onChange={setSelectedPlan}
                  className={`${presetsStyles.selectLight}`}
                  classNamePrefix={'acr-select'}
                  options={billingPlanOptions}
                  components={{
                    SingleValue: customSingleValue,
                    MenuList: scrollBar,
                  }}
                  name="billingPlan"
                />
                <div className="d-block d-md-none mt-2">
                  <span className={`${typographyStyles.textRomanTiny} op-05 d-block lh-1`}>{trialIncluded}</span>
                </div>
              </Col>
              <Col md={6} className="mb-4 mb-md-0 d-flex align-items-center">
                <Button link="/data-solutions/pricing" as="link" variant="link-nondec">{Viewpricingplans}</Button>
              </Col>
              <Col md={12} className="mb-4 mt-2 d-none d-md-block">
                <span className={`${typographyStyles.textRomanTiny} op-05 d-block lh-1`}>{trialIncluded}</span>
              </Col>
              <Col md={6} className="mb-4">
                <Input name="firstName" variant="flat" label={Firstname} required />
              </Col>
              <Col md={6} className="mb-4">
                <Input name="lastName" variant="flat" label={Lastname} required />
              </Col>
              <Col md={6} className="mb-4">
                <Input name="email" variant="flat" label={Email} required />
              </Col>
              <Col md={6} className="mb-4">
                <Input name="password" variant="flat" type="password" label={Password} required />
                <div className="d-flex align-items-start mt-2"><Icon variant="lock" className={`${styles.signupLock}`} /><span className={`${typographyStyles.textRomanTiny} op-05 d-block lh-1`}>{Passwordmustbe6}</span></div>
              </Col>
              <Col className="d-flex justify-content-center pb-4 align-items-center">
                <Form.Check
                  className="custom-checkbox-light"
                  value={"1"}
                  custom
                  checked={isAgreed}
                  onChange={() => setIsAgreed(!isAgreed)}
                  type="checkbox"
                  id={`agree-item`}
                  label=""
                />
                <span className={`${typographyStyles.textMediumM} op-05 mr-1`}>{Ihaveread}</span><Button link="/EULA.pdf" as="url" variant="link-gray">{EndUserAgreement}</Button>
              </Col>
              <Col md={12}>
                <Button disabled={isProcess || !isAgreed} className="w-100" variant="primary-notround-large">{Signup}</Button>
              </Col>
            </Row>
          </Container>
        </form>
      </Block>
      <div className="text-center mt-4 entry-4"><span className={`${typographyStyles.textMediumD} mr-1`}>{bottom}</span><Button as="link" link="/sign-in" variant="link">{SignIn}</Button></div>
    </div>
  );
}

export default Signup;
