---
category: integrations-and-api
parent_category: user-guide
helpscout_url: https://help.redash.io/article/128-api-key-authentication
title: API
slug: api
---

## API Authentication

All the API calls support authentication with an API key. Redash has two types
of API keys:

  * User API Key: has the same permissions as the user who owns it. Can be found on a user profile page.
  * Query API Key: has access only to the query and its results. Can be found on the query page.

Whenever possible we recommend using a Query API key.

## Accessing with Python

We provide a light wrapper around the Redash API called `redash-toolbelt`. The source code is hosted on [Github](https://github.com/getredash/redash-toolbelt). The `examples` folder in that repo includes useful demos, such as:

+ [Poll for Fresh Query Results (including parameters)](https://github.com/getredash/redash-toolbelt/blob/master/redash_toolbelt/examples/refresh_query.py)
+ [Refresh an entire Dashboard](https://github.com/getredash/redash-toolbelt/blob/master/redash_toolbelt/examples/refresh_dashboard.py)
+ [Export all your queries as files](https://github.com/getredash/redash-toolbelt/blob/master/redash_toolbelt/examples/query_export.py)


## Common Endpoints

{% callout danger %}
Below is an incomplete list of Redash's internal API endpoints as of V9. These may change in future versions of Redash.
{% endcallout %}

### Queries

`api/queries`
+ GET: Returns a paginated array of query objects.
	- Includes the most recent `query_result_id` for non-parameterized queries.
+ POST: Create a new query object

`api/queries/<id>`
+ GET: Returns an individual query object
+ POST: Edit an existing query object.
+ DELETE: Archive this query. 

{% callout info %}

There are two endpoints that can refresh a query with parameters. `/refresh` and `/results`.

`/refresh` accepts parameter values in its query string.
`/results` accepts parameter values in the request JSON request body.

```
{ 
    "parameters": {
    	"number_param": 100,
    	"date_param": "2020-01-01",
    	"date_range_param": {
    		"start": "2020-01-01",
    		"end": "2020-12-31"
    		}
    	}
    }
```

{% endcallout %}

`api/queries/<id>/refresh`
+ POST: Refreshes a query and responds with a query task result (job)
	- If passing parameters, they must be included in the query string preceded by `p_`.

`api/queries/<id>/results`
+ POST: Refreshes a query and responds with a query task result (job).
	- If passing parameters, they must be included in the JSON request body as a `parameters` object.

`api/jobs/<job_id>`
+ GET: Returns a query task result (job)
	+ Possible statuses:
		- 1 == PENDING (waiting to be executed)
		- 2 == STARTED (executing)
		- 3 == SUCCESS
		- 4 == FAILURE
		- 5 == CANCELLED
	+ When status is success, the job will include a `query_result_id`

`api/query_results/<query_result_id>`
+ GET: Returns a query result
	- Appending a filetype of `.csv` or `.json` to this request will return a downloadable file. If you append your `api_key` in the query string, this link will work for non-logged-in users.

### Dashboards

`api/dashboards`
+ GET: Returns a paginated array of dashboard objects.
+ POST: Create a new dashboard object

`api/dashboards/<dashboard_id>`
+ GET: Returns an individual dashboard object.
+ POST: Edit an existing dashboard object.
+ DELETE: Archive this dashboard
