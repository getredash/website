---
category: querying
parent_category: user-guide
helpscout_url: https://help.redash.io/article/41-scheduling-a-query
title: Scheduling A Query
slug: scheduling-a-query
---

You can use scheduled query executions to keep your public dashboards updated or to power routine Alerts. By default, your queries will not have a schedule. But this is easy to adjust. In the bottom left corner of the query editor you'll see the schedule area:

<img src="/assets/images/docs/gitbook/query-details.png" width="100%">

Clicking `Never` will open a picker with allowed schedule intervals. Note: The time you set the scheduling of queries is based on the timezone of the computer you're using to set it (then it's translated to UTC).

<img src="/assets/images/docs/gitbook/schedule-modal.png" width="80%">

Once a schedule is set, your query will run automatically.

{% callout info %}

We _strongly recommend_ that you configure schedules for any queries tied to [Alerts]({% link _kb/user-guide/alerts/setting-up-an-alert.md %}). Otherwise, you will not receive alert notifications until a query is manually executed in the UI.

{% endcallout %}

## Scheduled Queries with Parameters

When running queries with parameters on a schedule the scheduler will use the default parameter values for the query execution.

## Failed Scheduled Query Reports

If your scheduled query executions fail for some reason, Redash will notify your organizations admin group by email.

<img src="/assets/images/docs/gitbook/failure-report.png">
