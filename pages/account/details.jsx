import React from "react"
import Head from 'next/head'
import appConfig from "../../configs/appConfig"
import Hero from "../../sections/Hero"
import AccountPlan from "../../sections/AccountPlan"
import VisibilitySensor from '../../utils/react-visibility-sensor'
import {page} from "../../configs/pages/myDetails"
import { useRouter } from "next/router"

const Details = () => {
  const router = useRouter()

  const title = router.query.name ? `Welcome, ${router.query.name}` : 'Welcome!'

  const sections = [
    { component: Hero, props: { data: {...page.hero, title } } },
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

export default Details;
