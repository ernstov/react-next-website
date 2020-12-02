import { navigate } from "@reach/router";
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Collapse, Card } from "react-bootstrap";
import Icon from "../../components/Icon";

import './FaqViewer.scss';

const FaqViewer = ({ data, isVisible }) => {

  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(0);

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
              <Card className={`${question.link ? "faq-link" : ""} ${i == open && question.answer ? "active" : ""}`} key={`ai-${i}`}>
                <Card.Header onClick={() => {setOpen(i != open ? i : null); if(question.link) navigate(question.link)}}>
                  {question.question}<Icon variant={`${question.link ? "arrow-right" : "arrow-down"}`} />
                </Card.Header>
                {question.answer && <Collapse in={open == i}>
                  <div><Card.Body>{question.answer}</Card.Body></div>
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
