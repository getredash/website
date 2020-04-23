---
category: querying
parent_category: data-sources
title: Databricks
slug: databricks
toc: false 
---

{% callout %}
This page documents the new Databricks connector introduced in Redash V9. It's currently available in the hosted version and in the upcoming beta release of V9.
{% endcallout %}

![Databricks Data Source Setup Screen](/assets/images/docs/databricks_setup_screen.png)

* `Name`: name for this connection.
* `Host` and `HTTP Path`: can be found in the JDBC/ODBC tab of your cluster configuration tab (under Advanced Options).
* `Access Token`: your personal access token. Can be generated from your User Settings page.
* `Schemas to Load Metadata For`: which schemas you want to load metadata for (table and column names). You can specify multiple schemas seperated by a comma.
