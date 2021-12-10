import React, {useState, useEffect} from "react"
import Head from 'next/head'
import appConfig from "../../configs/appConfig"
import Footer from "../../components/Footer"
import HeroAdvanced from "../../sections/Hero/HeroAdvanced"
import Carousel from "../../sections/Carousel"
import Columns from "../../sections/Columns"
import Tags from "../../sections/Tags"
import FeaturesSimple from "../../sections/Features/FeaturesSimple"
import Api from "../../sections/Api"
import VisibilitySensor from '../../utils/react-visibility-sensor'
import { page } from "../../configs/pages/newsApi"
import {  isWrap } from '../../utils'
import TagManager from 'react-gtm-module'

const tagManagerArgs = {
  gtmId: appConfig.gtmId,
  dataLayerName: appConfig.gtmDataLayerName,
  dataLayer: {
    page: 'News Api'
  },
}

const NewsAPI = () => {

  const [wrap, setWrap] = useState(true)

  const sections = [
    { component: HeroAdvanced, props: { data: page.hero, isWrap: wrap } },
    { component: FeaturesSimple, props: { data: page.features } },
    { component: Carousel, props: { data: page.carousel } },
    { component: Api, props: { data: page.console } },
    { component: Tags, props: { data: page.tags } },
    { component: Columns, props: { data: page.columns } },
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

export async function getStaticProps() {

  return {
    props: { data: {} },
  }
}

export default NewsAPI;
