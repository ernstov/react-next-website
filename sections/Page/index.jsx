import { useState, useContext, useEffect, useRef, useMemo } from "react"
import { Container, Row, Col, Badge, Form } from "react-bootstrap"
import styles from './page.module.scss'
import typographyStyles from "../../styles/global/typography.module.scss"
import appConfig from "../../configs/appConfig"
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw'

const Page = ({ data, isVisible }) => {

  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        setVisible(true)
      }, appConfig.entryDelay/2)
    }
  }, [isVisible])

  return (
    <div className={`${styles.page} ${data.className ? data.className : ""} ${visible ? "active" : ""}`}>
      <Container className="entry-1">
        <Row>
          <Col>
            <ReactMarkdown plugins={[gfm]} allowDangerousHtml={true}>
              {data.html}
            </ReactMarkdown>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Page;
