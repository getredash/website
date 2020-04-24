---
category: querying
parent_category: user-guide
helpscout_url: https://help.redash.io/article/41-scheduling-a-query
title: How to schedule a query
slug: scheduling-a-query
order: 4
---

By default, your query won't have any scheduling. You can check if your query
has a schedule in the bottom left corner of the query screen.

<img src="/assets/images/docs/gitbook/refresh-settings.png">

Clicking **Never** will open a picker for "every x" or at a specific time of
day. Note: The time you set the scheduling of queries is based on the timezone
of the computer you're using to set it (then it's translated to UTC).

<img src="/assets/images/docs/gitbook/schedule-modal.png">

Your query will run automatically once a schedule is set.

{% callout warning %}

Scheduling queries that use parameters is not currently supported. You can use
the [Redash API]({% link _kb/user-guide/integrations-and-api/api.md %}) and a 
scheduling system like CRON instead.

{% endcallout %}
