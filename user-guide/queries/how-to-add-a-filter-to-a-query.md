# How to add a filter to a query?

It is possible to have filters for query results and visualizations. Thanks to filters, you can restrain the result to a certain or multiple values. Filters are enabled by following a naming convention for columns.

If you want to focus only on a specific value, you will need to alias your column to `<columnName>::filter` . Here is an example:

`select action as "action::filter", count (0) as "actions count"
from events
group by action`

You can see this query and the rendered UI here: http://demo.redash.io/queries/143/source#table

![](../assets/filter_example_action_create.png)

![](../assets/filter_example_action_fork.png)

If you are interested in multi filters (meaning that you can select multiple values), you will need to alias your column to `<columnName>::multi-filter`. Here is an example:

`select action as "action::multi-filter", count (0) as "actions count"
from events
group by action`

You can see this query and the rendered UI here: [http://demo.redash.io/queries/144/source#table](http://demo.redash.io/queries/143/source#table)

![](../assets/multifilter_example.png)

Note that you can use `__filter` or `__multiFilter`, (double underscore instead of double quotes) if your database doesn’t support :: in column names (such as BigQuery).
