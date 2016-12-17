# Query Execution Model

## Introduction

The first datasource which was used with Redash was Redshift. Because we had billions of records in Redshift, and some queries were costly to re-run, from the get go there was the idea of caching query results in Redash.

This was to relieve stress from the Redshift cluster and also to improve user experience.

## How Queries Get Executed and Cached in Redash?

### Server

To make sure each query is executed only once at any giving time, we translate the query to a `query hash`, using the following code:

```
COMMENTS_REGEX = re.compile("/*.*?*/")

def gen_query_hash(sql):
    sql = COMMENTS_REGEX.sub("", sql)
    sql = "".join(sql.split()).lower()
    return hashlib.md5(sql.encode('utf-8')).hexdigest()

```

When query execution is done, the result gets stored to `query_results` table. Also we check for all queries in the `queries` table that have the same query hash and update their reference to the query result we just saved ([code](https://github.com/getredash/redash/blob/master/redash/models.py#L235)).

### Client

The client (UI) will execute queries in two scenarios:

1. (automatically) When opening a query page of a query that doesn’t have a result yet.
2. (manually) When the user clicks on “Execute”.

In each case the client does a POST request to `/api/query_results` with the following parameters: `query` (the query text), `data_source_id` (data source to execute the query with) and `ttl`.

When loading a cached result, `ttl` will be the one set to the query (if it was set). This is a relic from previous versions, and I’m not sure if it’s really used anymore, as usually we will fetch query result using its id.

When loading a non cached result, `ttl` will be 0 which will “force” the server to execute the query.

As a response to `/api/query_results` the server will send either the query results (in case of a cached query) or job id of the currently executing query. When job id received the client will start polling on this id, until a query result received (this is encapsulated in `Query` and `QueryResult` services).
