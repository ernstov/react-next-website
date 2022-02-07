import React, { useState } from "react"
import UsersTable from "../../components/UsersTable";
import { Container, Row, Col } from "react-bootstrap"
import styles from "./table.module.scss"

const UsersTableSection = ({ data, isVisible, question, isWrap }) => {
  return (
    <div className={`${data.className ? data.className : ""} ${styles.table}`}>
      <Container fluid className="p-0 mb-g">
        <Row>
          <Col>
            <UsersTable />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default UsersTableSection;
