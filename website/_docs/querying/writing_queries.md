---
title: Writing Queries
category: querying
layout: docs-article
order: 1
---

{% doc_img /assets/images/docs/gifs/queries/add_new_query.gif %}

For SQL databases just use the native syntax for that database. For other, mostly NoSQL databases Redash has a few nuances:

* [Querying ElasticSearch](querying_elasticsearch.md)
* [Querying JIRA (JQL)](querying_jira_jql.md)
* [Querying MongoDB](querying_mongodb.md)

## Keyboard Shortcuts

* Execute query: `Ctrl`/`Cmd` + `Enter`
* Save query: `Ctrl`/`Cmd` + `S`

## Schema Browser

For data sources that support schema loading, you will get a schema browser to the left of the query editor and **live auto-complete** - just start typing and you'll get the relevant suggestions.

For schemas with more than 5000 tokens (tables and columns) live auto-complete is disabled, but you can trigger autocomplete by typing the prefix and then pressing `Ctrl` + `Space` to see suggestions.

{% callout %}
The schema is cached and updates periodically (usually every 30 minutes).
{% endcallout %}