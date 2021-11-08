import React from "react"
import Head from 'next/head'
import { useState, useEffect } from 'react'
import appConfig from "../../configs/appConfig"
import Footer from "../../components/Footer"
import {  isWrap } from '../../utils'
import Hero from "../../sections/Hero"
import Follow from "../../sections/Follow"
import Carousel from "../../sections/Carousel"
import Blocks from "../../sections/Blocks"
import AboutGraph from "../../sections/AboutGraph"
import Quote from "../../sections/Quote";
import Typer from "../../sections/Typer";
import VisibilitySensor from '../../utils/react-visibility-sensor'
import TagManager from 'react-gtm-module'
import {page} from "../../configs/pages/about" 

const tagManagerArgs = {
  gtmId: appConfig.gtmId,
  dataLayerName: appConfig.gtmDataLayerName,
  dataLayer: {
    page: 'About'
  },
}

const About = () => {

  const [wrap, setWrap] = useState(true)

  const sections = [
    { component: Hero, props: { data: page.hero } },
    { component: AboutGraph, props: { data: page.graph } },
    { component: Carousel, props: { data: page.carousel } },
    { component: Quote, props: { data: page.quote } },
    { component: Blocks, props: { data: page.cooperation } },
    { component: Typer, props: { data: page.whatWeAsk } },
    // { component: Follow, props: { data: appConfig.follow } },
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

export default About;
