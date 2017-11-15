---
description: Query complete but it returned no data - data source connected and there were no errors.
---

# Error Running Query : Query completed but it returned no data.

![](../assets/query_complete_no_data.png)

This message means that there are no results for the query you tried to run - the data source is properly connected and there are no issues with the connection or service at the moment.

While it's a harmless message, **if you have a schedule for a query with no results the scheduler will consider this as an error which will delay the next iteration of this query**.  If you have scheduled queries with no results, it's better to run them adhoc. But if you still want to shcedule them, a bypass would be adding something like `;SELECT 1` at the end.
