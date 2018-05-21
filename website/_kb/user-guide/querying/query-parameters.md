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
To make queries more dynamic without the need to change their source code, you
can use parameters. A parameter is being defined by adding a keyword
within curly braces inside your query text:
    
{% raw %}
    SELECT count(0)
    FROM events
    WHERE action = '{{action}}'
    

In the above example `{{action}}` is the parameter definition. Once added and
recognized by Redash, you will see parameter input box appear:
{% endraw %}

<img src="/assets/images/docs/gitbook/query-parameter.png" width="100%">

Now you can input any value in this text box and execute the query to get the
results.

### Parameter Settings

Clicking on the cog icon next to the parameter will open its settings window:

<img src="/assets/images/docs/gitbook/query-parameter-modal.png" width="100%">

{% raw %}
  * **Title** : by default the parameter title will be the same as the keyword in the query text. If you want to give it a friendlier name, you can change it here.
  * **Type** : by default, each parameter starts as a text type. You can change the type (and the UI presented for it) here. Supported types: Text, Number, Date, Date and Time, Date and Time (with Seconds), Dropdown List.
  * **Global** : by default when placed on a dashboard as a widget, each query will have its own parameter input box. But when set to _Global_ , it will have a single input box for all queries who share the same parameter name (and set to _Global_ ). 
    * When using Global Parameters you need to make sure that: 
      * The parameters have the same name (the part in {{}}) across the different queries.
      * All of them have the "Global" checkbox toggled.
{% endraw %}

{% callout danger %}
IMPORTANT: currently parameters only work within Redash and are not supported
in embeds or shared dashboards. Also, parameters require Full Access
permission to the data source (vs. View Only).
{% endcallout %}

### FAQ

**Can I reuse the same parameter multiple times in a single query?**

Sure! Just use the same identifier in the curly brackets. Example:

```sql
SELECT {{org_id}}, count(0)
FROM queries
WHERE org_id = {{org_id}}
```

**Can I use multiple parameters in a single query?**

Of course, just use a unique name for each one. Example:

```sql
SELECT count(0)
FROM queries
WHERE org_id = {{org_id}} AND created_at > '{{start_date}}'
```

