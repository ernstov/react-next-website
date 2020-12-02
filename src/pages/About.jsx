import React from "react";
import Seo from "../components/seo";
import {settings} from "../data/settings";
import VisibilitySensor from '../utils/react-visibility-sensor';
import Hero from "../sections/hero";
import Footer from "../sections/footer";
import Quote from "../sections/quote";
import Blocks from "../sections/blocks";
import Carousel from "../sections/carousel";
import AboutGraph from "../sections/aboutGraph";
import Typer from "../sections/typer";
import {page} from "../data/pages/about";
import Follow from "../sections/follow";
import { isWrap } from "../utils";

const About = () => {

  const sections = [
    { component: Hero, props: { data: page.hero } },
    { component: AboutGraph, props: { data: page.graph } },
    { component: Quote, props: { data: page.quote } },
    { component: Carousel, props: { data: page.carousel } },
    { component: Blocks, props: { data: page.cooperation } },
    { component: Typer, props: { data: page.whatWeAsk } },
    { component: Follow, props: { data: settings.follow } },
    { component: Footer, props: { data: {...settings.footer, ...page.footer} } },
  ]

  if(!isWrap()) sections.pop();

  return <div>
    <Seo seo={page.seo} />
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
