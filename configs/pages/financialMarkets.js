import moment from "moment"

export const page = {
  title: "News data for financial intelligence",
  description: "Uncover the news and events that are impacting the markets in real-time. Take your investment strategy to the next level with actionable insights powered by AI.",
  thumbnail: "logo-thumb.png",
  hero: {
    title: "News data for financial intelligence",
    titleCL: "mw-450",
    description: "Uncover the news and events that are impacting the markets in real-time. Take your investment strategy to the next level with actionable insights powered by AI.",
    descriptionCL: "mw-590",
    img: "financial-markets.svg",
    imgCL: "mw-350",
    btnsClassName: "mt-4",
    variant: "lp",
    listAdv: {
      label: "Why investors and analysts choose Perigon:",
      items: ["Track unlimited keywords, companies", "Monitor brand, market or industry news", "Discover buy/sell signals", "Analyze a brand or market's perceived sentiment"]
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
    title: "News data for financial intelligence",
    titleCL: "mw-450",
    description: "Uncover events that are impacting the markets in real-time. Take your investment strategy to the next level with actionable, AI-powered insights.",
    descriptionCL: "mw-590",
    img: "financial-markets.svg",
    imgCL: "mw-350",
    btnsClassName: "mt-4",
    variant: "lp",
    listAdv: {
      label: "Why investors and analysts choose Perigon:",
      items: ["Track unlimited keywords, brands, companies", "Monitor company or industry news", "Discover buy/sell signals", "Analyze perceived sentiment"]
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
    title: "All news about <strong>Microsoft OR MSFT</strong> in <strong>Markets</strong> from <strong>last month</strong>",
    id: 5,
    url: `api.goperigon.com/v1/all?apiKey=[KEY]<br />&q=Microsoft OR MSFT&topic=Markets&from=${moment().subtract(7, 'days').format('YYYY-MM-DD')}`
  }
}
