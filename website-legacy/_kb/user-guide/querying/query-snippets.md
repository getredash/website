---
category: querying
parent_category: user-guide
helpscout_url: https://help.redash.io/article/39-query-snippets-shortcuts
title: Query Snippets
slug: query-snippets
---
Query snippets are small (or not so small) pieces of queries you want to share
with your team to reduce the need to type them over and over again or looking
for a reference.

You can create them at `Settings` -> `Query Snippets`.

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

