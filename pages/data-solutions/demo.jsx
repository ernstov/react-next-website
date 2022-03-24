import React, { useState, useEffect, useContext } from "react"
import Head from 'next/head'
import appConfig from "../../configs/appConfig"
import DemoViewer from "../../sections/DemoViewer"
import VisibilitySensor from '../../utils/react-visibility-sensor'
import { page } from "../../configs/pages/demo"
import { isWrap } from '../../utils'
import TagManager from 'react-gtm-module'
import { Context } from "../../context/context"

const tagManagerArgs = {
  gtmId: appConfig.gtmId,
  dataLayerName: appConfig.gtmDataLayerName,
  dataLayer: {
    page: 'Demo'
  },
}

const Demo = () => {

  const [wrap, setWrap] = useState(true)
  const { lang: { Moreusecases } } = useContext(Context)

  const sections = [
    { component: DemoViewer, props: { data: page.hero, liveDemos:page.liveDemos, isWrap: wrap } },
  ]

  useEffect(() => {
    TagManager.dataLayer(tagManagerArgs)

    setWrap(isWrap())
  }, [])

  if (!wrap) sections.pop();

  return (
    <>
      <Head>
        <title>{page.title}</title>
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

export default Demo;
