### Using datasets as data sources

We added a new type of data source - the query results data source. It allows you to run queries on top of existing query results, so you can easily use it to merge results or perform any other kind of "post processing".

To use it, you need to create a new data source of type "Query Results (Alpha)".

![](../assets/query_results.png)

Then you can use it to write queries like:

```SELECT a.name, b.count
FROM query_123 a
JOIN query_456 b on a.id = b.id```

You reference queries as "query_<id>" in either the FROM or the JOIN clause.


Few notes:

When you run a query, we execute the underlying queries as well. This to make sure you have recent results in case you schedule this query. We might fine tune this in the future to reduce the number of time we run the same query.

The processing of the data is being done by SQLite in memory. So in case of large results sets it might fail due to memory running out.

Access to the data source is governed by the groups it associated with, like any other data source. But when a user runs a query we also check if he has permission to execute queries on the data sources the original queries use. So while a user who has access to this data source will be able to see any query that uses it, he won't be able to execute queries on data sources he doesn't have access to.

This is an alpha release and all feedback is welcome :)
