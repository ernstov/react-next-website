import React from "react"
import Head from 'next/head'
import { useState, useEffect } from 'react'
import appConfig from "../configs/appConfig"
import Footer from "../components/Footer"
import {  isWrap } from '../utils'
import Hero from "../sections/Hero/HeroStores"
import VisibilitySensor from '../utils/react-visibility-sensor'
import TagManager from 'react-gtm-module'
import {page} from "../configs/pages/download"
import Carousel from "../sections/Carousel"

const tagManagerArgs = {
  gtmId: appConfig.gtmId,
  dataLayerName: appConfig.gtmDataLayerName,
  dataLayer: {
    page: 'Download'
  },
}

const NewsApp = () => {

  const [wrap, setWrap] = useState(true)

  const sections = [
    { component: Hero, props: { data: page.hero } },
    { component: Carousel, props: { data: page.carousel } },
    { component: Footer, props: { data: { ...appConfig.footer, className: "small-container"} } },
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

export default NewsApp;
