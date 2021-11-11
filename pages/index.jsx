import React from "react"
import Head from 'next/head'
import { useState, useEffect } from 'react'
import appConfig from "../configs/appConfig"
import Footer from "../components/Footer"
import { cutOffString, diffTimeString, isWrap } from '../utils'
import Hero from "../sections/Hero"
import Tranding from "../sections/Tranding"
import Sources from "../sections/Sources"
import About from "../sections/About";
import VisibilitySensor from '../utils/react-visibility-sensor'
import moment from "moment"
import TagManager from 'react-gtm-module'
import {page} from "../configs/pages/home" 

const tagManagerArgs = {
  gtmId: appConfig.gtmId,
  dataLayerName: appConfig.gtmDataLayerName,
  dataLayer: {
    page: 'Home'
  },
}

const Home = () => {

  const [trandingContents, setContents] = useState([])
  const [loading, setLoading] = useState(true)
  const [wrap, setWrap] = useState(true)

  const sections = [
    { component: Hero, props: { data: page.hero } },
    // { component: Sources, props: { data: page.mediaSources } },
    // { component: Tranding, props: { data: { ...page.tranding, content: trandingContents } } },
    // { component: About, props: { data: page.about } },
    //{ component: Footer, props: { data: {...appConfig.footer} } },
  ]

  // useEffect(() => {
  //   TagManager.dataLayer(tagManagerArgs)
  //   fetchContent()
  //   setWrap(isWrap())
  // }, [])

  // const fetchContent = async () => {
  //   const endTime = moment.utc().format('YYYY-MM-DDTHH:00:00')
  //   const startTime = moment.utc().subtract(8, "hours").format('YYYY-MM-DDTHH:00:00')

  //   setLoading(true)
  //   try {
  //     const res = await fetch(`${appConfig.api}/articles/headlines?startTime=${startTime}` + `&endTime=${endTime}`)
  //     const resJson = await res.json()
  //     const contents = resJson && resJson.length > 0 && resJson.map(item => {
  //       return {
  //         title: cutOffString(item.headline),
  //         date: diffTimeString(moment(item.created_at).fromNow()),
  //         source: item.source?.name,
  //         sourceLogo: item.source?.logoFavIcon?.url,
  //         img: item.image,
  //         label: item.type,
  //         url: item.url,
  //         comment: {
  //           author: "",
  //           avatar: "",
  //           content: "",
  //         }
  //       }
  //     }).filter(item => item.img && item)

  //     setContents(contents ?? [])
  //     setLoading(false)
  //   } catch (e) {
  //     console.log(e)
  //     setLoading(false)
  //   }
  // }

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

export default Home;
