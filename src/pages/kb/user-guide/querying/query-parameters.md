---
category: querying
parent_category: user-guide
helpscout_url: https://help.redash.io/article/44-query-parameters
keywords:
  - variable
  - variables
  - template
title: Query Parameters
slug: query-parameters
toc: true
---

Once a query has been saved and published in Redash, it can be a hassle to `Edit Source` every time you need to update a field selection or filter. You can save time with Query Parameters which allow you to insert values at runtime without editing the base query. **Redash recognizes any string between double curly braces {% raw %} {{ }} {% endraw %} as a Query Parameter**.
  
{% raw %}
SELECT count(0)
FROM events
WHERE action = '{{action}}'
{% endraw %}

In the above example {%raw%}<code>{{action}}</code>{%endraw%} is the parameter definition. Once added and
recognized by Redash, you will see a parameter input box appear below the query input text box and above your results:

<img src="/assets/images/docs/gitbook/query-parameter.png" width="100%">

Once it's recognized by Redash, you can type any value into this text box and execute the query to get the results.

## Add A Parameter From The UI

You can insert a parameter into your query and immediately activate its settings pane by using the `Add Parameter` button or associated keyboard shortcut. The parameter will be inserted wherever the text caret appears in your query. If you find that you've inserted the parameter in the wrong part of the query, you can select the entire parameter (including the curly braces!) and cut/paste it wherever necessary.

{% callout %}

You can discover the key shortcut on your operating system by hovering your cursor above the `Add Parameter` button.

{% endcallout %}

### Parameter Settings

You can open a parameter's settings pane by clicking the cog icon on the left:

<img src="/assets/images/docs/gitbook/query-parameter-modal.png" width="100%">

- **Title** : by default the parameter title will be the same as the keyword in the query text. If you want to give it a friendlier name, you can change it here.
- **Type** : each parameter starts as a Text type. Supported types are Text, Number, Date, Date and Time, Date and Time (with Seconds), and Dropdown List.
- **Global** : by default when placed on a dashboard as a widget, queries with parameters will each have their own parameter input box(es). But when a query parameter is set to _Global_, all queries in a dashboard that share the same parameter name will use a combined parameter input box. For this to work, each query must have that parameter marked as _Global_.

{% callout danger %}

Query Parameters only work within Redash and are not supported in embeds or shared dashboards. Also, a Redash user must have [Full Access]({% link _kb/user-guide/users/permissions-groups.md  %}) permission to the data source to use Query Parameters.

{% endcallout %}

### Date Parameters

With many databases, you can use a string value to represent a date/time which is equivalent to a Text parameter in Redash. Redash's Date parameters are preferable because they have a special calendar interface to make choosing a date easy. If you know in advance, however, that your date parameters will always come from a short list, you can instead use the `Dropdown List` or `Query Based Dropdown List` type.

If you are using Query Parameters of type `Date`, you can set the parameter's default value to the current date and time when the query is run. While most databases include functions for querying with the current date/time (`GETDATE()` in TSQL or `CURRENT_DATE` in MySQL e.g.), this feature in Redash lets you run the **same query** either up-to-the-minute or further in the past.

#### Date Range Parameters

For queries that must select data between two dates, Redash provides three levels of Date / Time Range parameters. When chosen from the parameters settings screen, Redash places two complete parameters into your query: one for the start date and one for the end date. You will typically need to separate them in your query (into different `WHERE` clauses, e.g.). However, the parameter selection interface below the query window displays a unified widget to easily chose a date range without unnecessary clicking.

Date Range parameters behave exactly like Date parameters but are meant to save you time.

### Dropdown Lists

If you want to restrict the scope of possible parameter values when running a query, you can use Redash's `Dropdown List` parameter type. When selected from the parameter settings panel, a text box appears where you can enter your allowed values, each one separated by a new line. Dropdown lists are `Text` parameters under the hood, so if you want to use dates/datetimes in your dropdown, you should enter them in the format your data source requires.

#### Query Based Dropdown List

Dropdown lists can also be tied to the results of an existing query. Just click `Query Based Dropdown List` under **Type** in the settings panel. Search for your target query in the **Query to load dropdown values from** bar. Performance will degrade if your target query returns a large number of records.

If your target query returns more than one column, Redash uses the _first_ one. If your target query returns `name` and `value` columns, Redash populates the parameter selection widget with the `name` column but executes the query with the associated `value`.

For example, suppose this query:

{% raw %}
SELECT user_uuid as 'value', username as 'name'
FROM users
{% endraw %}

returned this data:

|value |name |
|1001 |John Smith |
|1002 |Jane Doe |
|1003 |Bobby Tables |

Redash's dropdown list widget would look like this:

<img src="/assets/images/docs/gitbook/dropdown-list-name-value.png" width="100%" alt="The widget shows John Smith, Jane Doe and Bobby Tables">

But when Redash executes the query, the value passed to the database would be 1001, 1002 or 1003.

### FAQ

**Can I reuse the same parameter multiple times in a single query?**

Sure! Just use the same identifier in the curly brackets. In this example:

{% raw %}

```sql
SELECT {{org_id}}, count(0)
FROM queries
WHERE org_id = {{org_id}}
```

We use the `{{org_id}}` parameter twice.
{% endraw %}

**Can I use multiple parameters in a single query?**

Of course, just use a unique name for each one. In this example:

{% raw %}

```sql
SELECT count(0)
FROM queries
WHERE org_id = {{org_id}} AND created_at > '{{start_date}}'
```

We use two parameters: `{{org_id}}` and `{{start_date}}`.
{% endraw %}
