import { Container, Row, Col, Badge } from "react-bootstrap"
import styles from './api.module.scss'
import dynamic from 'next/dynamic'

const ApiContainer = ({ data, isVisible }) => {

  const Api = dynamic(() => import('../../components/Api'), {
    ssr: false
  });

  return (
    <div className={`${styles.api} ${isVisible ? "active" : ""}`}>
      <Container>
        <Row>
          <Col>
            <Api data={data}/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ApiContainer;
