export const page = {
  link: "/documentation/headlines",
  title: "Documentation Headlines",
  description: "Documentation Headlines",
  className: "pt-4",
  html: `<h1>Headlines</h1>

<p>You can retrieve clustered headlines with <strong>api.goperigon.com/v1/headlines</strong> endpoint.</p>

<div class="code-head">
  <h3>Request</h3>
  <label>curl -XGET</label>
  <code><div style="overflow-wrap: anywhere;">api.goperigon.com/v1/headlines?q=Dow%20Jones&country=us&apiKey=YOUR_API_KEY</div></code>
</div>

<div class="code-body">
  <h3>Response</h3>
  <code>
   <pre>
{
   "status":200,
   "clusters": [
      {
         "clusterId": "6b237c10d95c457b9608ff1ddfc93a59",
         "count": 20,
         "hits": [
            "url": "https://www.marketscreener.com/quote/index/DJ-INDUSTRIAL-4945/news/Dow-Jones-Industrial-Average-Wall-Street-rises-as-investors-bet-on-earnings-36723414/",
            "source": { "domain": "marketscreener.com" },
            "country": "us",
            "language": "en",
            "title": "Dow Jones Industrial Average : Wall Street rises as investors bet on earnings",
            "description": "Dow Jones Industrial Average : Wall Street rises as investors bet on earnings  marketscreener",
            "content": "Johnson & Johnson and Travelers helped push the blue-chip index up...",
            ...
         ]
      }
   ]
}</pre>
   </code>
</div>

<hr />

<h2>Parameters</h2>

<table>
   <thead>
   <tr>
      <th>#</th>
      <th>Parameter</th>
      <th>Description</th>
   </tr>
   </thead>
   <tbody>
   <tr>
      <th scope="row">1</th>
      <td>q</td>
      <td>Search query, each article will be scored and ranked against it. Articles are searched on title, description and content fields.</td>
   </tr>
   <tr>
      <th scope="row">2</th>
      <td>from</td>
      <td>'from' filter, will search articles published after specified date, date could be passed as ISO or 'yyyy-mm-dd'.</td>
   </tr>
   <tr>
      <th scope="row">3</th>
      <td>to</td>
      <td>'to' filter, will search articles published before specified date, date could be passed as ISO or 'yyyy-mm-dd'.</td>
   </tr>
   <tr>
      <th scope="row">4</th>
      <td>addDateFrom</td>
      <td>'addDateFrom' filter, will search articles added after specified date, date could be passed as ISO or 'yyyy-mm-dd'.</td>
   </tr>
   <tr>
      <th scope="row">5</th>
      <td>addDateTo</td>
      <td>'addDateTo' filter, will search articles added before specified date, date could be passed as ISO or 'yyyy-mm-dd'.</td>
   </tr>
   <tr>
      <th scope="row">6</th>
      <td>refreshDateFrom</td>
      <td>Will search articles refreshed after the specified date. Date could be passed as ISO or 'yyyy-mm-dd'.</td>
   </tr>
   <tr>
      <th scope="row">7</th>
      <td>refreshDateTo</td>
      <td>Will search articles refreshed before the specified date. Date could be passed as ISO or 'yyyy-mm-dd'.</td>
   </tr>
   <tr>
      <th scope="row">8</th>
      <td>articleId</td>
      <td>Article ID, will search for news article by ID of the article. If several parameters are passed, all matched articles will be returned.</td>
   </tr>
   <tr>
      <th scope="row">9</th>
      <td>clusterId</td>
      <td>Cluster ID, will search for news articles by ID of the cluster. If several parameters are passed, all matched articles will be returned.</td>
   </tr>
   <tr>
      <th scope="row">10</th>
      <td>medium</td>
      <td>Medium, will filter out news articles medium, which could be 'video' or 'article'. If several parameters are passed, all matched articles will be returned.</td>
   </tr>
   <tr>
      <th scope="row">11</th>
      <td>source</td>
      <td>Publisher's domain, can include subdomain. If multiple parameters are passed, they will be applied as OR operation.</td>
   </tr>
   <tr>
      <th scope="row">12</th>
      <td>country</td>
      <td>Country code to filter by country. If multiple parameters are passed, they will be applied as OR operation.</td>
   </tr>
   <tr>
      <th scope="row">13</th>
      <td>language</td>
      <td>Language code to filter by language. If multiple parameters are passed, they will be applied as OR operation.</td>
   </tr>
   <tr>
      <th scope="row">14</th>
      <td>label</td>
      <td>Labels to filter by, could be 'opinion', 'paid-news', 'non-news', etc. If multiple parameters are passed, they will be applied as OR operation.</td>
   </tr>
   <tr>
      <th scope="row">15</th>
      <td>byline</td>
      <td>Author names to filter by. Article author bylines are used as a source field. If multiple parameters are passed, they will be applied as OR operation.</td>
   </tr>
   <tr>
      <th scope="row">16</th>
      <td>topic</td>
      <td>Filter by topics. Each topic is some kind of an entity that the article is about. Example of topics: Google, Facebook, Joe Biden, etc. If multiple parameters are passed, they will be applied as OR operation.</td>
   </tr>
   <tr>
      <th scope="row">17</th>
      <td>category</td>
      <td>Filter by categories. Categories are general themes that the article is about. Example of topics: tech, politics, academia, etc. If multiple parameters are passed, they will be applied as OR operation.</td>
   </tr>
   <tr>
      <th scope="row">18</th>
      <td>taxonomy (coming soon)</td>
      <td>Filter by taxonomy codes. Taxonomy codes are codes for specific industry. Based on content, each article could be tagged with different taxonomy codes, which say that the article is relevant to certain industry. If multiple parameters are passed, they will be applied as OR operation.</td>
   </tr>
   <tr>
      <th scope="row">19</th>
      <td>state</td>
      <td>Filter local news by state. Applies only to local news, when this param is passed non-local news will not be returned. If multiple parameters are passed, they will be applied as OR operation.</td>
   </tr>
   <tr>
      <th scope="row">20</th>
      <td>city</td>
      <td>Filter local news by city. Applies only to local news, when this param is passed non-local news will not be returned. If multiple parameters are passed, they will be applied as OR operation.</td>
   </tr>
   <tr>
      <th scope="row">21</th>
      <td>area</td>
      <td>Filter local news by area. Applies only to local news, when this param is passed non-local news will not be returned. If multiple parameters are passed, they will be applied as OR operation.</td>
   </tr>
   <tr>
      <th scope="row">22</th>
      <td>sortBy</td>
      <td>'count' - sort by the number of articles in the cluster (desc); 'relevance' - sort by the relevance to the query (most relevant first); 'date' - sort by the publication time (desc).</td>
   </tr>
   <tr>
      <th scope="row">23</th>
      <td>sortClusterBy</td>
      <td>Sort articles in cluster by parameters, can be by \`relevance\` to search query or by \`date\` of publication.</td>
   </tr>
   <tr>
      <th scope="row">24</th>
      <td>maxClusters</td>
      <td>Maximum number of clusters to return. From 1 to 100.</td>
   </tr>
   <tr>
      <th scope="row">25</th>
      <td>maxSize</td>
      <td>Maximum number of articles per cluster to return. From 1 to 10.</td>
   </tr>
   <tr>
      <th scope="row">26</th>
      <td>showReprints</td>
      <td>Whether to return reprints in the response or not</td>
   </tr>
   <tr>
      <th scope="row">27</th>
      <td>type</td>
      <td>Returns only a specific type of articles in the result. If set to \`local\` - return local news, \`world\` - non-local news, \`all\` - all articles (the default).</td>
   </tr>
   </tbody>
</table>
`
}
