import React from "react";
import Seo from "../components/seo";
import {settings} from "../data/settings";
import VisibilitySensor from '../utils/react-visibility-sensor';
import Hero from "../sections/hero";
import Footer from "../sections/footer";
import HtmlViewer from "../sections/html-viewer";
import {page} from "../data/pages/privacy";
import { isWrap } from "../utils";

const Privacy = () => {

  const sections = [
    { component: Hero, props: { data: page.hero } },
    { component: HtmlViewer, props: { data: page.privacy } },
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

export default Privacy;
