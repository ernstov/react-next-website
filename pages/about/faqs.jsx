import React from "react"
import Head from 'next/head'
import { useState, useEffect } from 'react'
import appConfig from "../../configs/appConfig"
import Footer from "../../components/Footer"
import { isWrap, getUrlParam } from '../../utils'
import Hero from "../../sections/Hero"
import FaqViewer from "../../sections/FaqViewer"
import VisibilitySensor from '../../utils/react-visibility-sensor'
import TagManager from 'react-gtm-module'
import {page} from "../../configs/pages/faq"

const tagManagerArgs = {
  gtmId: appConfig.gtmId,
  dataLayerName: appConfig.gtmDataLayerName,
  dataLayer: {
    page: 'Faq'
  },
}

const Faqs = ({ path }) => {

  const [question, setQuestion] = useState(null)
  const [wrap, setWrap] = useState(true)

  useEffect(() => {
    TagManager.dataLayer(tagManagerArgs)

    // if (!isWrap()) {
    //   setSections(current => current.filter((item, i)=>i < current.length-1))
    // }
    setQuestion(getUrlParam("q"))
    setWrap(isWrap())
  }, [])

  const sections = [
    { component: Hero, props: { data: page.hero } },
    { component: FaqViewer, props: { data: page.faq, question: question, isWrap: wrap } },
    // { component: Follow, props: { data: {...appConfig.follow, className: "pb-spc"} } },
    { component: Footer, props: { data: { ...appConfig.footer, className: "small-container"} } },
  ]

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

export default Faqs;
