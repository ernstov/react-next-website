import React, { useState, useEffect, useContext } from "react";
import { page } from "../data/pages/page";
import PageViewer from "../sections/pageviewer";
import Seo from "../components/seo";
import Footer from "../sections/footer";
import Hero from "../sections/hero";
import { settings } from "../data/settings";
import { isWrap } from "../utils";
import { cleanText } from "../utils";
import { PagesManager } from "../services/ContentManager";

import VisibilitySensor from '../utils/react-visibility-sensor';
import TagManager from 'react-gtm-module'

const tagManagerArgs = {
  gtmId: settings.gtmId,
  dataLayerName: settings.gtmDataLayerName,
  dataLayer: {
    page: 'Page'
  },
}

const Page = ({ path }) => {

  TagManager.dataLayer(tagManagerArgs)

  const temp = window.location.href.split("/");
  const pageAlias = temp[temp.length - 1].split("?")[0];
  const [post, setPost] = useState({});

  useEffect(() => {
    PagesManager(pageAlias).then((result) => {
      setPost(result?.data ? result?.data[0] : null);
    }, error => {
      dispatchNotifi({ type: "ERROR", data: { error: error } })
    });
  }, [])

  const sections = [
    { component: Hero, props: { data: { ...page.hero, title: post.title, description: post.subTitle, isExternal: true, img: post?.hero ? post.hero[0]?.url : null} } },
    { component: PageViewer, props: { data: post } },
    { component: Footer, props: { data: { ...settings.footer, ...page.footer } } },
  ]

  if (!isWrap()) sections.pop();

  return <div>
    <Seo seo={{title: `${settings.projectName} - ${post.title ? cleanText(post.title) : ""}` }} />
    {sections.map((section, i) => (
      <VisibilitySensor minTopValue={100} partialVisibility={true} once={true} key={`p-${i}`}>
        {({ isVisible }) =>
          React.createElement(section.component, { ...section.props, key: `s-${i}`, isVisible: isVisible })
        }
      </VisibilitySensor>
    ))}
  </div>
}

export default Page;
