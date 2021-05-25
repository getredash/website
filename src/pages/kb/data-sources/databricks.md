---
category: querying
parent_category: data-sources
title: Databricks
slug: databricks
toc: false
---

{% callout %} This page documents the new Databricks connector introduced in
Redash V9. It's currently available in the hosted version and in the upcoming
beta release of V9. {% endcallout %}

![Databricks Data Source Setup Screen](/assets/images/docs/databricks_setup_screen.png)

- `Name`: name for this connection.
- `Host` and `HTTP Path`: can be found in the JDBC/ODBC tab of your cluster
  configuration tab (under Advanced Options).
- `Access Token`: your personal access token. Can be generated from your User
  Settings page.
- `Schemas to Load Metadata For`: a comma-separated list of databases that
  Redash will display in the Schema Viewer on the Query Screen.

{% callout info %}

If you are not sure what to type into the `Schemas to Load Metadata For` field,
you can run the following sql on the query screen to see what options are
available:

```
SHOW DATABASES;
```

If you leave blank this field then no schema will be retrieved and the Schema
Viewer will appear empty. Even if it looks empty, however, you can still query
your Databricks instance.

{% endcallout %}
