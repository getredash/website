---
category: integrations-and-api
parent_category: user-guide
helpscout_url: https://help.redash.io/article/129-how-to-use-google-spreadsheets-importdata-function
title: How To Use Google Spreadsheets IMPORTDATA Function
slug: how-to-use-google-spreadsheets-importdata-function
---

Using the CSV URL of your query results you can easily import query results
directly into **Google Spreadsheets** , using the `IMPORTDATA` function. The
CSV URL along with the API Key, can be found when clicking on the "Show API
Key" button in the query menu:

<img src="/assets/images/docs/gitbook/query-api-key.png" width="60%">

In the dialog which opens, you will find a CSV URL similar to:
`https://app.redash.io/acme/api/queries/123/results.csv?api_key=secret`, which
you input to the `IMPORTDATA` function:

`=IMPORTDATA("https://app.redash.io/acme/api/queries/123/results.csv?api_key=secret")`
