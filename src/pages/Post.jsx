import React, { useState, useEffect, useContext } from "react";
import { page } from "../data/pages/blog";
import PostViewer from "../sections/blog/postviewer";
import Seo from "../components/seo";
import Footer from "../sections/footer";
import Hero from "../sections/hero";
import { settings } from "../data/settings";
import { isWrap } from "../utils";
import { Context } from '../context/context';
import {filterIt} from "../utils";

import VisibilitySensor from '../utils/react-visibility-sensor';

const Post = ({path}) => {

  const temp = window.location.href.split("/");
  const postId = temp[temp.length - 1].split("?")[0];
  const { pages } = useContext(Context);
  const p = filterIt(pages.blog, postId, "alias");
  const [post, setPost] = useState(p.length > 0 ? p[0] : {});

  const sections = [
    { component: Hero, props: { data: {...page.hero, title: post.title, description: post.subTitle} } },
    { component: PostViewer, props:{data: post} },
    { component: Footer, props: { data: {...settings.footer, ...page.footer} } },
  ]

  if(!isWrap()) sections.pop();

  return <div>
    <Seo seo={{...page.seo, title: `${settings.projectName} - ${post.title}`}} />
    {sections.map((section, i) => (
      <VisibilitySensor minTopValue={100} partialVisibility={true} once={true} key={`p-${i}`}>
        {({ isVisible }) =>
          React.createElement(section.component, { ...section.props, key: `s-${i}`, isVisible: isVisible })
        }
      </VisibilitySensor>
    ))}
  </div>
}

export default Post;
