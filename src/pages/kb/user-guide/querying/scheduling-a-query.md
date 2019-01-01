---
category: querying
parent_category: user-guide
helpscout_url: https://help.redash.io/article/41-scheduling-a-query
title: Scheduling A Query
slug: scheduling-a-query
---

By default, your query won't have any scheduling but it's super easy to
adjust!

In the bottom left corner, you'll see the schedule area:

<img src="/assets/images/docs/gitbook/query-details.png" width="100%">

Clicking ' Never ' will open a picker for "every x" or at a specific time of
day. Note: The time you set the scheduling of queries is based on the timezone
of the computer you're using to set it (then it's translated to UTC).

<img src="/assets/images/docs/gitbook/schedule-modal.png" width="80%">

Once a schedule is set, your query will run automatically as instructed to
run.

#### Scheduled Queries with Parameters

When running queries with parameters on a schedule the scheduler will use the
default parameter values for the query execution.
