---
category: querying
parent_category: user-guide
helpscout_url: https://help.redash.io/article/43-download-query-results
title: Download or Export Query Results
slug: download-query-results
---

You can download data from the query screen by clicking the vertical ellipsis (`⋮`) button beneath the results pane. Then select the type of file you'd like to download:

<img src="/assets/images/docs/gitbook/download-dataset.png">

### Export URLs and API Key

<img src="/assets/images/docs/gitbook/show-api-key.png">

The download dataset buttons point to the current query result you see on screen. To get a URL which always points at the latest query results, click on the "Show API Key" button in the query menu.

<img src="/assets/images/docs/gitbook/show-api-key-modal.png">

{% callout info %}

The latest results API is not supported for queries that use parameters.

{% endcallout %}

In the dialog that will open you will find the Query API key and links to the latest results URL in CSV and JSON format. You can also get the Excel format by changing the file type suffix from `json`/`csv` to `xlsx`.
