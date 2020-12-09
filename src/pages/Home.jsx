import React, { useEffect, useState } from "react";
import Seo from "../components/seo";
import { settings } from "../data/settings";
import VisibilitySensor from '../utils/react-visibility-sensor';
import Hero from "../sections/hero";
import Footer from "../sections/footer";
import About from "../sections/about";
import Sources from "../sections/sources";
import Tranding from "../sections/tranding";
import { page } from "../data/pages/home";
import { cutOffString, diffTimeString, isWrap } from "../utils";
import moment from 'moment';

const Home = () => {
  const [trandingContents, setContents] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchContent()
  }, [])

  const fetchContent = async () => {
    const endTime = moment.utc().format('YYYY-MM-DDTHH:00:00')
    const startTime = moment.utc().subtract(8, "hours").format('YYYY-MM-DDTHH:00:00')

    setLoading(true)
    try {
      const res = await fetch(`https://app.gawq.com/articles/headlines2?startTime=${startTime}` + `&endTime=${endTime}`)
      const resJson = await res.json()
      const contents = resJson && resJson.length > 0 && resJson.map(item => {
        return {
          title: cutOffString(item.headline),
          date: diffTimeString(moment(item.created_at).fromNow()),
          source: item.source?.name,
          sourceLogo: item.source?.logoFavIcon?.url,
          img: item.image,
          label: item.type,
          url: item.url,
          comment: {
            author: "",
            avatar: "",
            content: "",
          }
        }
      })

      setContents(contents ?? [])
      setLoading(false)
    } catch (e) {
      console.log(e)
      setLoading(false)
    }
  }

  const sections = [
    { component: Hero, props: { data: page.hero } },
    { component: Sources, props: { data: page.mediaSources } },
    { component: Tranding, props: { data: { ...page.tranding, content: trandingContents } } },
    { component: About, props: { data: page.about } },
    { component: Footer, props: { data: { ...settings.footer, ...page.footer } } },
  ]

  if (!isWrap()) sections.pop();

  return !loading && <div>
    <Seo seo={settings.seo} />
    {sections.map((section, i) => (
      <VisibilitySensor partialVisibility={true} once={true} key={`p-${i}`}>
        {({ isVisible }) =>
          React.createElement(section.component, { ...section.props, key: `s-${i}`, isVisible: isVisible })
        }
      </VisibilitySensor>
    ))}
  </div>
}

export default Home;
