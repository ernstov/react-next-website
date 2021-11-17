export const page = {
  link: "/documentation/advanced-queries",
  title: "Documentation Advanced Queries",
  description: "Documentation Advanced Queries",
  className: "pt-4",
  html: `<h1>Advanced search queries</h1>

<p>
    Perigon News API provides special operators used for building advanced search queries. By default, provided search keywords will be tokenized as is and then will be used to search the news index. But, if you need to search for an exact phrase, or to find a specific combination of terms using boolean operators, then you could do that too.
</p>

<p>
    These search queries use special symbols (e.g. +, |, -, AND, OR, NOT), each has its own semantic meaning. If you want to search for a phrase that includes, say <strong>+</strong>, then you have to escape it in the following way <strong>\\+</strong>.
</p>

<hr />

<h2>Exact match</h2>

<p>To find an exact match of the phrase, you could wrap it into double quotes, e.g. "YOUR PHRASE" construct. See an example below.</p>

<div class="code-head">
  <h3>Request</h3>
  <label>curl -XGET -G</label>
  <code>api.goperigon.com/v1/all' --data-urlencode 'q="SpaceX Launch"</code>
</div>

<div class="code-body">
  <h3>Response</h3>
  <code>
   <pre>
{
 "status": 200,
 "numResults": 1156,
 "articles": [
      {
          "url": "https://www.washingtonpost.com/technology/2021/09/15/spacex-launch-civilian-flight/",
          "source": {
              "domain": "washingtonpost.com"
          },
          "country": "us",
          "language": "en",
          "title": "Watch SpaceX launch: Live updates",
          "description": "Watch SpaceX launch: Live updates  The Washington Post",
          "content": "The latest: Investors are placing big bets on a growing space economy. But can they reach orbit? ...",
          "medium": "Article",
          "labels": [],
          "claim": "",
          "verdict": "",
          "keywords": [],
          "topics": [
              {
                  "name": "Space"
              },
              {
                  "name": "SpaceX"
              }
          ],
          "categories": [
              {
                  "name": "Tech"
              }
          ],
          "taxonomies": [],
          "entities": [],
          "sentiment": {
              "positive": 0.048147157,
              "negative": 0.021973426,
              "neutral": 0.9298794
          },
          "summary": "The latest: Investors are placing big bets on a growing space economy.",
          "translation": "",
          "locations": [],
          "reprint": false,
          "authorsByline": "Christian Davenport",
          "articleId": "77601b9ffe5c4a2693b0c1422f22d1c5",
          "clusterId": "f5b80916b0494a9f9712265d6a965d72",
          "imageUrl": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https%3A%2F%2Fd1i4t8bqe7zgj6.cloudfront.net%2F09-15-2021%2Ft_98a421119bb3482fa99e37435ece1c6e_name_spacex_inspiration4.jpg&w=960",
          "pubDate": "2021-09-15T22:47:12+00:00",
          ...
      }
   ]
}</pre>
   </code>
</div>

<hr />

<h2>Boolean operators</h2>

<p>Boolean operators can be used to search for different combination of keywords. Perigon supports following boolean operators.</p>

<ul>
    <li><strong>+</strong> operator says that next term must be present inside text. </li>
    <li><strong>-</strong> operator says that next term must not be present inside text. The term could be a word (e.g. -SpaceX), or a quoted phrase (-"SpaceX Launch").</li>
    <li><strong>*</strong> operator signifies prefix query.</li>
    <li><strong>( ... )</strong> parentheses are used for grouping expressions together.</li>
    <li><strong>AND</strong> operator says that both terms A AND B should be present. AND applies to both side of the expression, while <strong>+</strong> only applies to the next term.</li>
    <li><strong>OR</strong> operator says that either term A OR B should be present.</li>
    <li><strong>NOT</strong> operator says that the next term should not be present, similar to <strong>-</strong> operator, but is esaier to combine with <strong>AND</strong>, <strong>OR</strong> inside expressions.</li>
</ul>

<p>The default operator applied between terms is <strong>OR</strong>. For example the query "cat dog" will match documents that have either "cat" OR "dog". It is recommended to use <strong>AND</strong>, <strong>OR</strong>, <strong>NOT</strong> inside complex expressions, because they are more explicit and simpler to reason about.</p>

<p>Below is an example query that searches all articles that mention Google AND (Facebook OR Apple) AND NOT Amazon.</p>

<div class="code-head">
  <h3>Request</h3>
  <label>curl -XGET -G</label>
  <code>api.goperigon.com/v1/all' --data-urlencode 'q="(Google AND (Facebook OR Apple) AND NOT Amazon)"</code>
</div>

<div class="code-body">
  <h3>Response</h3>
  <code>
   <pre>
{
 "status": 200,
 "numResults": 9,
 "articles": [
      "url": "https://www.infrastructurene.ws/2021/10/26/over-the-top-content-market-investment-analysis-apple-facebook-google/",
      "source": {
          "domain": "infrastructurene.ws"
      },
      "country": "us",
      "language": "en",
      "title": "Over The Top Content Market Investment Apple, Facebook, Google – IMIESA",
      "description": "Over The Top Content Market Investment Apple, Facebook, Google – IMIESA  IMIESA",
      "content": "Over The Top Content Market Investment Analysis | Apple, Facebook, Google Over The Top Content Market R & D including top key players Apple, Facebook, Google\\n\\nGlobal Research Study entitled Over The Top Content Market was recently released by JC Market Research...",
      "medium": "Article",
      "labels": [
          {
              "name": "Opinion"
          }
      ],
      "claim": "",
      "verdict": "",
      "keywords": [],
      "topics": [
          {
              "name": "Apple"
          },
          {
              "name": "Facebook"
          },
          {
              "name": "Google"
          }
      ],
      "categories": [],
      "taxonomies": [],
      "entities": [],
      "sentiment": {
          "positive": 0.06063823,
          "negative": 0.014463217,
          "neutral": 0.92489856
      },
      "summary": "Moreover, on the basis of topography, the report also analyses the Global Over The Top Content industry. The latest Over The Top Content related developments, market shares, and strategies that are employed by the major market players\\n\\nMajor Regions for Over The Top Content report are as Follows:\\n\\nNorth America Over The Top Content industry along with their countires (USA, Canada and Mexico)\\n\\n Over The Top Content By Brands\\n\\nTABLE OF CONTENTS of Over The Top Content Report\\n\\n Threat Of Over The Top Content Rivalry\\n\\nTotal Market by Segment.",
      "translation": "",
      "locations": [],
      "reprint": false,
      "authorsByline": "Mark",
      "articleId": "79f5885ebba3442197e8e6f72d7cdb0f",
      "clusterId": "3102756c81bb40c1adfa5e8538ae6cd7",
      "imageUrl": "",
      "pubDate": "2021-10-26T05:27:43+00:00",
      ...
  ]
}</pre>
   </code>
</div>
`
}
