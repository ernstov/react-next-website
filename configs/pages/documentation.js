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

<h2>Python /all endpoint example</h2>

<p>To use the Perigon API with Python, you can use Python's <a href="https://pypi.org/project/requests/">requests</a> library. It provides an easy interface for performing HTTP requests from Python.</p>

<p><strong>/all</strong> endpoint returns a list of news articles that match provided conditions. As part of the search query, you can specify a query to search by, a set of sources, topics, categories to filter by, limit articles by a date range, sort the returned results by date or relevance.</p>

<p>Below you can find an example sample code, which uses the <span class="col-orange">requests</span> library to make a request to <strong>api.goperigon.com/v1/all</strong> endpoint.</p>

<div class="code-body">
  <h3>Making request to Perigon API with <span class="col-orange">requests</span> library</h3>
  <code>
   <pre>
import requests

api_key = "YOUR_API_KEY"

url = f"https://api.goperigon.com/v1/all?apiKey={api_key}&q=SpaceX&source=techcrunch.com&page=0&size=3&from=2021-09-01&to=2021-11-01&sortBy=relevance"<br>

r = requests.get(url)

print(r.json())</pre>
</code>
</div>

<p style="margin-top: 10px;">Let's break down the query into small parts:</p>

<ul>
    <li><strong>apiKey={api_key}</strong> - means that <strong>apiKey</strong> will equal to value of <strong>api_key</strong> variable.</li>
    <li><strong>q=SpaceX</strong> - search the API with "SpaceX" as a search query.</li>
    <li><strong>source=techcrunch.com</strong> - limit the returned articles to be from <strong>techcrunch.com</strong> source. You can pass multiple sources with a simple syntax: <strong>source=cnn.com&source=nytimes.com&source=techradar.com</strong>.</li>
    <li><strong>page=0</strong> - return the first page, index zero. Pagination is zero-based, first page is 0, then 1, etc. Maximum page number is 10000. The size of the page could be from 0 to 100. If you want to retrieve multiple pages, you will need to iterate over them and make multiple requests.</li>
    <li><strong>size=3</strong> - limit the number of results to maximum of 3 records. Page size could be from 0 to 100.</li>
    <li><strong>from=2021-09-01</strong> - return the articles whose publish date is after <strong>2021-09-01</strong>. The date format is <strong>YYYY-MM-DD</strong>, time part is also available.</li>
    <li><strong>to=2021-11-01</strong> - return the articles whose publish date is before <strong>2021-11-01</strong>.</li>
    <li><strong>sortBy=relevance</strong> - sort the returned result set by the relevance to the provided query. <strong>sortBy</strong> could either be by "date" or "relevance".</li>
</ul>

<p>For the above code to work, you will need to set your API key to <strong>api_key</strong> variable. The code will then create a url to query, fetch the results, and print them to console in a json format.</p>

<hr />

<h2>Python /headlines endpoint example</h2>

<p><strong>/headlines</strong> endpoint returns a list of news clusters that match provided conditions. As part of the search query, you can specify a query to search by, a set of sources, topics, categories to filter by, limit articles by a date range, sort the returned results by date or relevance. The returned clusters contain only items that completely matched the query, but the clusters overall may contain more articles. You can retrieve all articles from cluster by using <strong>clusterId=abc</strong> parameter.</p>

<p>Below you can find an example sample code, which uses the <span class="col-orange">requests</span> library to make a request to <strong>api.goperigon.com/v1/headlines</strong> endpoint.</p>

<div class="code-body">
  <h3>Making request to Perigon API with <span class="col-orange">requests</span> library</h3>
  <code>
   <pre>
import requests

api_key = "YOUR_API_KEY"

url = f"https://api.goperigon.com/v1/headlines?apiKey={api_key}&q=SpaceX&maxSize=2&maxClusters=3&from=2021-10-01&to=2021-11-01&sortBy=relevance&language=en"<br>

r = requests.get(url)

print(r.json())</pre>
</code>
</div>

<p style="margin-top: 10px;">Let's break down the query into small parts:</p>

