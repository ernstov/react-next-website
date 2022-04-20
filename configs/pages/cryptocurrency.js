import moment from "moment"

export const page = {
  title: "Cryptocurrency & Blockchain News API",
  description: "Up-to-the-minute news on cryptocurrency and blockchain from top media and crypto news publishers. News about blockchain, Bitcoin, Ethereum, and altcoins.",
  thumbnail: "logo-thumb.png",
  hero: {
    title: "Crypto news API",
    titleCL: "mw-450",
    description: "Up-to-the-minute news on cryptocurrency and blockchain tech from over 40,000 global sources. Structured and enriched by Perigon AI.",
    descriptionCL: "mw-590",
    img: "crypto.svg",
    imgCL: "mw-380",
    btnsClassName: "mt-4",
    variant: "lp",
    listAdv: {
      label: "Track the latest news across the web for:",
      items: ["Bitcoin, ETH, altcoins", "Blockchain developments", "Decentralization", "Crypto startups", "Price movements, trends"]
    },
    buttons: [
      {
        name: "Live demo",
        link: "/data-solutions/demo",
        variant: "primary-hand",
      },
      {
        name: "Free trial",
        link: "/sign-up",
        variant: "outline-arrow",
      },
    ]
  },
  heroMob: {
    title: "Crypto news API",
    titleCL: "mw-450",
    description: "Up-to-the-minute news on cryptocurrency and blockchain tech from over 40,000 global sources. Structured + enriched by Perigon AI.",
    descriptionCL: "mw-590",
    img: "crypto.svg",
    imgCL: "mw-350",
    btnsClassName: "mt-4",
    variant: "lp",
    listAdv: {
      label: "Track the latest news across the web for:",
      items: ["Bitcoin, ETH, altcoin news", "Blo  ckchain developments", "Decentralization", "Crypto startups", "Price movements, trends"]
    },
    buttons: [
      {
        name: "Live demo",
        link: "/data-solutions/demo",
        variant: "primary-hand",
      },
      {
        name: "Pricing",
        link: "/data-solutions/pricing",
        variant: "outline-arrow",
      },
    ]
  },
  liveDemo: {
    title: "News about <strong>Bitcoin OR Ethereum</strong> from <strong>top 25 crypto sources</strong>",
    id: 10,
    url: `api.goperigon.com/v1/all?apiKey=[KEY]<br />&topic=Bitcoin&topic=Ethereum&sourceGroup=top25crypto&from=${moment().subtract(30, 'days').format('YYYY-MM-DD')}`
  }
}
