export const page = {
    link: "/documentation/python-examples",
    title: "Documentation Python Examples",
    description: "Documentation Python Examples",
    className: "pt-4",
    html: `<h1>Python Examples</h1>

<p>Below you can find some Python examples for main News Search API endpoints.</p>

<div class='apiKey mt-3'>
    <h3>Your API Key</h3>
    <div>
        <input disabled value='Please sign in' type='text' />
        <button></button>
    </div>
</div>

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

<p class="mt-3">Let's break down the query into small parts:</p>

<ul>
    <li><strong>apiKey={api_key}</strong> - means that <strong>apiKey</strong> will equal to value of <strong>api_key</strong> variable.</li>
    <li class="mt-2"><strong>q=SpaceX</strong> - search the API with "SpaceX" as a search query.</li>
    <li class="mt-2"><strong>source=techcrunch.com</strong> - limit the returned articles to be from <strong>techcrunch.com</strong> source. You can pass multiple sources with a simple syntax: <strong>source=cnn.com&source=nytimes.com&source=techradar.com</strong>.</li>
    <li class="mt-2"><strong>page=0</strong> - return the first page, index zero. Pagination is zero-based, first page is 0, then 1, etc. Maximum page number is 10000. The size of the page could be from 0 to 100. If you want to retrieve multiple pages, you will need to iterate over them and make multiple requests.</li>
    <li class="mt-2"><strong>size=3</strong> - limit the number of results to maximum of 3 records. Page size could be from 0 to 100.</li>
    <li class="mt-2"><strong>from=2021-09-01</strong> - return the articles whose publish date is after <strong>2021-09-01</strong>. The date format is <strong>YYYY-MM-DD</strong>, time part is also available.</li>
    <li class="mt-2"><strong>to=2021-11-01</strong> - return the articles whose publish date is before <strong>2021-11-01</strong>.</li>
    <li class="mt-2"><strong>sortBy=relevance</strong> - sort the returned result set by the relevance to the provided query. <strong>sortBy</strong> could either be by "date" or "relevance".</li>
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

<p class="mt-3">Let's break down the query into small parts:</p>

<ul>
    <li class="mt-2"><strong>apiKey={api_key}</strong> - means that <strong>apiKey</strong> will equal to value of <strong>api_key</strong> variable.</li>
    <li class="mt-2"><strong>q=SpaceX</strong> - search the API with "SpaceX" as a search query.</li>
    <li class="mt-2"><strong>maxSize=2</strong> - limit the number of articles returned per cluster to a maximum of 2. <strong>maxSize</strong> could be in the range of 1 to 10.</li>
    <li class="mt-2"><strong>maxClusters=3</strong> - limit the number of clusters to maximum of 3. <strong>maxClusters</strong> could be in the range of 1 to 100.</li>
    <li class="mt-2"><strong>from=2021-10-01</strong> - return the articles whose publish date is after <strong>2021-09-01</strong>. The date format is <strong>YYYY-MM-DD</strong>, time part is also available.</li>
    <li class="mt-2"><strong>to=2021-11-01</strong> - return the articles whose publish date is before <strong>2021-11-01</strong>.</li>
    <li class="mt-2"><strong>sortBy=relevance</strong> - sort the returned clusters by the relevance to the provided query. <strong>sortBy</strong> could either be by "date" or "relevance" or "count".</li>
    <li class="mt-2"><strong>language=en</strong> - limit the returned articles to those in english.</li>
</ul>

<p>For the above code to work, you will need to set your API key to <strong>api_key</strong> variable. The code will then create a url to query, fetch the results, and print them to console in a json format.</p>

<hr />
`
}
