---
description: Large data sets take a long time to run - query handling , query runner memory or network issues.
---

# Queries with Large Data Sets Take a Long Time to Run

Sometimes queries with large results (over a few hundred thousand) can take a long time to run.

This can be caused by a few reasons:
1.  **Your database** - Redash passes the query as is and its your database's responsibility to be able to handle your query
2. **Memory of the query runner (that's us)** - there needs to be enough memory to handle the result set. In this case if the result set is too large, the query might fail and you should see an error.
3. **Network** - some really large queries might take a while to download. While downloading the results, the UI might still say that the query is being executed while in fact it just waits for the data to reach your browser.

Additional aspect is that the browser needs to be able to render all this data - this varies from visualization to visualization (tables are easier to render).

It's important to note that the relevant size (for Redash) is the size of the results.
You can query a few rows or terabytes of data, it's all the same for Redash. It's your database that needs to handle this, while we handle only the results.
