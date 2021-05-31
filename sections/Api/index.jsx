import {useEffect, useState} from "react"
import { Container, Row, Col, Badge } from "react-bootstrap"
import styles from './api.module.scss'
import dynamic from 'next/dynamic'
import appConfig from "../../configs/appConfig"

const ApiContainer = ({ data, isVisible }) => {

  const Api = dynamic(() => import('../../components/Api'), {
    ssr: false
  });

  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        setVisible(true)
      }, appConfig.entryDelay)
    }
  }, [isVisible])

  return (
    <div className={`${styles.api} ${visible ? "active" : ""}`}>
      <Container>
        <Row>
          <Col className="entry-1">
            <Api data={data}/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ApiContainer;
