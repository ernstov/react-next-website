import React from "react"
import Head from 'next/head'
import { useState, useEffect } from 'react'
import appConfig from "../configs/appConfig"
import Footer from "../components/Footer"
import { isWrap } from '../utils'
import Hero from "../sections/Hero"
import VisibilitySensor from '../utils/react-visibility-sensor'
import TagManager from 'react-gtm-module'
import { page } from "../configs/pages/home"
import Illustration from "../sections/Illustration"
import ColumnButtons from "../sections/ColumnButtons"

const tagManagerArgs = {
  gtmId: appConfig.gtmId,
  dataLayerName: appConfig.gtmDataLayerName,
  dataLayer: {
    page: 'Home'
  },
}

const Home = () => {

  const [wrap, setWrap] = useState(true)

  const sections = [
    { component: Hero, props: { data: page.hero } },
    { component: ColumnButtons, props: { data: page.buttons } },
    { component: Illustration, props: { data: page.illustration } },
    { component: Footer, props: { data: { ...appConfig.footer } } },
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

export default Home;
