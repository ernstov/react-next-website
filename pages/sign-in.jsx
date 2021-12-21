import React, {useEffect} from "react"
import Head from 'next/head'
import appConfig from "../configs/appConfig"
import Hero from "../sections/Hero"
import Signin from "../sections/Signin"
import VisibilitySensor from '../utils/react-visibility-sensor'
import { page } from "../configs/pages/signIn"
import TagManager from 'react-gtm-module'

const tagManagerArgs = {
    gtmId: appConfig.gtmId,
    dataLayerName: appConfig.gtmDataLayerName,
    dataLayer: {
        page: 'Sign In'
    },
}

const SignIn = () => {
    const sections = [
        { component: Hero, props: { data: page.hero } },
        { component: Signin, props: { data: page.signIn } },
    ]

    useEffect(() => {
        TagManager.dataLayer(tagManagerArgs)
    }, [])

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

export default SignIn;
