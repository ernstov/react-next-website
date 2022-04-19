import moment from "moment"

export const page = {
  title: "News Data API, Global Media from 40,000 Sources",
  description: "Get up-to-the-minute news and events data from thousands of local and global media sources and publishers. News data powered and enriched by AI.",
  thumbnail: "logo-thumb.png",
  hero: {
    title: "A smarter news API",
    titleCL: "mw-450",
    description: "Up-to-the-minute news & events data from over 40,000 sources across the web. Structured & enriched by AI.",
    descriptionCL: "mw-590",
    animation: "newsApi",
    imgCL: "mw-450 mobile-offset",
    btnsClassName: "mt-4",
    variant: "lp",
    buttons: [
      {
        name: "Live demo",
        link: "/data-solutions/demo",
        variant: "primary-arrow",
      },
      {
        name: "Free trial",
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
    title: "All <strong>cryptocurrency</strong> articles in the <strong>US</strong> from <strong>yesterday</strong>",
  },
  image: {
    img: ""
  },
  console: {
    inner: {
      title: "Live demo",
      tab: "REQUEST",
      label: "REST API",
      getLabel: "curl -XGET",
      button: "Refresh",
      api: "api.goperigon.com",
      query: "/v1/all?source=techcrunch.com",
    }
  },
  tags: {
    title: "<strong>25+</strong> data points on each article",
    description: "Cut the noise and capture what matters from each story",
    id: "data-points",
    rows: [
      ["Headline", "Language", "Media Source", "Category", "Smart Labels"],
      ["Date & Time", "City", "Paywall Indicator", "Topics", "Named Entities"],
      ["Author Info", "State, Province", "Media Bias Rating", "Description (Byline)", "Sentiment Score"],
      ["Article URL", "Country", "Article Reprint Indicator", "Medium / Type", "Content Keywords"],
      ["Article Image", "Related Articles", "Cluster Grouping ID", "AI-Summarized Text", "Taxonomy"],
    ]
  },
  liveDemos: [
    {
      title: `All local <strong>Crime</strong> news for <strong>Chicago</strong>, <strong>IL</strong> from <strong>yesterday</strong>`,
      id: 1,
    },
    {
      title: "News about <strong>SpaceX OR Tesla</strong> from <strong>last week</strong> by <strong>top 100</strong> sources",
      id: 0,
    },
    {
      title: `News about <strong>Startups</strong> from <strong>last month</strong> by <strong>top 50 tech sources</strong>`,
      id: 2,
    },
    {
      title: "All articles by <strong>nbcnews.com, cnbc.com, bbc.co.uk</strong> from <strong>yesterday</strong>",
      id: 3,
    },
    {
      title: "All <strong>Sports</strong> articles from <strong>yesterday</strong>",
      id: 4,
    }
  ]
}
