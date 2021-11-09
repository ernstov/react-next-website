export const page = {
  link: "/",
  title: "A better way to stay informed",
  description: "Compare the news, mute the noise, and read beyond the headlines.",
  thumbnail: "logo-thumb.png",
  hero: {
    title: "Coming soon",
    img: "logo.svg",
    //description: "Compare the news, mute the noise, and read beyond the headlines.",
    className: "h-80vh"
    // markets: [
    //   { img: "logo-apple.png", link: "https://apps.apple.com/us/app/gawq-unbreaking-news/id1514212857" },
    //   { img: "logo-android.png", link: "https://play.google.com/store/apps/details?id=com.gawq" }
    // ],
    // buttons: [
    //   {
    //     name: "Get the app, free",
    //     className: "w-100",
    //     link: "/download",
    //     variant: "primary-white",
    //   },
    //   {
    //     name: "Learn more",
    //     className: "w-100",
    //     link: "/about",
    //     variant: "outline-info",
    //   },
    // ]
  },
  mediaSources: {
    title: "Mobile or tablet",
    label_1: "850+",
    label_2: "media sources",
    list: [
      { name: "Get local, national, & world news" },
      { name: "No algorithms, anti-echo chamber" },
      { name: "No in-stream ads" },
      { name: "Filter opinions, celebrity, or paid news" },
      { name: "Disable sources with paywalls" },
      { name: "Compare 360 coverage across sources" },
      { name: "Follow or mute topics" },
      { name: "Clean reader mode" },
      { name: "Bookmark stories for later" },
      { name: "Review media credibility" },
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
          { name: "Trump" },
          { name: "Joe Biden" },
          { name: "Johnny Depp" },
          { name: "Steve Cohen" },
        ]
      },
      {
        name: "Events",
        items: [
          { name: "2020 Elections" },
          { name: "Halloween" },
          { name: "Prime Day" },
          { name: "Super Bowl" },
        ]
      },
      {
        name: "Companies",
        items: [
          { name: "Apple" },
          { name: "Facebook" },
          { name: "Wal-mart" },
          { name: "Trader Joe’s" },
        ]
      },
      {
        name: "Topics",
        items: [
          { name: "Media" },
          { name: "Sports Figures" },
          { name: "Cannabis" },
          { name: "Movies" },
        ]
      },
    ],
    titleContent: "Current headlines",
    description: "Today's stories with the most media coverage",
    link: {
      name: "How?",
      link: "/about"
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
    ]
  },
  about: {
    title: "Break free from echo chambers. This is news served without an agenda.",
    titleCL: "mw-550",
    button: {
      name: "Learn more about Perigon",
      link: "/about",
      className: "w-100",
      variant: "outline-light"
    }
  },
}