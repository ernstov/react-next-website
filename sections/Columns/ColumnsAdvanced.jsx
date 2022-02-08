import { useEffect, useState, useContext } from "react"
import { Container, Row, Col, Badge } from "react-bootstrap"
import styles from './columns.module.scss'
import typographyStyles from "../../styles/global/typography.module.scss"
import presetsStyles from "../../styles/global/presets.module.scss"
import Button from "../../components/ui/Button"
import appConfig from "../../configs/appConfig"
import { Context } from "../../context/context"
import Link from "next/link"

const ColumnsAdvanced = ({ data, isVisible }) => {

  const [visible, setVisible] = useState(false)
  const { lang: { Readmore } } = useContext(Context)

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        setVisible(true)
      }, appConfig.entryDelay)
    }
  }, [isVisible])

  const render = () => {
    switch (data.variant) {
      case "base":
      default:
        return <>
          <Container>
            <Row className="mb-5">
              <Col md={6} className={`${styles.columnsTitleContainer}`}>
                <div className="text-center text-md-left">
                  {data.title && <h3 className={`${styles.columnsTitle} ${typographyStyles.textTitleSm} ${data.titleCL ? data.titleCL : ""} mt-4 mb-2 mb-md-0 entry-2`}>{data.title}</h3>}
                  {data.titleSPC && <div className={`${typographyStyles.textSubTitleSecondary2} ${data.titleSPCCL ? data.titleSPCCL : ""} mb-4 entry-2 mx-auto`}>{data.titleSPC}</div>}
                  {data.description && <div className="entry-3"><p className="mb-0">{data.description}</p></div>}
                </div>
              </Col>
              <Col md={6} className="d-flex justify-content-end">
                {data.img && <div className={`${styles.columnsAdvancedImg} entry-3`}><img src={`/img/${data.img}`} alt="" /></div>}
              </Col>
            </Row>
            <Row className={`${styles.columnsRowAdvanced}`}>
              {data.columns.map((column, i) => (
                <Col className={`entry-3 d-flex align-items-stretch order-md-${i + 1} ${column.mobileOrder ? `order-${column.mobileOrder}` : ""}`} md={4} key={`ci-${i}`}>
                  <div className={`${styles.columnsItemAdvanced} ${column.className ? `${column.className} mb-4 mb-md-5` : "mb-4 mb-md-5"}`}>
                    <div>
                      <div className={`${styles.columnTitle} mb-3`}>
                        {column.img && <img src={`/img/${column.img}`} />}
                        <h4 className={`${typographyStyles.textTitleDemi} mb-0`}>{column.title}</h4>
                      </div>
                      <div>
                        <span className={`${typographyStyles.textMediumD}`}>{column.description}</span>
                      </div>
                    </div>
                    {column.link && <div className={`${typographyStyles.regularD} mt-2`}><Link href={column.link}>{Readmore}</Link></div>}
                  </div>
                </Col>
              ))}
            </Row>
            <Row>
              <Col className="text-center d-block d-md-none">
                <div className={`${styles.buttons} mt-4 entry-4`}>
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
    <div className={`${styles.columnsAdvanced} ${data.variant ? data.variant : ""} ${data.className ? data.className : ""} ${visible ? "active" : ""}`}>
      {render()}
    </div>
  );
}

export default ColumnsAdvanced;
