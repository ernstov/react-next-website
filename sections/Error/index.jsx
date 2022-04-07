import { Col, Container, Row } from 'react-bootstrap';
import styles from './error.module.scss'
import Button from '../../components/ui/Button'

const Error = ({ data, isVisible }) => {

  return (
    <div className={`${styles.error}`}>
      <Container fluid className="p-0">

        <Row className="align-items-center">
          <Col md={6} className="text-center d-block d-md-none">
            <img className={`${styles.img}`} src={`/img/${data.img}`} />
          </Col>

          <Col md={6} className="text-center text-md-left" >
            <p className={`${styles.textTitle}`}>Page not found</p>
            <p className={`${styles.subTextTitle} mx-5 mx-md-0`}>Sorry, there's nothing here! Need help or find a bug? Please email <u>support@goperigon.com.</u></p>

            <div className={`${styles.buttons} text-center text-md-left`}>
              {data.buttons && data.buttons.map((button, i) => (
                data.isBlank ?
                  <Button link={button.link} as={`${button.as ? button.as : "link"}`} variant={button.variant} className={`${button.className ? button.className : ""} ${i < data.buttons.length ? "mb-2" : ""}`} key={`bi-${i}`}>{button.name}</Button> :
                  <Button link={button.link} as={`${button.as ? button.as : "link"}`} variant={button.variant} className={`${button.className ? button.className : ""} ${i < data.buttons.length ? "mb-2" : ""}`} key={`bi2-${i}`}>{button.name}</Button>
              ))}
            </div>
          </Col>

          <Col md={6} className={"text-center mt-5 d-none d-md-block"}>
            <img className={`${styles.img}`} src={`/img/${data.img}`} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Error;
