---
category: querying
parent_category: user-guide
helpscout_url: https://help.redash.io/article/45-query-filters
title: Query Filters
slug: query-filters
---
Redash has filters for query results and visualizations! Thanks to filters,
you can restrain the result to a specific or multiple values. Filters are
enabled by following a naming convention for columns.

If you want to focus on a specific value, you'll need to alias your column to
`<columnName>::filter` . Here's an example:

    SELECT action AS "action::filter", COUNT (0) AS "actions count" FROM events GROUP BY action
    

{% callout %}
Note that you can use  `__filter` or `__multiFilter`, (double underscore
instead of double quotes) if your database doesn’t support :: in column names
(such as BigQuery).
{% endcallout %}

![](/assets/images/docs/gitbook/filter_example_action_create.png)

If you're interested in multi filters (meaning you can select multiple
values), you will need to alias your column to  `<columnName>::multi-filter`.
Here's an example:
    
    SELECT action AS "action::multi-filter", COUNT (0) AS "actions count" FROM events GROUP BY action
    
![](/assets/images/docs/gitbook/multifilter_example.png)

