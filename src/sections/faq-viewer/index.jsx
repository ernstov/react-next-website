import { navigate } from "@reach/router";
import React, { useEffect, useState, useContext } from "react";
import { Container, Row, Col, Collapse, Card } from "react-bootstrap";
import Icon from "../../components/Icon";
import { Context } from "../../context/context";
import { settings } from "../../data/settings";

import './FaqViewer.scss';

const FaqViewer = ({ data, isVisible, question, isWrap }) => {

  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(0);
  const { scrollB } = useContext(Context);

  const calcPosition = (position) => {
    if (window.innerWidth > 879) {
      return isWrap ? position - settings.headerHeight - 32 : position - 32;
    } else {
      return isWrap ? position - settings.headerHeightMd - 32 : position - 32;
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
          setOpen(i);
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
    <div className={`faq-viewer ${visible ? "active" : ""}`}>
      <Container className="p-0">
        <Row>
          <Col lg={12} className="entry-4">
            {data.map((question, i) => (
              <Card id={question.id} className={`${question.link ? "faq-link" : ""} ${i == open && question.answer ? "active" : ""}`} key={`ai-${i}`}>
                <Card.Header onClick={() => { setOpen(i != open ? i : null); if (question.link) navigate(question.link) }}>
                  {question.question}<Icon variant={`${question.link ? "arrow-right" : "arrow-down"}`} />
                </Card.Header>
                {question.answer && <Collapse in={open == i}>
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
