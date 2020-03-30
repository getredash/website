---
category: querying
parent_category: data-sources
title: Google Analytics
slug: google-analytics
---

Google Analytics uses JSON document-style queries. You can get an idea of possible field types and dimensions using the [Query Explorer tool](https://ga-dev-tools.appspot.com/query-explorer/). Once you've imported data into Redash, you can use the [Query Results Data Source]({% link _kb/user-guide/querying/query-results-data-source.md %}) to examine the output with SQL syntax.

## Example Queries

```
{
    "ids": "ga:97038718",
    "start_date": "30daysAgo",
    "end_date": "yesterday",
    "metrics": "ga:newUsers",
    "dimensions": "ga:country",
    "max_results": 10,
    "sort": "-ga:newUsers"
}
```

```
{
    "ids": "ga:97038718",
    "start_date": "30daysAgo",
    "end_date": "yesterday",
    "metrics": "ga:newUsers",
    "dimensions": "ga:date",
    "sort": "-ga:newUsers"
}
```


