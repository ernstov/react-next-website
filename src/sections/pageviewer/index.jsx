import React, { useEffect, useState, useRef, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import { isObjectEmpty } from "../../utils";
import { settings } from "../../data/settings";
import {Context} from "../../context/context";

import "./PageViewer.scss";

const PageViewer = ({ isVisible, data }) => {

  const {scrollB} = useContext(Context);
  const [visible, setVisible] = useState(false);
  const content = useRef(null);
  const isAvailable = useRef(false);

  useEffect(()=>{
    return ()=>{
      removeLinksEvemts();
    }
  }, [])

  useEffect(() => {
    const int = setInterval(() => {
      if (!isAvailable.current) {
        if (content.current.innerHTML) {
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
    
    links.forEach((link)=>{
      link.removeEventListener("click", jumpTo);
    })
  }

  const checkLinks = () => {
    const links = document.querySelectorAll("a[href*='#']");
    
    links.forEach((link)=>{
      link.addEventListener("click", jumpTo);
    })
  }

  const jumpTo = (e) => {
    e.preventDefault();
    
    const id = e.target.getAttribute("href");
    const section = document.querySelector(id);
    console.log(section.offsetTop)
    scrollB.current.scrollbar.scrollIntoView(section);
  }

  return (
    <div className={`page-post mt-0 mt-md-4 ${data.className ? data.className : ""} mb-5 ${visible ? "active" : ''}`}>
      <Container fluid className="entry-4">
        {!isObjectEmpty(data) ? <>
          <Row>
            <Col md={12}>
              <div className="page-content" ref={content}>
                <ReactMarkdown plugins={[gfm]} allowDangerousHtml={true}>{data.body}</ReactMarkdown>
              </div>
            </Col>
          </Row> </> :
          <Row>
            <Col md={12}>
              <h2 className="text-center mb-5">{settings.texts.NotFound}</h2>
            </Col>
          </Row>
        }
      </Container>
    </div >
  );
}

export default PageViewer;