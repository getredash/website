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



### Poll for Fresh Query Results (including parameters)

<https://gist.github.com/arikfr/e3e434d8cfd7f331d499ccf351abbff9>

This example uses the refresh API to make Redash refresh a query to make sure
you get fresh results and then poll the API until a result is ready. Can be
used for queries with or without parameters.
