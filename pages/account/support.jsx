import React from "react"
import Head from 'next/head'
import appConfig from "../../configs/appConfig"
import SupportSection from "../../sections/SupportSection"
import VisibilitySensor from '../../utils/react-visibility-sensor'
import {page} from "../../configs/pages/support" 

const Support = () => {

  const sections = [
    { component: SupportSection, props: { data: page.support } },
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

export default Support;
