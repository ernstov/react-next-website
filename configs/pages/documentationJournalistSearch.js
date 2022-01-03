export const page = {
    link: "/documentation/journalist-search",
    title: "Journalist Search",
    description: "Journalist Search API reference",
    className: "pt-4",
    html: `<h1>Journalist Search <span class="col-orange">BETA</span></h1>

<p>The endpoint allows searching journalists using various attributes, like <strong>name</strong>, <strong>twitter</strong>, <strong>title</strong> and others.</p>

<p>The endpoint returns top 10 ranked results, pagionation is not available.</p>

<div class="code-head">
  <h3>Request</h3>
  <label>curl -XGET</label>
  <code><div style="overflow-wrap: anywhere;">api.goperigon.com/journalists?q=Katelyn%20Polantz&apiKey=YOUR_API_KEY</div></code>
</div>

<div class="code-body">
  <h3>Response</h3>
  <code>
   <pre>
{
  "status": 200,
  "results": [
    {
      "id": "3d293651595343fba755f9972837c95d",
      "name": "Katelyn Polantz",
      "title": "Justice Department and Federal Courts Reporter",
      "locations": [],
      "topics": [],
      "sources": [],
      "twitterHandle": "kpolantz",
      "twitterBio": "Justice, courts n’at @CNN",
      "imageUrl": "",
      "linkedinUrl": "https://www.linkedin.com/in/katelynpolantz",
      "facebookUrl": "https://www.facebook.com/kpolantz",
      "instagramUrl": null,
      "websiteUrl": "http://katelynpolantz.com/",
      "blogUrl": null,
      "tumblrUrl": null,
      "youtubeUrl": null
    }
  ]
}</pre></code>
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
      <td>Journalist search query. Searches through <strong>name</strong>, <strong>title</strong>, <strong>twitterBio</strong> fields with priority given to name, then to title, then to twitter bio. Returns results sorted by relevance.</td>
   </tr>
   <tr>
      <th scope="row">2</th>
      <td>name</td>
      <td>Journalist name search query. Searches through journalist names, scores and ranks them, returns results sorted by relevance.</td>
   </tr>
   <tr>
      <th scope="row">3</th>
      <td>twitter</td>
      <td>Twitter handle to search by. If provided, then will return all journalists with exactly matched twitter handle.</td>
   </tr>
   </tbody>
</table>
`
}
