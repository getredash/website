---
category: querying
parent_category: user-guide
helpscout_url: https://help.redash.io/article/152-query-results-data-source
title: Querying Existing Query Results
slug: query-results-data-source
---

The **Query Results** Data Source lets you run queries against results from your other Data Sources. Use it to join data from multiple databases or perform other kinds post-processing. Redash uses an in-memory SQLite database to make this possible. As a result, queries against large result sets may fail if Redash runs out of memory. 

### Setup
You can enable **Query Results** under the `Data Source` tab of the settings menu. Setup is easy: just provide a name for the source. This is the name that will appear in the source dropdown of the query editor.

### Querying
[SQLite query syntax](https://sqlite.org/lang.html) should be familiar if you have worked with other SQLs. Here's an example query:

    SELECT a.name, b.count 
    FROM query_123 a 
    JOIN query_456 b ON a.id = b.id

Each of your existing queries constitutes its own "table" to SQLite. The table name is the string `query_` concatenated with your desired Query ID, which can be found in that query's URL. So for example, a query with the URL `https://app.redash.io/acme/queries/49588/source` will have the table name `query_49588` in SQLite.

{% callout warning %}
Be careful that your table name (`query_49588` above) appears on the same line as the associated `FROM` and `JOIN` keywords. Redash can't parse it correctly otherwise.
{% endcallout %}

### Cached Query Results
When you query the **Query Results** Data Source, Redash executes the underlying queries first. This ensures you have recent results in the event that [schedule the Query Results query](/help/user-guide/querying/scheduling-a-query). You can reduce the running time of **Query Results** queries by using `cached_query_` for your table names instead of `query_`. This tells Redash to use the cached results from the most recent execution of a given query. This reduces the number of calls to your underlying Data Sources, improving performance by using older data. You can mix both syntaxes in the same query too, as shown below:

    SELECT a.name, b.count 
    FROM query_123 a 
    JOIN cached_query_456 b ON a.id = b.id
<br>

### Query Results Permissions
Access to the **Query Results** Data Source is governed by the groups it's associated with [like any other Data Source](/help/user-guide/users/permissions-groups). But Redash will also check if a user has permission to execute queries on the Data Sources the original queries use.

As an example: if a user does not have access to Data Source "A", they will not be able to query the results of queries against Data Source "A". Importantly, if that user opens an existing Query Results query that pulls data from a query of Data Source "A", the user will be able to see the most recently cached result of that query. But they will not be able to execute the query again.