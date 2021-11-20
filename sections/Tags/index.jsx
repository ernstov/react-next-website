import React from "react";
import { Container, Row, Col, Badge } from "react-bootstrap";
import Scrollbar from 'react-smooth-scrollbar';
import styles from './tags.module.scss'
import typographyStyles from "../../styles/global/typography.module.scss"

const Tags = ({ data, isVisible }) => {

  return (
    <div className={`${styles.tags} ${isVisible ? "active" : ""}`}>
      <Container className="tags-container title">
        <Row className="mb-4">
          <Col>
            {data.title && <h3 className={`${styles.columnsTitle} ${typographyStyles.textTitleSmShape} mt-4 mb-1 entry-2 text-center`} dangerouslySetInnerHTML={{ __html: data.title }}></h3>}
            {data.description && <div className={`${typographyStyles.textSubTitleSecondary} mb-4 entry-2 text-center`}>{data.description}</div>}
          </Col>
        </Row>
      </Container>
      <Container className="tags-container pl-0 pr-0 entry-2">
        <Scrollbar>
          <Row>
            {data?.rows?.map((tagsRow, i) => (
              <Col key={`t-${i}`} xl={12} className="pr-0">
                <div className="tags-tags">
                  <div className="tags-tags-container">
                    {tagsRow.map((item, i) => (
                      <div key={`bi-${i}`}>
                        <Badge className="mr-2 mb-0 mb-md-2" variant="secondary-light">{item}</Badge>
                      </div>
                    ))}
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Scrollbar>
      </Container>
    </div>
  );
}

export default Tags;
