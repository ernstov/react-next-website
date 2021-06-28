import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Icon from "../../components/Icon";
import MailchimpSubscribe from "react-mailchimp-subscribe";

import styles from './follow.module.scss'

const Follow = ({ data, isVisible, variant }) => {

  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState("");

  const Form = () => <MailchimpSubscribe url={data.button.action} />

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        setVisible(true)
      }, 500)
    }
  }, [isVisible])

  const onSubmit = (e, subscribe) => {
    e.preventDefault();
    e.stopPropagation();

    const formData = new FormData(e.target);

    let fields = {};

    formData.forEach((value, key) => {
      fields[key] = value;
    });

    subscribe(fields);
  }

  if (variant === 'form-only') {
    return (
      <MailchimpSubscribe
        url={data.button.action}
        render={({ subscribe, status, message }) => (
          <div>
            <form onSubmit={(e) => onSubmit(e, subscribe)} className={`follow-form ${data.bg} ${status === "success" ? "hide" : ""}`}>
              <div className="follow-input-container bg-white">
                <input name="EMAIL" type="email" required placeholder={data.placeholder} />
                <button disabled={status === "sending"} type="submit">{data.button.name}</button>
                <div className={`follow-notification ${status === "error" ? "active" : ""}`} dangerouslySetInnerHTML={{ __html: message }}></div>
              </div>
              {status === "sending" && <div className="follow-loader"><Icon variant="loader" /></div>}
            </form>
            <div className={`follow-message ${status === "success" ? "show" : ""}`}>{data.message}</div>
          </div>
        )}
      />
    )
  } else {
    return (
      <div className={`${styles.follow} ${data.className ? data.className : ""} ${visible ? "active" : ""}`}>
        <Container>
          <Row>
            <Col lg={12} className="text-center position-relative entry-1">
              <MailchimpSubscribe
                url={data.button.action}
                render={({ subscribe, status, message }) => (
                  <div>
                    <form onSubmit={(e) => onSubmit(e, subscribe)} className={`follow-form ${status === "success" ? "hide" : ""}`}>
                      <div className="follow-title">{data.title}</div>
                      <div className="follow-input-container">
                        <input name="EMAIL" type="email" required placeholder={data.placeholder} />
                        <button disabled={status === "sending"} type="submit">{data.button.name}</button>
                        <div className={`follow-notification ${status === "error" ? "active" : ""}`} dangerouslySetInnerHTML={{ __html: message }}></div>
                      </div>
                      {status === "sending" && <div className="follow-loader"><Icon variant="loader" /></div>}
                    </form>
                    <div className={`follow-message ${status === "success" ? "show" : ""}`}>{data.message}</div>
                  </div>
                )}
              />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }

}

export default Follow;
