import React, { useEffect } from "react"
import Head from 'next/head'
import appConfig from "../configs/appConfig"
import Hero from "../sections/Hero"
import Error from "../sections/Error"
import { page } from "../configs/pages/error"
import VisibilitySensor from '../utils/react-visibility-sensor'

const Custom404 = () => {
    const sections = [
        { component: Hero, props: { data: page.hero } },
        { component: Error, props: { data: page.error } },
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

export default Custom404;