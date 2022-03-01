---
category: dev-guide
parent_category: open-source
title: Writing a New Query Runner 
slug: write-a-query-runner
---

## Intro 
Redash can already query many databases and REST APIs. The query running logic is modular. So that if you want to add support for a type you can write a query runner. 

A query runner is a Python class. It tells Redash how to do four important things:

1. How to locate, authenticate, and connect with the data source over a network connection.
2. How to send queries to the data source and how to retrieve their results.
3. How to format the query results in a way that Redash expects.
4. What to tell a user if one of the previous three tasks fails.

This document will discuss the minimum requirements of a query runner. Also, it will link to examples query runner implementations.

Want to see an example right away? Visit the `/redash/query_runner` directory of Redash's source code. First look at the `BaseSQLQueryRunner` in `__init__.py`. Then read `pg.py` to see how this was implemented for PostgreSQL.

{% callout info %}

Redash is primarily a tool for writing SQL. But a query runner can connect with any type of data source (SQL, NoSQL, API) as long its query runner does all four tasks above.

{% endcallout info %}

If you're writing a query runner for a SQL database or a REST API, Redash already includes base classes to help you get started. 
