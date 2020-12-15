import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Icon from "../../components/Icon";
import { Link } from "@reach/router";

import './Footer.scss';

const Footer = ({ data, isVisible }) => {

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        setVisible(true)
      }, 500)
    }
  }, [isVisible])

  const render = () => {
    switch (data.variant) {
      case "simple":
        return <Container>
          <Row>
            <Col md={6} className="footer-socials-container">
              <div className="w-100">
                <div className="footer-socials entry-1">
                  {data.socials.map((social, i) => (
                    <a key={`si-${i}`} href={social.link} target="blank"><Icon variant={social.icon} /></a>
                  ))}
                </div>
                <div className="footer-links entry-2">
                  {data.links.map((link, i) => (
                    <Link key={`li-${i}`} to={link.link}>{link.name}</Link>
                  ))}
                </div>
              </div>
            </Col>
            <Col md={6} className="footer-stores-container">
            {data.stores && data.stores.map((store, i)=>(
              <a key={`si-${i}`} target="blank" className={`entry-${i+1}`} href={store.link}><img className="footer-store mr-3" src={`/assets/img/${store.img}`} alt=""/></a>
            ))}
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="footer-copyright entry-3">

                {data.additional &&
                  <div dangerouslySetInnerHTML={{ __html: data.additional }}></div>
                }

                {data.copyright}
              </div>
            </Col>
          </Row>
        </Container>
      default:
        return <Container>
          <Row>
            <Col md={6} className="d-flex align-items-center">
              <div className="w-100">
                <div className="footer-socials entry-1">
                  {data.socials.map((social, i) => (
                    <a key={`si-${i}`} href={social.link} target="blank"><Icon variant={social.icon} /></a>
                  ))}
                </div>
                <div className="footer-links entry-2">
                  {data.links.map((link, i) => (
                    <Link key={`li-${i}`} to={link.link}>{link.name}</Link>
                  ))}
                </div>
                <div className="footer-copyright mb-5 mb-md-0 entry-3">
                  {data.copyright}
                </div>
              </div>
            </Col>
            <Col md={6} className="footer-img-container text-right text-md-center">
              <img className="footer-img entry-4" src={`./assets/img/${data.img}`} />
            </Col>
          </Row>
        </Container>
    }
  }

  return (
    <div className={`footer ${visible ? "active" : ""} ${data.variant ? data.variant : ""}`}>
      {render()}
    </div>
  );
}

export default Footer;
