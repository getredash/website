# Link Query Results to Filtered Dashboards

The use case in this example is aimed to provide a smooth transition between dashboard1 that contains a query results widget (regular table) when one of the results columns has values that link to dashboard2 that uses the value name as a filter.

Let's say you have a query that shows a metric for all the clients you're working with and you want to see an in-depth analysis dashboard for that specific client when you see their name in your query results (their metrics are higher/lower than expected or any other reason that feels right for you).

What you'll need for this to work is:
1. Filtered dashboard
2. Clickable query results

## Filtered Dashboards

1. Create a few queries that have the same filter - for exmaple, a client's name (relevant column = client), read about filters [here](../queries/writing_queries.md#query_filters).
2. Combine your queries into a dashboard - for this tutorial we'll call it "Client in depth info". If you want this dashboard to include visualizations, [create them in the query view first](../visualization/visualization.md#create_new_viz)
3. Contact us to enable a [dashboard level filter](../dashboards/dashboards.md#dash_filters_flags) (if you're using the hosted version).

## Clickable Query Results

1. Add clickable links to your query, resulting in the full url or via an anchor tag - [see example here](redash-hacks.md#clickable-urls-in-table)
2. The URL needs to be something like this for a client named "JJinc": `https://app.redash.io/yourcompany/dashboard/client-in-depth-info?client::filter=JJinc`
In order to get that URL string, enter this in your query:
For a clickable full url:
`SELECT 'https://app.redash.io/yourcompany/dashboard/client-in-depth-info?client::filter=' || client || ' AS client ...`

For a clickable client's name:
`SELECT <a href="https://app.redash.io/yourcompany/dashboard/client-in-depth-info?client::filter=' || client || '">' || client || '</a>' as client ...``

Enjoy your filtered dashboards links!
