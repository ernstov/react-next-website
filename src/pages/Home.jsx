import React from "react";
import Seo from "../components/seo";
import {settings} from "../data/settings";
import VisibilitySensor from '../utils/react-visibility-sensor';
import Hero from "../sections/hero";
import Footer from "../sections/footer";
import About from "../sections/about";
import Sources from "../sections/sources";
import Tranding from "../sections/tranding";
import {page} from "../data/pages/home";
import { isWrap } from "../utils";

const Home = () => {

  const sections = [
    { component: Hero, props: { data: page.hero } },
    { component: Sources, props: { data: page.mediaSources } },
    { component: Tranding, props: { data: page.tranding } },
    { component: About, props: { data: page.about } },
    { component: Footer, props: { data: {...settings.footer, ...page.footer} } },
  ]

  if(!isWrap()) sections.pop();

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

export default Home;
