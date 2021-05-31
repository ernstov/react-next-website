import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Icon from "../../components/Icon";
import Link from 'next/link'
import styles from './footer.module.scss'

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
            <Col md={6} className={`${styles.footerSocialsContainer}`}>
              <div className="w-100">
                <div className={`${styles.footerSocials} simple`}>
                  {data.socials.map((social, i) => (
                    <a key={`si-${i}`} href={social.link} target="blank"><Icon variant={social.icon} /></a>
                  ))}
                </div>
                <div className={`${styles.footerLinks} simple`}>
                  {data.links.map((link, i) => (
                    <Link key={`li-${i}`} href={link.link}><a>{link.name}</a></Link>
                  ))}
                </div>
              </div>
            </Col>
            <Col md={6} className={`${styles.footerStoresContainer}`}>
            {data.stores && data.stores.map((store, i)=>(
              <a key={`si-${i}`} target="blank" className={`entry-${i+1}`} href={store.link}><img className={`${styles.footerStore} mr-3`} src={`/img/${store.img}`} alt=""/></a>
            ))}
            </Col>
          </Row>
          <Row>
            <Col>
              <div className={`${styles.footerCopyright} simple`}>

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
                <div className={`${styles.footerSocials}`}>
                  {data.socials.map((social, i) => (
                    <a key={`si-${i}`} href={social.link} target="blank"><Icon variant={social.icon} /></a>
                  ))}
                </div>
                <div className={`${styles.footerLinks}`}>
                  {data.links.map((link, i) => (
                    <Link key={`li-${i}`} href={link.link}><a>{link.name}</a></Link>
                  ))}
                </div>
                <div className={`${styles.footerCopyright} mb-5 mb-md-0 entry-3`}>
                  {data.copyright}
                </div>
              </div>
            </Col>
            <Col md={6} className={`${styles.footerImgContainer} text-right text-md-center`}>
              <img className={`${styles.footerImg}`} src={`/img/${data.img}`} />
            </Col>
          </Row>
        </Container>
    }
  }

  return (
    <div className={`${styles.footer} ${visible ? "active" : ""} ${data.variant ? data.variant : ""}`}>
      {render()}
    </div>
  );
}

export default Footer;
