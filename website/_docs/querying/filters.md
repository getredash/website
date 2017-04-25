---
title: Query Filters
category: querying
layout: docs-article
---

It is possible to have filters for query results and visualizations. Thanks to filters, you can restrain the result to a certain or multiple values. Filters are enabled by following a naming convention for columns.

If you want to focus only on a specific value, you will need to alias your column to `<columnName>::filter` . Here is an example:

```sql
SELECT action AS "action::filter", COUNT (0) AS "actions count"
FROM events
GROUP BY action
```

You can see this query and the rendered UI in [query #143 in the demo Redash](http://demo.redash.io/queries/143/source#table) (login with any Google account).

{% doc_img /assets/images/docs/filter_example_action_create.png %}
{% doc_img /assets/images/docs/filter_example_action_fork.png %}

If you are interested in multi filters (meaning that you can select multiple values), you will need to alias your column to `<columnName>::multi-filter`. Here is an example:

```sql
SELECT action AS "action::multi-filter", COUNT (0) AS "actions count"
FROM events
GROUP BY action
```

You can see this query and the rendered UI in [query #144 in the demo Redash](http://demo.redash.io/queries/144/source#table) (login with any Google account).

{% doc_img /assets/images/docs/multi_filter_example.png %}

{% callout %}
Note that you can use `__filter` or `__multiFilter`, (double underscore instead of double quotes) if your database doesn’t support :: in column names (such as BigQuery).
{% endcallout %}
