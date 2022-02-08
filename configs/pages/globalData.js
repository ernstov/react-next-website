export const globalData = {
  compare: {
    title: "The Perigon difference",
    description: "Superior data cleansing, enriched with over <span>25</span> datapoints per article",
    list: [
      [
        {name: "Standard <span class='d-none d-md-inline'>article</span> data", type: "title"},
        {img: "logo-shape-dark.svg", type: "logo"},
        {name: "Competitors", type: "logo-text"}
      ],
      [
        {name: "Headline", type: "row-name"},
        {type: "available"},
        {type: "available"},
      ],
      [
        {name: "Date & Time", type: "row-name"},
        {type: "available"},
        {type: "available"},
      ],
      [
        {name: "Author", type: "row-name"},
        {type: "available"},
        {type: "available"},
      ],
      [
        {name: "Article URL", type: "row-name"},
        {type: "available"},
        {type: "available"},
      ],
      [
        {name: "Article Image", type: "row-name"},
        {type: "available"},
        {type: "available"},
      ],
      [
        {name: "Language", type: "row-name", tooltip:"<h3>Language</h3>Search, filter, and retrieve articles in 20 languages. See API Documentation for a detailed list of the supported languages."},
        {type: "available"},
        {type: "available"},
      ],
      [
        {name: "Description Byline", type: "row-name"},
        {type: "available"},
        {type: "available"},
      ],
      [
        {name: "Full Article Content", type: "row-name", tooltip: "<h3>Full Article Content</h3>Perigon can pass the full body content (for each article) in some circumstances, like for research or internal analysis. We seek to protect publisher copyrights and therefore prohibit any reproduction, republishing, or redistribution of original third-party content. Using brief content previews (snippets) and other data within the Perigon API is generally fine for publication under the terms of fair use. We recommend engaging proper legal counsel for questions regarding legal or copyright compliance."},
        {name: "Use-case dependant", type: "text"},
        {name: "Rarely available", type: "text"},
      ],
      [
        {name: "Enriched <span class='d-none d-md-inline'>article</span> data", type: "title"},
      ],
      [
        {name: "Categorization", type: "row-name", tooltip: "<h3>Categorization</h3>Search, filter, or retrieve articles by category type. Categories are broader groupings, like 'Tech', 'Finance', 'Science', 'Environment', 'Business', 'Politics', 'Weather', etc. A full list can be found in the API Documentation."},
        {type: "available"},
        {name: "Sometimes", type: "text"},
      ],
      [
        {name: "Topics", type: "row-name", tooltip: "<h3>Topics</h3>Topics can be people, places, things, businesses, or even trends. Perigon API offers a growing list of over 3,000 human-curated and machine-intelligent topics for searching, filtering, and retrieving articles. Topics automatically aggregate related articles that don't necessarily need to have an exact-match on your search query. For example, the topic of 'Startups' will return news about company fundraising events and product announcements, and the topic of 'Social Issues' will return news about equality, homelessness, immigration, and more."},
        {type: "available"},
        {name: "Sometimes", type: "text"},
      ],
      [
        {name: "City, State, Country", type: "row-name"},
        {type: "available"},
        {name: "Sometimes", type: "text"},
      ],
      [
        {name: "Smart Labels", type: "row-name", tooltip: "<h3>Smart Labels</h3>Labels are automatically applied to soft news and evergreen content. For example, an opinion-based editorial might return a label of 'Opinion'. How-to articles, lists, profile pieces, and reviews will be labeled 'Non-news'. If the content is sponsored or contains affiliate links, the article will have a label of 'Paid News'. Celebrity-oriented and gossip pieces will include the label of 'Pop Culture'. Lastly, articles that are produced by fact-checkers will be labeled 'Fact Check'. You can use smart labels for enhanced filtering or to display on your front-end."},
        {type: "available"},
        {type: "unavailable"},
      ],
      [
        {name: "Medium / Type", type: "row-name", tooltip: "<h3>Medium / Type</h3>Search and filter for written articles vs. video or rich media-type content."},
        {type: "available"},
        {type: "unavailable"},
      ],
      [
        {name: "AI-Summary", type: "row-name"},
        {type: "available"},
        {type: "unavailable"},
      ],
      [
        {name: "Named Entities", type: "row-name", tooltip: "<h3>Named Entities</h3>Perigon's engine will automatically extract and weight entities mentioned in the article. Named entities could be people, companies, products, NGOs, or places. The system analyzes the number of mentions and contextual importance for each mentioned entity, providing a weighted score alongside each of them automatically. "},
        {type: "available"},
        {type: "unavailable"},
      ],
      [
        {name: "Sentiment Score", type: "row-name"},
        {type: "available"},
        {type: "unavailable"},
      ],
      [
        {name: "Content Keywords", type: "row-name"},
        {type: "available"},
        {type: "unavailable"},
      ],
      [
        {name: "Taxonomy", type: "row-name"},
        {type: "available"},
        {type: "unavailable"},
      ],
      [
        {name: "Headline clustering", type: "title"},
      ],
      [
        {name: "Headline Endpoint", type: "row-name", tooltip: "<h3>Headline Endpoint</h3>In addition to searching all news articles, Perigon offers a 'Headlines' endpoint for clustering related stories and events, which is great for determining popularity or comparing how different sources cover the same story."},
        {type: "available"},
        {type: "unavailable"},
      ],
      [
        {name: "Related Articles", type: "row-name"},
        {type: "available"},
        {type: "unavailable"},
      ],
      [
        {name: "Cluster Grouping ID", type: "row-name", tooltip: "<h3>Cluster Grouping ID</h3>Each group of related stories or events is assigned a cluster ID, which can be used to lookup, expand and sort all media coverage related to a given story. "},
        {type: "available"},
        {type: "unavailable"},
      ],
      [
        {name: "Enriched <span class='d-none d-md-inline'>source</span> data", type: "title"},
      ],
      [
        {name: "Paywall Indicator", type: "row-name"},
        {type: "available"},
        {type: "unavailable"},
      ],
      // [
      //   {name: "Media Bias Rating", type: "row-name"},
      //   {type: "available"},
      //   {type: "unavailable"},
      // ],
      [
        {name: "Reprint Indicator", type: "row-name", tooltip: "<h3>Reprint Indicator</h3>Many articles and press releases are syndicated or distributed to various publishers across the web. This can create noise by way of article duplication. Perigon analyzes each article to assure originality and then flags duplicate results. You can also use the reprint function to group all of the same articles as a means to see each place where the story was syndicated and redistributed."},
        {type: "available"},
        {type: "unavailable"},
      ],
      [
        {name: "Detailed Author Info", type: "row-name", tooltip: "<h3>Detailed Author Info</h3>Perigon’s Journalist database includes over 40,000 authors and reporters from around the world. When available, Perigon will automatically match named authors with their respective database record, allowing you to retrieve additional details about the journalist - like their biography, job title, Twitter handle, LinkedIn profile, location, and more."},
        {type: "available"},
        {type: "unavailable"},
      ],
    ],
    buttons: [
      {name: "Start building", link: "/sign-up", variant: "primary-arrow"},
      {name: "Documentation", link: "https://docs.goperigon.com/", variant: "outline-arrow"}
    ]
  },
  features: {
    animation: "animationMedia",
    column2: {
      label: "News from over 40,000 sources",
      list: [
        {
          title: "Global media",
          img: "globe-dark.svg",
          description: "Up-to-the-minute coverage from national & world news sources — from major media brands to smaller niche publishers.",
        },
        {
          title: "Local city media",
          img: "location-dark.svg",
          description: "Search by city, state or province and filter for news published by local city papers & broadcasters.",
        }
      ]
    },
    buttons: [
      {
        name: "Test sources with a free trial",
        link: "/sign-up",
        className: "md",
        variant: "primary-arrow",
      },
    ]
  },
  featuresCrypto: {
    animation: "animationMedia",
    column2: {
      label: "News from over 40,000 sources",
      list: [
        {
          title: "Crypto media",
          titleImg: "crypto-title-img.png",
          img: "crypto-media.svg",
          description: "News from publishers that specialize in cryptocurrencies, blockchain, and decentralization… including CoinDesk, Cointelegraph, Decrypt, and more!",
        },
        {
          title: "Global media",
          img: "globe-dark.svg",
          description: "Up-to-the-minute coverage from national & world news sources — from major media brands to smaller niche publishers.",
        },
        {
          title: "Local city media",
          img: "location-dark.svg",
          description: "Search by city, state or province and filter for news published by local city papers & broadcasters.",
        }
      ]
    },
    buttons: [
      {
        name: "Test sources with a free trial",
        link: "/data-solutions/pricing",
        className: "md",
        variant: "primary-arrow",
      },
    ]
  },
  industries: {
    title: "Industries & use cases",
    titleSPC: "Transform today's news into powerful business insight",
    titleCL: "mw-md-210",
    titleSPCCL: "mw-md-260",
    img: "industries-illustration.svg",
    columns: [
      {
        title: "Media monitoring",
        description: "Monitor your brand, competitors, industry trends, or keywords to identify and investigate mentions, risks and opportunities in real-time.",
        img: "media-monitoring.svg",
        className: "border-bottom-full",
        link: "/data-solutions/use-cases/media-monitoring",
        mobileOrder: 1,
      },
      {
        title: "Risk & threat detection",
        description: "Increase user engagement by adding real-time news to your application. Allow your users to customize their feed with fresh content on the topics that matter most.",
        img: "enrich-your-app.svg",
        className: "border-bottom-full",
        link: "/data-solutions/use-cases/risk-threat-detection",
        mobileOrder: 2,
      },
      {
        title: "Fight misinformation",
        description: "Improve the integrity of your existing data pipeline or distributed content. Integrate Perigon into your workflows and proactively detect or filter inaccurate or potentially misleading information.",
        img: "fight-misinformation.svg",
        className: "border-bottom-full",
        link: "/data-solutions/use-cases/fact-checks-misinformation",
        mobileOrder: 3,
      },
      {
        title: "Financial services",
        description: "Elevate your investment strategy by harnessing the power of current and historical news data. Gain actionable insights or minimize risk by integrating our feeds into your predictive modeling.",
        img: "financial-services.svg",
        className: "border-bottom-full",
        link: "/data-solutions/use-cases/financial-markets",
        mobileOrder: 3,
      },
      {
        title: "Data collection & analysis",
        description: "Supercharge your analytics strategy with news content. Our data includes timely information about events, business risks, global trends, and more.",
        img: "data-collection.svg",
        className: "border-bottom-full",
        link: "/data-solutions/use-cases/research-trend-analysis",
        mobileOrder: 4,
      },
      {
        title: "Cryptocurrency news",
        description: "Get up-to-the-minute news and events covering cryptocurrency and blockchain technology, price movements, decentralization, and altcoin innovation.",
        img: "crypto-icon.svg",
        link: "/data-solutions/use-cases/cryptocurrency",
        className: "border-bottom-full",
        mobileOrder: 6,
      },
    ],
    buttons: [
      {
        name: "Start building",
        link: "/sign-up",
        variant: "primary-arrow",
      },
    ]
  },
  carousel: {
    title: "Analyzing up to 1,000,000 articles per day",
    variant: "fluid-dark",
    className: "news-api",
    slidesLg: 3,
    slidesMd: 1,
    loop: false,
    columns: [
      { title: "Topic & entity extraction", description: "Machine learning automatically extracts events, people, businesses, places, & topics in the news.", img: "/img/topic-extraction.png", imgClass: "fluid offset20" },
      { title: "Event clustering", description: "Articles are systematically scored for similarity and then organized into headline clusters. Analyze each of them individually, or filter for unique headlines.", img: "/img/event-clustering.png", imgClass: "fluid offset20" },
      { title: "Real-time signals", description: "Perigon analyzes up to 1,000,000 articles every day. Search by source, date, location, author, or keyword for current news.", img: "/img/real-time-signals.png", imgClass: "fluid offset120" },
      { title: "Easy integration", description: "Apply Perigon's API to your next project with simple HTTP 'GET' requests and JSON results. Use the API with just 4 lines of code.", img: "/img/easy-integrations.png", imgClass: "fluid offset50" },
    ]
  },
  liveDemo:{
    title: "All <strong>cryptocurrency</strong> articles in the <strong>US</strong> from <strong>yesterday</strong>",
    url: "api.goperigon.com/v1/all?apiKey=[KEY]<br />&category=Business&sortBy=date&from=2021-10-27",
    demo: {
      "hits": [
        {
          "url": "https://www.cnn.com/2021/12/07/tech/facebook-myanmar-rohingyamuslims-intl-hnk/index.html",
          "source": "cnn.com",
          "authors": ["Isobel Asher Hamilton"],
          "title": "Facebook sued for $150 billion over violence against Rohingyain Myanmar",
          "pubDate": "2020-07-02T10:25:16+00:00",
          "country": "us",
          "language": "en",
          "description": "Facebook, Amazon, and Google had all reportedly been confirmed for the antitrust hearing by mid-June, but Apple had stayed quiet.",
          "imageUrl": "https://i.insider.com/5cf657ec11e20538196144f4?width=1200&format=jpeg",
          "content": "Bitcoin could see further upside and reach $100,000 by the end of the new year and then.."
        }
      ]
    }
  }
}
