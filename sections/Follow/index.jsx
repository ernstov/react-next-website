import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Icon from "../../components/Icon";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import appConfig from "../../configs/appConfig"

import styles from './follow.module.scss'

const Follow = ({ data, isVisible, variant }) => {

  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState("");

  const Form = () => <MailchimpSubscribe url={data.button.action} />

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        setVisible(true)
      }, appConfig.entryDelay)
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

  switch (variant) {
    case "form-blog":
      return <div className={`${styles.follow} form-blog ${data.className ? data.className : ""} ${visible ? "active" : ""}`}>
        <MailchimpSubscribe
          url={data.button.action}
          render={({ subscribe, status, message }) => (
            <div className={`position-relative w-100 ${status === "success" ? `${styles.followMessage}`: ""}`}>
              <form onSubmit={(e) => onSubmit(e, subscribe)} className={`follow-form w-100 ${data.bg} ${status === "success" ? "hide" : ""}`}>
                <div className="follow-input-container bg-white w-100">
                  <input name="EMAIL" type="email" required placeholder={data.placeholder} />
                  <button disabled={status === "sending"} type="submit">{data.button.name}</button>
                  <div className={`follow-notification ${status === "error" ? "active" : ""}`} dangerouslySetInnerHTML={{ __html: message }}></div>
                </div>
                {status === "sending" && <div className="follow-loader"><Icon variant="loader" /></div>}
              </form>
              <div className={`follow-message ${status === "success" ? "show" : ""}`}><div className={`${styles.followIcon}`}><Icon variant="allow"/></div>{data.message}</div>
            </div>
          )}
        />
      </div>
    case "form-only":
      return <div className={`${styles.follow} form-only ${data.className ? data.className : ""} ${visible ? "active" : ""}`}>
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
      </div>
    default:
      return <div className={`${styles.follow} ${data.className ? data.className : ""} ${visible ? "active" : ""}`}>
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
  }
}

export default Follow;
