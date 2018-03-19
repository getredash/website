---
title: Troubleshooting
permalink: /help/faq/troubleshooting/
parent_category: faq
category: troubleshooting
layout: docs-category
order: 2
---

## 'Error: Worker Exited Prematurely: Signal 9 (sigkill)'

If you see the error message - "Error Running Query: Worker exited prematurely: signal 9 (SIGKILL)" this might indicate the query runner ran out
of memory - this usually happens with large result sets.

Try to run the query once more to make sure it wasn't some momentary thing.

## Queries With Large Data Sets Take A Long Time To Run

Sometimes a query with large results (over a few hundred thousand) can take a
long time to run.

Here are a few reasons this might happen:

1. **Your database** - Redash passes the query AS IS and it's your database's responsibility to handle your query 
2. **Memory of the query runner** (that's us) - there needs to be enough memory to handle the result set. In this case, if the result set is too large, the query might fail and you should see an error. 
3. **Network** - some really large queries might take a while to download. While downloading the results, the UI might still say that the query is being executed while in fact, it's just waiting for the data to reach your browser. 

Another aspect is that the browser needs to be able to render all this data -
this varies from visualization to visualization (tables are easier to render).

{% callout %}
IMPORTANT TO NOTE: The relevant size (for Redash) is the size of the results.
You can query a few rows or terabytes of data, it's all the same for us. It's
your database that needs to handle this, while we handle the results.
{% endcallout %}


## Status Page (for Hosted Redash)

The hosted platform status page can be found at: [https://status.redash.io/](https://status.redash.io/).