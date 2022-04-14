import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import appConfig from "../../configs/appConfig"
import Footer from "../../components/Footer"
import {  isWrap } from '../../utils'
import PostViewer from "../../sections/PostViewer"
import VisibilitySensor from '../../utils/react-visibility-sensor'
import TagManager from 'react-gtm-module'
import ApiService from '../../services/ApiService'
import { page } from "../../configs/pages/post"

const tagManagerArgs = {
  gtmId: appConfig.gtmId,
  dataLayerName: appConfig.gtmDataLayerName,
  dataLayer: {
    page: 'Post'
  },
}

const Post = ({data}) => {

  const [wrap, setWrap] = useState(true)

  const sections = [
    { component: PostViewer, props: { data: {...data, subscribeTitle: page.subscribeTitle}} },
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
        <title>{appConfig.projectName} - {data?.title}</title>
        <link rel="icon" href="/img/favicon.ico" />
        <meta property="og:title" content={`${data?.title} - ${appConfig.projectName}`}></meta>
        <meta property="og:description" content={`${data?.subTitle}`}></meta>
        <meta name="description" content={`${data?.subTitle}`}></meta>
        <meta property="og:image" content={`${data?.thumbnail?.url}`} id="og"></meta>
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

export async function getServerSideProps(context) {

  const {pid} = context.query;
  const res = await ApiService.getArticle(pid)
  const data = res?.length ? res[0] : {}

  return { props: { data } }
}

export default Post;
