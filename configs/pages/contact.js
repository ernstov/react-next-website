export const page = {
  link: "/contact",
  title: "Contact",
  description: "We're happy to hear from you.",
  thumbnail: "contact-thumb.png",
  hero: {
    title: "Contact us",
    description: "Let’s connect - we’re happy to help!",
    descriptionCL: "mw-600",
    img: "speech-bubbles.svg",
  },
  contact: {
    title: "Support using the app",
    description: "Please make sure that you have the latest version of Perigon installed. If you continue to have issues, please follow these instructions. We'll do our best to respond within two business days.",
    list: {
      title: "Send an email to <a href='mailto:support@perigon.com'>support@perigon.com</a> and include the following information:",
      options: [
        { name: "The email used to register your Perigon account" },
        { name: "Details on the issue that you're experiencing" },
        { name: "The app version you're using (You can find this at the bottom of the 'Edit profile' section)" },
        { name: "Your device type (Apple/iOS or Android)" },
        { name: "Please specify whether you're using a mobile phone or tablet (including the model is helpful)" },
      ]
    },
    rows: [
      {
        title: "Media & business development",
        description: "For media inquiries or partnership opportunities, please email <a href='mailto:media@perigon.com'>media@perigon.com</a>"
      },
    ]
  },
  form: {
    title: "Business & data inquires",
    description: "For data licensing, support using the Perigon API, or partnership opportunities",
    buttons: [
      {
        name: "data@goperigon.com",
        icon: "mail",
        link: "mailto:data@goperigon.com"
      },
      {
        name: "888.202.0521",
        icon: "phone",
        link: "tel:888.202.0521",
      }
    ],
    // label: "Mon - Fri, 9:00AM - 5:00PM CT"
  },
  contactSupport: {
    title: "App support",
    description: "For help with the Perigon news app",
    buttons: [
      {
        name: "support@goperigon.com",
        icon: "mail",
        link: "mailto:support@goperigon.com"
      }
    ],
    labelSpc: "Please make sure that you’re using the latest version of Perigon",
    list: {
      label: "Include these details for faster service:",
      values: ["- Email used to register your account", "- App version # (Locate this at the bottom of the ‘Account’ screen)", "- Device type (Apple or Android, mobile or tablet)"]
    }
  }
}
