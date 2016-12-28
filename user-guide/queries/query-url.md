---
description: Import JSON formatted URL based data to Redash and query it like any other data source, query multiple sources easily.
---

# Querying URLs

Using a URL based data source requires that the URL return the [_results JSON format_](https://redash.io/help-onpremise/how-rd-works/data-source-results-format.html)

The query itself inside Redash will simply contain the URL to be executed (i.e. http://myserver/path/myquery) and result with all the data it has - the SQL equivalent would be `SELECT * FROM url`.

Valid types of columns returned in results:
* integer
* float
* boolean
* string
* datetime
* date

To manipulate the data you get from the URL you can save the query that resulted with all the data and then query that data set.
Read more about querying query results [here](using-datasets-as-data-sources.md).
