import React, {useState, useEffect} from "react"
import Head from 'next/head'
import appConfig from "../../configs/appConfig"
import Footer from "../../components/Footer"
import Hero from "../../sections/Hero"
import Faq from "../../sections/Faq"
import Columns from "../../sections/Columns"
import Contact from "../../sections/Contact"
import Plans from "../../sections/Plans"
import VisibilitySensor from '../../utils/react-visibility-sensor'
import { page } from "../../configs/pages/pricing"
import {  isWrap, getUrlParam } from '../../utils'
import TagManager from 'react-gtm-module'

const tagManagerArgs = {
  gtmId: appConfig.gtmId,
  dataLayerName: appConfig.gtmDataLayerName,
  dataLayer: {
    page: 'Pricing'
  },
}

const Pricing = () => {

  const [wrap, setWrap] = useState(true)
  const [question, setQuestion] = useState(null)

  const sections = [
    { component: Hero, props: { data: page.hero } },
    { component: Plans, props: { data: page.plans } },
    { component: Columns, props: { data: page.columns } },
    { component: Faq, props: { data: page.faq, question: question, isWrap: wrap } },
    { component: Contact, props: { data: page.contact } },
    { component: Footer, props: { data: appConfig.footer } },
  ]

  useEffect(() => {
    TagManager.dataLayer(tagManagerArgs)

    setWrap(isWrap())
    setQuestion(getUrlParam("q"))
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

export default Pricing;
