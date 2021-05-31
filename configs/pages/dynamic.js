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
      className: "with-bullets reduce-padding-md",
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
      className: "reduce-padding-md",
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
    }
  },

  {
    link: "/pricing",
    title: "API pricing",
    description: "API pricing",
    hero: {
      title: "API <span>pricing</span>",
      titleCL: "mw-450",
      className: "pb-0",
      description: "Choose a plan to start using the API right away.",
      descriptionCL: "mw-600",
      img: "hands-prining.svg",
    },
    plans: {
      variant:"plan",
      className: "pt-0",
      list: [
        {
          name: "Lite",
          label: "LOCAL",
          color: "#969696",
          variant:"gray",
          description: "Access to city-specific local news in over 100 cities",
          price: 150,
          features: ["100,000 requests/month", "3 requests/second", "Real-time news", "Local, city-specific news", "Topic & entity tagging", "Standard support"]
        },
        {
          name: "Standard",
          label: "World",
          color: "#5B5A59",
          variant:"dark",
          description: "Access to all world news along with journalists data",
          price: 395,
          features: ["250,000 requests/month", "5 requests/second", "Real-time news", "World news", "Topic & entity tagging", "Journalists data", "Standard support"]
        },
        {
          name: "Business",
          label: "Local + world",
          color: "#227C9D",
          variant:"secondary",
          description: "Total access to local + world news, some AI features",
          price: 750,
          features: ["500,000 requests/month", "8 requests/second", "Real-time news", "World news", "Local, city-specific news", "Topic & entity tagging", "Event clustering", "Journalists data", "Trending stories", "Article sentiment data", "Priority support"]
        },
        {
          name: "Enterprise",
          label: "Local + World",
          color: "#F9C035",
          variant:"primary",
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
          list: ["10 requests/day", "Real-time news", "Local, city-specific news", "World news", "All AI features"],
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
        { id: "id9", question: "Another question?", answer: "In addition to national & world news, Gawq also gives you the ability to follow local news, weather, and events happening in over 100 cities around the globe. New cities are being added every month!" },
        { question: "News API", link: "/" },
      ]
    },

    columns: {
      title: "Business-grade quality for all plans",
      variant: "advanced",
      columns: [
        {
          title: "Helpful support",
          description: "We’re here for you. Message us if you experience any problems or find ways to make Gawq work better for you.",
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
      description: "Send us an email or submit the contact form to get in touch. For Gawq API inquires only.",
      buttons: [
        {
          name: "data@gawq.com",
          icon: "mail",
          link: "mailto:data@gawq.com"
        },
        {
          name: "888.202.0521",
          icon: "phone",
          link: "tel:888.202.0521",
        }
      ],
      label: "Mon - Fri, 9:00AM - 5:00PM CT"
    }
  },
  {
    link: "/sign-up",
    title: "Sign up",
    description: "Create a business account to get started.",
    hero: {
      title: "S<span>ign u</span>p",
      titleCL: "mw-450",
      description: "Create a business account to get started.",
      descriptionCL: "mw-600",
      img: "account-hero.svg",
      variant: "small",
    },
    signup: {
      bottom: "Existing business user?",
      options: [
        {value: "Free trial", label: "Free trial"},
        {value: "Lite", label: "Lite"},
        {value: "Standart", label: "Standart"},
        {value: "Business", label: "Business"},
        {value: "Enterprise", label: "Enterprise"},
      ]
    }
  }
]