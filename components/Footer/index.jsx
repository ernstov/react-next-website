import React, { useEffect, useState, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Icon from "../../components/Icon";
import Link from 'next/link'
import styles from './footer.module.scss'
import { Context } from "../../context/context"
import appConfig from "../../configs/appConfig"
import typographyStyles from '../../styles/global/typography.module.scss'
import shortid from "shortid";

const Footer = ({ data, isVisible }) => {

  const [visible, setVisible] = useState(false);
  const { lang: { GetTheApp } } = useContext(Context);
  const { mobileNavigation } = appConfig

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
            <Col xl={6} lg={7} className={`${styles.footerSocialsContainer}`}>
              <div className={`${styles.footerLinks} simple entry-2`}>
                {mobileNavigation.map((sect, i) => (
                  <div className={`${i == 1 ? "d-none d-md-block": ""}`} key={`sdr-${i}`}>
                    <div><span className={typographyStyles.labelMenuFooter}>{sect.label}</span></div>
                    <ul>
                      {sect.links.map((nav, z) => (
                        <li key={`ds-${i}-${z}`} onClick={() => hideAll(true)} key={`${shortid.generate()}`}><Link href={nav.link}>{nav.name}</Link></li>
                      ))}
                    </ul>

                    {i == 0 &&
                      <div className="mt-4 d-block d-md-none">
                        <div><span className={typographyStyles.labelMenuFooter}>{mobileNavigation[1].label}</span></div>
                        <ul>
                          {mobileNavigation[1].links.map((nav, k) => (
                            <li key={`ds-${i}-${z}`} onClick={() => hideAll(true)} key={`${shortid.generate()}`}><Link href={nav.link}>{nav.name}</Link></li>
                          ))}
                        </ul>
                      </div>
                    }
                  </div>
                ))}
              </div>
            </Col>
            <Col className="d-flex justify-content-start justify-content-lg-end" xl={6} lg={5}>
              <div className={`${styles.footerStoresInner}`}>
                <div className="entry-1"><span className={`${styles.footerStoresBadge}`}>{GetTheApp}</span></div>
                <div className={`${styles.footerStoresContainer}`}>
                  {data.stores && data.stores.map((store, i) => (
                    <a key={`si-${i}`} target="blank" className={`entry-${i + 1}`} href={store.link}><img className={`${styles.footerStore} ${i < data.stores.length - 1 ? "mr-3" : ""}`} src={`/img/${store.img}`} alt="" /></a>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
          <Row className={`${styles.footerBorder}`}>
            <Col md={6} className="d-flex align-items-center pt-0 pt-md-3 entry-2">
              <img className={`${styles.footerLogo} mr-3`} src="/img/logo-shape.svg" alt="" />
              <div className={`${styles.footerSocials} simple entry-1`}>
                {data.socials.map((social, i) => (
                  <a key={`si-${i}`} href={social.link} target="blank"><Icon variant={social.icon} /></a>
                ))}
              </div>
            </Col>
            <Col md={6} className={`${styles.footerCopyrightCol}`}>
              <div className={`${styles.footerCopyright} simple entry-3`}>
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
                <div className={`${styles.footerSocials} entry-1`}>
                  {data.socials.map((social, i) => (
                    <a key={`si-${i}`} href={social.link} target="blank"><Icon variant={social.icon} /></a>
                  ))}
                </div>
                <div className={`${styles.footerLinks} entry-2`}>
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
              <img className={`${styles.footerImg} entry-4`} src={`/img/${data.img}`} />
            </Col>
          </Row>
        </Container>
    }
  }

  return (
    <div className={`${styles.footer} ${data.className ? data.className : ""} ${visible ? "active" : ""} ${data.variant ? data.variant : ""}`}>
      {render()}
    </div>
  );
}

export default Footer;
