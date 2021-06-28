import React from "react"
import Head from 'next/head'
import { useContext, useState } from 'react'
import appConfig from "../../configs/appConfig"
import { Context } from "../../context/context"
import Footer from "../../components/Footer"
import { pages } from "../../configs/pages/dynamic"
import { filterIt } from '../../utils'
import Hero from "../../sections/Hero"
import Carousel from "../../sections/Carousel"
import Columns from "../../sections/Columns"
import Features from "../../sections/Features"
import Api from "../../sections/Api"
import VisibilitySensor from '../../utils/react-visibility-sensor';

const NewsAPI = ({ tags, dataPosts, path }) => {

  const { app, dispatchApp, lang: { Home, } } = useContext(Context);
  const page = filterIt(pages, path, "link")[0];

  const sections = [
    { component: Hero, props: { data: page.hero } },
    { component: Features, props: { data: page.features } },
    { component: Carousel, props: { data: page.carousel } },
    { component: Api, props: { data: page.console } },
    { component: Columns, props: { data: page.columns } },
    { component: Footer, props: { data: appConfig.footer } },
  ]

  return (
    <>
      <Head>
        <title>{appConfig.projectName} - {page.title}</title>
        <link rel="icon" href="/img/favicon.ico" />
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

export default NewsAPI;
