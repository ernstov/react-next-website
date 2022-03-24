import { useEffect, useState, useContext, useRef } from "react"
import { Container, Row, Col, Badge } from "react-bootstrap"
import styles from './demoViewer.module.scss'
import ts from '../../styles/global/typography.module.scss'
import ps from '../../styles/global/presets.module.scss'
import dynamic from 'next/dynamic'
import { sourceGroups } from "../../configs/appConfig"
import { Context } from "../../context/context"
import Button from "../../components/ui/Button"
import { IconRefresh } from "../../components/Icon"
import Query from "../../components/ui/Query"
import Url from "../../components/Url"
import FilterComp from "./Filter"
import Popup from "../../components/Popup"
import SelectButtons from "../../components/ui/SelectButtons"
import ScrollBarWrapper from "../../components/ScrollbarWrapper"
import PreviewDemo from "../../components/LiveDemo/PreviewDemo"
import DemoService from "../../services/DemoService"
import { numberWithCommas, filterIt, capitalizeFirstLetter } from "../../utils"
import PreviewDemoSkeleton from "../../components/LiveDemo/PreviewDemoSkeleton"
import { SkeletonTheme } from 'react-loading-skeleton'
import ResponseSkeleton from '../../components/LiveDemo/ResponseSkeleton'
import Router, { useRouter } from "next/router"

const Response = dynamic(() => import('../../components/LiveDemo/Response'), {
  ssr: false
});

