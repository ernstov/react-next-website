import React, { useState, useEffect, useContext } from "react"
import Head from 'next/head'
import appConfig from "../../configs/appConfig"
import Footer from "../../components/Footer"
import Hero from "../../sections/Hero/HeroLanding"
import Carousel from "../../sections/Carousel/CarouselDark"
import Columns from "../../sections/Columns/ColumnsAdvanced"
import TagsUseCases from "../../sections/Tags/TagsUseCases"
import Features from "../../sections/Features/FeaturesLight"
import Api from "../../sections/Api"
import VisibilitySensor from '../../utils/react-visibility-sensor'
import { page } from "../../configs/pages/newsApi"
import { globalData } from "../../configs/pages/globalData"
import { isWrap } from '../../utils'
import TagManager from 'react-gtm-module'
import { Context } from "../../context/context"
import Compare from "../../sections/Compare"

const tagManagerArgs = {
  gtmId: appConfig.gtmId,
  dataLayerName: appConfig.gtmDataLayerName,
  dataLayer: {
    page: 'News Api'
  },
}

const NewsAPI = () => {

  const [wrap, setWrap] = useState(true)
  const { lang: { Moreusecases } } = useContext(Context)

  const sections = [
    { component: Hero, props: { data: page.hero, liveDemos:page.liveDemos, isWrap: wrap } },
    { component: Features, props: { data: globalData.features } },
    { component: Carousel, props: { data: globalData.carousel } },
    // { component: Api, props: { data: page.console } },
    { component: TagsUseCases, props: { data: {title: Moreusecases, list: [...appConfig.headerNavigation[1].sub[1].sub]} } },
    { component: Compare, props: { data: globalData.compare } },
    { component: Columns, props: { data: globalData.industries } },
    { component: Footer, props: { data: appConfig.footer } },
  ]

  useEffect(() => {
    TagManager.dataLayer(tagManagerArgs)

    setWrap(isWrap())
  }, [])

  if (!wrap) sections.pop();

  return (
    <>
      <Head>
        <title>{appConfig.projectName} - {page.title}</title>
        <link rel="icon" href="/img/favicon.ico" />
        <meta property="og:title" content={`${appConfig.projectName} - ${page.title}`}></meta>
        <meta name="description" content={`${page.description}`}></meta>
        <meta property="og:description" content={`${page.description}`}></meta>
        <meta property="og:image" content={`${appConfig.projectDomain}/img/${page.thumbnail}`} id="og"></meta>
      </Head>
      {sections.map((section, i) => (
        <VisibilitySensor minTopValue={100} partialVisibility={true} once={true} key={`p-${i}`}>
          {({ isVisible }) =>
            React.createElement(section.component, { ...section.props, key: `s-${i}`, isVisible: isVisible })
          }
        </VisibilitySensor>
      ))}
    </>
  )
}

export default NewsAPI;
