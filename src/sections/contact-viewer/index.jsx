import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import './ContactViewer.scss';

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
    <div className={`contact-viewer ${visible ? "active" : ""}`}>
      <Container>
        <Row>
          <Col lg={12}>
            <div className="contact-viewer-inner">
              {data.title && <h3 className="entry-1 text-title-smd mb-3">{data.title}</h3>}
              {data.description && <p className="entry-2" dangerouslySetInnerHTML={{ __html: data.description }}></p>}
              {data.list && <div className="entry-3 mt-4">{data.list.title}</div>}
              {data.list && <ul className="entry-4 list-primary mt-3">
                {data.list.options.map((option, i) => (
                  <li key={`li-${i}`}>{option.name}</li>
                ))}
              </ul>
              }
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ContactViewer;
