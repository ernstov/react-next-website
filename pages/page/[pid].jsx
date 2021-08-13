import React, { useState, useEffect, useContext } from 'react'
import Head from 'next/head'
import appConfig from "../../configs/appConfig"
import Footer from "../../components/Footer"
import { pages } from "../../configs/pages/dynamic"
import {  isWrap, filterIt } from '../../utils'
import PageViewer from "../../sections/PageViewer"
import Hero from "../../sections/Hero"
import { Context } from "../../context/context"
import { useRouter } from "next/router"
import VisibilitySensor from '../../utils/react-visibility-sensor'
import TagManager from 'react-gtm-module'
import ApiService from '../../services/ApiService'

const tagManagerArgs = {
  gtmId: appConfig.gtmId,
  dataLayerName: appConfig.gtmDataLayerName,
  dataLayer: {
    page: 'Page'
  },
}

const Page = ({ path }) => {

  const page = filterIt(pages, "/page", "link")[0]
  const { app, lang: { home } } = useContext(Context);
  const router = useRouter();
  const [p, setP] = useState(null);
  const [wrap, setWrap] = useState(true)

  useEffect(()=>{
    if(router.query.pid && !p) {
      ApiService.getPage(router.query.pid)
      .then((result) => {
        setP(result[0]);
      })
    }

  }, [router.query.pid])

  const sections = [
    { component: Hero, props: { data: { ...page.hero, title: p?.title, description: p?.subTitle } } },
    { component: PageViewer, props: { data: p } },
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
        <title>{appConfig.projectName} - {p?.title}</title>
        <link rel="icon" href="/img/favicon.ico" />
        <meta property="og:title" content={`${appConfig.projectName} - ${p?.title}`}></meta>
        <meta property="og:description" content={`${p?.subTitle}`}></meta>
        <meta name="description" content={`${p?.subTitle}`}></meta>
        <meta property="og:image" content={`/img/${p?.thumbnail?.url}`} id="og"></meta>
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

export default Page;
