import React from "react"
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

const Pricing = () => {

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

export default Pricing;
