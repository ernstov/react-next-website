export const page = {
  link: "/data-solutions/pricing",
  title: "API pricing",
  description: "API pricing",
  thumbnail: "logo-thumb.png",
  hero: {
    title: "API pricing",
    titleCL: "mw-450",
    className: "pb-0",
    description: "Choose a plan and begin using the API right away.",
    descriptionCL: "mw-600",
  },
  plans: {
    variant: "plan",
    className: "pt-4",
    list: [
      {
        name: "Lite",
        label: "LOCAL",
        color: "#969696",
        variant: "gray",
        description: "Access to city-specific local news in over 100 cities",
        price: 150,
        features: ["100,000 requests/month", "3 requests/second", "Real-time news", "Local, city-specific news", "Topic & entity tagging", "Standard support"]
      },
      {
        name: "Standard",
        label: "World",
        color: "#5B5A59",
        variant: "dark",
        description: "Access to all world news along with journalists data",
        price: 395,
        features: ["250,000 requests/month", "5 requests/second", "Real-time news", "World news", "Topic & entity tagging", "Journalists data", "Standard support"]
      },
      {
        name: "Business",
        label: "Local + world",
        color: "#227C9D",
        variant: "secondary",
        description: "Total access to local + world news, some AI features",
        price: 750,
        features: ["500,000 requests/month", "8 requests/second", "Real-time news", "World news", "Local, city-specific news", "Topic & entity tagging", "Event clustering", "Journalists data", "Trending stories", "Article sentiment data", "Priority support"]
      },
      {
        name: "Enterprise",
        label: "Local + World",
        color: "#F9C035",
        variant: "primary",
        description: "High-scale access to local + world news, all AI features",
        price: 1250,
        features: ["1,000,000 requests/month", "10 requests/second", "Real-time news", "World news", "Local, city-specific news", "Topic & entity tagging", "Event clustering", "Journalists data", "Trending stories", "Article sentiment data", "Article summarization", "99.95% uptime SLA", "Priority support"]
      }
    ],
    columns: [
      {
        name: "Free trial",
        variant: "badge",
        description: "Temporary access to all features for testing purposes",
        list: ["20 requests/day", "Real-time news", "Local, city-specific news", "World news", "All AI features"],
        button: {
          variant: "primary-arrow",
          link: "/sign-up?planName=Free trial",
          name: "Start trial"
        }
      },
      {
        name: "Custom plan",
        variant: "badge",
        description: "Let us tailor a package to fit your project needs, good for:",
        list: ["Custom volume/scale", "Adding unsupported sources", "Tailored AI", "Unique data-mapping needs", "Deeper integrations"],
        button: {
          variant: "primary-arrow-down",
          jump: "contact",
          name: "Contact us"
        }
      },
    ]
  },
  faq: {
    title: "FAQs",
    titleSPC: "Answers to common questions",
    img: "question-marks.svg",
    className: "mt-s",
    list: [
      {
        id: "id1",
        question: "Do I have access to each article’s content?",
        answer: "Yes (in almost every case) the API provides the full body content for each article. You are permitted to use the body of the content for internal purposes (ie. analysis or event detection) only. Perigon is committed to protecting the copyrights of journalists and media sources, so you cannot reprint, replicate, or republish the article’s content without proper permission from the originating source."
      },
      {
        id: "id2",
        question: "Which media sources are supported?",
        answer: "Perigon business solutions offer support for over 40,000 sources of all types and sizes. These include major organizations like CNN, Fox News, Reuters, ABC News, New York Post, NBC News, CBS News, Newsweek, and The New York Times. There are also thousands of specialized sources available, like TechCrunch, ESPN, Snopes, Politico, Gadget, Refinery29, NPR, and others. Our solutions also provide access to thousands of local news outlets and broadcasters from around the world. You can create a free trial or use our live demo to test the availability or results for retrieving content published by your desired sources."
      },
      {
        id: "id3",
        question: "Which cities are supported?",
        answer: "In addition to major and niche media sources from around the globe, Perigon also supports local city or regional news publishers and broadcasters. You’ll find comprehensive local coverage for most of the largest cities around the world, along with hundreds of smaller cities. You can create a free trial or use our live demo to test the availability, results, and sources supported for retrieving local news content."
      },
      {
        id: "id4",
        question: "Which languages are supported?",
        answer: "Our API supports 10+ languages, including, but not limited to English, German, French, Italian, Spanish and Russian."
      },
      {
        id: "id5",
        question: "Can I add the media sources that I want?",
        answer: "We’re happy to explore additional sources for paid plans. There’s typically no cost for requesting the addition of new sources, assuming that they can easily be supported and there is a low number of them. If you have a large number of sources that you’d like to add, or if the sources require more of a custom integration, then we can develop a custom plan to meet your needs. Please email data@goperigon.com with your requirements and a representative will be happy to look into what can be done."
      },
      {
        id: "id6",
        question: "Can you customize a plan?",
        answer: "Absolutely! Please email data@goperigon.com with your requirements and a representative will be happy to work with you to customize a plan or product solution that meets your needs."
      },
    ]
  },

  columns: {
    title: "Business-grade quality for all plans",
    variant: "advanced",
    columns: [
      {
        title: "Helpful support",
        description: "We’re here for you. Message us if you experience any problems or find ways to make Perigon work better for you.",
        img: "support.svg",
      },
      {
        title: "Blazingly fast",
        description: "Response-times <1s. Query by keywords, date ranges, sources, languages, topics, countries & more.",
        img: "bolt.svg",
      },
      {
        title: "Built for developers",
        description: "We provide client libraries that offer full access to the API with as little as a few lines of code.",
        img: "developers.svg",
      },
    ],
  },

  contact: {
    title: "Contact us",
    description: "Send us an email or submit the contact form to get in touch. For Perigon API inquires only.",
    buttons: [
      {
        name: "data@goperigon.com",
        icon: "mail",
        link: "mailto:data@goperigon.com"
      },
      {
        name: "512.394.4645",
        icon: "phone",
        link: "tel:512.394.4645",
      }
    ],
    options: [
      { name: "Sales Questions" },
      { name: "Custom Solutions" },
      { name: "Existing Customer Support" },
      { name: "Perigon News App Inquiry" },
    ]
    // label: "Mon - Fri, 9:00AM - 5:00PM CT"
  }
}
