---
title: Query Snippets
category: querying
layout: docs-article
order: 2
description: Query snippets are small (or not so small) pieces of queries you want to share with your team to reduce the need to type them over and over again or looking for a reference.
---

Query snippets are small (or not so small) pieces of queries you want to share with your team to reduce the need to type them over and over again or looking for a reference.

You create them at Query Snippets page in the settings view (currently only admins can create them, but anyone can use).

{% doc_img /assets/images/docs/snippets_tab.png %}

A snippet can be something like: (the `${1:table}` part is a placeholder)

```sql
JOIN organizations org ON org.id = ${1:table}.org_id
```

Other ideas for snippets:
* `JOIN`s you use a lot (`JOIN {{table1}} on table1.id = {{table}}.user_id`)
* Clauses like `WITH` and `CASE` (`WITH active_users as (SELECT COUNT(DISTINCT user_id) AS active_users_count FROM events_log WHERE created_at > CURRENT_DATE - 7 GROUP BY 1)`)
* Shortcut for repeating complex definitions like [clickable URLs in tables](../query-examples-hacks/redash-hacks.md#clickable-urls-in-table).

Once defined, you can trigger them while writing a query with the trigger word you define - it'll be suggested (auto-completed) while typing.

{% callout %}
If you define the snippet in a separate browser window/tab, make sure to refresh the one with the query editor, for it to pick up your new query snippets.
{% endcallout %}
