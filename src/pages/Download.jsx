import React from "react";
import Seo from "../components/seo";
import { settings } from "../data/settings";
import VisibilitySensor from '../utils/react-visibility-sensor';
import Footer from "../sections/footer";
import Follow from "../sections/follow";
import Hero from "../sections/hero";
import Stores from "../sections/stores";
import { page as comingPage } from "../data/pages/coming";
import { page as downloadPage } from "../data/pages/download";
import { isWrap } from "../utils";

const Download = () => {

  const sections = [
    { component: Hero, props: { data: downloadPage.hero } },
    { component: Stores, props: { data: downloadPage.stores } },
    { component: Follow, props: { data: settings.follow } },
    { component: Footer, props: { data: { ...settings.footer, ...comingPage.footer } } },
  ]

  if (!isWrap()) sections.pop();

  return <div>
    <Seo seo={settings.seo} />
    {sections.map((section, i) => (
      <VisibilitySensor partialVisibility={true} once={true} key={`p-${i}`}>
        {({ isVisible }) =>
          React.createElement(section.component, { ...section.props, key: `s-${i}`, isVisible: isVisible })
        }
      </VisibilitySensor>
    ))}
  </div>
}

export default Download;
