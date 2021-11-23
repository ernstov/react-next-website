import React, { useEffect, useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import styles from './columnButtons.module.scss'
import Image from "next/image"
import Button from "../../components/ui/Button"
import typographyStyles from "../../styles/global/typography.module.scss"
import appConfig from "../../configs/appConfig"

const ColumnButtons = ({ data, isVisible }) => {

  const [visible, setVisible] = useState(false)
  const { buttons } = data

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        setVisible(true)
      }, appConfig.entryDelay)
    }
  }, [isVisible])

  return (
    <div className={`${styles.columnButtons} ${data.className ? data.className : ""} ${visible ? "active" : ""}`}>
      <Container>
        <Row>
          {buttons.map((column, i) => (
            <Col key={`cb-${i}`} className={`${styles.colm} entry-${i + 1}`}>
              <div className={`${styles.column}`}>
                <div>
                  <div className="text-center">
                    <Image
                      src={`/img/${column.img.src}`}
                      width={column.img.width}
                      height={column.img.height}
                    />
                    <h2 className={`${typographyStyles.textDemi2}`}>{column.title}</h2>
                  </div>
                  <p className={`${typographyStyles.textSubTitle2}`}>{column.description}</p>
                </div>
                {column.button &&
                  <Button
                    as="link"
                    link={column.button.link}
                    variant={column.button.variant}
                  >
                    {column.button.name}
                  </Button>
                }
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default ColumnButtons;
