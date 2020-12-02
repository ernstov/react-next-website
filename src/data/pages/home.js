export const page = {
  hero: {
    title: "Stay informed, <span>mindfully</span>.",
    description: "Compare the news, mute the noise, and read beyond the headlines.",
    markets: [
      {img: "logo-apple.png", link: "#"},
      {img: "logo-android.png", link: "#"}
    ],
    buttons: [
      {
        name: "Get the app, free",
        link: "/",
        variant: "primary",
      },
      {
        name: "Learn more",
        link: "/about",
        variant: "outline-info",
      },
    ]
  },
  mediaSources: {
    title: "Mobile or tablet",
    label_1: "150+",
    label_2: "media sources",
    list: [
      { name: "No algorithms, anti-echo chamber" },
      { name: "No in-stream ads" },
      { name: "Filter opinions, celebrity, or paid news" },
      { name: "Disable sources with paywalls" },
      { name: "Compare coverage on the same story" },
      { name: "Follow or mute topics" },
      { name: "Bookmark stories for later" },
      { name: "Review media coverage" },
      { name: "Comment and discuss" },
      { name: "Compare fact checks across the web" },
      { name: "Dark mode option" },
      { name: "Completely free" },
    ],
    brands: [
      { img: "media-row-1.png" },
      { img: "media-row-2.png" },
      { img: "media-row-3.png" },
      { img: "media-row-4.png" },
      { img: "media-row-5.png" },
      { img: "media-row-6.png" },
      { img: "media-row-7.png" },
      { img: "media-row-8.png" },
      { img: "media-row-9.png" },
      { img: "media-row-10.png" },
      { img: "media-row-11.png" },
    ]
  },
  tranding: {
    title: "Trending now",
    limitDesktop: 8,
    trands: [
      {
        name: "People",
        items: [
          {name: "Trump"},
          {name: "Joe Biden"},
          {name: "Johnny Depp"},
          {name: "Steve Cohen"},
        ]
      },
      {
        name: "Events",
        items: [
          {name: "2020 Elections"},
          {name: "Halloween"},
          {name: "Prime Day"},
          {name: "Super Bowl"},
        ]
      },
      {
        name: "Companies",
        items: [
          {name: "Apple"},
          {name: "Facebook"},
          {name: "Wal-mart"},
          {name: "Trader Joe’s"},
        ]
      },
      {
        name: "Topics",
        items: [
          {name: "Media"},
          {name: "Sports Figures"},
          {name: "Cannabis"},
          {name: "Movies"},
        ]
      },
    ],
    titleContent: "Content reviews",
    description: "User reviews on quality of coverage",
    link: {
      name: "How?",
      link: "/"
    },
    content: [
      {
        title: "Kanye West visits hospital, checked out by EMTs hours after apologizing to Kim Kardashian: report",
        date: "May 15 ‧ 9:32am",
        source: "CNN",
        sourceLogo: "cnn-news.png",
        img: "kanye-west.jpg",
        label: "Non-news",
        comment: {
          author: "Jon Stewart",
          avatar: "jon-stewart.png",
          content: "",
        }
      },
      {
        title: "Lorem ipsum headline here, this one wraps down to 2 lines",
        date: "May 15 ‧ 9:32am",
        source: "NBC News",
        sourceLogo: "nbc-news.png",
        img: "street.jpg",
        comment: {
          author: "Jon Stewart",
          avatar: "jon-stewart.png",
          content: "",
        }
      },
      {
        title: "Lorem ipsum headline here, this one wraps down to 2 lines",
        date: "May 15 ‧ 9:32am",
        source: "Fox News",
        sourceLogo: "fox-news.png",
        img: "street.jpg",
        label: "Opinion",
        comment: {
          author: "Jon Stewart",
          avatar: "jon-stewart.png",
          content: "",
        }
      }
    ]
  },
  about: {
    title: "News served without black box algorithms",
    button: {
      name: "Learn more about Gawq",
      link: "/about",
      variant: "outline-light"
    }
  },
}