<ul>
    <li><strong>apiKey={api_key}</strong> - means that <strong>apiKey</strong> will equal to value of <strong>api_key</strong> variable.</li>
    <li><strong>q=SpaceX</strong> - search the API with "SpaceX" as a search query.</li>
    <li><strong>maxSize=2</strong> - limit the number of articles returned per cluster to a maximum of 2. <strong>maxSize</strong> could be in the range of 1 to 10.</li>
    <li><strong>maxClusters=3</strong> - limit the number of clusters to maximum of 3. <strong>maxClusters</strong> could be in the range of 1 to 100.</li>
    <li><strong>from=2021-10-01</strong> - return the articles whose publish date is after <strong>2021-09-01</strong>. The date format is <strong>YYYY-MM-DD</strong>, time part is also available.</li>
    <li><strong>to=2021-11-01</strong> - return the articles whose publish date is before <strong>2021-11-01</strong>.</li>
    <li><strong>sortBy=relevance</strong> - sort the returned clusters by the relevance to the provided query. <strong>sortBy</strong> could either be by "date" or "relevance" or "count".</li>
    <li><strong>language=en</strong> - limit the returned articles to those in english.</li>
</ul>

<p>For the above code to work, you will need to set your API key to <strong>api_key</strong> variable. The code will then create a url to query, fetch the results, and print them to console in a json format.</p>

<hr />

<h2>Authentication</h2>

<p>Perigon News API uses API keys to authenticate requests.</p>

<p>You can obtain an API key by registering on the <a href="/data-solutions/news-api">website</a>. The API key grants access to the API resources, therefore you should keep them secure. Do not share them with anyone. If you have registered you can find your personal API key on the account settings page.</p>

<p>You can pass the API key in the HTTP request in following ways:</p>

<ul>
    <li>as the <strong>apiKey=API_KEY</strong> query string parameter</li>
    <li>as the <strong>Authorization: Bearer API_KEY</strong> header</li>
    <li>as the <strong>x-api-key: API_KEY</strong> header</li>
</ul>

<p>Requests that do not have an API key, or have an invalid API key would result in an error. You can find possible error codes in the <strong>Errors</strong> section.</p>

<p><strong>We recommend using second or third methods of providing API key, because they prevent the API key from being shown in the query string.</strong></p>

<hr />

<h2>Endpoints</h2>

<p>Perigon News Search API consists of two main endpoints. Each uses HTTP requests to receive input parameters and send responses.</p>

<p>To send responses of reasonable size, Search API uses <strong>pagination</strong>, the parameters <strong>page</strong> and <strong>size</strong> are used to show different part of search results. All parameters, except the <strong>API_KEY</strong> are optional, and may be omitted.</p>

<p><strong>Search API endpoints:</strong></p>

<ul>
    <li>All <strong>api.goperigon.com/v1/all</strong> - returns search results over all indexed news articles</li>
    <li>Headlines <strong>api.goperigon.com/v1/headlines</strong> - returns clustered search results over all indexed news articles</li>
</ul>

<hr />

<h2>Pagination</h2>

<p>Perigon News API uses pagination to limit the maximum amount of data sent in one request. Currently, the pagination applies to <strong>/all</strong> endpoint.</p>

<p>The data returned from the API is returned in pages. Pagination is controlled with 2 parameters:</p>

<ul>
    <li><strong>page</strong> - defines the index of the page to return. Page numbering is zero based, e.g. the first page has index 0, second has index 1, etc. Maximum page index is 10000. Example: <strong>page=25</strong>, returns page with index 25.</li>
    <li><strong>size</strong> - defines the size of the page to return. Page size could be from 0 to 100. Example: <strong>size=100</strong> will return a maximum 100 articles per request.</li>
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
    <li>Codes <strong>4xx</strong> indicate an error with error message provided in the response body.</li>
    <li>Codes <strong>5xx</strong> indicate Perigon API server errors.</li>
</ul>

<p>For each response the server returns the status code. Below are all possible response codes from the server.</p>

<ul>
    <li>200 OK - Request succeeded.</li>
    <li>400 Bad Request - The provided request was invalid.</li>
    <li>401 Unauthorized - No valid API key provided.</li>
    <li>403 Forbidden - The account is unconfirmed or is disabled.</li>
    <li>404 Not Found - The requested resource does not exist.</li>
    <li>429 Too Many Requests - Too many requests hit the API.</li>
    <li>500, 502, 503, 504 Server Errors - Perigon API backend errors.</li>
</ul>

<hr />

<h2>Rate Limiting</h2>

<p>Requests are being rate limited. If the number of requests made exceeds request quota associated with the API key, the request will be rejected. You will have to wait in order to make another request. You can increase your request quota by upgrading your plan.</p>
`
}
