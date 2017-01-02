# Trigger Alert Based on a Dynamic Target Value

Alerts react to a static value - here is a bypass to make your alert react to a dynamic value by comparing 2 values.

To create an alert that uses another query's value you'll need to have 2 main queries - one for each condition you want to compare.

You'll need to create an additional query to trigger an alert when the # of active users last week is lower than the weekly average in the previous 3 weeks.
It's possible to have all 3 queries in the same query using `WITH` (sub-queries) and `CASE` (conditional clause) in PostgreSQL or equivalents, like the example below:

```sql
WITH
  active_users_last_week AS
  (SELECT count(DISTINCT user_id) AS active_1week
   FROM events
   WHERE created_at > CURRENT_DATE - 7),

-- We divided the 3 weeks count by 3 to get to the weekly average, this might not be precise enough in all cases, depends on your metrics (you might want to get an alert when last week's users count is higher than all weekly counts, etc.)

     active_users_last_3_weeks AS
  (SELECT count(DISTINCT user_id)/3 AS active_3weeks_avg
   FROM events
   WHERE created_at < CURRENT_DATE - 21)

SELECT active_1week,
       active_3weeks_avg,
       CASE
           WHEN active_users_last_week.active_1week < active_3weeks_avg THEN 1
           ELSE 0
       END
FROM active_users_last_week
JOIN active_users_last_3_weeks ON TRUE
```

Then, create an alert for that query and set the alert to trigger on value = 1.
Don't forget to schedule your query to run periodically, otherwise your alert won't get updated. Read more about alerts [here](alert-status-freq.md).
