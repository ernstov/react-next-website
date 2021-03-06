export const page = {
  link: "/documentation",
  title: "Documentation Getting started",
  description: "Documentation Getting started",
  className: "pt-4",
  html: `<h1>Introduction</h1>

<p>Perigon News API is an HTTP REST API for retrieving recent news articles. Our API accepts HTTP GET requests, and returns JSON-encoded responses. It uses standard HTTP response codes to indicate request's response status. To use the API you must obtain an API key, see Authentication section. There are two main endpoints, one retrieving current news headlines, another for searching over all indexed articles.</p>

<div class='apiKey mt-3'>
    <h3>Your API Key</h3>
    <div>
        <input disabled value='Please sign in' type='text' />
        <button></button>
    </div>
</div>

<hr />

<h2>Quick Start</h2>

<p>The easiest way to start using the API is to use the <a href="https://curl.se/">curl</a> utility. It provides easy to use interface for performing HTTP requests to the REST API. You should include your API key in each request you are making.</p>

<div class="code-head-separated mb-3">
  <h3>Example request to get articles about <span class="col-orange">SpaceX</span>:</h3>
  <label>curl -XGET</label>
  <code><div style="overflow-wrap: anywhere;">api.goperigon.com/v1/all?q=SpaceX&from=2021-07-01&to=2021-09-10</div></code>
</div>

<p>You can find more examples of queries on the <a href="/documentation/examples">Examples</a> page. <a href="/documentation/advanced-queries">Advanced queries</a> page covers how to build more advanced queries with special query language, including searching for exact matches, word combinations and other use cases.</p>

<p>You can read more information about Authentication, Endpoints and Errors below. </p>

<hr />

<h2>Authentication</h2>

<p>Perigon News API uses API keys to authenticate requests.</p>

<p>You can obtain an API key by registering on the <a href="/data-solutions/news-api">website</a>. The API key grants access to the API resources, therefore you should keep them secure. Do not share them with anyone. If you have registered you can find your personal API key on the account settings page.</p>

<p>You can pass the API key in the HTTP request in following ways:</p>

<ul>
    <li class="mt-2">as the <strong>apiKey=API_KEY</strong> query string parameter</li>
    <li class="mt-2">as the <strong>Authorization: Bearer API_KEY</strong> header</li>
    <li class="mt-2">as the <strong>x-api-key: API_KEY</strong> header</li>
</ul>

<p>Requests that do not have an API key, or have an invalid API key would result in an error. You can find possible error codes in the <strong>Errors</strong> section.</p>

<p><strong>We recommend using second or third methods of providing API key, because they prevent the API key from being shown in the query string.</strong></p>

<hr />

<h2>Endpoints</h2>

<p>Perigon News Search API consists of two main endpoints. Each uses HTTP requests to receive input parameters and send responses.</p>

<p>To send responses of reasonable size, Search API uses <strong>pagination</strong>, the parameters <strong>page</strong> and <strong>size</strong> are used to show different part of search results. All parameters, except the <strong>API_KEY</strong> are optional, and may be omitted.</p>

<p><strong>Search API endpoints:</strong></p>

<ul>
    <li class="mt-2">All <strong>api.goperigon.com/v1/all</strong> - returns search results over all indexed news articles</li>
    <li class="mt-2">Headlines <strong>api.goperigon.com/v1/headlines</strong> - returns clustered search results over all indexed news articles</li>
</ul>

<p>Perigon Journalist API consists of two main endpoints. Each uses HTTP requests to receive input parameters and send responses.</p>

<p>Journalist API returns top results only and does not support pagination.</p>

<p><strong>Journalist API endpoints:</strong></p>

<ul>
  <li class="mt-2">ID Lookup <strong>api.goperigon.com/v1/journalists/:id</strong> - returns journalist record by id, or error if such a record does not exist</li>
  <li class="mt-2">Search <strong>api.goperigon.com/v1/journalists</strong> - returns search results over all indexed journalist records</li>
</ul>

<hr />

<h2>Pagination</h2>

<p>Perigon News API uses pagination to limit the maximum amount of data sent in one request. Currently, the pagination applies to <strong>/all</strong> endpoint.</p>

<p>The data returned from the API is returned in pages. Pagination is controlled with 2 parameters:</p>

<ul>
    <li><strong>page</strong> - defines the index of the page to return. Page numbering is zero based, e.g. the first page has index 0, second has index 1, etc. Maximum page index is 10000. Example: <strong>page=25</strong>, returns page with index 25.</li>
    <li class="mt-2"><strong>size</strong> - defines the size of the page to return. Page size could be from 0 to 100. Example: <strong>size=100</strong> will return a maximum 100 articles per request.</li>
</ul>

<p> Total number of results of the query is returned in <strong>numResults</strong> field. You can use it inside the fetching loop to understand how many requests you need to make to download all the results.</p>

<hr />

<h2>Examples</h2>

<p>You can find API query examples on the <a href="/documentation/examples">examples</a> page.</p>

<hr />

<h2>Errors</h2>

<p>Perigon News API uses HTTP status codes to indicate success or failure of the API request.</p>

<p>General summary:</p>

<ul>
    <li>Codes <strong>2xx</strong> indicate successful request.</li>
    <li class="mt-2">Codes <strong>4xx</strong> indicate an error with error message provided in the response body.</li>
    <li class="mt-2">Codes <strong>5xx</strong> indicate Perigon API server errors.</li>
</ul>

<p>For each response the server returns the status code. Below are all possible response codes from the server.</p>

<ul>
    <li>200 OK - Request succeeded.</li>
    <li class="mt-2">400 Bad Request - The provided request was invalid.</li>
    <li class="mt-2">401 Unauthorized - No valid API key provided.</li>
    <li class="mt-2">403 Forbidden - The account is unconfirmed or is disabled.</li>
    <li class="mt-2">404 Not Found - The requested resource does not exist.</li>
    <li class="mt-2">429 Too Many Requests - Too many requests hit the API.</li>
    <li class="mt-2">500, 502, 503, 504 Server Errors - Perigon API backend errors.</li>
</ul>

<hr />

<h2>Rate Limiting</h2>

<p>Requests are being rate limited. If the number of requests made exceeds request quota associated with the API key, the request will be rejected. You will have to wait in order to make another request. You can increase your request quota by upgrading your plan.</p>
`
}
