import Head from "next/head";
import appConfig from "../../configs/appConfig";
import {page} from "../../configs/pages/headlineMappings";
import VisibilitySensor from "../../utils/react-visibility-sensor";
import React from "react";
import HeadlineTableSection from "../../sections/HeadlineTableSection";

const HeadlineMappings = () => {
    const sections = [
        { component: HeadlineTableSection, props: { data: {} } }
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

export default HeadlineMappings;
