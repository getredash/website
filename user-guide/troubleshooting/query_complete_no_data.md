---
description: Query complete but it returned no data - data source connected and there were no errors.
---

# Error Running Query : Query completed but it returned no data.

![](../assets/query_complete_no_data.png)

This message means that there are no results for the query you tried to run - the data source is properly connected and there are no issues with the connection or service at the moment.

While it's a harmless message, **if you have a schedule for a query with no results the scheduler will run is again and again**. This is not ​recommended for actions that yield no results (update, delete and similar) as they'll continue running endlessly in Redash.

If you have scheduled actions with no results, it's better to run them adhoc.
A bypass would be adding something like `;SELECT 1` at the end - however, still no very recommended.
