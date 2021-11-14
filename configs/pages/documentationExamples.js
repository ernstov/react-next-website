export const page = {
  link: "/documentation/examples",
  title: "Documentation Examples",
  description: "Documentation Examples",
  html: `<h1>All API search examples</h1>

<p>Below you can find different search examples that show varied ways of querying the API.</p>

<hr />

<h2>Search by date ranges</h2>

<p>Find all articles that contain "SpaceX" and were published between 01/07/2021 and 10/09/2021.</p>

<div class="code-head">
  <h3>Request</h3>
  <label>curl -XGET</label>
  <code>api.goperigon.com/v1/all?q=SpaceX&from=2021-07-01&to=2021-09-10</code>
</div>

<div class="code-body">
  <h3>Response</h3>
  <code>
   <pre>
{
   "status": 200,
   "numResults": 9,
   "articles": [
      {
         "url": "https://www.freightwaves.com/news/spacex-for-ocean",
         "source": {
            "domain": "freightwaves.com"
         },
         "country": "us",
         "language": "en",
         "title": "SpaceX for ocean?",
         "description": "SpaceX for ocean?  FreightWaves",
         "content": "On today’s episode Dooner and The Dude are talking to Bedrock Ocean Exploration CEO and co-founder Anthony DiMare about creating the SpaceX for ocean...",
         "medium": "Article",
         "summary": "On today’s episode Dooner and The Dude are talking to Bedrock Ocean Exploration CEO and co-founder Anthony DiMare about creating the SpaceX for ocean...",
         "authorsByline": "Timothy Dooner",
         "articleId": "0e44dcfb7d4444a79c14a3c7b776e14f",
         "clusterId": "3576d314a278405fa775ccbc6b423d13",
         "imageUrl": "https://s29755.pcdn.co/wp-content/uploads/2021/09/WTT090821.jpg",
         "pubDate": "2021-09-08T19:31:05+00:00",
         ...
      }
   ]
}</pre>
   </code>
</div>

<hr />

<h2>Search by multiple sources</h2>

<p>Find all articles that contain "SpaceX" and were published between 10/11/2021 and 11/11/2021, and were published by <strong>techcrunch.com</strong>, <strong>nytimes.com</strong> or <strong>cnn.com</strong>.</p>

<div class="code-head">
  <h3>Request</h3>
  <label>curl -XGET</label>
  <code>api.goperigon.com/v1/all?q=SpaceX&from=2021-11-10&to=2021-11-11&source=techcrunch.com&source=nytimes.com&source=cnn.com</code>
</div>

<div class="code-body">
  <h3>Response</h3>
  <code>
   <pre>
{
   "status": 200,
   "numResults": 9,
   "articles": [
      {
         "url": "https://www.nytimes.com/live/2021/11/10/science/nasa-spacex-launch",
         "source": {
            "domain": "nytimes.com"
         },
         "country": "us",
         "language": "en",
         "title": "SpaceX NASA Crew-3 Launch: Live Updates",
         "description": "SpaceX NASA Crew-3 Launch: Live Updates  The New York Times",
         "content": "When is the launch, and how can I watch it? The SpaceX Falcon 9 rocket being moved into position on the launchpad...",
         "medium": "Article",
         "labels": [],
         "keywords": [...],
         "topics": [
            {
               "name": "NASA"
            },
            {
               "name": "Space"
            },
            {
               "name": "SpaceX"
            }
         ],
         "categories": [
            {
               "name": "Science"
            }
         ],
         "entities": [...],
         "sentiment": {
            "positive": 0.045512695,
            "negative": 0.048690356,
            "neutral": 0.90579695
         },
         "summary": "Weather around NASA’s Kennedy Space Center in Florida, where Falcon 9 will launch from, is expected to be favorable...",
         "translation": "",
         "locations": [],
         "reprint": true,
         "authorsByline": "Joey Roulette",
         "articleId": "baf9c9d5d6054c7f92e65709d75fbd4c",
         "clusterId": "ce22e10c32d64ad6beb079d22d8ba430",
         "imageUrl": "https://static01.nyt.com/images/2021/10/30/science/30spacex-launch-when/30spacex-launch-when-facebookJumbo.jpg",
         "pubDate": "2021-11-10T21:08:18+00:00",
         ...
      }
   ]
}</pre>
   </code>
</div>

<hr />

<h2>Search by exact matches</h2>

<p>Find all articles that contain the exact phrase "bitcoin rallied" and were published between 01/07/2021 and 10/09/2021. For the query to work correctly, it must be urlencoded, the mentioned query would be transformed int %22bitcoin%20rallied%22.</p>

<div class="code-head">
  <h3>Request</h3>
  <label>curl -XGET</label>
  <code>api.goperigon.com/v1/all?q=%22bitcoin%20rallied%22&from=2021-07-01&to=2021-09-10</code>
</div>

<div class="code-body">
  <h3>Response</h3>
  <code>
   <pre>
{
   "status": 200,
   "numResults": 9,
   "articles": [
      {
         "url": "https://u.today/three-reasons-why-bitcoin-is-rallying-close-to-52000",
         "source": {
            "domain": "u.today"
         },
         "country": "us",
         "language": "en",
         "title": "Three Reasons Why Bitcoin Is Rallying Close to $52,000",
         "description": "Three Reasons Why Bitcoin Is Rallying Close to $52,000  U.Today",
         "content": "Bitcoin is inching closer to the $52,000 level after breaking above the crucial $51,000 resistance, here are likely reasons why\\n\\nOn September 5, the flagship cryptocurrency, Bitcoin, rallied from the $50,300 area, adding $1,000 in a long green candle...",
         "medium": "Article",
         "labels": [
            {
               "name": "Non-news"
            }
         ],
         "keywords": [...],
         "topics": [
            {
               "name": "Bitcoin"
            },
            {
               "name": "Cryptocurrency"
            }
         ],
         "categories": [],
         "entities": [...],
         "sentiment": {
            "positive": 0.059168044,
            "negative": 0.8873554,
            "neutral": 0.053476606
         },
         "summary": "Bitcoin is inching closer to the $52,000 level after breaking above the crucial $51,000 resistance...",
         "translation": "",
         "locations": [],
         "reprint": false,
         "authorsByline": "Yuri Molchan",
         "articleId": "cf0b71087002468ba5fa282116846bde",
         "clusterId": "7e36406e6859497c9408e6f281160371",
         "imageUrl": "https://u.today/sites/default/files/styles/1200x900/public/2021-09/9483.jpg",
         "pubDate": "2021-09-06T08:40:34+00:00",
         ...
      }
   ]
}</pre>
   </code>
</div>
`
}
