import Head from 'next/head'
import { useEffect, useContext, useState } from 'react'
import appConfig from "../configs/appConfig"
import { Context } from "../context/context"
import Header from "../components/Header"
import { LayoutBase, LayoutRow } from "../components/Layout"
import Footer from "../components/Footer"
import { pages } from "../configs/pages/dynamic"
import { filterIt, getSkeletonVariant, getSidebarAvailability } from '../utils'
import Hero from "../sections/Hero"

const Home = ({ tags, dataPosts, path }) => {

  const { app, dispatchApp, lang: { Home, } } = useContext(Context);
  const page = filterIt(pages, path, "link")[0];

  return (
    <>
      <Head>
        <title>{appConfig.projectName} - {page.title}</title>
        <link rel="icon" href="/img/favicon.ico" />
      </Head>
      <LayoutBase>
        <Header />
        <Hero data={page.hero} />
        <Footer data={appConfig.footer} />
      </LayoutBase>
    </>
  )
}

export async function getStaticProps() {

  return {
    props: { data: {} },
  }
}

export default Home;
