import React, {useEffect} from "react"
import Head from 'next/head'
import appConfig from "../../configs/appConfig"
import VisibilitySensor from '../../utils/react-visibility-sensor'
import { page } from "../../configs/pages/documentationPythonExamples"
import TagManager from 'react-gtm-module'
import Page from "../../sections/Page";

const tagManagerArgs = {
    gtmId: appConfig.gtmId,
    dataLayerName: appConfig.gtmDataLayerName,
    dataLayer: {
        page: 'Documentation Journalist Search By Id'
    },
}

const JournalistById = () => {

    const sections = [
        { component: Page, props: { data: page } },
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

export async function getStaticProps() {

    return {
        props: { data: {} },
    }
}

export default JournalistById;
