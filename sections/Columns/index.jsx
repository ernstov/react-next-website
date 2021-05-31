import {useEffect, useState} from "react"
import { Container, Row, Col, Badge } from "react-bootstrap"
import styles from './columns.module.scss'
import typographyStyles from "../../styles/global/typography.module.scss"
import presetsStyles from "../../styles/global/presets.module.scss"
import Button from "../../components/ui/Button"
import appConfig from "../../configs/appConfig"

const Columns = ({ data, isVisible }) => {

  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        setVisible(true)
      }, appConfig.entryDelay)
    }
  }, [isVisible])

  const render = () => {
    switch (data.variant) {
      case "advanced":
        return <>
          <Container>
            <Row>
              <Col className="text-center mb-4 mb-md-0 entry-1">
                {data.title && <h3 className={`${styles.columnsTitle} ${typographyStyles.fontBase} ${typographyStyles.titlePrimaryMd} mb-4 mb-md-5 entry-1`}>{data.title}</h3>}
              </Col>
            </Row>
            <Row>
              {data.columns.map((column, i) => (
                <Col className={`d-flex align-items-stretch entry-${i+1}`} md={4} key={`ci-${i}`}>
                  <div className={`${column.className ? `${column.className} ${i < data.columns.length-1 ? "pb-5 pb-md-0" : ""}` : `${i < data.columns.length-1 ? "pb-5 pb-md-0" : ""}`}`}>
                    <div className={`${styles.columnTitleAdvanced} mb-3`}>{column.img && <img src={`/img/${column.img}`} />}<h4 className={`${typographyStyles.titleDemiWhiteSm} ${typographyStyles.fontBase} mb-0`}>{column.title}</h4></div>
                    <div><span className={`${typographyStyles.textRegular20}`}>{column.description}</span></div>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </>
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
    <div className={`${styles.columns} ${data.variant ? data.variant : ""} ${data.className ? data.className : ""} ${visible ? "active" : ""}`}>
      {render()}
    </div>
  );
}

export default Columns;
