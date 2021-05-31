const app = {
  lang: "eng",
  projectName: "Gawq",
  headerHeight: 80,
  headerHeightMd: 75,
  entryDelay: 500,
  apis: {
    signup: "#",
  },

  headerNavigation: [
    {name: "News API", link:"/", show: 0},
    {name: "Pricing", link:"/pricing", show: 0},
    {name: "Documentation", link:"/documentation", show: 0},
    {name: "Sign Up", link:"/sign-up", show: 1},
    {name: "Account", link:"/account", show: 2},
  ],

  accountNavigation: [
    {name: "Overview", link:"/account/overview"},
    {name: "My Plan", link:"/account/plan"},
    {name: "API Keys", link:"/account/api-keys"},
    {name: "Billing", link:"/account/billing"},
    {name: "Support", link:"/account/support"},
  ],
  
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
}

export default app;