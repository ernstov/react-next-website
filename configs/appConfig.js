const app = {
  lang: "eng",
  projectName: "Gawq",
  headerHeight: 80,
  headerHeightMd: 75,
  entryDelay: 500,
  gtmId: "GTM-KS798VW",
  gtmDataLayerName: "PageDataLayer",
  api: "https://app.gawq.com",
  apis: {
    signup: "#",
  },

  headerNavigation: [
    { name: "News API", link: "/business/news-api", show: 0 },
    { name: "Pricing", link: "/business/pricing", show: 0 },
    { name: "Documentation", link: "/documentation", show: 0 },
    { name: "Sign Up", link: "/sign-up", show: 1 },
    { name: "Account", link: "/account/plan", show: 2 },
  ],

  accountNavigation: [
    { name: "Overview", link: "/account/overview" },
    { name: "My Plan", link: "/account/plan" },
    { name: "API Keys", link: "/account/api-keys" },
    { name: "Billing", link: "/account/billing" },
    { name: "Support", link: "/account/support" },
    { name: "Documentation", link: "/documentation" },
  ],

  documentationNavigation: [
    { name: "News", link: "/documentation/news" },
    { name: "Headlines", link: "/documentation/headlines" },
    { name: "Sources", link: "/documentation/sources" },
    { name: "Advanced queries", link: "/documentation/advanced-queries" },
    { name: "Countries & languages", link: "/documentation/countries-languages" },
    { name: "Examples", link: "/documentation/examples" },
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
    { name: "Download", link: "/download", component: "Download", excludeNav: true },
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
          { name: "Contact us", link: "/contact" }
        ]
      },
      {
        row: [
          { name: "Terms", link: "/terms" },
          { name: "Privacy Policy", link: "/privacy" },
        ]
      },
    ],
  },

  footer: {
    img: "periscope.svg",
    variant: "simple",
    additional: "Use of Gawq is subject to our <a href='/terms'>Terms</a> & <a href='/privacy'>Privacy Policy</a>.",
    stores: [
      { img: "app-store-badge.png", link: "https://apps.apple.com/us/app/gawq-unbreaking-news/id1514212857" },
      { img: "google-play-badge.png", link: "https://play.google.com/store/apps/details?id=com.gawq" },
    ],
    socials: [
      {
        icon: "facebook",
        link: "https://www.facebook.com/GawqTalk/",
      },
      {
        icon: "twitter",
        link: "https://twitter.com/gawqtalk",
      },
      {
        icon: "instagram",
        link: "https://www.instagram.com/gawqgram/",
      },
      {
        icon: "linked",
        link: "https://www.linkedin.com/company/gawq",
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
    copyright: "© 2021 Gawq. All rights reserved.",
  },
  
  bottomMenu: {
    img: "app-icon.png",
    title: "Gawq",
    description: "Apple + Android",
    label: "Free",
    button: {
      name: "Get app",
      link: "/download",
      variant: "primary",
    },
    for: ["/"]
  },

  header: {
    button: {
      name: "Get the app",
      link: "/download",
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
      action: "https://gawq.us2.list-manage.com/subscribe/post?u=dd74d2ac64673e2e30f038e2b&amp;id=3a2aa0376b",
    }
  },
}

export default app;