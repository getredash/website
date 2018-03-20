---
category: querying
parent_category: data-sources
helpscout_url: https://help.redash.io/article/117-querying-goog
title: Querying Google Analytics
slug: querying-google-analytics
---

## Example Queries {#queries}
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

You can get an idea of possible field types and dimensions using the [Query Explorer tool](https://ga-dev-tools.appspot.com/query-explorer/).