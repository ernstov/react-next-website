import React, { useEffect, useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import typographyStyles from "../../styles/global/typography.module.scss"
import styles from './compare.module.scss'
import appConfig from "../../configs/appConfig"
import Button from "../../components/ui/Button"
import CompareRow from "./CompareRow"

const Compare = ({ data, isVisible }) => {

  const {title, description, list, buttons} = data

  return (
    <div className={`${styles.compare} sect-spacer-lg ${isVisible ? "active" : ""}`}>
      <Container className="entry-1">
        <Row className="mb-4">
          <Col md={12}>
            {title && <h2 className={`${typographyStyles.titleLarge} text-center`}>{title}</h2>}
            {description && <p className={`${typographyStyles.subtitleLarge}  text-center`} dangerouslySetInnerHTML={{ __html: description }}></p>}
          </Col>
        </Row>
        <Row>
          <Col md={12} className="pl-2 pr-2">
            {list.map((item, i)=>(
              <CompareRow key={`cry-${i}`} index={i} data={item} />
            ))}
          </Col>
        </Row>
        <Row className="mt-5">
          <Col md={12}>
            {buttons && 
              <div className={`${styles.buttons}`}>
                {buttons.map((button, i)=>(
                  <Button as="link" key={`cbi-${i}`} link={button.link} variant={button.variant}>{button.name}</Button>
                ))}
              </div>
            }
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Compare;
