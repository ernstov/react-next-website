export const page = {
    link: "/documentation/journalist-by-id",
    title: "Journalist Lookup By id",
    description: "Journalist Lookup By ID API reference",
    className: "pt-4",
    html: `<h1>Lookup Journalist By ID</h1>

<p>The endpoint allows to find a journalist profile information by journalist ID. You can retrieve journalist ID from <strong>matchedAuthors</strong> field, that it present with each news article.</p>

<div class="code-head">
  <h3>Request</h3>
  <label>curl -XGET</label>
  <code><div style="overflow-wrap: anywhere;">api.goperigon.com/journalists/3d293651595343fba755f9972837c95d?apiKey=YOUR_API_KEY</div></code>
</div>

<div class="code-body">
  <h3>Response</h3>
  <code>
   <pre>
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
}</pre></code>
</div>

<p class="mt-3">In case of unknown journalist, you will receive the following error: </p>

<div class="code-body">
  <h3><span class="col-orange">Unknown author</span> response</h3>
  <code>
   <pre>
{
  "status": 400,
  "message": "Journalist not found",
  "timestamp": 1641221877389
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
      <td>id</td>
      <td>Path variable parameter. Unique id of the journalist in the Perigon journalists database.</td>
   </tr>
   </tbody>
</table>
`
}
