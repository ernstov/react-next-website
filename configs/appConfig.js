const app = {
  lang: "eng",
  projectName: "Perigon",
  headerHeight: 75,
  headerHeightMd: 60,
  entryDelay: 0,
  gtmId: "GTM-WFD4ZWD",
  gtmDataLayerName: "PageDataLayer",
  api: "https://api.goperigon.com",
  blogApi: "https://app.goperigon.com",
  projectDomain: "https://goperigon.com",
  apis: {
    signup: "#",
  },

  mobileNavigation: [
    {
      label: "For Everyone", links: [
        { name: "News App", link: "/news-app" },
      ]
    },
    {
      label: "For business", links: [
        { name: "News API", link: "/data-solutions/news-api" },
        { name: "Pricing", link: "/data-solutions/pricing" },
        { name: "Documentation", link: "/documentation" },
        { name: "Business Account", link: "/account/overview" },
      ]
    },
    {
      label: "Perigon", links: [
        { name: "Home", link: "/" },
        { name: "About", link: "/about/overview" },
        { name: "FAQs", link: "/about/faqs" },
        { name: "Contact", link: "/about/contact" },
      ]
    }
  ],

  headerNavigation: [
    { name: "News App", link: "/news-app", show: 0 },
    {
      name: "Data Solutions", link: "/data-solutions/news-api", show: 0,
      sub: [
        { name: "News API", link: "/data-solutions/news-api" },
        { name: "Pricing", link: "/data-solutions/pricing" },
        { name: "Documentation", link: "/documentation" },
        { name: "Get Started", link: "/sign-in" },
      ]
    },
    {
      name: "About", link: "/about/overview", show: 0,
      sub: [
        { name: "Overview", link: "/about/overview" },
        { name: "FAQs", link: "/about/faqs" },
        { name: "Contact", link: "/about/contact" },
      ]
    },
    // { name: "Sign Up", link: "/sign-up", show: 1 },
    // { name: "Account", link: "/account/plan", show: 2 },
  ],

  accountNavigation: [
    { name: "Overview", link: "/account/overview" },
    { name: "My Plan", link: "/account/plan" },
    // { name: "API Keys", link: "/account/api-keys" },
    { name: "Billing", link: "/account/billing" },
    { name: "Support", link: "/account/support" },
    { name: "Documentation", link: "/documentation" },
  ],

  documentationSearchApiNavigation: [
    { name: "All", link: "/documentation/all" },
    { name: "Headlines", link: "/documentation/headlines" },
    { name: "Advanced queries", link: "/documentation/advanced-queries" },
    { name: "Countries & languages", link: "/documentation/countries-languages" },
    { name: "Examples", link: "/documentation/examples" },
    { name: "Python Examples", link: "/documentation/python-examples" }
  ],

  documentationJournalistApiNavigation: [
    { name: "Overview", link: "/documentation/journalist-overview" },
    { name: "Lookup By Id", link: "/documentation/journalist-by-id" },
    { name: "Search", link: "/documentation/journalist-search"},
  ],

  navigation: [
    { name: "Home", link: "/", component: "Home", excludeNav: true },
    { name: "About", link: "/about", component: "About" },
    { name: "FAQs", link: "/faqs", component: "Faq" },
    { name: "The Wire blog", link: "/wire", component: "Blog" },
    { name: "Join us", link: "/apply", component: "JoinUs" },
    { name: "Terms", link: "/terms", component: "Terms", excludeNav: true },
    { name: "Privacy", link: "/privacy", component: "Privacy", excludeNav: true },
    { name: "Coming Soon", link: "/support", component: "ComingSoon", excludeNav: true },
    { name: "Contact us", link: "/contact", component: "Contact", excludeNav: true },
    { name: "Download", link: "/news-app", component: "Download", excludeNav: true },
    { name: "Post", link: "/wire/:postName", component: "Post", excludeNav: true },
  ],

  navigationAdditional: {
    stores: [
      { img: "app-store-badge.png", link: "https://apps.apple.com/us/app/gawq-unbreaking-news/id1514212857" },
      { img: "google-play-badge.png", link: "https://play.google.com/store/apps/details?id=com.gawq" },
    ],
    links: [
      {
        row: [
          { name: "Privacy Policy", link: "/privacy" },
          { name: "Terms of Service", link: "/terms" },
        ]
      },
    ],
  },

  footer: {
    img: "periscope.svg",
    variant: "simple",
    additional: "Use of Perigon is subject to our <a href='/terms'>Terms</a> & <a href='/privacy'>Privacy Policy</a>.",
    stores: [
      { img: "app-store-badge.png", link: "https://apps.apple.com/us/app/gawq-unbreaking-news/id1514212857" },
      { img: "google-play-badge.png", link: "https://play.google.com/store/apps/details?id=com.gawq" },
    ],
    socials: [
      {
        icon: "facebook",
        link: "https://www.facebook.com/GoPerigon",
      },
      {
        icon: "twitter",
        link: "https://twitter.com/goperigon",
      },
      {
        icon: "instagram",
        link: "https://www.instagram.com/goperigon/",
      },
      {
        icon: "linked",
        link: "https://www.linkedin.com/company/goperigon/",
      },
    ],
    links: [
      {
        name: "About",
        link: "/about"
      },
      {
        name: "Join us",
        link: "/apply"
      },
      {
        name: "FAQs",
        link: "/faqs"
      },
      {
        name: "The Wire",
        link: "/wire"
      }
    ],
    copyright: "© 2021 Perigon, Inc. All rights reserved.",
  },

  bottomMenu: {
    img: "app-icon.png",
    title: "Perigon",
    description: "Apple + Android",
    label: "Free",
    button: {
      name: "Get app",
      link: "/news-app",
      variant: "primaryY",
    },
    for: ["/"]
  },

  header: {
    button: {
      name: "Get the app",
      link: "/news-app",
      exclude: ["/"]
    }
  },

  follow: {
    title: "Follow our journey:",
    placeholder: "your@email.com",
    error: "Please type the correct email",
    message: "Thank You. You are subscribed.",
    button: {
      name: "Subscribe",
      action: "https://perigon.us2.list-manage.com/subscribe/post?u=dd74d2ac64673e2e30f038e2b&amp;id=3a2aa0376b",
    }
  },

  share: [
    { name: "twitter", isText: true, link: "https://twitter.com/intent/tweet?url=", icon: "twitter" },
    { name: "facebook", link: "https://www.facebook.com/sharer/sharer.php?u=", icon: "square-facebook" },
    { name: "printerest", link: "http://pinterest.com/pin/create/link/?url=", icon: "printerest" },
  ]
}

export default app;
