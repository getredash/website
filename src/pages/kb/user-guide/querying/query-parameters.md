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

Unless specific to a one-time project, most queries can be reused by changing a `WHERE` clause (or filter block in NoSQL) to suit the present need. Yet it can be a hassle to `Edit Source` every time you make a minor change. Query Parameters let you insert values at run time without editing your base query. The syntax is straightforward: Redash recognizes any string between double curly braces <code> {{ }} </code> as a Query Parameter.

{% raw %}
SELECT count(0)
FROM events
WHERE action = '{{ keyword }}'
{% endraw %}

In the above example <code>{{ keyword }}</code> is the Query Parameter. To change the value of the parameter, Redash places an input box above the results pane. The contents of this input box are passed to the database instead of the double curly braces whenever you execute the query.

<img src="/assets/images/docs/gitbook/query-parameter.png" width="100%">

<br> 

## Add A Parameter From The UI

You can insert a parameter into your query and immediately activate its settings pane by using the `Add Parameter` button or associated keyboard shortcut. The parameter will be inserted wherever the text caret appears in your query. If you find that you've inserted the parameter in the wrong part of the query, you can select the entire parameter (including the curly braces!) and cut/paste it wherever necessary.

{% callout %}

You can discover the key shortcut on your operating system by hovering your cursor above the `Add Parameter` button.

{% endcallout %}

### Parameter Settings

You can open a parameter's settings pane by clicking the cog icon on the left:

<img src="/assets/images/docs/gitbook/query-parameter-modalv6.png" width="100%">

- **Title** : by default the parameter title will be the same as the keyword in the query text. If you want to give it a friendlier name, you can change it here.
- **Type** : each parameter starts as a Text type. Supported types are Text, Number, Date, Date and Time, Date and Time (with Seconds), and Dropdown List.

{% callout info %}
Prior to Redash version 7, the parameter settings pane in the Query Editor included a `Global` tickbox, which notified Redash that you intended to use this parameter across multiple widgets in a dashboard. The `Global` tickbox has been replaced since version 6 with the new *Parameter Mapping on Dashboards* functionality described below.

{% endcallout %}

{% callout danger %}

Query Parameters only work within Redash and are not supported in embeds or shared dashboards. Also, a Redash user must have [Full Access]({% link _kb/user-guide/users/permissions-groups.md %}) permission to the data source to use Query Parameters.

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

| value | name         |
| ----- | ------------ |
| 1001  | John Smith   |
| 1002  | Jane Doe     |
| 1003  | Bobby Tables |

Redash's dropdown list widget would look like this:

<img src="/assets/images/docs/gitbook/dropdown-list-name-value.png" width="100%" alt="The widget shows John Smith, Jane Doe and Bobby Tables">

But when Redash executes the query, the value passed to the database would be 1001, 1002 or 1003.

### FAQ

**Can I reuse the same parameter multiple times in a single query?**

Sure! Just use the same identifier in the curly brackets. In this example:

```sql
SELECT {{org_id}}, count(0)
FROM queries
WHERE org_id = {{org_id}}
```

We use the `{{org_id}}` parameter twice.

**Can I use multiple parameters in a single query?**

Of course, just use a unique name for each one. In this example:

```sql
SELECT count(0)
FROM queries
WHERE org_id = {{org_id}} AND created_at > '{{start_date}}'
```

We use two parameters: `{{org_id}}` and `{{start_date}}`.

**Can I use parameters in embedded visualizations?**

Yes, with one exception. If a query uses a Text type parameter, it cannot be embedded because Text parameters are not safe from SQL injection. All other types of query parameters can be safely embedded in visualizations.

**Can I use parameters in shared dashboards?**

No. Dashboards that use query parameters can only be viewed by logged-in Redash users.

{% callout info %}

Prior to Version 8 of Redash, parameters were not allowed in embedded visualizations. In a future version, all types of parameters will be allowed on publicly shared dashboards and visualizations. Our hosted platform always runs the latest available version of the app.

{% endcallout %}

## Parameter Mapping on Dashboards

{% callout %}

This is currently available on [Hosted Redash](https://app.redash.io/) and is part of the next Open Source release (v7.0).

{% endcallout %}

Query Parameters can also be powerfully controlled within dashboards. You can link together parameters on different widgets, set static parameter values, or choose values individually for each widget.

You select your desired parameter mapping when adding dashboard widgets that depend on a parameter value. Each parameter in the underlying query will appear in the **Parameters** list.

<img src="/assets/images/docs/gitbook/dashboard_parameter_mapping.png" width="100%">

{% callout info %}
You can also access the parameter mapping interface by clicking the three dots on the top right of a dashboard widget, then clicking `Edit Parameters`.
{% endcallout %}

+ **Title** is the display name for your parameter and will appear beside the value selector on your dashboard. It defaults to the parameter keyword (see next bullet). Edit it by clicking the pencil glyph. Note that a titles are not displayed for static dashboard parameters because the value selector is hidden. If you select `Static value` as your Value Source then the Title field will be grayed out.

+ **Keyword** is the string literal for this parameter in the underlying query. This is useful for debugging if your dashboard does not return expected results.

+ **Default Value** is what Redash will use if no other value is specified.

+ **Value Source** is where you choose your preferred mapping. Click the pencil glyph to open the mapper settings.

### Value Source Options

+ **New dashboard parameter:** Dashboard parameters allow you to set a parameter value in one place on your dashboard and map it to multiple visualizations. Use this option to create a new dashboard-level parameter.

+ **Existing dashboard parameter:** If you have already set up a dashboard-level parameter, use this option to map it to a specific query parameter. You will need to specify which pre-existing dashboard parameter will be mapped.

+ **Widget parameter:** This option will display a value selector inside your dashboard widget. This is useful for one-off parameters that are not shared between widgets.

+ **Static value:** Selecting this option will let you choose a static value for this widget, regardless of the values used on other widgets. Statically mapped parameter values do not display a value selector anywhere on the dashboard which is more compact. This lets you take advantage of the flexibility of Query Parameters without cluttering the user interface on a dashboard when certain parameters are not expected to change frequently.
