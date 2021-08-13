import React, { useEffect, useState, useContext } from "react";
import { Container, Row, Col, Collapse, Card } from "react-bootstrap";
import Icon from "../../components/Icon";
import { Context } from "../../context/context";
import appConfig from "../../configs/appConfig";
import { useRouter } from "next/router";

import styles from './faqViewer.module.scss'

const FaqViewer = ({ data, isVisible, question, isWrap }) => {

  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(data.map((item ,i) => i == 0 ? true : false));
  const { scrollB } = useContext(Context);
  const router = useRouter()
  const [isMob, setIsMob] = useState(false)

  useEffect(()=>{
    setIsMob(window.innerWidth < 880)
  }, [])

  const calcPosition = (position) => {
    if (window.innerWidth > 879) {
      return isWrap ? position - appConfig.headerHeight - 32 : position - 32;
    } else {
      return isWrap ? position - appConfig.headerHeightMd - 32 : position - 32;
    }
  }

  const scrollTo = (elmId) => {
    const position = document.querySelector(`#${elmId}`).getBoundingClientRect().top;
    scrollB.current.scrollbar.scrollTo(0, calcPosition(position), 1000);
  }

  useEffect(() => {

    if (question) {
      for (const i in data) {
        if (data[i].id == question) {
          setOpen(open.map((item, z)=> i == z ? true : false));
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

  return (
    <div className={`${styles.faqViewer} ${visible ? "active" : ""}`}>
      <Container className="p-0">
        <Row>
          <Col lg={12} className="entry-4">
            {data.map((question, i) => (
              <Card id={question.id} className={`${question.link ? "faq-link" : ""} ${open[i] && question.answer ? "active" : ""}`} key={`ai-${i}`}>
                <Card.Header onClick={() => { setOpen(open[i] ? open.map((item, z) => i == z ? false : item) : open.map((item, z) => z == i ? true : isMob ? item : false)); if (question.link) router.push(question.link) }}>
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

export default FaqViewer;
