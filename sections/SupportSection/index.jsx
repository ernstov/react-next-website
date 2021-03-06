import React, { useEffect, useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import Icon from "../../components/Icon"
import styles from './supportSection.module.scss'
import typographyStyles from "../../styles/global/typography.module.scss"
import Button from "../../components/ui/Button"
import Block from "../../components/Block"
import appConfig from "../../configs/appConfig"

const SupportSection = ({ data, isVisible, question, isWrap }) => {

  const [visible, setVisible] = useState(false)
  const { title, description, buttons, label } = data

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        setVisible(true)
      }, appConfig.entryDelay)
    }
  }, [isVisible])

  return (
    <div className={`${styles.contact} ${data.className ? data.className : ""} ${visible ? "active" : ""}`} id="contact">
      <Container fluid className="p-0">
        <Row>
          <Col lg={12} className="text-center text-md-left">
            <Block className={`entry-2 mb-xl-0 mb-4 d-inline-block w-auto`} variant="badge-wrap">
              {title && <h2 className={`${typographyStyles.textDemi2} ${typographyStyles.fontBase} entry-1`}>{title}</h2>}
              {description && <p className={`${typographyStyles.textDemiGrey} mb-4 entry-2`}>{description}</p>}
              {buttons && <div>{buttons.map((button, i) => (
                <div key={`cb-${i}`} className={`entry-${i + 2}`}><Button size="sm" as="url-same" link={button.link} className={`${button.className ? button.className : ""} justify-content-start mb-3`} variant="dark-np"><Icon variant={button.icon} /><span className="ml-2">{button.name}</span></Button></div>
              ))}</div>}
              {label && <div><span className={`${typographyStyles.textRomanSm} d-block mb-3 mb-md-0 entry-4`}>{label}</span></div>}
            </Block>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SupportSection;
