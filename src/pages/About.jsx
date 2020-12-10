import React from "react";
import Seo from "../components/seo";
import { settings } from "../data/settings";
import VisibilitySensor from '../utils/react-visibility-sensor';
import Hero from "../sections/hero";
import Footer from "../sections/footer";
import Quote from "../sections/quote";
import Blocks from "../sections/blocks";
import Carousel from "../sections/carousel";
import AboutGraph from "../sections/aboutGraph";
import Typer from "../sections/typer";
import { page } from "../data/pages/about";
import Follow from "../sections/follow";
import { isWrap } from "../utils";
import SEO from "../data/seo.json";
import TagManager from 'react-gtm-module'
import { gtmDataLayerName, gtmId } from "../const";

const tagManagerArgs = {
  gtmId: gtmId,
  dataLayerName: gtmDataLayerName,
  dataLayer: {
    page: 'About'
  },
}

const About = ({ path }) => {

  TagManager.dataLayer(tagManagerArgs)

  const sections = [
    { component: Hero, props: { data: page.hero } },
    { component: AboutGraph, props: { data: page.graph } },
    { component: Quote, props: { data: page.quote } },
    { component: Carousel, props: { data: page.carousel } },
    { component: Blocks, props: { data: page.cooperation } },
    { component: Typer, props: { data: page.whatWeAsk } },
    { component: Follow, props: { data: settings.follow } },
    { component: Footer, props: { data: { ...settings.footer, ...settings.simpleFooter } } },
  ]

  if (!isWrap()) sections.pop();

  return <div>
    <Seo seo={SEO[path] ? SEO[path] : SEO["/"]} />
    {sections.map((section, i) => (
      <VisibilitySensor minTopValue={100} partialVisibility={true} once={true} key={`p-${i}`}>
        {({ isVisible }) =>
          React.createElement(section.component, { ...section.props, key: `s-${i}`, isVisible: isVisible })
        }
      </VisibilitySensor>
    ))}
  </div>
}

export default About;
