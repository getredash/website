---
title: Scheduling a Query (Auto Refresh)
layout: docs-article
category: querying
order: 3
---

The default for a newly created query is no scheduling, meaning that if you want to see new results you need to manually execute it. If needed, you can schedule query refresh, to make sure you get recent results every time you view it (directly or via a dashboard).

Next to the last update time, you'll see the schedule link:

{% doc_img /assets/images/docs/shcedule_none.png %}

Clicking the `Never` link will open a picker for "every x" or at a specific time of day:

{% doc_img /assets/images/docs/refresh_schedule.png %}

Once a schedule is set, your query will run automatically when it was instructed to run.

{% callout warning %}
Please note that scheduling queries that contain parameters will not work - queries with parameters need to get a parameter in order to run every time, the scheduler will try to run them with the missing value and result in an error.
{% endcallout %}

