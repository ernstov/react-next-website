import React, { useState } from "react"
import HeadlineTable from "../../components/HeadlineTable";
import { Container, Row, Col } from "react-bootstrap"
import styles from "./table.module.scss"

const HeadlineTableSection = ({ data, isVisible, question, isWrap }) => {
    return (
      <div className={`${data.className ? data.className : ""} ${styles.table}`}>
        <Container fluid className="p-0 mb-g">
          <Row>
            <Col>
              <HeadlineTable />
            </Col>
          </Row>
        </Container>
      </div>
    )
}

export default HeadlineTableSection;
