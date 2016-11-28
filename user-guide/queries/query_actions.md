# Query Actions

## How to create a new query? {#how_to_create_a_query}

To start working on a new query, click "New Query" on the home page or under the Queries menu in the navigation bar.

![](../assets/gifs/queries/add_new_query.gif)

## How to duplicate queries? {#how_to_duplicate_a_query}

When viewing a query's source code, click the "Fork" button to duplicate the query to your account and edit it once it's yours.
For now only admins can edit all queries.

![](../assets/gifs/queries/fork_query.gif)

Soon we'll add an option to share edit permissions and view changes history for each query.

## How to schedule a query? {#how_to_schedule_a_query}

The default for a newly created query is no scheduling, but it's easy to adjust!

Next to the last update time, you'll see the schedule area:

![](../assets/shcedule_none.png)

Clicking the Never will open a picker for "every x" or at a specific time of day:

![](../assets/refresh_schedule.png)

Once a schedule is set, your query will run automatically when it was instructed to run.

## How to download the results of my query? {#how_to_download_a_dataset}

To manually download a dataset, click the "Download Dataset" button above the results and select the type of file:

![](../assets/download_dataset.png)

You can also automatically [export your results to CSV or JSON](how_to_export_query_results_to_csv_or_json.md)

## How to export query results to CSV or JSON? {#how_to_export_query_csv_json}

Query results can be automatically exported to CSV or JSON by using your API key. Your API key can be found when viewing your profile, from the top right menu in the navigation bar.

The format of the URL is the following: ```https://<redash_domain>/api/queries/<query_id>/results.(csv|json)?api_key=<your_api_key>. ```

Here is a working example: http://demo.redash.io/api/queries/63/results.json?api_key=874fcd93ce4b6ef87a9aad41c712bcd5d17cdc8f.

Using this URL you can easily import query results directly into Google Spreadsheets, using the importdata function. For example: `=importdata("http://demo.redash.io/api/queries/63/results.csv?api_key=874fcd93ce4b6ef87a9aad41c712bcd5d17cdc8f")`
