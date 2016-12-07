# Querying URLs

Using a URL based data source requires that the URL return the [_results JSON format_](https://redash.io/help-onpremise/how-rd-works/data-source-results-format.md)

The query itself inside Redash will simply contain the URL to be executed (i.e. http://myserver/path/myquery) and result with all the data it has - similar to `select * from db`.

Valid types of columns returned in results:
TYPE_INTEGER = 'integer'
TYPE_FLOAT = 'float'
TYPE_BOOLEAN = 'boolean'
TYPE_STRING = 'string'
TYPE_DATETIME = 'datetime'
TYPE_DATE = 'date'

To manipulate the data you get from the URL you can save the query that resulted with all the data and then query that data set.
Read more about querying query results [here](https://redash.io/help/queries/using-datasets-as-data-sources.html).
