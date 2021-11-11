export const page = {
  title: "All API & business solutions",
  description: "Perigon All API & business solutions",
  hero: {
    title: "A single access-point to the news that matters",
    titleCL: "mw-450",
    description: "Perigon tracks, organizes, and analyzes up-to-the-minute news and events data from thousands of sources across the web.",
    descriptionCL: "mw-500",
    img: "news-api.png",
    animation: "newsApi",
    list: ["AI-powered", "NLP-enriched", "Comprehensive", "Cleansed, structured", "25+ data points per article"],
    btnsClassName: "mt-4",
    label: "A smarter news API",
    buttons: [
      {
        name: "Free trial",
        link: "#",
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
  carousel: {
    variant: "fluid",
    className: "with-bullets news-api",
    slidesLg: 3.3,
    slidesMd: 2.3,
    loop: false,
    columns: [
      { title: "Topic & entity extraction", description: "Machine learning automatically extracts events, people, businesses, places, & topics in the news.", img: "/img/topic-extraction.png", imgClass: "fluid offset20" },
      { title: "Event clustering", description: "Articles are systematically scored for similarity and then organized into a clean feed. Analyze each of them individually, or filter for unique headlines.", img: "/img/event-clustering.png", imgClass: "fluid offset20" },
      { title: "Real-time signals", description: "Perigon analyzes over 500 articles every minute. Search by source, date, location, and/or custom keywords for up-to-the-minute news.", img: "/img/real-time-signals.png", imgClass: "fluid offset120" },
      { title: "Easy integration", description: "Apply Perigon’s API to your next project with simple HTTP get requests and JSON results. Start using the API with as little as 4 lines of code.", img: "/img/easy-integrations.png", imgClass: "fluid offset50" },
    ]
  },
  image: {
    img: ""
  },
  columns: {
    title: "Industries & use cases",
    titleSPC: "Transform today’s news into powerful business insight",
    titleCL: "mw-md-210",
    titleSPCCL: "mw-md-260",
    img: "power-of-intelligence.svg",
    className: "reduce-padding-md",
    columns: [
      {
        title: "Media monitoring",
        description: "Monitor your brand, competitors, industry trends, or keywords to identify and investigate mentions, risks and opportunities in real-time.",
        img: "media-monitoring.svg",
        className: "border-bottom-half",
        mobileOrder: 1,
      },
      {
        title: "Financial services",
        description: "Elevate your investment strategy by harnessing the power of current and historical news data. Gain actionable insights or minimize risk by integrating our feeds into your business’s predictive modeling.",
        img: "financial-services.svg",
        className: "border-bottom-half",
        mobileOrder: 3,
      },
      {
        title: "Enrich your app",
        description: "Increase user engagement by adding real-time news to your application. Allow your users to customize their feed with fresh content on the topics that matter most to them.",
        img: "enrich-your-app.svg",
        className: "border-bottom-half",
        mobileOrder: 2,
      },
      {
        title: "Data collection & analysis",
        description: "Supercharge your analytics strategy with news content. Our data includes timely information about events, business risks, global trends, and more.",
        img: "data-collection.svg",
        className: "border-bottom-half",
        mobileOrder: 4,
      },
      {
        title: "Fight misinformation",
        description: "Improve the integrity of your existing data pipeline or distributed content. Integrate Perigon into your workflows and proactively detect or filter inaccurate or potentially misleading information.",
        img: "fight-misinformation.svg",
        className: "border-bottom-half-mobile",
        mobileOrder: 5,
      },
      {
        title: "Historical, research",
        description: "Find historical trends or major events from within your industry. Learn more about the media, topics, and stories relevant to your business.",
        img: "historical-research.svg",
        mobileOrder: 6,
      },
    ],
    buttons: [
      {
        name: "Start building",
        link: "#",
        variant: "primary-arrow",
      },
    ]
  },

  features: {
    img: "",
    column2: {
      label: "All from over 40,000 sources",
      list: [
        {
          title: "Global media",
          img: "globe.svg",
          description: "Up-to-the-minute coverage from national & world news sources — from major media brands to smaller niche publishers.",
        },
        {
          title: "Local city media",
          img: "location.svg",
          description: "Search by city, state or province and filter for news published by local city papers & broadcasters.",
        }
      ]
    },
    buttons: [
      {
        name: "View sources",
        link: "#",
        variant: "rounded-dark",
      },
      {
        name: "View cities",
        link: "#",
        variant: "rounded-dark",
      },
    ]
  },
  console: {
    inner: {
      title: "Live demo",
      tab: "REQUEST",
      label: "REST API",
      getLabel: "curl -XGET",
      dateLabel: "FROM DATE",
      button: "Refresh",
      api: "app.gawq.com/",
      query: "tags/trending",
      date: "2020-07-01",
    }
  },
  tags: {
    title: "<strong>25+</strong> data points on each article",
    description: "Cut the noise and capture what matters from each story",
    rows: [
      ["Headline", "Language", "Media Source", "Category", "Smart Labels"],
      ["Date & Time", "City", "Paywall Indicator", "Topics", "Named Entities"],
      ["Author Info", "State, Province", "Media Bias Rating", "Description (Byline)", "Sentiment Score"],
      ["Article URL", "Country", "Article Reprint Indicator", "Medium / Type", "Content Keywords"],
      ["Article Image", "Related Articles", "Cluster Grouping ID", "AI-Summarized Text", "Taxonomy"],
    ]
  }
}
