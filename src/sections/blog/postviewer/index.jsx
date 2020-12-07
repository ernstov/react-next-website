import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlogAuthor from "../../../components/blog/BlogAuthor";
import BlogTags from "../../../components/blog/BlogTags";
import BlogShare from "../../../components/blog/BlogShare";
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import { dateFormat, isObjectEmpty } from "../../../utils";
import {settings} from "../../../data/settings";

import "./PostViewer.scss";

const PostViewer = ({ isVisible, data }) => {

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        setVisible(true)
      }, 1000)
    }
  }, [isVisible])

  return (
    <div className={`blog-post mt-5 ${data.className ? data.className : ""} mb-5 ${visible ? "active" : ''}`}>
      <Container fluid className="entry-4">
        {!isObjectEmpty(data) ? <>
          <Row>
            <Col md={12}>
              <div className="blog-post-title">
                <BlogAuthor data={data.authors} />
                <div className="mb-4"><span className="text-medium-lgt">{dateFormat(data.created_at, "mmm dd, yyyy")}</span></div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <div className="blog-content">
                <ReactMarkdown plugins={[gfm]} allowDangerousHtml={true}>{data.body}</ReactMarkdown>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <div className="blog-post-bottom">
                <Container className="p-0" fluid>
                  <Row>
                    <Col md={8}>
                      <BlogTags data={data.blogTags} />
                    </Col>
                    <Col md={4}>
                      <BlogShare data={data} />
                    </Col>
                  </Row>
                </Container>
              </div>
            </Col>
          </Row> </> :
            <Row>
              <Col md={12}>
                <h2 className="text-center mb-5">{settings.texts.Thepostnotfound}</h2>
              </Col>
            </Row>
            }
      </Container>
    </div >
  );
}

export default PostViewer;