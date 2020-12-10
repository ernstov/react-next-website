import React from "react";
import Seo from "../components/seo";
import {settings} from "../data/settings";
import VisibilitySensor from '../utils/react-visibility-sensor';
import Hero from "../sections/hero";
import Footer from "../sections/footer";
import ContactViewer from "../sections/contact-viewer";
import {page} from "../data/pages/contact";
import { isWrap } from "../utils";
import SEO from "../data/seo.json";

const Contact = ({path}) => {

  const sections = [
    { component: Hero, props: { data: page.hero } },
    { component: ContactViewer, props: { data: page.contact } },
    { component: Footer, props: { data: {...settings.footer, ...settings.simpleFooter} } },
  ]

  if(!isWrap()) sections.pop();

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

export default Contact;
