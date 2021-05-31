import React from "react"
import Head from 'next/head'
import { useEffect, useContext, useState } from 'react'
import appConfig from "../configs/appConfig"
import { Context } from "../context/context"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { pages } from "../configs/pages/dynamic"
import { filterIt, getSkeletonVariant, getSidebarAvailability } from '../utils'
import Hero from "../sections/Hero"
import Faq from "../sections/Faq"
import Columns from "../sections/Columns"
import Contact from "../sections/Contact"
import Plans from "../sections/Plans"
import VisibilitySensor from '../utils/react-visibility-sensor';

const Home = ({ tags, dataPosts, path }) => {

  const { app, dispatchApp, lang: { Home, } } = useContext(Context);
  const page = filterIt(pages, path, "link")[0];

  const sections = [
    { component: Hero, props: { data: page.hero } },
    { component: Plans, props: { data: page.plans } },
    { component: Columns, props: { data: page.columns } },
    { component: Faq, props: { data: page.faq } },
    { component: Contact, props: { data: page.contact } },
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

export default Home;
