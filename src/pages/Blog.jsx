import React from "react";
import Seo from "../components/seo";
import { settings } from "../data/settings";
import VisibilitySensor from '../utils/react-visibility-sensor';
import Footer from "../sections/footer";
import Follow from "../sections/follow";
import PostList from "../sections/blog/postlist"
import { page as comingPage } from "../data/pages/coming";
import { page as blogPage } from "../data/pages/blog";
import { isWrap } from "../utils";
import SEO from "../data/seo.json";

const Blog = ({path}) => {

  const sections = [
    { component: PostList, props: { data: blogPage.blog } },
    { component: Follow, props: { data: settings.follow } },
    { component: Footer, props: { data: { ...settings.footer, ...comingPage.footer } } },
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

export default Blog;
