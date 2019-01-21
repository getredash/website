---
category: setup
parent_category: data-sources
title: CSV File from a URL
slug: csv-file-from-a-url
---
To load a CSV file from a URL, please follow these steps:

1. Set up a new CSV data source.
2. Upload CSV somewhere so you can access it from URL.
3. Create a new query, select your CSV data source.
4. Use the CSV file URL address as the query text (i.e. https://example.com/file.csv ). Redash expects a CSV file with a header as the first row.
5. This is going to automatically populate the table view below which you can further configure and set up new visualizations.


To further filter or manipulate the data you can use the [Query Results data source]({% link _kb/user-guide/querying/query-results-data-source.md %}).

_Note: If you are using Dropbox to host the CSV file, make sure it ends as `filename.csv?dl=1`_