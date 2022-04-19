import moment from "moment"

export const page = {
  title: "Monitor Risks & Threats with Global News Data",
  description: "Monitor risks and major events with up-to-the-minute local and global news data from thousands of media sources and publishers. Intelligent data powered and enriched by AI.",
  thumbnail: "logo-thumb.png",
  hero: {
    title: "News data for risk & threat detection",
    titleCL: "mw-450",
    description: "Perigon API gives you the power to track real-time news and events on key issues impacting your business. Stay ahead and avoid disruptions, from the office to the field.",
    descriptionCL: "mw-590",
    img: "risk-thread-detection.svg",
    imgCL: "mw-350",
    btnsClassName: "mt-4",
    variant: "lp",
    listAdv: {
      label: "React faster with our AI-powered solutions:",
      items: ["Track unlimited keywords, events", "Monitor global incidents, risk signals", "Filter for stories or trends that matter", "See what's happening locally"]
    },
    buttons: [
      {
        name: "Live demo",
        link: "/data-solutions/demo",
        variant: "primary-arrow",
      },
      {
        name: "Free trial",
        link: "/sign-up",
        variant: "outline-arrow",
      },
    ]
  },
  heroMob: {
    title: "News data for risk & threat detection",
    titleCL: "mw-450",
    description: "Track real-time news and events on key issues impacting your business. Stay ahead and avoid disruptions, from the office to the field.",
    descriptionCL: "mw-590",
    img: "risk-thread-detection.svg",
    imgCL: "mw-350",
    btnsClassName: "mt-4",
    variant: "lp",
    listAdv: {
      label: "React faster with our AI-powered solutions:",
      items: ["Track unlimited keywords, events", "Monitor global incidents, risk signals", "Filter for stories or trends that matter", "See what’s happening locally"]
    },
    buttons: [
      {
        name: "Live demo",
        link: "/data-solutions/demo",
        variant: "primary-arrow",
      },
      {
        name: "Pricing",
        link: "/data-solutions/pricing",
        variant: "outline-arrow",
      },
    ]
  },
  liveDemo: {
    title: "All news about <strong>Wildfires AND Hurricanes</strong> from <strong>last month</strong>",
    id: 7,
    url: `api.goperigon.com/v1/all?apiKey=[KEY]<br />&q=wildfires%20AND%20hurricanes&from=${moment().subtract(30, 'days').format('YYYY-MM-DD')}`
  }
}
