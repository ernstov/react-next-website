import React, { useEffect, useState, useRef, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import { isObjectEmpty } from "../../utils";
import { Context } from "../../context/context";

import styles from './pageviewer.module.scss'

const PageViewer = ({ isVisible, data }) => {

  const [visible, setVisible] = useState(false);
  const content = useRef(null);
  const isAvailable = useRef(false);
  const { scrollB, lang: { NotFound } } = useContext(Context)

  useEffect(() => {
    return () => {
      removeLinksEvemts();
    }
  }, [])

  useEffect(() => {
    const int = setInterval(() => {
      if (!isAvailable.current) {
        if (content?.current?.innerHTML) {
          clearInterval(int);
          checkLinks();
        }
      }
    }, 300);
  }, [content])

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        setVisible(true)
      }, 1000)
    }
  }, [isVisible])

  const removeLinksEvemts = () => {
    const links = document.querySelectorAll("a[href*='#']");

    links.forEach((link) => {
      link.removeEventListener("click", jumpTo);
    })
  }

  const checkLinks = () => {
    const links = document.querySelectorAll("a[href*='#']");

    links.forEach((link) => {
      link.addEventListener("click", jumpTo);
    })
  }

  const jumpTo = (e) => {
    e.preventDefault();

    const id = e.target.getAttribute("href");
    const section = document.querySelector(id);
    scrollB.current.scrollbar.scrollIntoView(section);
  }

  return (
    <div className={`${styles.pagePost} mt-0 mt-md-4 ${data?.className ? data?.className : ""} mb-5 ${visible ? "active" : ''}`}>
      <Container fluid className="entry-4">
        {data && !isObjectEmpty(data) ? <>
          <Row>
            <Col md={12}>
              <div className={`${styles.pageContent}`} ref={content}>
                <ReactMarkdown plugins={[gfm]} allowDangerousHtml={true}>{data.body}</ReactMarkdown>
              </div>
            </Col>
          </Row> </> :
          <Row>
            <Col md={12}>
              <h2 className="text-center mb-5">{NotFound}</h2>
            </Col>
          </Row>
        }
      </Container>
    </div >
  );
}

export default PageViewer;