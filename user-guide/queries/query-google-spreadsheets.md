---
description: Connect Google Spreadsheets to Redash and query it like any other data source, query multiple sources easily.
---


# Querying a Google Spreadsheets Data Source

To load your spreadsheet in Redash share your it with your ServiceAccount’s email (it can be found in the credentials json file, for example 43242343247-fjdfakljr3r2@developer.gserviceaccount.com).

The query format is “DOC_UUID|SHEET_NUM” (for example “kjsdfhkjh4rsEFSDFEWR232jkddsfh|0”) - this will be the equivalent of `SELECT * FROM db` type of query and will show you the entire table.

To apply some manipulation on top of that data, you can do one two options:

1. Use the "Query Results" data source and your query id as a table (`SELECT ..... FROM query_123`), then you'll need to query it with SQLite syntax. Read more about query results as data sources [here](using-datasets-as-data-sources.md).
2. Create a new Google BigQuery table using the Google Spreadsheet in question as a source, and then use Redash’s BigQuery connector to query the spreadsheet indirectly. This way, the SQL used to query the spreadsheet (via BigQuery table) is far more flexible than the direct query of the type (“kjsdfhkjh4rsEFSDFEWR232jkddsfh|0”) mentioned above. ([BigQuery integrates with Google Drive](https://cloud.google.com/blog/big-data/2016/05/bigquery-integrates-with-google-drive)).
