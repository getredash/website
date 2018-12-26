---
category: querying
parent_category: user-guide
helpscout_url: https://help.redash.io/article/39-query-snippets-shortcuts
title: Query Snippets
slug: query-snippets
---
Copy and Paste are a big part of composing database queries. Because it's much easier to duplicate prior work than to write it from scratch. This is particularly true for common `JOIN` statements or complex `CASE` expressions. As your list of queries in Redash grows, however, it can be difficult to remember which queries contain the statement you need right now. Enter Query Snippets.

Query Snippets are segments of queries that your whole team can share and trigger via autocomplete. You can create them at `Settings` -> `Query Snippets`.

![](/assets/images/docs/gitbook/Snippet.png)

Here's an example for a simple snippet:

```
JOIN organizations org ON org.id = $ {1:table}.org_id
```  

`${1:table}` is a place holder, which the snippet user can easily replace with the actual content they need.

Once defined, you can trigger the snippet while writing a query with the trigger word you defined - it'll be suggested (auto-completed) like all other fields.

Here are some other ideas for snippets:

  * Frequent `JOIN` statements you use (like the example above).
  * Clauses like `WITH` and `CASE` (`WITH active_users as (SELECT COUNT(DISTINCT user_id) AS active_users_count FROM events_log WHERE created_at > CURRENT_DATE - 7 GROUP BY 1)`)
  * [Conditional Formatting](https://discuss.redash.io/t/conditional-formatting-general-text-formatting/1706/1)

