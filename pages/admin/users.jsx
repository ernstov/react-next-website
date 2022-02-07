import Head from "next/head";
import appConfig from "../../configs/appConfig";
import {page} from "../../configs/pages/users";
import VisibilitySensor from "../../utils/react-visibility-sensor";
import React from "react";
import UsersTableSection from "../../sections/UsersTableSection";

const Users = () => {
    const sections = [
      { component: UsersTableSection, props: { data: {} } }
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

export default Users;
