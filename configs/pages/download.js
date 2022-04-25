export const page = {
  link: "/download",
  title: "Download",
  description: "Get the Perigon app, free on Apple iOS and Google Android",
  thumbnail: "download-thumb.png",
  hero: {
    title: '360° news',
    description: 'The app that builds perspective, not echo-chambers',
    className: "pb-3 pb-md-0  pt-5",
    img: "app-news-hero.png",
    stores: [
      { img: "app-store-badge.png", link: "https://apps.apple.com/us/app/perigon-unbreaking-news/id1514212857" },
      { img: "google-play-badge.png", link: "https://play.google.com/store/apps/details?id=com.gawq" }
    ],
  },
  carousel: {
    variant: "fluid-full",
    className: "pb-5",
    slidesLg: 2.5,
    slidesMd: 2.5,
    loop: false,
    autoplayMb: true,
    button: {name: "More about Perigon", link: "/about/overview", variant:"light-arrow"},
    columns: [
      { title: "No ads", descriptionCL: "mw-325", description: "News feeds without the ads, so we have no reason to cherry-pick what you see", img: "/img/app-news-s1-m.png", imgClass: "img1" },
      { title: "All sides", descriptionCL: "mw-325", description: "Stay informed with news from trusted sources of all types and sizes", img: "/img/app-news-s2-m.png", imgClass: "img2" },
      { title: "Smart filters", descriptionCL: "mw-325", description: "Decipher between news and noise", img: "/img/app-news-s3-m.png", imgClass: "img3" },
      { title: "Compare", descriptionCL: "mw-325", description: "Explore how different sources cover the same story", img: "/img/app-news-s4-m.png", imgClass: "img4" },
      { title: "Critique", descriptionCL: "mw-350", description: "Help keep the news honest by rating coverage on its fairness, accuracy & quality", img: "/img/app-news-s5-m.png", imgClass: "img5" },
    ]
  },
}