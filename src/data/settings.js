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
    InaccurateInfo: "Inaccurate info",
    Morelikethis: "More like this",
    Sharethis: "Share this",
    Thepostnotfound: "The post not found",
    read: "read",
    m: "m",
  },

  header: {
    button: {
      name: "Get the app",
      link: "/download",
      exclude: ["/"]
    }
  },

  navigation: [
    { name: "Home", link: "/", component: "Home", excludeNav: true },
    { name: "About", link: "/about", component: "About" },
    { name: "FAQs", link: "/faqs", component: "Faq" },
    { name: "The Wire blog", link: "/wire", component: "Blog" },
    { name: "Join us", link: "/apply", component: "JoinUs" },
    { name: "Terms", link: "/terms", component: "Terms",  excludeNav: true },
    { name: "Privacy", link: "/privacy", component: "Privacy",  excludeNav: true },
    { name: "Coming Soon", link: "/support", component: "ComingSoon",  excludeNav: true },
    { name: "Contact us", link: "/contact", component: "Contact",  excludeNav: true },
    { name: "Download", link: "/download", component: "Download",  excludeNav: true },
    { name: "Post", link: "/wire/:postName", component: "Post", excludeNav: true },
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
        link: "/faqs"
      },
      {
        name: "The Wire",
        link: "/wire"
      }
    ],
    copyright: "© 2020 Gawq. All rights reserved.",
  },

  simpleFooter: {
    variant: "simple",
    additional: "Use of Gawq is subject to our <a href='/terms'>Terms</a> & <a href='/privacy'>Privacy Policy</a>.",
    stores: [
      { img: "app-store-badge.png", link: "#" },
      { img: "google-play-badge.png", link: "#" },
    ]
  },

  blog: [
    {
      alias: "the-post-name",
      title: "This is the headline of an article post",
      subTitle: "This is a secondary headline - lorem ipsum day ellium.",
      author: "John Smith",
      authorImg: "john-smith.png",
      content: "# Article title font here \n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed vestibulum ante. Pellentesque fermentum scelerisque libero, vel tristique massa sodales non. Fusce quis diam condimentum, congue massa tincidunt, aliquet mauris. Aliquam vestibulum an example link here eros a cursus. Mauris gravida mattis diam, a mattis arcu auctor sed.",
      tags: ["Media", "Topics Tagged", "Topic XY", "Categories"]
    }
  ],

  share: [
    {name: "twitter", isText: true, link: "https://twitter.com/intent/tweet?url=", icon: "twitter"},
    {name: "facebook", link: "https://www.facebook.com/sharer/sharer.php?u=", icon: "square-facebook"},
    {name: "printerest", link: "http://pinterest.com/pin/create/link/?url=", icon: "printerest"},
  ]
}