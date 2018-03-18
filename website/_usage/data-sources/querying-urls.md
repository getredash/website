---
categories:
- querying
parent_category: data-sources
helpscout_url: https://help.redash.io/article/118-querying-urls
keywords: null
title: Querying URLs
slug: querying-urls
---
Using a URL based data source requires that the URL use our format (see example below).

The query itself inside Redash will simply contain the URL to be executed
(i.e.   <http://myserver/path/myquery>) and result with all the data it has.

Here's a list of valid column types returned in results:

  * integer
  * float
  * boolean
  * string
  * datetime
  * date

To manipulate the data you get from your URL data source you can save the
query that resulted in all the data and query that data set. Read more about
querying query results  [here]({% link _usage/user-guide/querying/query-results-data-source.md %}).

### Example JSON

```
{
  "columns": [
    {
      "name": "date",
      "type": "date",
      "friendly_name": "date"
    },
    {
      "name": "day_number",
      "type": "integer",
      "friendly_name": "day_number"
    },
    {
      "name": "value",
      "type": "integer",
      "friendly_name": "value"
    },
    {
      "name": "total",
      "type": "integer",
      "friendly_name": "total"
    }
  ],
  "rows": [
    {
      "value": 40832,
      "total": 53141,
      "day_number": 0,
      "date": "2014-01-30"
    },
    {
      "value": 27296,
      "total": 53141,
      "day_number": 1,
      "date": "2014-01-30"
    },
    {
      "value": 22982,
      "total": 53141,
      "day_number": 2,
      "date": "2014-01-30"
    }
  ]
}

```

