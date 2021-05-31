import { Container, Row, Col, Badge } from "react-bootstrap"
import styles from './columns.module.scss'
import typographyStyles from "../../styles/global/typography.module.scss"
import Button from "../../components/ui/Button"

const Columns = ({ data, isVisible }) => {

  const render = () => {
    switch (data.variant) {
      case "base":
      default:
        return <>
          <Container>
            <Row>
              <Col className="text-center mb-4 mb-md-0">
                {data.title && <h3 className={`${styles.columnsTitle} ${typographyStyles.textTitleSm} mt-4 mb-2 entry-2`}>{data.title}</h3>}
                {data.titleSPC && <div className={`${styles.columnsTitle} ${typographyStyles.textSubTitleSecondary} mb-4 entry-2`}>{data.titleSPC}</div>}
                {data.description && <div className="entry-3"><p className="mb-0">{data.description}</p></div>}
                {data.img && <div className={`${styles.columnsImg} entry-3`}><img src={`/img/${data.img}`} alt="" /></div>}
              </Col>
            </Row>
            <Row className={`${styles.columnsRow}`}>
              {data.columns.map((column, i) => (
                <Col className="entry-3 d-flex align-items-stretch" md={6} key={`ci-${i}`}>
                  <div className={`${column.className ? `${column.className} pb-4 mb-4` : ""}`}>
                    <div className={`${styles.columnTitle} mb-3`}>{column.img && <img src={`/img/${column.img}`} />}<h4 className={`${typographyStyles.textTitleDemi} mb-0`}>{column.title}</h4></div>
                    <div><span>{column.description}</span></div>
                  </div>
                </Col>
              ))}
            </Row>
            <Row>
              <Col className="text-center">
                <div className={`${styles.buttons} mt-5 entry-4`}>
                  {data.buttons && data.buttons.map((button, i) => (
                    data.isBlank ?
                      <Button link={button.link} as={`${button.as ? button.as : "link"}`} variant={button.variant} className={`${button.className ? button.className : ""} ${i < data.buttons.length ? "mb-2" : ""}`} key={`bi-${i}`}>{button.name}</Button> :
                      <Button link={button.link} as={`${button.as ? button.as : "link"}`} variant={button.variant} className={`${button.className ? button.className : ""} ${i < data.buttons.length ? "mb-2" : ""}`} key={`bi2-${i}`}>{button.name}</Button>
                  ))}
                </div>
              </Col>
            </Row>
          </Container>
        </>
    }
  }

  return (
    <div className={`${styles.columns} ${data.className ? data.className : ""} ${isVisible ? "active" : ""}`}>
      {render()}
    </div>
  );
}

export default Columns;
