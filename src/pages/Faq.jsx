import React from "react";
import Seo from "../components/seo";
import { settings } from "../data/settings";
import VisibilitySensor from '../utils/react-visibility-sensor';
import Hero from "../sections/hero";
import Footer from "../sections/footer";
import FaqViewer from "../sections/faq-viewer";
import Follow from "../sections/follow";
import { page } from "../data/pages/faq";
import { isWrap } from "../utils";
import SEO from "../data/seo.json";
import TagManager from 'react-gtm-module'
import { gtmDataLayerName, gtmId } from "../const";

const tagManagerArgs = {
  gtmId: gtmId,
  dataLayerName: gtmDataLayerName,
  dataLayer: {
    page: 'Faq'
  },
}


const Faq = ({ path }) => {

  TagManager.dataLayer(tagManagerArgs)

  const sections = [
    { component: Hero, props: { data: page.hero } },
    { component: FaqViewer, props: { data: page.faq } },
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

export default Faq;
