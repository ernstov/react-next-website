import moment from "moment"

export const page = {
  title: "Fight Misinformation with a Smarter News API",
  description: "Search up-to-the-minute news and fact-checks from around the globe. AI-powered and enriched with smart labels to decipher fact from fiction and compare media coverage.",
  thumbnail: "logo-thumb.png",
  hero: {
    title: "Fight misinformation with a smarter news API",
    titleCL: "mw-450",
    description: "Perigon's news API is enriched by AI, so you can cut through the noise and decipher fact from fiction.",
    descriptionCL: "mw-590",
    img: "misinformation.svg",
    imgCL: "mw-450",
    btnsClassName: "mt-4",
    variant: "lp",
    listAdv: {
      items: ["Search and filter by <span>25+</span> variables", "Find fact-checks on any topic", "Identify news vs opinions or gossip", "Capture detailed author data", "Compare related coverage"]
    },
    buttons: [
      {
        name: "Free trial",
        link: "/sign-up",
        variant: "primary-arrow",
      },
      {
        name: "View pricing",
        link: "/data-solutions/pricing",
        variant: "outline-arrow",
        className: "d-none d-md-flex"
      },
      {
        name: "Pricing",
        link: "/data-solutions/pricing",
        variant: "outline-arrow",
        className: "d-flex d-md-none"
      },
    ]
  },
  heroMob: {
    title: "Fight misinformation with a smarter news API",
    titleCL: "mw-450",
    description: "Perigon's news API is enriched by AI, so you can cut through the noise and decipher fact from fiction.",
    descriptionCL: "mw-590",
    img: "misinformation.svg",
    imgCL: "mw-450",
    btnsClassName: "mt-4",
    variant: "lp",
    listAdv: {
      items: ["Search and filter by <span>25+</span> variables", "Find fact-checks on any topic", "Identify news vs opinions or gossip", "Capture detailed author data", "Compare related coverage"]
    },
    buttons: [
      {
        name: "Free trial",
        link: "/sign-up",
        variant: "primary-arrow",
      },
      {
        name: "View pricing",
        link: "/data-solutions/pricing",
        variant: "outline-arrow",
        className: "d-none d-md-flex"
      },
      {
        name: "Pricing",
        link: "/data-solutions/pricing",
        variant: "outline-arrow",
        className: "d-flex d-md-none"
      },
    ]
  },
  liveDemo: {
    title: "All <strong>Fact-check</strong> articles about <strong>Coronavirus</strong> from <strong>last month</strong>", 
    id: 9,
    url: `api.goperigon.com/v1/all?apiKey=[KEY]<br />?topic=Coronavirus&label=Fact%20Check&from=${moment().subtract(30, 'days').format('YYYY-MM-DD')}`
  }
}
