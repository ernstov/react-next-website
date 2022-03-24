import React from "react"
import Head from 'next/head'
import { useState, useEffect } from 'react'
import appConfig from "../../configs/appConfig"
import Footer from "../../components/Footer"
import {  isWrap } from '../../utils'
import PostList from "../../sections/Postlist"
import VisibilitySensor from '../../utils/react-visibility-sensor'
import TagManager from 'react-gtm-module'
import { page } from "../../configs/pages/wire"
import ApiService from '../../services/ApiService'
import uniqBy from 'lodash.uniqby'

const tagManagerArgs = {
  gtmId: appConfig.gtmId,
  dataLayerName: appConfig.gtmDataLayerName,
  dataLayer: {
    page: 'Blog'
  },
}

const Wire = ({ data, tags }) => {

  const [wrap, setWrap] = useState(true)

  const sections = [
    { component: PostList, props: { data: page.blog, tags:tags, posts: data } },
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
        <meta property="og:title" content={`${page.title} - ${appConfig.projectName}`}></meta>
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

export async function getServerSideProps() {

  const getTags = (articles) => {
    if (!articles?.length) return

    const tagArrs = articles.map(article => {
      return article?.blogTags
    })

    const allTags = tagArrs.flat(1)
    return uniqBy(allTags, 'name')
  }

  const res = await ApiService.getArticles()
  const data = res
  const tags = getTags(data)

  return { props: { data, tags } }
}

export default Wire;
