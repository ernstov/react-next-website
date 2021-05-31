import React from "react"
import Head from 'next/head'
import { useContext, useState } from 'react'
import appConfig from "../../configs/appConfig"
import { Context } from "../../context/context"
import { pages } from "../../configs/pages/dynamic"
import { filterIt } from '../../utils'
import Hero from "../../sections/Hero"
import AccountPlan from "../../sections/AccountPlan"
import VisibilitySensor from '../../utils/react-visibility-sensor';

const Plan = ({ tags, dataPosts, path }) => {

  const { app, dispatchApp, lang: { Welcome, } } = useContext(Context);
  const page = filterIt(pages, path, "link")[0];

  const sections = [
    { component: Hero, props: { data: {...page.hero, title: `Welc<span>ome, A</span>ndrii`} } },
    { component: AccountPlan, props: { data: page.accountPlan } },
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

export default Plan;
