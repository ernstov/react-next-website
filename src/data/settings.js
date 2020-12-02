export const settings = {
  projectName: "Gawq",
  api: "https://app.gawq.com",
  preloaderTime: 700,

  seo: {
    "title": "Gawq",
    "meta": [
      { "name": "description", "content": "Gawq" },
      { "property": "og:title", "content": "Gawq" },
      { "property": "og:description", "content": "Gawq" },
      { "property": "og:image", "content": "logo.svg" }
    ]
  },

  texts: {
    said: "said",
    InaccurateInfo: "Inaccurate info"
  },

  header: {
    button: {
      name: "Get the app",
      link: "#",
      exclude: ["/"]
    }
  },

  navigation: [
    { name: "Home", link: "/", component: "Home", excludeNav: true },
    { name: "About", link: "/about", component: "About" },
    { name: "FAQs", link: "/faqs", component: "Faq" },
    { name: "The Wire blog", link: "/wire", component: "ComingSoon" },
    { name: "Join us", link: "/apply", component: "ComingSoon" },
    { name: "Terms", link: "/terms", component: "Terms",  excludeNav: true },
    { name: "Privacy", link: "/privacy", component: "Privacy",  excludeNav: true },
    { name: "Coming Soon", link: "/support", component: "ComingSoon",  excludeNav: true },
    { name: "Contact us", link: "/contact", component: "Contact",  excludeNav: true },
  ],

  navigationAdditional: {
    stores: [
      {img: "app-store-badge.png", link: "#"},
      {img: "google-play-badge.png", link: "#"},
    ],
    links: [
      {row: [
        {name: "Contact us", link: "/contact"}
      ]},
      {row: [
        {name: "Terms", link: "/terms"},
        {name: "Privacy Policy", link: "/privacy"},
      ]},
    ],
  },

  sidebar: {
    img: "app-icon.png",
    title: "Gawq",
    description: "Apple + Android",
    label: "Free",
    button: {
      name: "Get app",
      link: "/",
      variant: "primary",
    },
    for: ["/"]
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

  footer: {
    img: "periscope.svg",
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
        link: "/faq"
      },
      {
        name: "The Wire",
        link: "/wire"
      }
    ],
    copyright: "© 2020 Gawq. All rights reserved.",
  },
}