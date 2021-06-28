import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import typographyStyles from "../../styles/global/typography.module.scss"
import presetsStyles from "../../styles/global/presets.module.scss"

import styles from './contactViewer.module.scss'

const ContactViewer = ({ data, isVisible }) => {

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        setVisible(true)
      }, 500)
    }
  }, [isVisible])

  return (
    <div className={`${styles.contactViewer} content ${visible ? "active" : ""}`}>
      <Container>
        <Row>
          <Col lg={12}>
            <div className="contact-viewer-inner">
              {data.title && <h3 className={`${typographyStyles.textTitleSmd} entry-1 mb-3`}>{data.title}</h3>}
              {data.description && <p className="entry-2" dangerouslySetInnerHTML={{ __html: data.description }}></p>}
              {data.list && <div className="entry-3 mt-4" dangerouslySetInnerHTML={{ __html: data.list.title }}></div>}
              {data.list && <ul className={`${presetsStyles.listPrimary} entry-4 mt-3 mb-4`}>
                {data.list.options.map((option, i) => (
                  <li key={`li-${i}`} dangerouslySetInnerHTML={{ __html: option.name }}></li>
                ))}
              </ul>
              }
              {data.rows && data.rows.map((row, i) => (
                <div className={`${i < data.rows.length ? "mb-4" : ""}`} key={`ri-${i}`}>
                  {row.title && <h3 className={`${typographyStyles.textTitleSmd} entry-1 mb-3`}>{row.title}</h3>}
                  {row.description && <div className="entry-2" dangerouslySetInnerHTML={{ __html: row.description }}></div>}
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ContactViewer;
