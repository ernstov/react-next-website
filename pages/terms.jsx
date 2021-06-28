import React from "react"
import Head from 'next/head'
import { useState, useEffect } from 'react'
import appConfig from "../configs/appConfig"
import Footer from "../components/Footer"
import { pages } from "../configs/pages/dynamic"
import {  isWrap, filterIt } from '../utils'
import Hero from "../sections/Hero"
import HtmlViewer from "../sections/HtmlViewer";
import VisibilitySensor from '../utils/react-visibility-sensor'
import TagManager from 'react-gtm-module'

const tagManagerArgs = {
  gtmId: appConfig.gtmId,
  dataLayerName: appConfig.gtmDataLayerName,
  dataLayer: {
    page: 'Terms'
  },
}

const Terms = ({ path }) => {

  const page = filterIt(pages, path, "link")[0]

  const [sections, setSections] = useState([
    { component: Hero, props: { data: page.hero } },
    { component: HtmlViewer, props: { data: page.terms } },
    { component: Footer, props: { data: { ...appConfig.footer} } },
  ])

  useEffect(() => {
    TagManager.dataLayer(tagManagerArgs)

    if (!isWrap()) {
      setSections(current => current.filter((item, i)=>i < current.length-1))
    }
  }, [])

  return (
    <>
      <Head>
        <title>{appConfig.projectName} - {page.title}</title>
        <link rel="icon" href="/img/favicon.ico" />
        <meta property="og:title" content={`${appConfig.projectName} - ${page.title}`}></meta>
        <meta name="description" content={`${page.description}`}></meta>
        <meta property="og:image" content={`/img/${page.thumbnail}`} id="og"></meta>
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

export default Terms;
