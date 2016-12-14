### Using Datasets as Data Sources

We added a new type of data source - the query results data source. It allows you to run queries on top of existing query results, so you can easily use it to merge results or perform any other kind of "post processing".

To use it, you need to create a new data source of type "Query Results (Alpha)".

![](../assets/query_results.png)

Then you can use it to write queries like:

```SQL
SELECT A.NAME, B.COUNT
FROM QUERY_123 A
JOIN QUERY_456 B ON A.ID = B.ID
```

You reference queries as "query_<id>" in either the FROM or the JOIN clause.

This is an alpha release and all feedback is welcome :)

Few notes:

1. When you run a query, we execute the underlying queries as well to make sure you have recent results in case you schedule this query. We might fine tune this in the future to reduce the number of times we run the same query.

2. The processing of the data is being done by SQLite in memory - in case of large results sets it might fail due to memory running out.

3. Access to the data source is governed by the groups it's associated with, like any other data source. When a user runs a query we also check if he has permission to execute queries on the data sources the original queries use. So while a user who has access to this data source will be able to see any query that uses it, he won't be able to execute queries on data sources he doesn't have access to.
