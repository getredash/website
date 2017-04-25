---
title: API Access to Query Results (as CSV, JSON or Excel)
category: integrations
layout: docs-article
description: Query results can be automatically exported to CSV or JSON by using your query's API key.
order: 1
---

Query results can be automatically exported to CSV or JSON by using your query's API key. Your query API key can be found in the top right menu in the query editor.

{% doc_img /assets/images/docs/query_api_key.png %}

The format of the URL is the following: `https://<redash_url>/api/queries/<query_id>/results.(csv|json|xlsx)?api_key=<your_api_key>. `

`redash_url` might be something like `redash.acme.com` in case of a self hosted Redash or `app.redash.io/acme` in case of a hosted account.

Here is a working example from the demo Redash: [http://demo.redash.io/api/queries/63/results.json?api_key=874fcd93ce4b6ef87a9aad41c712bcd5d17cdc8f](http://demo.redash.io/api/queries/63/results.json?api_key=874fcd93ce4b6ef87a9aad41c712bcd5d17cdc8f).

{% callout %}
You **can** use your user API key but it's less recommended in terms of security - your API key can grant access you might now want to share with others that have access to the page you used your API key in. Use your API key wisely, we recommend  using the query API key.
{% endcallout %}

## Queries with Parameters

Currently this API does **not** support query with parameters. For queries with parameters you will need to use the refresh API (while the API is not documented yet, you can see this [Python code example](https://gist.github.com/arikfr/e3e434d8cfd7f331d499ccf351abbff9) for reference).