import React, { useEffect, useState, useContext } from "react"
import { Container, Row, Col, Table } from "react-bootstrap"
import styles from './billingSection.module.scss'
import typographyStyles from "../../styles/global/typography.module.scss"
import { Context } from "../../context/context"
import InputPreview from "../../components/ui//Input/previewInput"
import Block from "../../components/Block"
import UserBillingService from "../../services/UserBillingService"
import presetsStyles from "../../styles/global/presets.module.scss"
import moment from "moment"
import appConfig from "../../configs/appConfig"

const SupportSection = ({ data, isVisible, question, isWrap }) => {
  const [visible, setVisible] = useState(false)
  const { lang: { Paymentsettings, Pasttransactions, Plan, Billing, NextPayment, Billingisbeingmade, Nocardprovided, Transactiondate, TransactionID, Description, Amount } } = useContext(Context)
  const [userBilling, setUserBilling] = useState({})
  const [amount, setAmount] = useState("$0")
  const [transactions, setTransactions] = useState([])
  const [nextPaymentAt, setNextPaymentAt] = useState('N/A')
  const [cardLast4, setCardLast4] = useState(null)
  const [billingPlanStatus, setBillingPlanStatus] = useState('N/A')

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        setVisible(true)
      }, appConfig.entryDelay)
    }
  }, [isVisible])

  useEffect(() => {
    UserBillingService.getBilling()
      .then((res) => {
        setUserBilling(res)
        setTransactions(res.transactions)

        if (!res.user.billingPlan) {
          setBillingPlanStatus("NOT SUBSCRIBED")
        } else {
          const mode = res.user.billingMode;
          if (mode === 'MONTHLY') {
            setAmount(`\$${res.user.billingPlan.monthlyPrice.toLocaleString('en-US')}/month`)
          } else if (mode === 'YEARLY') {
            setAmount(`\$${res?.user.billingPlan.yearlyPrice.toLocaleString('en-US')}/year`)
          }

          setCardLast4(res.user.paymentMethod?.cardLast4)

          const planName = res.user.billingPlan.name
          if (res.user.subscription?.stripeSubscriptionStatus === 'trialing') {
            setBillingPlanStatus(`${planName} (TRIAL)`)
          } else {
            setBillingPlanStatus(planName)
          }
        }

        if (res.user.subscription?.nextPaymentAt) {
          setNextPaymentAt(moment(res.user.subscription.nextPaymentAt).format('MMM DD, yyyy'))
        }
      });
  }, [])

  // const sampleData = [
  //   { date: "09/01/2021", id: "347364287", description: "{Plan Name}, API", amount: "$349.00" },
  //   { date: "08/01/2021", id: "433384588", description: "{Plan Name}, API", amount: "$349.00" },
  //   { date: "07/01/2021", id: "482772994", description: "{Plan Name}, API", amount: "$349.00" },
  //   { date: "06/01/2021", id: "489900239", description: "{Plan Name}, API", amount: "$349.00" },
  //   { date: "05/23/2021", id: "883557026", description: "Account Setup", amount: "$125.50" },
  // ]

  return (
    <div className={`${styles.billing} ${data.className ? data.className : ""} ${visible ? "active" : ""}`}>
      <Container fluid className="p-0 entry-1">
        <Row>
          <Col lg={12} className="text-center text-md-left">
            <h2 className={`${typographyStyles.textDemi2} ${typographyStyles.fontBase} entry-1 mb-3`}>{Paymentsettings}</h2>
          </Col>
          <Col xl={8}>
            <Block className={`entry-2 mb-xl-0 mb-4`} variant="badge-wrap">
              <Container fluid className="p-0">
                <Row>
                  <Col md={4} className="mb-4">
                    <InputPreview variant="flat" defaultValue={billingPlanStatus} label={Plan} />
                  </Col>
                  <Col md={4} className="mb-4">
                    <InputPreview variant="flat" defaultValue={amount} label={Billing} />
                  </Col>
                  <Col md={4} className="mb-4">
                    <InputPreview variant="flat" defaultValue={nextPaymentAt} label={NextPayment} />
                  </Col>
                  <Col md={12}>
                    <div className={`${presetsStyles.labelSecondaryLight}`}><span>{cardLast4 ? `${Billingisbeingmade} ${cardLast4}` : Nocardprovided}</span></div>
                  </Col>
                </Row>
              </Container>
            </Block>
          </Col>
          <Col lg={12} className="text-center text-md-left mt-5">
            <h2 className={`${typographyStyles.textDemi2} ${typographyStyles.fontBase} entry-1 mb-3`}>{Pasttransactions}</h2>
          </Col>
          <Col lg={12}>
            <Table className="w-100 simple" responsive>
              <thead>
                <tr>
                  <th>Created At</th>
                  <th>ID</th>
                  <th>Description</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                {transactions?.length ? transactions.map((item, i) => (
                  <tr key={`fdt-${i}`}>
                    <td>{moment(item.createdAt).format('MMM DD, yyyy LT')}</td>
                    <td className="op-08">{item.stripeId}</td>
                    <td className="op-08">{item.description}</td>
                    <td>{`\$${(item.amount / 100).toLocaleString('en-US', { maximumFractionDigits: 2 })}`}</td>
                  </tr>
                )) :
                  <tr>
                    <td colSpan={4} className="border-bottom">
                      <div className="text-center pt-4 pb-4">No transactions have been made</div>
                    </td>
                  </tr>}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SupportSection;
