import React, { useEffect, useState, useContext } from "react"
import { Container, Row, Col, Table } from "react-bootstrap"
import styles from './billingSection.module.scss'
import typographyStyles from "../../styles/global/typography.module.scss"
import { Context } from "../../context/context"
import InputPreview from "../../components/ui//Input/previewInput"
import Block from "../../components/Block"
import UserBillingService from "../../services/UserBillingService"
import presetsStyles from "../../styles/global/presets.module.scss"

const SupportSection = ({ data, isVisible, question, isWrap }) => {

  const [visible, setVisible] = useState(false)
  const { lang: { Paymentsettings, Pasttransactions, Plan, Billing, NextPayment, Billingisbeingmade, Transactiondate, TransactionID, Description, Amount } } = useContext(Context)
  const [userBilling, setUserBilling] = useState({ User: {}, BillingPlan: {} })

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        setVisible(true)
      }, 500)
    }
  }, [isVisible])

  useEffect(() => {
    UserBillingService.getUser()
      .then((res) => {
        setUserBilling(res)
      });
  }, [])

  let amount = "0$"
  if (userBilling.billingAmount && userBilling.billingMode) {
    amount = `${userBilling.billingAmount}$/${userBilling.billingMode && userBilling.billingMode.charAt(0)}`
  }

  const sampleData = [
    { date: "09/01/2021", id: "347364287", description: "{Plan Name}, API", amount: "$349.00" },
    { date: "08/01/2021", id: "433384588", description: "{Plan Name}, API", amount: "$349.00" },
    { date: "07/01/2021", id: "482772994", description: "{Plan Name}, API", amount: "$349.00" },
    { date: "06/01/2021", id: "489900239", description: "{Plan Name}, API", amount: "$349.00" },
    { date: "05/23/2021", id: "883557026", description: "Account Setup", amount: "$125.50" },
  ]

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
                    <InputPreview variant="flat" defaultValue={userBilling.BillingPlan.planName || "Free Trial"} label={Plan} />
                  </Col>
                  <Col md={4} className="mb-4">
                    <InputPreview variant="flat" defaultValue={amount} label={Billing} />
                  </Col>
                  <Col md={4} className="mb-4">
                    <InputPreview variant="flat" defaultValue={userBilling.nextPaymentAt || "N/A"} label={NextPayment} />
                  </Col>
                  <Col md={12}>
                    <div className={`${presetsStyles.labelSecondaryLight}`}><span>{Billingisbeingmade}</span></div>
                  </Col>
                </Row>
              </Container>
            </Block>
          </Col>
          <Col lg={12} className="text-center text-md-left mt-5">
            <h2 className={`${typographyStyles.textDemi2} ${typographyStyles.fontBase} entry-1 mb-3`}>{Pasttransactions}</h2>
          </Col>
          <Col lg={8}>
            <Table className="w-100 simple" responsive>
              <thead>
                <tr>
                  <th>Transactiondate</th>
                  <th>TransactionID</th>
                  <th>Description</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                {sampleData.map((item, i) => (
                  <tr key={`fdt-${i}`}>
                    <td>{item.date}</td>
                    <td className="op-08">{item.id}</td>
                    <td className="op-08">{item.description}</td>
                    <td>{item.amount}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SupportSection;
