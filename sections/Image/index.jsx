import { Container, Row, Col, Badge } from "react-bootstrap"
import Block from "../../components/Block"
import styles from './image.module.scss'
import typographyStyles from "../../styles/global/typography.module.scss"

const Image = ({ data, isVisible }) => {

  return (
    <div className={`${styles.image} ${data.className ? data.className : ""} ${isVisible ? "active" : ""}`}>
      <Container>
        <Row>
          <Col className="text-center mb-4 mb-md-0">
            {data.title && <h3 className={`${typographyStyles.textTitleSemi} mt-4 mb-4 entry-2`}>{data.title}</h3>}
            {data.description && <div className="entry-3"><p className="mb-0">{data.description}</p></div>}
          </Col>
        </Row>
      </Container>
      <div className={`${styles.imageContaciner} entry-4`}>

      </div>
    </div>
  );
}

export default Image;
