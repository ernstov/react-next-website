export const pages = [
  {
    link: "/",
    title: "Stay informed, mindfully.",
    description: "Compare the news, mute the noise, and read beyond the headlines.",
    thumbnail: "logo-thumb.png",
    hero: {
      title: "Stay informed, <span>mindfully</span>.",
      description: "Compare the news, mute the noise, and read beyond the headlines.",
      markets: [
        { img: "logo-apple.png", link: "https://apps.apple.com/us/app/gawq-unbreaking-news/id1514212857" },
        { img: "logo-android.png", link: "https://play.google.com/store/apps/details?id=com.gawq" }
      ],
      buttons: [
        {
          name: "Get the app, free",
          className: "w-100",
          link: "/download",
          variant: "primary-white",
        },
        {
          name: "Learn more",
          className: "w-100",
          link: "/about",
          variant: "outline-info",
        },
      ]
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
        name: "Learn more about Gawq",
        link: "/about",
        className: "w-100",
        variant: "outline-light"
      }
    },
  },
  {
    link: "/download",
    title: "Download",
    description: "Get the Gawq app, free on Apple iOS and Google Android",
    thumbnail: "download-thumb.png",
    hero: {
      title: '<span>Download</span>',
      description: 'Get the Gawq app, <b>free</b> on Apple iOS and Google Android<p><p><b></b>',
      img: "download-hero.svg",
    },
    stores: {
      stores: [
        { img: "app-store-badge.png", link: "https://apps.apple.com/us/app/gawq-unbreaking-news/id1514212857" },
        { img: "google-play-badge.png", link: "https://play.google.com/store/apps/details?id=com.gawq" }
      ],
      additional: {
        title: 'Mobile + tablet friendly',
        text: 'When you register your free account, you can automatically begin using Gawq across both your mobile and tablet devices! 🙌🏼',
      }
    },
  },
  {
    link: "/contact",
    title: "Contact",
    description: "We're happy to hear from you.",
    thumbnail: "contact-thumb.png",
    hero: {
      title: "<span>Contact</span> us",
      description: "We're happy to hear from you.",
      descriptionCL: "mw-600",
      img: "speech-bubbles.svg",
    },
    contact: {
      title: "Support using the app",
      description: "Please make sure that you have the latest version of Gawq installed. If you continue to have issues, please follow these instructions. We'll do our best to respond within two business days.",
      list: {
        title: "Send an email to <a href='mailto:support@gawq.com'>support@gawq.com</a> and include the following information:",
        options: [
          { name: "The email used to register your Gawq account" },
          { name: "Details on the issue that you're experiencing" },
          { name: "The app version you're using (You can find this at the bottom of the 'Edit profile' section)" },
          { name: "Your device type (Apple/iOS or Android)" },
          { name: "Please specify whether you're using a mobile phone or tablet (including the model is helpful)" },
        ]
      },
      rows: [
        {
          title: "Media & business development",
          description: "For media inquiries or partnership opportunities, please email <a href='mailto:media@gawq.com'>media@gawq.com</a>"
        },
      ]
    },
  },
  {
    link: "/terms",
    title: "Terms of Service",
    description: "Use of Gawq is subject to our Terms and Conditions.",
    thumbnail: "contact-thumb.png",
    hero: {
      title: "<span>Terms of Service</span>",
    },
    terms: {
      html: "<p>By using Gawq.com or downloading the Gawq mobile application (both referred to as ‘app’ herein), these terms will automatically apply to you – you should make sure that you read them carefully before using the app. You’re not allowed to copy, or modify the app, any part of the app, or our trademarks in any way. You’re not allowed to attempt to extract the source code of the app, and you also shouldn’t try to translate the app into other languages, or make derivative versions. You’re not allowed to copy, retrieve, or systematically ‘scrape’ the content of the app. The app itself, and all the trade marks, copyright, database rights and other intellectual property rights related to it, still belong to Gawq L.L.C.. The content linked to from the app and hosted on third-party websites is typically produced by publishers or media companies not owned or directly affiliated with Gawq L.L.C. These third parties retain the copyrights and any applicable trade marks or proprietary information to their original content. Gawq L.L.C. does not assume the responsibility related to any content, product, or service offered by third parties.</p><p>Gawq L.L.C. is committed to ensuring that the app is as useful and efficient as possible. For that reason, we reserve the right to make changes to the app or to charge for its services, at any time and for any reason. We will never charge you for the app or its services without making it very clear to you exactly what you’re paying for.</p><p>The Gawq app stores and processes personal data that you have provided to us, in order to provide our Service. It’s your responsibility to keep your phone and access to the app secure. We therefore recommend that you do not jailbreak or root your phone, which is the process of removing software restrictions and limitations imposed by the official operating system of your device. It could make your phone vulnerable to malware/viruses/malicious programs, compromise your phone’s security features and it could mean that the Gawq app won’t work properly or at all.</p><p>The app does use third party services that declare their own Terms and Conditions.</p><p>These links provide the policies of common third party service providers used by the app:</p><ul class='list-primary'><li><a href='https://policies.google.com/terms' target='blank'>Google Play Services</a></li><li><a href='https://firebase.google.com/terms/analytics' target='blank'>Google Analytics for Firebase</a></li><li><a href='https://www.facebook.com/legal/terms/plain_text_terms' target='blank'>Facebook</a></li><li><a href='https://twitter.com/en/terms' target='blank'>Twitter</a></li><li><a href='https://www.apple.com/legal/internet-services/itunes/us/terms.html' target='blank'>Apple</a></li></ul><p>You should be aware that there are certain things that Gawq L.L.C. will not take responsibility for. Certain functions of the app will require the app to have an active internet connection. The connection can be Wi-Fi, or provided by your mobile network provider, but Gawq L.L.C. cannot take responsibility for the app not working at full functionality if you don’t have access to Wi-Fi, and you don’t have any of your data allowance left. If you’re using the app outside of an area with Wi-Fi, you should remember that your terms of the agreement with your mobile network provider will still apply. As a result, you may be charged by your mobile provider for the cost of data for the duration of the connection while accessing the app, or other third party charges. In using the app, you’re accepting responsibility for any such charges, including roaming data charges if you use the app outside of your home territory (i.e. region or country) without turning off data roaming. If you are not the bill payer for the device on which you’re using the app, please be aware that we assume that you have received permission from the bill payer for using the app. Along the same lines, Gawq L.L.C. cannot always take responsibility for the way you use the app. i.e. You need to make sure that your device stays charged – if it runs out of battery and you can’t turn it on to avail the Service, Gawq L.L.C. cannot accept responsibility.</p><p>With respect to Gawq L.L.C.’s responsibility for your use of the app, when you’re using the app, it’s important to bear in mind that although we endeavour to ensure that it is updated and correct at all times, we do rely on third parties to provide information to us so that we can make it available to you. Gawq L.L.C. accepts no liability for any loss, direct or indirect, you experience as a result of relying wholly on this functionality of the app.</p><p>At some point, we may wish to update the app. The app is currently available on Android & iOS – the requirements for both systems (and for any additional systems we decide to extend the availability of the app to) may change, and you’ll need to download the updates if you want to keep using the app. Gawq L.L.C. does not promise that it will always update the app so that it is relevant to you and/or works with the Android & iOS version that you have installed on your device. However, you promise to always accept updates to the application when offered to you. We may also wish to stop providing the app, and may terminate use of it at any time without giving notice of termination to you. Unless we tell you otherwise, upon any termination, (a) the rights and licenses granted to you in these terms will end; (b) you must stop using the app, and (if needed) delete it from your device.</p><h3>Changes to the Terms and Conditions</h3><p>We may update our Terms and Conditions from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Terms and Conditions on this page. These terms and conditions are effective as of June 1, 2020.</p>"
    },
  },
  {
    link: "/privacy",
    title: "Privacy Policy",
    description: "Use of Gawq is subject to our Privacy Policy.",
    thumbnail: "contact-thumb.png",
    hero: {
      title: "<span>Privacy Policy</span>",
    },
    privacy: {
      html: "<p>Gawq L.L.C. built the Gawq app and Gawq.com as a Free platform for consumers. This SERVICE is provided by Gawq L.L.C. at no cost and is intended for use as is. This page is used to inform visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service. If you choose to use our Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that we collect is used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy.</p><h3>Information Collection and Use</h3><p>The terms used in this Privacy Policy have the same meanings as in our <a href='/terms'>Terms and Conditions</a>.</p><p>For a better experience, while using our Service, we may require you to provide us with certain personally identifiable information, including but not limited to name, email, and phone number. The information that we request will be retained by us and used as described in this privacy policy. Gawq does not sell your personally identifiable information to third parties.</p><p>The app does use third party services that may collect information used to identify you.</p><p>These links provide the policies of common third party service providers used by the app:</p><ul class='list-primary'><li><a href='https://policies.google.com/terms' target='blank'>Google Play Services</a></li><li><a href='https://firebase.google.com/terms/analytics' target='blank'>Google Analytics for Firebase</a></li><li><a href='https://www.facebook.com/legal/terms/plain_text_terms' target='blank'>Facebook</a></li><li><a href='https://twitter.com/en/terms' target='blank'>Twitter</a></li><li><a href='https://www.apple.com/legal/internet-services/itunes/us/terms.html' target='blank'>Apple</a></li></ul><h3>Log Data</h3><p>We want to inform you that whenever you use our Service, in a case of an error or to track performance in the app we collect data and information (through third party products) on your phone called Log Data. This Log Data may include information such as your device Internet Protocol (“IP”) address, device name, operating system version, the configuration of the app when utilizing our Service, the time and date of your use of the Service, and other statistics.</p><h3>Cookies</h3><p>Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the websites that you visit and are stored on your device's internal memory.</p><p>This Service does not use these “cookies” explicitly. However, the app may use third party code and libraries that use “cookies” to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service.</p><h3>Service Providers</h3><p>We may employ third-party companies and individuals due to the following reasons:</p><ul class='list-primary'><li>To facilitate our Service;</li><li>To provide the Service on our behalf;</li><li>To perform Service-related services; or</li><li>To assist us in analyzing how our Service is used.</li></ul><p>We want to inform users of this Service that these third parties have access to your Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.</p><h3>Security</h3><p>We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.</p><h3>Links to Other Sites</h3><p>This Service contains links to other sites, including media companies that serve news content. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.</p><h3>Children’s Privacy</h3><p>These Services do not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to do necessary actions.</p><h3>Changes to This Privacy Policy</h3><p>We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. This policy is effective as of June 1, 2020.</p><h3>Contact Us</h3><p>If you have any questions or suggestions about our Terms & Conditions or Privacy Policy, do not hesitate to contact us at: Gawq L.L.C., 651 N Broad St, Suite 205 #2477, Middletown, Delaware 19709 - or by email at <a href='mailto:support@gawq.com'>support@gawq.com</a>.</p>"
    },
  },
  {
    link: "/business/news-api",
    title: "News API & business solutions",
    description: "Gawq News API & business solutions",
    hero: {
      title: "News <span>API</span> & business solutions",
      titleCL: "mw-450",
      description: "Access current news and event data, aggregated from thousands of sources around the world.",
      descriptionCL: "mw-600",
      img: "gears.svg",
      btnsClassName: "mt-5",
      buttons: [
        {
          name: "Free trial",
          link: "#",
          variant: "primary-arrow",
        },
      ]
    },
    carousel: {
      variant: "fluid",
      className: "with-bullets reduce-padding-md",
      columns: [
        { title: "Topic & entity extraction", description: "Machine learning automatically extracts events, people, businesses, places, & topics in the news.", img: "/img/topic-extraction.jpg", imgClass: "fluid offset20" },
        { title: "Event clustering", description: "Articles are systematically scored for similarity and then organized into a clean feed. Analyze each of them individually, or filter for unique headlines.", img: "/img/event-clustering.jpg", imgClass: "fluid offset20" },
        { title: "Real-time signals", description: "Gawq analyzes over 500 articles every minute. Search by source, date, location, and/or custom keywords for up-to-the-minute news.", img: "/img/real-time-signals.jpg", imgClass: "fluid offset120" },
        { title: "Easy integration", description: "Apply Gawq’s API to your next project with simple HTTP get requests and JSON results. Start using the API with as little as 4 lines of code.", img: "/img/easy-integrations.jpg", imgClass: "fluid offset50" },
        { title: "Real-time signals", description: "Gawq analyzes over 500 articles every minute. Search by source, date, location, and/or custom keywords for up-to-the-minute news.", img: "/img/real-time-signals.jpg", imgClass: "fluid offset120" },
        { title: "Easy integration", description: "Apply Gawq’s API to your next project with simple HTTP get requests and JSON results. Start using the API with as little as 4 lines of code.", img: "/img/easy-integrations.jpg", imgClass: "fluid offset50" },
      ]
    },
    image: {
      img: ""
    },
    columns: {
      title: "Industries & use cases",
      titleSPC: "Tap into the power of news intelligence",
      img: "power-of-intelligence.svg",
      className: "reduce-padding-md",
      columns: [
        {
          title: "Media monitoring",
          description: "Monitor your brand, competitors, industry trends, or keywords to identify and investigate mentions, risks and opportunities in real-time.",
          img: "media-monitoring.svg",
          className: "border-bottom-half"
        },
        {
          title: "Financial services",
          description: "Elevate your investment strategy by harnessing the power of current and historical news data. Gain actionable insights or minimize risk by integrating our feeds into your business’s predictive modeling.",
          img: "financial-services.svg",
          className: "border-bottom-half"
        },
        {
          title: "Enrich your app",
          description: "Increase user engagement by adding real-time news to your application. Allow your users to customize their feed with fresh content on the topics that matter most to them.",
          img: "enrich-your-app.svg",
          className: "border-bottom-half-mobile"
        },
        {
          title: "Data collection & analysis",
          description: "Supercharge your analytics strategy with news content. Our data includes timely information about events, business risks, global trends, and more.",
          img: "data-collection.svg"
        },
      ],
      buttons: [
        {
          name: "Start building",
          link: "#",
          variant: "primary-arrow",
        },
      ]
    },

    features: {
      img: "",
      column1: {
        label: "Designed for scale",
        labelImg: "designed-scale.svg",
        title: "A single API access-point to global media",
        description: "Gawq empowers developers, analysts and businesses with a clean, AI-powered RESTful API and JSON results to current and historical news articles.",
        img: "code-box.png",
        list: [
          { title: "Local, national, & world news" },
          { title: "20 languages" },
          { title: "NLP enrichment" },
          { title: "Topic & entity tagging" },
          { title: "Categorization" },
          { title: "Event clustering" },
          { title: "Article sentiment data" }
        ]
      },
      column2: {
        label: "News from over <strong>10,000</strong> sources",
        list: [
          {
            title: "Global media",
            img: "globe.svg",
            description: "Up-to-the-minute coverage from national & world news sources — from major media brands to smaller niche publishers.",
          },
          {
            title: "Local city media",
            img: "location.svg",
            description: "Search by city, state or province to access news published by local city papers & broadcast stations.",
          }
        ]
      },
      buttons: [
        {
          name: "View sources",
          link: "#",
          variant: "outline-primary",
        },
        {
          name: "View cities",
          link: "#",
          variant: "outline-primary",
        },
      ]
    },
    console: {
      inner: {
        title: "Live demo",
        tab: "REQUEST",
        label: "REST API",
        getLabel: "curl -XGET",
        dateLabel: "FROM DATE",
        button: "Refresh",
        api: "app.gawq.com/",
        query: "tags/trending",
        date: "2020-07-01",
      }
    }
  },
  {
    link: "/business/pricing",
    title: "API pricing",
    description: "API pricing",
    hero: {
      title: "API <span>pricing</span>",
      titleCL: "mw-450",
      className: "pb-0",
      description: "Choose a plan to start using the API right away.",
      descriptionCL: "mw-600",
      img: "hands-prining.svg",
    },
    plans: {
      variant: "plan",
      className: "pt-0",
      list: [
        {
          name: "Lite",
          label: "LOCAL",
          color: "#969696",
          variant: "gray",
          description: "Access to city-specific local news in over 100 cities",
          price: 150,
          features: ["100,000 requests/month", "3 requests/second", "Real-time news", "Local, city-specific news", "Topic & entity tagging", "Standard support"]
        },
        {
          name: "Standard",
          label: "World",
          color: "#5B5A59",
          variant: "dark",
          description: "Access to all world news along with journalists data",
          price: 395,
          features: ["250,000 requests/month", "5 requests/second", "Real-time news", "World news", "Topic & entity tagging", "Journalists data", "Standard support"]
        },
        {
          name: "Business",
          label: "Local + world",
          color: "#227C9D",
          variant: "secondary",
          description: "Total access to local + world news, some AI features",
          price: 750,
          features: ["500,000 requests/month", "8 requests/second", "Real-time news", "World news", "Local, city-specific news", "Topic & entity tagging", "Event clustering", "Journalists data", "Trending stories", "Article sentiment data", "Priority support"]
        },
        {
          name: "Enterprise",
          label: "Local + World",
          color: "#F9C035",
          variant: "primary",
          description: "High-scale access to local + world news, all AI features",
          price: 1250,
          features: ["1,000,000 requests/month", "10 requests/second", "Real-time news", "World news", "Local, city-specific news", "Topic & entity tagging", "Event clustering", "Journalists data", "Trending stories", "Article sentiment data", "Article summarization", "99.95% uptime SLA", "Priority support"]
        }
      ],
      columns: [
        {
          name: "Free trial",
          variant: "badge",
          description: "Temporary access to all features for testing purposes",
          list: ["10 requests/day", "Real-time news", "Local, city-specific news", "World news", "All AI features"],
          button: {
            variant: "primary-arrow",
            link: "#",
            name: "Start trial"
          }
        },
        {
          name: "Custom plan",
          variant: "badge",
          description: "Let us tailor a package to fit your project needs, good for:",
          list: ["Custom volume/scale", "Adding unsupported sources", "Tailored AI", "Unique data-mapping needs", "Deeper integrations"],
          button: {
            variant: "primary-arrow-down",
            jump: "contact",
            name: "Contact us"
          }
        },
      ]
    },
    faq: {
      title: "FAQs",
      titleSPC: "Answers to common questions",
      img: "question-marks.svg",
      className: "mt-s",
      list: [
        { id: "id1", question: "A sample question here?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed vestibulum ante. Pellentesque fermentum scelerisque libero, vel tristique massa sodales non. Fusce quis diam condimentum, congue massa tincidunt, aliquet mauris. Aliquam vestibulum faucibus eros a cursus. Mauris gravida mattis diam, a mattis arcu auctor sed." },
        { id: "id2", question: "Another question?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed vestibulum ante. Pellentesque fermentum scelerisque libero, vel tristique massa sodales non. Fusce quis diam condimentum, congue massa tincidunt, aliquet mauris. Aliquam vestibulum faucibus eros a cursus. Mauris gravida mattis diam, a mattis arcu auctor sed." },
        { id: "id3", question: "Another question?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed vestibulum ante. Pellentesque fermentum scelerisque libero, vel tristique massa sodales non. Fusce quis diam condimentum, congue massa tincidunt, aliquet mauris. Aliquam vestibulum faucibus eros a cursus. Mauris gravida mattis diam, a mattis arcu auctor sed." },
        { id: "id4", question: "Another question?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed vestibulum ante. Pellentesque fermentum scelerisque libero, vel tristique massa sodales non. Fusce quis diam condimentum, congue massa tincidunt, aliquet mauris. Aliquam vestibulum faucibus eros a cursus. Mauris gravida mattis diam, a mattis arcu auctor sed." },
        { id: "id5", question: "Another question?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed vestibulum ante. Pellentesque fermentum scelerisque libero, vel tristique massa sodales non. Fusce quis diam condimentum, congue massa tincidunt, aliquet mauris. Aliquam vestibulum faucibus eros a cursus. Mauris gravida mattis diam, a mattis arcu auctor sed." },
        { id: "id6", question: "Another question?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed vestibulum ante. Pellentesque fermentum scelerisque libero, vel tristique massa sodales non. Fusce quis diam condimentum, congue massa tincidunt, aliquet mauris. Aliquam vestibulum faucibus eros a cursus. Mauris gravida mattis diam, a mattis arcu auctor sed." },
        { id: "id7", question: "Another question?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed vestibulum ante. Pellentesque fermentum scelerisque libero, vel tristique massa sodales non. Fusce quis diam condimentum, congue massa tincidunt, aliquet mauris. Aliquam vestibulum faucibus eros a cursus. Mauris gravida mattis diam, a mattis arcu auctor sed." },
        { id: "id8", question: "Another question?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed vestibulum ante. Pellentesque fermentum scelerisque libero, vel tristique massa sodales non. Fusce quis diam condimentum, congue massa tincidunt, aliquet mauris. Aliquam vestibulum faucibus eros a cursus. Mauris gravida mattis diam, a mattis arcu auctor sed." },
        { id: "id9", question: "Another question?", answer: "In addition to national & world news, Gawq also gives you the ability to follow local news, weather, and events happening in over 100 cities around the globe. New cities are being added every month!" },
        { question: "News API", link: "/" },
      ]
    },

    columns: {
      title: "Business-grade quality for all plans",
      variant: "advanced",
      columns: [
        {
          title: "Helpful support",
          description: "We’re here for you. Message us if you experience any problems or find ways to make Gawq work better for you.",
          img: "support.svg",
        },
        {
          title: "Blazingly fast",
          description: "Response-times <1s. Query by keywords, date ranges, sources, languages, topics, countries & more.",
          img: "bolt.svg",
        },
        {
          title: "Built for developers",
          description: "We provide client libraries that offer full access to the API with as little as a few lines of code.",
          img: "developers.svg",
        },
      ],
    },

    contact: {
      title: "Contact us",
      description: "Send us an email or submit the contact form to get in touch. For Gawq API inquires only.",
      buttons: [
        {
          name: "data@gawq.com",
          icon: "mail",
          link: "mailto:data@gawq.com"
        },
        {
          name: "888.202.0521",
          icon: "phone",
          link: "tel:888.202.0521",
        }
      ],
      label: "Mon - Fri, 9:00AM - 5:00PM CT"
    }
  },
  {
    link: "/sign-up",
    title: "Sign up",
    description: "Create a business account to get started.",
    hero: {
      title: "S<span>ign u</span>p",
      titleCL: "mw-450",
      description: "Create a business account to get started.",
      descriptionCL: "mw-600",
      img: "account-hero.svg",
      variant: "small",
    },
    signup: {
      bottom: "Existing business user?",
      options: [
        { value: "Free trial", label: "Free trial" },
        { value: "Lite", label: "Lite" },
        { value: "Standard", label: "Standard" },
        { value: "Business", label: "Business" },
        { value: "Enterprise", label: "Enterprise" },
      ]
    }
  },
  {
    link: "/sign-in",
    title: "Sign in",
    description: "Login to your account.",
    hero: {
      title: "S<span>ign i</span>n",
      titleCL: "mw-450",
      description: "Login to your account.",
      descriptionCL: "mw-600",
      img: "account-hero.svg",
      variant: "small",
    }
  },
  {
    link: "/account/overview",
    title: "Overview",
    description: "Overview",
    accountOverview: {
      title: "You’ve been registered since Jan 12, 2021",
      label1: "Business or Commercial",
      label2: "Personal Project",
      label3: "Academic",
    }
  },
  {
    link: "/details",
    title: "My Plan",
    description: "Please share some additional details.",
    hero: {
      titleCL: "mw-450",
      description: "👋🏽 Please share some additional details.",
      descriptionCL: "mw-600",
      variant: "small",
    },
    accountPlan: {
      label1: "Business or Commercial",
      label2: "Personal Project",
      label3: "Academic",
      optionsHow: [
        { value: "Option 1", label: "Option 1" },
        { value: "Option 2", label: "Option 2" },
        { value: "Option 3", label: "Option 3" },
        { value: "Option 4", label: "Option 4" },
        { value: "Option 5", label: "Option 5" },
      ]
    }
  },
  {
    link: "/account/plan",
    title: "My Plan Billing",
    description: "Add billing details in order to activate your plan.",
    hero: {
      title: "M<span>y Pla</span>n",
      titleCL: "mw-450",
      description: "Add billing details in order to activate your plan.",
      descriptionCL: "mw-600",
      variant: "small",
    },
    accountBilling: {
      description: "Your card will be billed $395 on the 16th of each month, starting today. All payments are non-refundable.",
      optionsExpirationMonths: [
        { value: "01", label: "01" },
        { value: "02", label: "02" },
        { value: "03", label: "03" },
        { value: "04", label: "04" },
        { value: "05", label: "05" },
        { value: "06", label: "06" },
        { value: "07", label: "07" },
        { value: "08", label: "08" },
        { value: "09", label: "09" },
        { value: "10", label: "10" },
        { value: "11", label: "11" },
        { value: "12", label: "12" },
      ],
      optionsExpirationYears: [
        { value: "2021", label: "2021" },
        { value: "2022", label: "2022" },
        { value: "2023", label: "2023" },
        { value: "2024", label: "2024" },
        { value: "2025", label: "2025" },
        { value: "2026", label: "2026" },
        { value: "2027", label: "2027" },
        { value: "2028", label: "2028" },
        { value: "2029", label: "2029" },
        { value: "2030", label: "2030" },
      ]
    }
  },
  {
    link: "/documentation",
    title: "Documentation Getting started",
    description: "Documentation Getting started",
    html: "<h1>Introduction</h1><p>Datanews API is an HTTP REST API for retrieving recent news articles. Our API accepts HTTP GET requests, and returns JSON-encoded responses. It uses standard HTTP response codes to indicate request's response status. To use the API you must obtain an API key, see Authentication section. There are two main endpoints, one retrieving current news headlines, another for searching over all indexed articles.</p><div class='apiKey mt-3'><h3>Your API Key</h3><div><input disabled value='01qv*&Ddshk35tqa8gerus' type='text' /><button></button></div></div><hr /><h2>Quick Start</h2><p>The easiest way to start using the API is to install our client library, or to make requests using curl or any other command line utility, see examples page. Your API key will be included in all of the examples (if signed in).</p><p><strong>Install the library with command:</strong></p><code>pip install datanews</code>"
  },
  {
    link: "/documentation/news",
    title: "Documentation News",
    description: "Documentation News",
  },
  {
    link: "/documentation/headlines",
    title: "Documentation Headlines",
    description: "Documentation Headlines",
  },
  {
    link: "/documentation/sources",
    title: "Documentation Sources",
    description: "Documentation Sources",
  },
  {
    link: "/documentation/advanced-queries",
    title: "Documentation Advanced Queries",
    description: "Documentation Advanced Queries",
  },
  {
    link: "/documentation/countries-languages",
    title: "Documentation Countries Languages",
    description: "Documentation Countries Languages",
  },
  {
    link: "/documentation/examples",
    title: "Documentation Examples",
    description: "Documentation Examples",
  },
]