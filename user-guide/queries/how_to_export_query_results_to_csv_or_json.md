# How to export query results to CSV or JSON?

Query results can be automatically exported to CSV or JSON by using your API key. Your API key can be found when viewing your profile, from the top right menu in the navigation bar.

The format of the URL is the following: ```https://<redash_domain>/api/queries/<query_id>/results.(csv|json)?api_key=<your_api_key>. ```

Here is a working example: http://demo.redash.io/api/queries/63/results.json?api_key=874fcd93ce4b6ef87a9aad41c712bcd5d17cdc8f.

Using this URL you can easily import query results directly into Google Spreadsheets, using the importdata function. For example: =importdata("...").