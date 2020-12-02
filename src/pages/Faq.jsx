import React from "react";
import Seo from "../components/seo";
import {settings} from "../data/settings";
import VisibilitySensor from '../utils/react-visibility-sensor';
import Hero from "../sections/hero";
import Footer from "../sections/footer";
import FaqViewer from "../sections/faq-viewer";
import Follow from "../sections/follow";
import {page} from "../data/pages/faq";
import { isWrap } from "../utils";

const Faq = () => {

  const sections = [
    { component: Hero, props: { data: page.hero } },
    { component: FaqViewer, props: { data: page.faq } },
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

export default Faq;
