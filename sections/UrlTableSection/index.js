import React, { useState } from "react"
import UrlTable from "../../components/UrlTable";
import { Container, Row, Col } from "react-bootstrap"
import styles from "./table.module.scss"

const UrlTableSection = ({ data, isVisible, question, isWrap }) => {
  return (
    <div className={`${data.className ? data.className : ""} ${styles.table}`}>
      <Container fluid className="p-0 mb-g">
        <Row>
          <Col>
            <UrlTable />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default UrlTableSection;
