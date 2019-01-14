---
category: querying
parent_category: data-sources
helpscout_url: https://help.redash.io/article/118-querying-urls
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
querying query results  [here]({% link _kb/user-guide/querying/query-results-data-source.md %}).

### Example JSON 1

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

### Example JSON 2

```
{
  "columns": [
    {
      "name": "date",
      "type": "date",
      "friendly_name": "Date"
    },
    {
      "name": "order_count",
      "type": "integer",
      "friendly_name": "Order Count"
    },
    {
      "name": "product_name",
      "type": "string",
      "friendly_name": "Product Name"
    }
  ],
  "rows": [
    {
      "order_count": 45,
      "product_name": "Raspberry Pi B+",
      "date": "2014-01-30"
    },
    {
      "order_count": 57,
      "product_name": "Raspberry Pi Nano",
      "date": "2014-01-30"
    }
  ]
}

```

Few notes:

  1. In the Example JSON above, the column name is the name of a particular row value.
  2. Column name and type must match the row value name and type or Redash will fail to parse the values from each row.