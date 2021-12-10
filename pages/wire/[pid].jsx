import React, { useState, useEffect, useContext } from 'react'
import Head from 'next/head'
import appConfig from "../../configs/appConfig"
import Footer from "../../components/Footer"
import {  isWrap, filterIt } from '../../utils'
import PostViewer from "../../sections/PostViewer"
import Hero from "../../sections/Hero"
import { Context } from "../../context/context"
import { useRouter } from "next/router"
import VisibilitySensor from '../../utils/react-visibility-sensor'
import TagManager from 'react-gtm-module'
import { page } from "../../configs/pages/post"
import ApiService from '../../services/ApiService'

const tagManagerArgs = {
  gtmId: appConfig.gtmId,
  dataLayerName: appConfig.gtmDataLayerName,
  dataLayer: {
    page: 'Post'
  },
}

const Post = () => {

  const { app, lang: { home } } = useContext(Context);
  const router = useRouter();
  const [post, setPost] = useState({});
  const [wrap, setWrap] = useState(true)
  const postId = router.query.pid;

  useEffect(()=>{
    if(postId) {
      getArticleRequest(postId)
    }
  }, [postId])

  const getArticleRequest = (id) => {
    ApiService.getArticle(id).then(response => {
      if (response) {
        setPost(response[0])
      }
    })
  }

  const sections = [
    { component: Hero, props: { data: { ...page.hero, title: post?.title, description: post?.subTitle } } },
    { component: PostViewer, props: { data: post} },
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
        <title>{appConfig.projectName} - {post?.title}</title>
        <link rel="icon" href="/img/favicon.ico" />
        <meta property="og:title" content={`${appConfig.projectName} - ${post?.title}`}></meta>
        <meta property="og:description" content={`${post?.subTitle}`}></meta>
        <meta name="description" content={`${post?.subTitle}`}></meta>
        <meta property="og:image" content={`/img/${post?.thumbnail?.url}`} id="og"></meta>
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

export default Post;
