export const page = {
  hero: {
    title: "<span>Contact</span> us",
    description: "We're happy to hear from you.",
    descriptionCL: "mw-600",
    img: "speech-bubbles.svg",
  },

  seo: {
    "title": "Gawq - Contact",
    "meta": [
      { "name": "description", "content": "Gawq - Contact" },
      { "property": "og:title", "content": "Gawq - Contact" },
      { "property": "og:description", "content": "Gawq - Contact" },
      { "property": "og:image", "content": "logo.svg" }
    ]
  },

  contact: {
    title: "Support using the app",
    description: "Please make sure that you have the latest version of Gawq installed. If you continue to have issues, please follow these instructions. We'll do our best to respond within two business days.",
    list: {
      title: "Send an email to support@gawq.com and include the following information:",
      options: [
        {name: "The email used to register your Gawq account"},
        {name: "Details on the issue that you're experiencing"},
        {name: "The app version you're using (You can find this at the bottom of the 'Edit profile' section)"},
        {name: "Your device type (Apple/iOS or Android)"},
        {name: "Please specify whether you're using a mobile phone or tablet (including the model is helpful)"},
      ]
    }
  },
  

  footer: {
    variant: "simple",
    additional: "Use of Gawq is subject to our <a href='/terms'>Terms</a> & <a href='/privacy'>Privacy Policy</a>.",
    stores: [
      { img: "app-store-badge.png", link: "#" },
      { img: "google-play-badge.png", link: "#" },
    ]
  },
}