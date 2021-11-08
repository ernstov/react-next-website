import React from "react"
import Head from 'next/head'
import appConfig from "../configs/appConfig"
import Hero from "../sections/Hero"
import ForgotPasswordSection from "../sections/ForgotPasswordSection"
import VisibilitySensor from '../utils/react-visibility-sensor'
import { page } from "../configs/pages/forgotPassword"

const ForgotPassword = () => {
    const sections = [
        { component: Hero, props: { data: page.hero } },
        { component: ForgotPasswordSection, props: { data: page.forgot } },
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

export default ForgotPassword;
