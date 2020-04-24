---
category: querying
parent_category: user-guide
helpscout_url: https://help.redash.io/article/41-scheduling-a-query
title: How to schedule a query
slug: scheduling-a-query
order: 4
---

You can use scheduled query executions to keep your dashboards updated or to power routine Alerts. By default, your queries will not have a schedule. But this is easy to adjust. In the bottom left corner of the query editor you'll see the schedule area:

<img src="/assets/images/docs/gitbook/refresh-settings.png">

Clicking **Never** will open a picker with allowed schedule intervals.

<img src="/assets/images/docs/gitbook/schedule-modal.png">


Your query will run automatically once a schedule is set.

{% callout info %}

When you schedule queries to run
at a certain time-of-day, Redash converts your selection to UTC using your computer's local timezone. 
That means if you want a query to run at a certain time in UTC, you need to adjust the picker by your local offset.

For example, if you want a query to execute at `00:00` UTC each day but your current timezone is CDT (UTC-5), you should enter `19:00` into the scheduler. The UTC value is displayed to the right of your selection to help
confirm your math.

{% endcallout %}

{% callout warning %}

Scheduling queries that use parameters is not currently supported. You can use
the [Redash API]({% link _kb/user-guide/integrations-and-api/api.md %}) and a 
scheduling system like CRON instead.

{% endcallout %}
