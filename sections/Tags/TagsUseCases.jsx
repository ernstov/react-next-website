import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from './tags.module.scss'
import tS from "../../styles/global/typography.module.scss"
import Button from "../../components/ui/Button"
import ScrollContainer from 'react-indiana-drag-scroll'
import { useRouter } from 'next/router'

const TagsUseCases = ({ data, isVisible }) => {

  const router = useRouter()
  const { pathname } = router
  const { title, list } = data

  return (
    <div id={data.id ? data.id : ""} className={`${styles.tagsUseCases} ${isVisible ? "active" : ""}`}>
      <Container className="entry-2">
        <Row>
          <Col>
            <div className={`${styles.useCasesInner}`}>
              <div className={`${styles.useCasesTitle}`}><span className={`${tS.titleDemi} ${tS.c5}`}>{title}</span></div>
              <div className={`${styles.useCasesContainer}`}>
                <ScrollContainer className={`scroll-container`}>
                  <div className={`${styles.useCasesRow}`}>
                    {list?.map((item, i) => (
                      pathname.indexOf(item.link) < 0 &&
                      <div key={`ui-${i}`}>
                        <Button link={item.link} as={`link`} variant="primary" size="sm" className="mr-2" variant="primary">{item.name}</Button>
                      </div>
                    ))}
                  </div>
                </ScrollContainer>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TagsUseCases;
