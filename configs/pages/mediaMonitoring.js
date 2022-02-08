import moment from "moment"

export const page = {
  title: "Media Monitoring News API, Track Keywords",
  description: "Monitor brands, topics, or keywords with up-to-the-minute news and events data from thousands of media sources and publishers. News data powered and enriched by AI.",
  thumbnail: "logo-thumb.png",
  hero: {
    title: "Media monitoring for a noisy world",
    titleCL: "mw-450",
    description: "Perigon API gives you the power to track real-time news and events on the topics that matter to you, your industry, and your brand. Now you’ll be the first to know!",
    descriptionCL: "mw-590",
    img: "media-monitoring-illustration.svg",
    imgCL: "mw-350",
    btnsClassName: "mt-4",
    variant: "lp",
    listAdv: {
      label: "Actionable insights powered by AI:",
      items: ["Track unlimited brand mentions, keywords", "Discover key industry developments", "Monitor brand reputation, sentiment", "Find relevant journalists to share your story"]
    },
    buttons: [
      {
        name: "Free trial",
        link: "/sign-up",
        variant: "primary-arrow",
      },
      {
        name: "View pricing",
        link: "/data-solutions/pricing",
        variant: "outline-arrow",
        className: "d-none d-md-flex"
      },
      {
        name: "Pricing",
        link: "/data-solutions/pricing",
        variant: "outline-arrow",
        className: "d-flex d-md-none"
      },
    ]
  },
  heroMob: {
    title: "Media monitoring for a noisy world",
    titleCL: "mw-450",
    description: "Track real-time news and events on the topics that matter to you, your industry, and your brand. Now you’ll be the first to know!",
    descriptionCL: "mw-590",
    img: "media-monitoring-illustration.svg",
    imgCL: "mw-350",
    btnsClassName: "mt-4",
    variant: "lp",
    listAdv: {
      items: ["Track unlimited mentions, keywords", "Discover key industry developments", "Monitor brand reputation, sentiment", "Find relevant journalists to pitch"]
    },
    buttons: [
      {
        name: "Free trial",
        link: "/sign-up",
        variant: "primary-arrow",
      },
      {
        name: "View pricing",
        link: "/data-solutions/pricing",
        variant: "outline-arrow",
        className: "d-none d-md-flex"
      },
      {
        name: "Pricing",
        link: "/data-solutions/pricing",
        variant: "outline-arrow",
        className: "d-flex d-md-none"
      },
    ]
  },
  liveDemo: {
    title: "All news mentioning <strong>Tesla OR Elon Musk</strong> in the <strong>US</strong> from <strong>last week</strong>",
    id: 6,
    url: `api.goperigon.com/v1/all?apiKey=[KEY]<br />&q=Tesla OR "Elon Musk"&country=us&from=${moment().subtract(7, 'days').format('YYYY-MM-DD')}`
  }
}
