import React, { useEffect, useState, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlogAuthor from "../../components/Blog/BlogAuthor";
import BlogTags from "../../components/Blog/BlogTags";
import BlogShare from "../../components/Blog/BlogShare";
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import { dateFormat, isObjectEmpty } from "../../utils";
import {Context} from "../../context/context";
import { useRouter } from "next/router";
import presetsStyles from "../../styles/global/typography.module.scss"
import appConfig from "../../configs/appConfig"

import styles from './postviewer.module.scss'

const PostViewer = ({ isVisible, data }) => {

  const [visible, setVisible] = useState(false)
  const { lang: { Postnotfound, m, read } } = useContext(Context)
  const router = useRouter()

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        setVisible(true)
      }, appConfig.entryDelay)
    }
  }, [isVisible])

  const onTagChange = (e) => {
    dispatchApp({ type: "SET_APP_VALUES", data: { tag: e } });
    router.push("/wire");
  }

  return (
    <div className={`${styles.blogPost} mt-0 mt-md-4 ${data.className ? data.className : ""} mb-5 ${visible ? "active" : ''}`}>
      <Container fluid className="entry-4">
        {!isObjectEmpty(data) ? <>
          <Row>
            <Col md={12}>
              <div className="blog-post-title">
                {data.blog_author && <BlogAuthor data={data.blog_author} />}
                <div className="mb-4"><span className={`${presetsStyles.textMediumLgt}`}>{dateFormat(data.created_at, "mmm dd, yyyy")}</span><span className={`${presetsStyles.textMediumLgt} dot-before`}>{data.timeToRead ? data.timeToRead : "1"}{m} {read}</span></div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <div className={`${styles.blogContent}`}>
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
              <h2 className="text-center mb-5">{Postnotfound}</h2>
            </Col>
          </Row>
        }
      </Container>
    </div >
  );
}

export default PostViewer;