import React from "react"
import Head from 'next/head'
import appConfig from "../../configs/appConfig"
import Hero from "../../sections/Hero"
import AccountBilling from "../../sections/AccountBilling"
import VisibilitySensor from '../../utils/react-visibility-sensor'
import { page } from "../../configs/pages/accountPlan"
import { page as pagePricing } from "../../configs/pages/pricing"

const Plan = () => {

  const sections = [
    { component: Hero, props: {data: page.hero} },
    { component: AccountBilling, props: { data: {...page.accountBilling, pricing: pagePricing} } },
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
