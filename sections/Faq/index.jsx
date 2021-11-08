import React, { useEffect, useState, useContext } from "react"
import { Container, Row, Col, Collapse, Card } from "react-bootstrap"
import Icon from "../../components/Icon"
import { Context } from "../../context/context"
import appConfig from "../../configs/appConfig"
import styles from './faq.module.scss'
import { useRouter } from 'next/router'
import typographyStyles from "../../styles/global/typography.module.scss"

const Faq = ({ data, isVisible, question, isWrap }) => {

  const [visible, setVisible] = useState(false)
  const [open, setOpen] = useState(data.list.map((item, i) => i == 0 ? true : false))
  const { scrollB } = useContext(Context)
  const router = useRouter()

  const calcPosition = (position) => {
    if (window.innerWidth > 879) {
      return isWrap ? position - appConfig.headerHeight - 32 : position - 32
    } else {
      return isWrap ? position - appConfig.headerHeightMd - 32 : position - 32
    }
  }

  const scrollTo = (elmId) => {
    const position = document.querySelector(`#${elmId}`).getBoundingClientRect().top
    scrollB.current.scrollbar.scrollTo(0, calcPosition(position), 1000)
  }

  useEffect(() => {

    if (question) {
      for (const i in data) {
        if (data[i].id == question) {
          setOpen(open.map((item, z) => i == z ? true : false));
          setTimeout(() => {
            scrollTo(question);
          }, 1000)
        }
      }
    }

  }, [question])

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        setVisible(true)
      }, 500)
    }
  }, [isVisible])

  const isMob = () => {
    return window.innerWidth < 880;
  }

  return (
    <div className={`${styles.faq} ${data.className ? data.className : ""} ${visible ? "active" : ""}`}>
      <Container className="p-0">
        <Row>
          <Col className="text-center">
            {data.img &&
              <img className={`${styles.img}`} className={`${styles.img} entry-1 ${data.imgCL ? data.imgCL : ""}`} src={data.isExternal ? data.img : `/img/${data.img}`} />
            }
            {data.title && <h1 className={`${typographyStyles.textTitle} mb-0 entry-1 mx-auto ${data.titleCL ? data.titleCL : "mw-410"}`} dangerouslySetInnerHTML={{ __html: data.title }}></h1>}
            {data.description && <p className={`${typographyStyles.textSubTitle} entry-2 mx-auto ${data.descriptionCL ? data.descriptionCL : "mw-410"}`} dangerouslySetInnerHTML={{ __html: data.description }}></p>}
            {data.titleSPC && <div className={`${styles.columnsTitle} ${typographyStyles.textSubTitleSecondary} mb-5 entry-2`}>{data.titleSPC}</div>}
          </Col>
        </Row>
        <Row>
          <Col lg={12} className="entry-4">
            {data.list.map((question, i) => (
              <Card id={question.id} className={`${question.link ? "faq-link" : ""} ${open[i] && question.answer ? "active" : ""}`} key={`ai-${i}`}>
                <Card.Header onClick={() => { setOpen(open[i] ? open.map((item, z) => i == z ? false : item) : open.map((item, z) => z == i ? true : isMob() ? item : false)); if (question.link) router.push(question.link) }}>
                  {question.question}<Icon variant={`${question.link ? "arrow-right" : "arrow-down"}`} />
                </Card.Header>
                {question.answer && <Collapse in={open[i]}>
                  <div><Card.Body dangerouslySetInnerHTML={{ __html: question.answer }}></Card.Body></div>
                </Collapse>}
              </Card>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Faq;
