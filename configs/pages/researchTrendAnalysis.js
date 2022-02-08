import moment from "moment"

export const page = {
  title: "News Data API for Analysts & Developers",
  description: "Search and analyze historical and up-to-the-minute news and media coverage from thousands of local and global media sources. Powered by AI.",
  thumbnail: "logo-thumb.png",
  hero: {
    title: "News data for research & trend analysis",
    titleCL: "mw-450",
    description: "Track real-time or historical trends, events, and signals in the news. Fuel ML models and discover actionable insights with AI-powered news data.",
    descriptionCL: "mw-590",
    img: "research.svg",
    imgCL: "mw-500",
    btnsClassName: "mt-4",
    variant: "lp",
    listAdv: {
      items: ["Analyze unlimited keywords", "Filter by dozens of variables", "Identify trends, signals in the media", "Search historical news or track real-time data"]
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
    title: "News data for research & trend analysis",
    titleCL: "mw-450",
    description: "Track real-time or historical trends, events, and signals in the news. Fuel ML models and discover actionable insights with AI-powered news data.",
    descriptionCL: "mw-590",
    img: "research.svg",
    imgCL: "mw-350",
    btnsClassName: "mt-4",
    variant: "lp",
    listAdv: {
      items: ["Analyze unlimited keywords", "Filter by dozens of variables", "Identify trends, signals in the media", "Search historical or real-time news"]
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
    title: "All news about <strong>Green Energy</strong> OR <strong>Climate Change</strong> from <strong>last month</strong>", 
    id: 8,
    url: `api.goperigon.com/v1/all?apiKey=[KEY]<br />?topic=Climate Change&topic=Green Energy&from=${moment().subtract(30, 'days').format('YYYY-MM-DD')}`
  }
}
