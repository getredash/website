---
title: Query Parameters
category: querying
layout: docs-article
---

You can add parameters to your query to make it easier to edit outside the source code.

Here is a small example the demonstrates adding a date picker to a query/chart:

{% raw %}
```sql
SELECT DATE, COUNT(*)
FROM mytable
WHERE DATE = "{{date}}"
```
{% endraw %}

{% raw %}
The `{{date}}` part is the parameter. It can be called whatever you want.
{% endraw %}

After you add it, you will see an input field show up. Next to it there is a gear icon - when clicked it opens an options screen where you can set the parameter type and a friendly name.

This is how an "action" parameter looks:

{% doc_img /assets/images/docs/parameter_example.png %}

**Please note that you'll need to re-execute the query with the newly set parameter to get the desired results.**

{% callout warning %}
While parameters work in dashboards, they won't work when embedding visualizations or dashboards outside of Redash.
{% endcallout %}
