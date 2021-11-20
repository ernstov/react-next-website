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
          link: "#",
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
      { id: "id1", question: "A sample question here?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed vestibulum ante. Pellentesque fermentum scelerisque libero, vel tristique massa sodales non. Fusce quis diam condimentum, congue massa tincidunt, aliquet mauris. Aliquam vestibulum faucibus eros a cursus. Mauris gravida mattis diam, a mattis arcu auctor sed." },
      { id: "id2", question: "Another question?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed vestibulum ante. Pellentesque fermentum scelerisque libero, vel tristique massa sodales non. Fusce quis diam condimentum, congue massa tincidunt, aliquet mauris. Aliquam vestibulum faucibus eros a cursus. Mauris gravida mattis diam, a mattis arcu auctor sed." },
      { id: "id3", question: "Another question?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed vestibulum ante. Pellentesque fermentum scelerisque libero, vel tristique massa sodales non. Fusce quis diam condimentum, congue massa tincidunt, aliquet mauris. Aliquam vestibulum faucibus eros a cursus. Mauris gravida mattis diam, a mattis arcu auctor sed." },
      { id: "id4", question: "Another question?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed vestibulum ante. Pellentesque fermentum scelerisque libero, vel tristique massa sodales non. Fusce quis diam condimentum, congue massa tincidunt, aliquet mauris. Aliquam vestibulum faucibus eros a cursus. Mauris gravida mattis diam, a mattis arcu auctor sed." },
      { id: "id5", question: "Another question?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed vestibulum ante. Pellentesque fermentum scelerisque libero, vel tristique massa sodales non. Fusce quis diam condimentum, congue massa tincidunt, aliquet mauris. Aliquam vestibulum faucibus eros a cursus. Mauris gravida mattis diam, a mattis arcu auctor sed." },
      { id: "id6", question: "Another question?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed vestibulum ante. Pellentesque fermentum scelerisque libero, vel tristique massa sodales non. Fusce quis diam condimentum, congue massa tincidunt, aliquet mauris. Aliquam vestibulum faucibus eros a cursus. Mauris gravida mattis diam, a mattis arcu auctor sed." },
      { id: "id7", question: "Another question?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed vestibulum ante. Pellentesque fermentum scelerisque libero, vel tristique massa sodales non. Fusce quis diam condimentum, congue massa tincidunt, aliquet mauris. Aliquam vestibulum faucibus eros a cursus. Mauris gravida mattis diam, a mattis arcu auctor sed." },
      { id: "id8", question: "Another question?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed vestibulum ante. Pellentesque fermentum scelerisque libero, vel tristique massa sodales non. Fusce quis diam condimentum, congue massa tincidunt, aliquet mauris. Aliquam vestibulum faucibus eros a cursus. Mauris gravida mattis diam, a mattis arcu auctor sed." },
      { id: "id9", question: "Another question?", answer: "In addition to national & world news, Perigon also gives you the ability to follow local news, weather, and events happening in over 100 cities around the globe. New cities are being added every month!" },
      { question: "News API", link: "/data-solutions/news-api" },
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
        name: "888.202.0521",
        icon: "phone",
        link: "tel:888.202.0521",
      }
    ],
    label: "Mon - Fri, 9:00AM - 5:00PM CT"
  }
}
