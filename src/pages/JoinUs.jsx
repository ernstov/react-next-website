import React from "react";
import Seo from "../components/seo";
import { settings } from "../data/settings";
import VisibilitySensor from '../utils/react-visibility-sensor';
import Footer from "../sections/footer";
import Follow from "../sections/follow";
import Hero from "../sections/hero";
import JoinUsContent from "../sections/join-us";
import { page } from "../data/pages/join-us";
import { isWrap } from "../utils";

const JoinUs = () => {

  const sections = [
    { component: Hero, props: { data: page.hero } },
    { component: JoinUsContent, props: { data: page.joinUs } },
    { component: Follow, props: { data: settings.follow } },
    { component: Footer, props: { data: { ...settings.footer, ...settings.simpleFooter } } },
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

export default JoinUs;