const DemoViewer = ({ data, isVisible }) => {

  const [visible, setVisible] = useState(false)
  const { app, dispatchApp, checkedUserState, lang: {
    AllContent,
    HeadlineorArticle,
    wherethe,
    Search,
    Enterquery,
    forT,
    APIResponse,
    Preview,
    Top10results,
    ft1,
    ft2,
    HeadlineClusters,
    Headline,
    where,
    EditFilters,
    Advancedsearchtips,
    results,
    NotFound
  } } = useContext(Context);

  const [selectedTypes, setSelectedTypes] = useState([AllContent, HeadlineorArticle])
  const [isFilterType, setIsFilterType] = useState(false)
  const [isFilterHeadline, setIsFilterHeadline] = useState(false)
  const [isInfo, setIsInfo] = useState(false)
  const [query, setQuery] = useState(`&sortBy=date&from=${app.selectedFilters.startingOn}&showNumResults=true&q=coronavirus AND Pfizer AND vaccin*`)
  const [isLoading, setIsLoading] = useState(true)
  const [count, setCount] = useState(0)
  const [articles, setArticles] = useState([])
  const [json, setJson] = useState([])
  const [isButtonDisabled, setIsButtonDisabled] = useState(false)
  const [isAnimLoading, setIsAnimLoading] = useState(false)
  const [queryString, setQueryString] = useState("coronavirus AND Pfizer AND vaccin*")
  const router = useRouter();
  const { from, to, showNumResults, sortBy, q, location, province, city, language, sourceGroup, exclude, include, category, topic, showReprints, content, type, apiKey, title } = router.query;
  const [key, setKey] = useState(null)
  const [isEnable, setIsEnable] = useState(false)

  useEffect(() => {
    if (router.isReady && checkedUserState) {
      if (from || to || showNumResults || sortBy || location || province || city || language || sourceGroup || exclude || include || category || topic || showReprints || q || content || type || apiKey || title) {
        if (from) addFilter("startingOn", typeof from != "string" ? from[0] : from)
        if (to) addFilter("endingOn", typeof to != "string" ? to[0] : to)
        if (showNumResults == "true") addFilter("showResults", true)
        if (showNumResults == "false") addFilter("showResults", false)
        if (sortBy) addFilter("sortBy", typeof sortBy != "string" ? sortBy[0].toLowerCase() == "date" ? "Time" : "Relevance" : sortBy.toLowerCase() == "date" ? "Time" : "Relevance")
        if (location) addFilter("country", typeof location != "string" ? location[0] : location)
        if (province) addFilter("province", typeof province != "string" ? province[0] : province)
        if (city) addFilter("city", typeof city != "string" ? city[0] : city)
        if (language) addFilter("language", typeof language != "string" ? language.map(l => ({ value: l })) : [{ value: language }])
        if (sourceGroup) addFilter("sourceGroups", typeof sourceGroup != "string" ? { value: sourceGroup[0], label: getSourceGroup(sourceGroup[0]) } : { value: sourceGroup, label: getSourceGroup(sourceGroup) })
        if (exclude) {
          addFilter("sourceInclude", "Exclude")
          addFilter("domains", typeof exclude != "string" ? exclude : [exclude])
        }
        if (include && !sourceGroup) {
          addFilter("sourceInclude", "Include")
          addFilter("domains", typeof include != "string" ? include : [include])
        }
        if (category) addFilter("categories", typeof category != "string" ? category.map(c => ({ value: c })) : [{ value: category }])
        if (topic) addFilter("topics", typeof topic != "string" ? topic.map(t => ({ value: t })) : [{ value: topic }])
        if (showReprints == "false") addFilter("showFilter", true)
        if (q) setQueryString(typeof q != "string" ? q[0] : q)

        if (content) setSelectedTypes(cur => cur.map((c, i) => i == 0 ? typeof content != "string" ? capitalizeFirstLetter(content[0]) : capitalizeFirstLetter(content) : c))
        if (type) setSelectedTypes(cur => cur.map((c, i) => i == 1 ? typeof type != "string" ? capitalizeFirstLetter(type[0]) : capitalizeFirstLetter(type) : c))
        if (apiKey) setKey(apiKey)
        
        if (title) {
          setQueryString(title)
          setSelectedTypes(current => current.map((ci, i) => i == 1 ? Headline : ci))
        }

        setTimeout(()=>{
          setIsEnable(true)
        }, 1000)
      }else{
        onSearch()
      }
    }
  }, [router, checkedUserState])

  useEffect(() => {
    if (!isFilterType) setIsFilterType(false)
    if (!isFilterHeadline) setIsFilterHeadline(false)
  }, [isFilterType, isFilterHeadline])

  useEffect(() => {

    let tempQuery = ''
    const {
      startingOn,
      endingOn,
      country,
      city,
      province,
      language,
      sourceGroups,
      sourceInclude,
      domain,
      domains,
      categories,
      topics,
      sortBy,
      showResults,
      showFilter
    } = app.selectedFilters

    if (startingOn) tempQuery += `&from=${startingOn}`
    if (endingOn) tempQuery += `&to=${endingOn}`
    if (country && country != "All countries") tempQuery += `&country=${country.toLowerCase()}`
    if (city) tempQuery += `&city=${city}`
    if (province) tempQuery += `&state=${province}`
    if (sourceGroups) tempQuery += `&sourceGroup=${sourceGroups.value}`
    if (domain) tempQuery += `&${sourceInclude ? sourceInclude == "Include" ? "source" : "excludeSource" : 'source'}=${domain}`
    if (showResults) tempQuery += `&showNumResults=${showResults}`
    if (showFilter) tempQuery += `&showReprints=${!showFilter}`
    if (sortBy) tempQuery += `&sortBy=${sortBy == "Time" ? "date" : "relevance"}`

    if (domains?.length) {
      domains.forEach((dom) => {
        tempQuery += `&${sourceInclude ? sourceInclude == "Include" ? "source" : "excludeSource" : 'source'}=${dom}`
      })
    }

    if (language?.length) {
      language.forEach((lang) => {
        tempQuery += `&language=${lang.value.toLowerCase()}`
      })
    }

    if (categories?.length) {
      categories.forEach((category) => {
        tempQuery += `&category=${category.value}`
      })
    }

    if (topics?.length) {
      topics.forEach((topic) => {
        tempQuery += `&topic=${topic.value}`
      })
    }

    if (selectedTypes[1] == HeadlineorArticle) {
      tempQuery += `&q=${queryString}`
    }

    if (selectedTypes[1] == Headline) {
      tempQuery += `&title=${queryString}`
    }

    setQuery(tempQuery)

    if(isEnable) {
      onSearch(key, tempQuery)
      setIsEnable(false)
    }

  }, [app.selectedFilters, queryString, selectedTypes, isEnable])

  const getSourceGroup = (value) => {
    const search = filterIt(sourceGroups, value, "value")
    return value ? search?.length ? search[0].label : null : null
  }

  const onSearch = (k, tq) => {
    setIsLoading(true);
    setIsButtonDisabled(true)
    setIsAnimLoading(true)
    setArticles([])

    DemoService
      .getCategories()
      .then((result) => {
        dispatchApp({
          type: 'SET_APP_VALUES', data: {
            categories: result ?
              result.filter((item) => (item.name != "US" && item.name != "World"))
                .map((category) => ({ value: category.name, label: category.name }))
              : []
          }
        })
      })

    DemoService
      .getTopics()
      .then((result) => {
        dispatchApp({ type: 'SET_APP_VALUES', data: { topics: result?.length ? result.map((topic) => ({ value: topic.name, label: topic.name })) : [] } })
      })

    DemoService
      .getContent(tq ? tq : query, selectedTypes[0] == AllContent ? "all" : "headlines", k ? k : key ? key : app.user?.apiKey)
      .then(({ articles, numResults, status, clusters }) => {
        if (status == 200) {

          if (selectedTypes[0] == AllContent) {
            articles.forEach(article => { delete article.cluster })
            setCount(numResults)
            setArticles(articles)
            setJson(articles)
          } else {
            const arts = []
            const c = 0

            clusters.forEach((cluster) => {
              arts.push(cluster.hits[0])
              c += cluster.count
            })

            setArticles(arts)
            setJson(clusters)
            setCount(c)
          }

          setIsLoading(false)

          setTimeout(() => {
            setIsButtonDisabled(false)
          }, 5000)
        }
      })

    setTimeout(() => {
      setIsAnimLoading(false)
    }, 2000)
  }

  const openPopup = (type) => {

    setIsFilterHeadline(false)
    setIsFilterType(false)

    switch (type) {
      case "headline":
        setIsFilterHeadline(true)
        break;
      case "type":
        setIsFilterType(true)
        break;
    }
  }

  const renderTypes = () => {
    return <SelectButtons
      value={selectedTypes[0]}
      onChange={(e) => {
        setSelectedTypes(current => current.map((ci, i) => i == 0 ? e : ci))
        setIsFilterType(false)
      }}
      options={[AllContent, HeadlineClusters]}
    />
  }

  const renderHeadlines = () => {
    return <SelectButtons
      value={selectedTypes[1]}
      onChange={(e) => {
        setSelectedTypes(current => current.map((ci, i) => i == 1 ? e : ci))
        setIsFilterHeadline(false)
      }}
      options={[HeadlineorArticle, Headline]}
    />
  }

  const addFilter = (filterName, value) => {
    dispatchApp({ type: 'SET_DEMO_FILTER', data: { [filterName]: value } })
  }

  const renderInfo = () => {
    return <div className={`${ts.textMediumM} ${styles.textInfo}`}>
      Narrow results by using boolean operators in your query:
      <Container fluid className="p-0 mt-2">
        <Row className="align-items-center">
          <Col xs={5}>
            <div className={`${styles.queryBlock}`}>
              <span>AND</span> <span className="d-none d-lg-inline ml-1 mr-1">∙</span> <span>OR</span> <span className="d-none d-lg-inline ml-1 mr-1">∙</span> <span>NOT</span>
            </div>
          </Col>
          <Col xs={7}>
            <div>
              <div>
                <strong>AND</strong>: Results include both terms
              </div>
              <div>
                <strong>OR</strong>: Results include one or both terms
              </div>
              <div>
                <strong>NOT</strong>: Excludes results with the term
              </div>
            </div>
          </Col>
        </Row>
        <Row className="align-items-center mt-2">
          <Col xs={5}>
            <div className={`${styles.queryBlock}`}>
              Quotes “”
            </div>
          </Col>
          <Col xs={7}>
            <div>
              <div>
                Find exact-phrase matches
              </div>
            </div>
          </Col>
        </Row>
        <Row className="align-items-center mt-2">
          <Col xs={5}>
            <div className={`${styles.queryBlock}`}>
              Asterisks *
            </div>
          </Col>
          <Col xs={7}>
            <div>
              <div>
                Include variants of the keyword
              </div>
            </div>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <strong>🔎 Examples</strong>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="mt-2">
            <div><span className={`${ts.c6}`}>Tesla NOT <strong>“Elon Musk”</strong></span></div>
            <div><span>Find content where <i>Tesla</i> is mentioned, but not <i>“Elon Musk”</i></span></div>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="mt-2">
            <div><span className={`${ts.c6}`}><strong>“Climate Change”</strong> AND <strong>Penguin*</strong></span></div>
            <div><span>Find content where both <i>“Climate Change”</i> and any variation of the word <i>Penguin</i> is mentioned</span></div>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="mt-2">
            <div><span className={`${ts.c6}`}><strong>Crypto*</strong> OR <strong>Bitcoin</strong> NOT <strong>Ethereum</strong></span></div>
            <div><span>Find content where any variation of the word <i>Crypto</i> or <i>Bitcoin</i> is mentioned, but not <i>Ethereum</i></span></div>
          </Col>
        </Row>
      </Container>
    </div>
  }

  const calcFilters = () => {
    return Object.keys(app.selectedFilters).filter((elm) => {
      return (
        elm != "sortBy" &&
        elm != "showResults" &&
        elm != "showFilter" &&
        !(elm == "domains" && app.selectedFilters.domains.length > 0) &&
        app.selectedFilters[elm] != ''
      ) ? true : false
    }).length
  }

  return (
    <div className={`${styles.demoViewer} ${visible ? "active" : ""}`}>
      <ScrollBarWrapper>
        <Container fluid>
          <Row>
            <Col>
              <div className={styles.actionsRow}>
                <div className={styles.actionsRowTypes}>
                  <Button
                    as="div"
                    size="spc"
                    onClick={
                      () => !isFilterType ? openPopup("type") : null
                    }
                    variant="light-simple"
                  >
                    {selectedTypes[0]}
                    <Popup className="d-none d-lg-block" isActive={isFilterType} title={ft1} onClose={() => setIsFilterType(false)}>
                      {renderTypes()}
                    </Popup>
                  </Button>
                  <span className={`${ts.titleSmallD} ${styles.t1} ${ts.op07} d-none d-lg-inline`}>{wherethe}</span>
                  <span className={`${ts.titleSmallD} ${styles.t1} ${ts.op07} d-inline-block d-lg-none`}>{where}</span>
                  <Button
                    as="div"
                    size="spc"
                    onClick={() => !isFilterHeadline ? openPopup("headline") : null}
                    variant="light-simple"
                  >
                    {selectedTypes[1]}
                    <Popup className="d-none d-lg-block" isActive={isFilterHeadline} title={ft2} onClose={() => setIsFilterHeadline(false)}>
                      {renderHeadlines()}
                    </Popup>
                  </Button>
                </div>
                <span className={`${ts.titleSmallD} ${styles.t1} ${ts.op07} d-none d-lg-inline-block`}>{forT}</span>
                <div className={styles.queryRow}>
                  <Query
                    value={queryString}
                    onChange={(e) => {
                      setQueryString(e)
                    }}
                    onEnterPress={onSearch}
                    info={renderInfo}
                    placeholder={Enterquery}
                    onInfoOpen={() => setIsInfo(true)} />
                </div>
                <div className={styles.querySearchButtons}>
                  <Button
                    onClick={() => dispatchApp({ type: 'SET_APP_VALUES', data: { isActiveFilter: true } })}
                    className="d-inline-flex d-lg-none"
                    size="spc"
                    variant="dark"
                  >
                    {EditFilters}
                    <span className={styles.filterCount}>
                      {calcFilters()}
                    </span>
                  </Button>
                  <Button
                    onClick={onSearch}
                    size="spc"
                    variant="primary-shadow"
                    disabled={isButtonDisabled}
                  >
                    {Search} <IconRefresh className={`${ps.ml05} ${isAnimLoading ? "anim-rotate" : ""}`} />
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className={styles.content}>
                <div className={styles.sidebar}>
                  <FilterComp />
                </div>
                <div className={styles.inner}>
                  <Url link={`api.goperigon.com/v1/${selectedTypes[0] == AllContent ? "all" : "headlines"}?apiKey=${key ? key : `${app.user?.apiKey ? app.user.apiKey : '[KEY]'}`}${query}`} />
                  <div className={styles.response}>
                    <div className={styles.responseApi}>
                      <div className={styles.responseTitle}><span className={`${ts.textTitleMd} mr-2`}>{APIResponse}</span> <span className={`${ts.regularD} ${ts.c6}`}>{app.selectedFilters.showResults && <Badge style={{ borderRadius: 4 }} variant="secondary">{numberWithCommas(count)} {results}</Badge>}</span></div>
                      <div className={styles.responseJson}>
                        {isLoading ?
                          <ResponseSkeleton />
                          :
                          <Response tabSize={2} showGutter={false} fontSize={13} theme="tmtcustom-cover" data={json} />
                        }
                      </div>
                    </div>
                    <div className={styles.responsePreview}>
                      <div className={styles.responsePreviewTitle}>
                        <span className={`${ts.textTitleMd} mr-2`}>{Preview}</span> <span className={`${ts.regularD} ${ts.c11}`}>{Top10results}</span>
                      </div>
                      <div className="mt-0 mt-lg-3">
                        <SkeletonTheme color="#383838" highlightColor="#454545">
                          {isLoading &&
                            [...Array(10)].map((x, i) =>
                              <div key={`sig-${i}`} className="mb-1">
                                <PreviewDemoSkeleton />
                              </div>
                            )
                          }
                        </SkeletonTheme>
                        {articles?.length ? articles.map((article, i) => (
                          <div key={`adi-${i}`} className="mb-0 mb-lg-1">
                            <PreviewDemo data={article} />
                          </div>
                        )) :
                          <div className={`${styles.emptyResult}`}>{NotFound}</div>
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </ScrollBarWrapper>
      <Popup className="d-block d-lg-none" isActive={isFilterType} title={ft1} onClose={() => setIsFilterType(false)}>
        {renderTypes()}
      </Popup>
      <Popup className="d-block d-lg-none" isActive={isFilterHeadline} title={ft2} onClose={() => setIsFilterHeadline(false)}>
        {renderHeadlines()}
      </Popup>
      <Popup className="d-block d-lg-none" titleSize="lg" title={Advancedsearchtips} isActive={isInfo} onClose={() => setIsInfo(false)}>
        {renderInfo()}
      </Popup>
    </div>
  );
}

export default DemoViewer;
