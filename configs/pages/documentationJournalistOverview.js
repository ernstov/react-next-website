export const page = {
  link: "/documentation/journalist-overview",
  title: "Journalist API Overview",
  description: "Overview of the Journalist API functionality",
  className: "pt-4",
  html: `<h1>Introduction <span class="col-orange">BETA</span></h1>

<p>
Journalist API provides endpoints for retrieving journalist information associated with the news articles. 
The API provides two endpoints for working with journalist data, one for making journalist lookups by id, another to search journalist records by a set of attributes, including name, title, twitter bio, etc. 
</p>

<p>Journalist API uses the same authentication method as the News API, see <a href="/documentation">Getting Started</a> page for information about Authentication.</p>

<h2>Endpoints</h2>

<p>Perigon Journalist API consists of two main endpoints. Each uses HTTP requests to receive input parameters and send responses.</p>

<p>Journalist API returns top results only and does not support pagination.</p>

<p><strong>Journalist API endpoints:</strong></p>

<ul>
  <li>ID Lookup <strong>api.goperigon.com/v1/journalists/:id</strong> - returns journalist record by id, or error if such a record does not exist</li>
  <li class="mt-2">Search <strong>api.goperigon.com/v1/journalists</strong> - returns search results over all indexed journalist records, allows to search by name, twitter, etc.</li>
</ul>

<h2>Matched Authors</h2>

<p>During article extraction process the API tries to identify the authors of the article and then tries to match them to their real records in the journalists database.</p>

<p>
The results of the matching process are stored into the <strong>matchedAuthors</strong> field. The field contains all authors that the API tried to match. 
Each record has an <strong>id</strong> and <strong>name</strong>, where <strong>id</strong> is the unique identifier of the journalist, and <strong>name</strong> is the name of the journalist.
</p>

<p>The provided <strong>id</strong> field may contain a string or a <strong>null</strong> value. The latter means that the author was not matched successfully to our records.</p>

<div class="code-body">
  <h3>Example of <span class="col-orange">matched Authors</span> field</h3>
  <code>
   <pre>
{
  "matchedAuthors": [
    { 
      "id": null,
      "name": "James McAffey"
    },
    {
      "id": "3d293651595343fba755f9972837c95d",
      "name": "Katelyn Polantz"
    }
  ]
}</pre>
</code>
</div>

<p style="padding-top: 10px;">Using the journalist id you can retrieve a complete journalist profile information using <strong>api.goperigon.com/v1/journalists/:id</strong> endpoint.</p>

<p>You can search through journalist records using <strong><a href="/documentation/journalist-search">Journalist Search</a></strong> endpoint. It provides an easy interface to search journalists by name, twitter, twitter bio and more.</p>
`
}
