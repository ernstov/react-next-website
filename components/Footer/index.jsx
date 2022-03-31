import React, { useEffect, useState, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Icon from "../../components/Icon";
import Link from 'next/link'
import styles from './footer.module.scss'
import { Context } from "../../context/context"
import appConfig from "../../configs/appConfig"
import typographyStyles from '../../styles/global/typography.module.scss'
import shortid from "shortid";
import { useRouter } from "next/router"

const Footer = ({ data, isVisible }) => {

  const [visible, setVisible] = useState(false);
  const { lang: { GetTheApp, Followus } } = useContext(Context);
  const { footer: { navigation } } = appConfig
  const router = useRouter()

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        setVisible(true)
      }, appConfig.entryDelay)
    }
  }, [isVisible])

  const isHome = () => {
    return router.pathname == "/"
  }

  const renderLink = (nav, i, z,) => (
    <li key={`ds-${i}-${z}`} key={`${shortid.generate()}`}><Link href={nav.link}>{nav.name}</Link></li>
  )

  const render = () => {
    switch (data.variant) {
      case "simple":
        return <Container>
          <Row>
            <Col md={12} className={`${styles.footerSocialsContainer}`}>
              <div className={`${styles.footerLinks} simple entry-2`}>
                {navigation.map((sect, i) => (
                  <div key={`sdr-${i}`}>
                    <div className="mb-2"><span className={`${typographyStyles.labelMenuFooter} ${styles.footerLabel} ${i == 1 ? "d-block w-100 pr-0" : ""}`}>{sect.label}</span></div>
                    <div className={`${styles.listsRow}`}>
                      <ul>
                        {sect.links.map((nav, z) => (
                          i != 1 ? renderLink(nav, i, z) : z < 5 && renderLink(nav, i, z)
                        ))}
                      </ul>

                      {i == 1 &&
                        <ul className="pl-0 pl-md-5">
                          {sect.links.map((nav, z) => (
                            z > 4 && renderLink(nav, i, z)
                          ))}
                        </ul>
                      }
                      {i == 2 &&
                        <div className={`${styles.footerSocialsMobile} entry-1`}>
                          <div>
                            <div><span>{Followus}:</span></div>
                            <div className="d-flex align-items-center">
                              {data.socials.map((social, i) => (
                                <a key={`si-${i}`} href={social.link} target="blank"><Icon variant={social.icon} /></a>
                              ))}
                            </div>
                          </div>
                        </div>
                      }
                    </div>
                    {i == 0 &&
                      <>
                        <div className={`${styles.footerStoresInner}`}>
                          <div className="entry-1"><span className={`${styles.footerStoresBadge}`}>{GetTheApp}</span></div>
                          <div className={`${styles.footerStoresContainer}`}>
                            {data.stores && data.stores.map((store, i) => (
                              <a key={`si-${i}`} target="blank" className={`entry-${i + 1}`} href={store.link}><img width={130} height={42} className={`${styles.footerStore} ${i < data.stores.length - 1 ? "mr-0 mr-md-3" : ""}`} src={`/img/${store.img}`} alt="" /></a>
                            ))}
                          </div>
                        </div>
                      </>
                    }
                  </div>
                ))}
              </div>
            </Col>
          </Row>
          <Row className={`${styles.footerBorder}`}>
            <Col md={5} className="d-flex align-items-center pt-0 pt-md-3 entry-2">
              <img className={`${styles.footerLogo} mr-3`} src="/img/logo-shape.svg" alt="" />
              <div className={`${styles.footerSocials} simple entry-1`}>
                {data.socials.map((social, i) => (
                  <a key={`si-${i}`} href={social.link} target="blank"><Icon variant={social.icon} /></a>
                ))}
              </div>
            </Col>
            <Col md={7} className={`${styles.footerCopyrightCol}`}>
              <div className={`${styles.footerCopyright} simple entry-3`}>
                {data.additional &&
                  <div className="d-inline d-md-block" dangerouslySetInnerHTML={{ __html: data.additional }}></div>
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
    <div className={`${styles.footer} ${data.className ? data.className : ""} ${isHome() ? "home" : ""} ${visible ? "active" : ""} ${data.variant ? data.variant : ""}`}>
      {render()}
    </div>
  );
}

export default Footer;
