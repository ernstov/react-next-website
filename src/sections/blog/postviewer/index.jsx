import React, { useEffect, useState, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlogAuthor from "../../../components/blog/BlogAuthor";
import BlogTags from "../../../components/blog/BlogTags";
import BlogShare from "../../../components/blog/BlogShare";
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import { dateFormat, isObjectEmpty } from "../../../utils";
import { settings } from "../../../data/settings";
import {navigate} from "@reach/router";
import {Context} from "../../../context/context";

import "./PostViewer.scss";

const PostViewer = ({ isVisible, data }) => {

  const [visible, setVisible] = useState(false);
  const {dispatchPages} = useContext(Context);

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        setVisible(true)
      }, 1000)
    }
  }, [isVisible])

  const onTagChange = (e) => {
    dispatchPages({ type: "SET_APP_VALUES", data: { tag: e } });
    navigate("/wire");
  }

  return (
    <div className={`blog-post mt-0 mt-md-4 ${data.className ? data.className : ""} mb-5 ${visible ? "active" : ''}`}>
      <Container fluid className="entry-4">
        {!isObjectEmpty(data) ? <>
          <Row>
            <Col md={12}>
              <div className="blog-post-title">
                {data.blog_author && <BlogAuthor data={data.blog_author} />}
                <div className="mb-4"><span className="text-medium-lgt">{dateFormat(data.created_at, "mmm dd, yyyy")}</span><span className="text-medium-lgt dot-before">{data.timeToRead ? data.timeToRead : "1"}{settings.texts.m} {settings.texts.read}</span></div>
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
                      {data.blogTags && <BlogTags onChange={onTagChange} data={data.blogTags} />}
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