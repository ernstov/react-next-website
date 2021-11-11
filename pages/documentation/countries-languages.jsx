import React from "react"
import Head from 'next/head'
import appConfig from "../../configs/appConfig"
import VisibilitySensor from '../../utils/react-visibility-sensor'
import { page } from "../../configs/pages/documentationLanguages"
import Page from "../../sections/Page";

const CountriesLanguages = () => {

  const sections = [
    { component: Page, props: { data: page } },
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

export default CountriesLanguages;
