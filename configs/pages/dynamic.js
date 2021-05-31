export const pages = [
  {
    link: "/",
    title: "News API & business solutions",
    description: "Gawq News API & business solutions",
    hero: {
      title: "News <span>API</span> & business solutions",
      titleCL: "mw-450",
      description: "Access current news and event data, aggregated from thousands of sources around the world.",
      descriptionCL: "mw-600",
      img: "gears.svg",
      buttons: [
        {
          name: "Free trial",
          link: "#",
          variant: "primary-arrow",
        },
      ]
    },
    carousel: {
      variant: "fluid",
      className: "with-bullets",
      columns: [
        { title: "Topic & entity extraction", description: "Machine learning automatically extracts events, people, businesses, places, & topics in the news.", img: "/img/topic-extraction.jpg", imgClass: "fluid offset20" },
        { title: "Event clustering", description: "Articles are systematically scored for similarity and then organized into a clean feed. Analyze each of them individually, or filter for unique headlines.", img: "/img/event-clustering.jpg", imgClass: "fluid offset20" },
        { title: "Real-time signals", description: "Gawq analyzes over 500 articles every minute. Search by source, date, location, and/or custom keywords for up-to-the-minute news.", img: "/img/real-time-signals.jpg", imgClass: "fluid offset120" },
        { title: "Easy integration", description: "Apply Gawq’s API to your next project with simple HTTP get requests and JSON results. Start using the API with as little as 4 lines of code.", img: "/img/easy-integrations.jpg", imgClass: "fluid offset50" },
        { title: "Real-time signals", description: "Gawq analyzes over 500 articles every minute. Search by source, date, location, and/or custom keywords for up-to-the-minute news.", img: "/img/real-time-signals.jpg", imgClass: "fluid offset120" },
        { title: "Easy integration", description: "Apply Gawq’s API to your next project with simple HTTP get requests and JSON results. Start using the API with as little as 4 lines of code.", img: "/img/easy-integrations.jpg", imgClass: "fluid offset50" },
      ]
    },
    image: {
      img: ""
    },
    columns: {
      title: "Industries & use cases",
      titleSPC: "Tap into the power of news intelligence",
      img: "power-of-intelligence.svg",
      columns: [
        {
          title: "Media monitoring",
          description: "Monitor your brand, competitors, industry trends, or keywords to identify and investigate mentions, risks and opportunities in real-time.",
          img: "media-monitoring.svg",
          className: "border-bottom-half"
        },
        {
          title: "Financial services",
          description: "Elevate your investment strategy by harnessing the power of current and historical news data. Gain actionable insights or minimize risk by integrating our feeds into your business’s predictive modeling.",
          img: "financial-services.svg",
          className: "border-bottom-half"
        },
        {
          title: "Enrich your app",
          description: "Increase user engagement by adding real-time news to your application. Allow your users to customize their feed with fresh content on the topics that matter most to them.",
          img: "enrich-your-app.svg",
          className: "border-bottom-half-mobile"
        },
        {
          title: "Data collection & analysis",
          description: "Supercharge your analytics strategy with news content. Our data includes timely information about events, business risks, global trends, and more.",
          img: "data-collection.svg"
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
      column1: {
        label: "Designed for scale",
        labelImg: "designed-scale.svg",
        title: "A single API access-point to global media",
        description: "Gawq empowers developers, analysts and businesses with a clean, AI-powered RESTful API and JSON results to current and historical news articles.",
        img: "code-box.png",
        list: [
          { title: "Local, national, & world news" },
          { title: "20 languages" },
          { title: "NLP enrichment" },
          { title: "Topic & entity tagging" },
          { title: "Categorization" },
          { title: "Event clustering" },
          { title: "Article sentiment data" }
        ]
      },
      column2: {
        label: "News from over <strong>10,000</strong> sources",
        list: [
          {
            title: "Global media",
            img: "globe.svg",
            description: "Up-to-the-minute coverage from national & world news sources — from major media brands to smaller niche publishers.",
          },
          {
            title: "Local city media",
            img: "location.svg",
            description: "Search by city, state or province to access news published by local city papers & broadcast stations.",
          }
        ]
      },
      buttons: [
        {
          name: "View sources",
          link: "#",
          variant: "outline-primary",
        },
        {
          name: "View cities",
          link: "#",
          variant: "outline-primary",
        },
      ]
    }
  },

  {
    link: "/pricing",
    title: "API pricing",
    description: "API pricing",
    hero: {
      title: "API <span>pricing</span>",
      titleCL: "mw-450",
      description: "Choose a plan to start using the API right away.",
      descriptionCL: "mw-600",
      img: "hands-prining.svg",
    },
  },
]