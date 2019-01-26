---
category: querying
parent_category: user-guide
helpscout_url: https://help.redash.io/article/25-writing-queries
title: Creating and Editing Queries
slug: writing-queries
toc: true
order: 1
---

To make new query, click `Create` in the navbar then select `Query`.

![](/assets/images/docs/gifs/queries/add_new_query.gif)

### Published vs Unpublished Queries

By default each query starts as an unpublished draft, which means that:

- Only the user who created this query can see it in the "All Queries" list or in search results.
- You can't add visualizations from an unpublished query to dashboards or use it in alerts.

To publish a query, give it a name or click the `Publish` button. It's also possible to unpublish a published query by clicking on the `Unpublish` button in the query menu.

### Query Syntax

In most cases we use the query language native to the data source. In some cases there are differences or additions, which are documented on the [Querying Data Sources]({% link _kb/data-sources/querying %}) page.

### Schema Browser and Autocomplete

To the left of the query editor, you will find the Schema Browser:

<img src="/assets/images/docs/gitbook/schema-browser.png" width="60%">

The schema browser will list all your tables, and when clicking on a table will show its columns. To insert an item into your query, simply click the double arrow on the right side. You can filter the schema with the search box and refresh it by clicking on the refresh button (otherwise it refreshes periodically in the background).

{% callout %}
Please note that not all data source types support loading the schema.
{% endcallout %}

Beside the schema browser, Redash supports autocomplete while typing your
query. The autocomplete is auto triggered, unless you have a large schema
(>5000 tokens - tables and columns). In case of a large schema, the
autocomplete can be manually triggered with `Ctrl` \+ `Space`.

### Keyboard Shorcuts

- Execute query: `Ctrl`/`Cmd` + `Enter`
- Save query: `Ctrl`/`Cmd` + `S`
- Toggle Auto Complete: `Ctrl` \+ `Space`
- Toggle Schema Browser `Alt`/`Option` + `D`

### Archiving a Query

Once a query is no longer useful, you can archive it. Archiving is almost the same as deleting, except that **direct links to the query will still work.** To archive a query, open the little menu at the top-right area of the query editor, next to the Save button and click Archive.

![](/assets/images/docs/gitbook/archive_query.png)

### Duplicating (Forking) a Query

If you need to create a copy of an existing query (created by you or someone else), you can fork it. To fork a query, just click on the Fork button (see example below)

![](/assets/images/docs/gifs/queries/fork_query.gif)
