export const page = {
  link: "/data-solutions/pricing",
  title: "API pricing",
  description: "API pricing",
  thumbnail: "logo-thumb.png",
  hero: {
    title: "API pricing",
    titleCL: "mw-450",
    className: "pb-0",
    description: "Choose a plan or start a trial to begin using the API right away",
    descriptionCL: "mw-600",
  },
  plans: {
    variant: "plan",
    className: "pt-4",
    list: [
      {
        name: "Lite",
        //label: "LOCAL",
        color: "#969696",
        variant: "gray",
        description: "For simple projects, includes only basic article data",
        price: 75,
        features: [
          { name: "10,000 requests/month" },
          { name: "News with 1-hour delay", tooltip: "<h3>News with 1-hour delay</h3>Articles and news data returned through the API will be delayed by one hour. If you need real-time news, please consider the Pro or Business plans." },
          { name: "2 requests/second" },
          { name: "Standard article data", tooltip: "<h3>Standard article data</h3>This includes core article details like the published date/time, headline, URL, author, description or summary content, article image URL, type (article or video), language, and country." },
        ]
      },
      {
        name: "Standard",
        //label: "World",
        color: "#F9C035",
        btnTextColor: "#121212",
        variant: "dark",
        description: "For projects with moderate usage + enriched data",
        price: 150,
        features: [
          { name: "25,000 requests/month" },
          { name: "News with 1-hour delay", tooltip: "<h3>News with 1-hour delay</h3>Articles and news data returned through the API will be delayed by one hour. If you need real-time news, please consider the Pro or Business plans." },
          { name: "2 requests/second" },
          { name: "Standard article data", tooltip: "<h3>Standard article data</h3>This includes core article details like the published date/time, headline, URL, author, description or summary content, article image URL, type (article or video), language, and country." },
          { name: "Enriched datapoints", tooltip: "<h3>Enriched datapoints</h3>Use enriched article data for searching, filtering, analyzing, or highlighting context inside your application. Enriched datapoints include article categorization, topics, location (city and state), smart labels, named entities, sentiment analysis, paywall indicator, and reprint indicator." },
          { name: "Topic & entity tagging" },
          { name: "Article sentiment data" },
        ]
      },
      {
        name: "Pro",
        //label: "Local + world",
        color: "#227C9D",
        variant: "secondary",
        description: "For mid-sized projects and growth-stage companies",
        price: 395,
        features: [
          { name: "250,000 requests/month" },
          { name: "Real-time news", tooltip: "<h3>Real-time news</h3>All results are returned without delay and immediately after being analyzed by Perigon, offering up-to-the-minute news coverage for any query." },
          { name: "3 requests/second" },
          { name: "Standard article data", tooltip: "<h3>Standard article data</h3>This includes core article details like the published date/time, headline, URL, author, description or summary content, article image URL, type (article or video), language, and country." },
          { name: "Enriched datapoints", tooltip: "<h3>Enriched datapoints</h3>Use enriched article data for searching, filtering, analyzing, or highlighting context inside your application. Enriched datapoints include article categorization, topics, location (city and state), smart labels, named entities, sentiment analysis, paywall indicator, and reprint indicator." },
          { name: "Topic & entity tagging" },
          { name: "Article sentiment data" },
          { name: "Event clustering", tooltip: "<h3>Event clustering</h3>Perigon automatically groups related articles together into thread-like clusters. Event clusters determine contextual relevance between articles that cover the same story or event. You can use our Headlines endpoint to search and expand clusters, or to sort headlines by popularity." },
        ]
      },
      {
        name: "Business",
        //label: "Local + World",
        color: "#121212",
        variant: "primary",
        description: "For companies seeking full access and higher scale",
        price: 750,
        features: [
          { name: "500,000 requests/month" },
          { name: "Real-time news", tooltip: "<h3>Real-time news</h3>All results are returned without delay and immediately after being analyzed by Perigon, offering up-to-the-minute news coverage for any query." },
          { name: "8 requests/second" },
          { name: "Standard article data", tooltip: "<h3>Standard article data</h3>This includes core article details like the published date/time, headline, URL, author, description or summary content, article image URL, type (article or video), language, and country." },
          { name: "Enriched datapoints", tooltip: "<h3>Enriched datapoints</h3>Use enriched article data for searching, filtering, analyzing, or highlighting context inside your application. Enriched datapoints include article categorization, topics, location (city and state), smart labels, named entities, sentiment analysis, paywall indicator, and reprint indicator." },
          { name: "Topic & entity tagging" },
          { name: "Article sentiment data" },
          { name: "Event clustering", tooltip: "<h3>Event clustering</h3>Perigon automatically groups related articles together into thread-like clusters. Event clusters determine contextual relevance between articles that cover the same story or event. You can use our Headlines endpoint to search and expand clusters, or to sort headlines by popularity." },
          { name: "Expanded journalists data", tooltip: "<h3>Expanded journalists data</h3>Perigon’s Journalist database includes over 40,000 authors and reporters from around the world. When available, Perigon will automatically match named authors with their respective database record, allowing you to retrieve additional details about the journalist - like their biography, job title, Twitter handle, LinkedIn profile, location, and more." },
        ]
      }
    ],
    columns: [
      {
        name: "Free trial access",
        variant: "badge-plans",
        label: "15-day free access for testing",
        list: [
          { name: "All features" },
          { name: "No credit card required" },
          { name: "150 requests/day" },
          { name: "300 results/request, paginated", tooltip: "<h3>300 results/request, paginated</h3>The free trial allows for up to 300 results (articles) per search request. The API will return a maximum of 100 results per page, and the free trial will allow for up to 3 full pages of results. See the API Documentation for details on how to use pagination." },
        ],
        button: {
          variant: "primary-arrow",
          link: "/sign-up",
          name: "Start trial"
        }
      },
      {
        name: "Enterprise</br>& Data Exports",
        variant: "badge-plans",
        list: [
          { name: "High-demand usage" },
          { name: "Tailored AI" },
          { name: "One-off data exports" },
          { name: "Custom requests or features" },
        ],
        button: {
          variant: "light-adv",
          jump: "contact",
          name: "Let's discuss"
        }
      },
      {
        name: "Startup discount",
        description: "Qualify for a 20% plan discount 🚀",
        variant: "badge-plans",
        list: [
          { name: "Under $1M in funding" },
          { name: "Under $500K in revenue" },
          { name: "Early-stage concepts" },
          { name: "All criteria must be met" },
        ],
        button: {
          variant: "light-adv",
          jump: "contact",
          name: "Contact us to apply"
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
        id: "do-i-have-access-to-each-articles-content",
        question: "Do I have access to each article's content?",
        answer: "The full body content for each article can be made available for each article, but the storage and use of such data is subject to conditions. This feature is generally available for academic, research, or internal (not public) analysis. In some cases, you may publicly expose a small snippet of the article (nothing substantial) along with a link to the original source/article. If you'd like to inquire more, please email <a href='mailto:data@goperigon.com'>data@goperigon.com</a>. For copyright or legal questions, we encourage you to consult appropriate legal counsel in your jurisdiction."
      },
      {
        id: "which-cities-are-supported",
        question: "Which cities are supported?",
        answer: "In addition to major and niche media sources from around the globe, Perigon supports local city or regional news publishers and broadcasters. You’ll find comprehensive local coverage for most of the largest cities around the world, along with hundreds of smaller cities. Try our <a href='https://www.goperigon.com/data-solutions/demo'>live demo</a> or <a href='https://www.goperigon.com/sign-up'>start a free trial</a> to test local news access and search for local sources supported by Perigon. Learn more about our <a href='https://docs.goperigon.com/docs/local-news'>local news features here</a>."
      },
      {
        id: "which-media-sources-are-supported",
        question: "Which media sources are supported?",
        answer: "Perigon business solutions offer support for over 40,000 sources of all types and sizes. These include major organizations like CNN, Fox News, Reuters, ABC News, New York Post, NBC News, CBS News, Newsweek, and The New York Times. There are also thousands of specialized sources available, like TechCrunch, ESPN, Snopes, Politico, Gadget, Refinery29, NPR, and others. Our solutions also provide access to thousands of local news outlets and broadcasters from around the world. Try our <a href='http://localhost:3000/data-solutions/pricing'>live demo</a> or <a href='https://www.goperigon.com/sign-up'>start a free trial</a> to test for specific media source availability. Learn more about <a href='https://docs.goperigon.com/docs/sources-source-groups'>media sources here</a>."
      },
      {
        id: "which-languages-are-supported",
        question: "Which languages are supported?",
        answer: "Perigon’s news API supports media in 10+ languages, including, but not limited to English, German, French, Italian, Spanish and Russian. We also support translation. You can view a full list of supported languages and <a href='https://docs.goperigon.com/docs/countries-languages'>learn more here</a>."
      },
      {
        id: "can-i-add-the-media-sources-that-i-want",
        question: "Can I add the media sources that I want?",
        answer: "We’re happy to explore the addition of new sources or custom source requests for customers on paid plans. There’s typically no cost for requesting the addition of new sources, assuming that the source can be supported without heavy customization, and that there is a low number of them that you need added. If you have a large number of sources to add, or if the sources require more of a custom integration, then we can develop a plan to meet your needs. Please email <a href='mailto:data@goperigon.com'>data@goperigon.com</a> with your requirements and we’ll be happy to discuss solutions."
      },
      {
        id: "can-you-customize-a-plan",
        question: "Can I customize a plan?",
        answer: "Absolutely! Please email <a href='mailto:data@goperigon.com'>data@goperigon.com</a> with your requirements and we’ll be happy to work with you to customize a plan or product solution that meets your needs."
      },
    ]
  },

  columns: {
    title: "Upgrade or cancel your plan anytime",
    variant: "advanced",
    columns: [
      {
        title: "Helpful support",
        description: "We're here for you. Message us if you experience any problems or find ways to make Perigon work better for you.",
        img: "icon-support.svg",
      },
      {
        title: "Blazingly fast",
        description: "Response-times <1s. Query by keywords, date ranges, sources, languages, topics, countries & more.",
        img: "icon-bolt.svg",
      },
      {
        title: "Built for developers",
        description: "We provide client libraries that offer full access to the API with just a few lines of code.",
        img: "icon-developers.svg",
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
