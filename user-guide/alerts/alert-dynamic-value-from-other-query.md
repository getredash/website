# Creating an Alert with a Target Value from Another Query

To create an alert that uses another query's value you'll need to have 2 additional queries - one for each condition you want to compare. It's possible to have it in the same query as well if you prefer.

For example - you have a query that returns number of active users last week and another query that returns the active users in the last 3 weeks.

You'll need to create an additional query to trigger an alert when the # of active users last week is lower than previous 3 weeks. The target is dynamic so in order to make it work with an alert, write the following query that examines and compares the two values using the 'CASE' clause (this works for PostgreSQL):

```sql
SELECT
CASE
WHEN active_users_last_week < active_users_in_previous_3_weeks THEN 1 ELSE 0 END
FROM ...
```

Then, create an alert for that query and set the alert to trigger on value = 1.
