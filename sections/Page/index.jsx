import { useState, useContext, useEffect, useRef, useMemo } from "react"
import { Container, Row, Col, Badge, Form } from "react-bootstrap"
import styles from './page.module.scss'
import typographyStyles from "../../styles/global/typography.module.scss"
import appConfig from "../../configs/appConfig"
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw'
import UserBillingService from "../../services/UserBillingService"

const Page = ({ data, isVisible }) => {

  const [visible, setVisible] = useState(false)
  const [userApiKey, setUserApiKey] = useState(null)

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        setVisible(true)
      }, appConfig.entryDelay / 2)
    }
  }, [isVisible])

  useEffect(() => {
    if (userApiKey) {
      console.log(document.querySelectorAll(".apiKey input"))
      document.querySelectorAll(".apiKey input").forEach((input) => {
        input.value = userApiKey
      })
    }
  }, [userApiKey])

  useEffect(() => {
    document.querySelectorAll("pre").forEach((el) => {
      let temp = ''

      const lines = el.innerHTML.split("\n")
      lines.forEach((line) => {
        temp += `<span>${line}</span>`
      })

      el.innerHTML = temp
    })

    document.querySelectorAll(".apiKey button").forEach((button) => {
      button.addEventListener("click", (e) => {
        const text = e.target.parentElement.querySelector("input").value

        navigator.clipboard.writeText(text).then(() => {
          button.classList.add("done")

          setTimeout(() => {
            button.classList.remove("done")
          }, 4000)
        }, () => {
          console.error('Async: Could not copy text: ', err);
        });
      })
    })

    UserBillingService.getUser()
      .then((res) => {
        setUserApiKey(res.apiKey)
      })

  }, [])

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
