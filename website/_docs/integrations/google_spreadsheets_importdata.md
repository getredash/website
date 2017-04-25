---
title: How to use Google Spreadsheets' IMPORTDATA function?
category: integrations
layout: docs-article
description: Using Redash's Query Results API you can create an automatically updating Google Spreadsheets document.
order: 2
---

Using the [results API]({% link _docs/integrations/api_export.md %}) you can easily import query results directly into Google Spreadsheets, using the `IMPORTDATA` function.

You can use this template in your sheet:

```
=importdata("http://<redash_url>/api/queries/<query id>/results.csv?api_key=<query api key>")`
```

* <redash_url> might be something like `redash.acme.com` in case of a self hosted Redash or `app.redash.io/acme` in case of a hosted account.
* <query id> is the numeric part of the query URL.
* <query api key> is the query API key, which can be found in the top right menu in the query editor.

{% doc_img /assets/images/docs/query_api_key.png %}

Working example from the demo Redash: 

```
=importdata("http://demo.redash.io/api/queries/63/results.csv?api_key=874fcd93ce4b6ef87a9aad41c712bcd5d17cdc8f")
```
