import React from "react";
import Seo from "../components/seo";
import { settings } from "../data/settings";
import VisibilitySensor from '../utils/react-visibility-sensor';
import Footer from "../sections/footer";
import Coming from "../sections/coming"
import { page } from "../data/pages/coming";
import { isWrap } from "../utils";
import SEO from "../data/seo.json";
import TagManager from 'react-gtm-module'

const tagManagerArgs = {
  gtmId: settings.gtmId,
  dataLayerName: settings.gtmDataLayerName,
  dataLayer: {
    page: 'ComingSoon'
  },
}

const ComingSoon = ({ path }) => {

  TagManager.dataLayer(tagManagerArgs)

  const sections = [
    { component: Coming, props: { data: page.comingSoon } },
    { component: Footer, props: { data: { ...settings.footer, ...page.footer } } },
  ]

  if (!isWrap()) sections.pop();

  return <div>
    <Seo seo={SEO[path] ? SEO[path] : SEO["/"]} />
    {sections.map((section, i) => (
      <VisibilitySensor partialVisibility={true} once={true} key={`p-${i}`}>
        {({ isVisible }) =>
          React.createElement(section.component, { ...section.props, key: `s-${i}`, isVisible: isVisible })
        }
      </VisibilitySensor>
    ))}
  </div>
}

export default ComingSoon;
