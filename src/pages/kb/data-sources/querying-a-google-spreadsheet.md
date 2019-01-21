---
category: querying
parent_category: data-sources
helpscout_url: https://help.redash.io/article/114-querying-a-google-spreadsheet
title: Querying a Google Spreadsheet
slug: google-spreadsheet
---
## Setup

To add a Google Sheets data source to Redash you first need to create a [Service Account](https://cloud.google.com/iam/docs/understanding-service-accounts) with Google. Service Accounts allow third-party applications like Redash to read data from your Google apps without needing to log-in each time. During Service Account setup you will be provided with a JSON key file. You need to upload this file to Redash when setting up the data source.

### How to create a Google Service Account?

1. Open the [API Credentials Page](https://console.cloud.google.com/apis/credentials). If prompted, select or create a project. 
2. Click the "Create credentials" button. On the dropdown that appears, chose "Service account key".
3. On the following page, use the dropdown to select the project you elected in step 1. For role select `Project > Viewer` from the tree menu.
4. Under key type, select JSON and hit "Create"

A `.json` file will then download to your computer. In Redash under Settings, add a new data source for `GoogleSpreadsheet`. In the modal that appears, name this connection and upload the `.json` file you downloaded from the Google credentials console. 

## Querying

Once you have setup the data source, you can load spreadsheets into Redash. To do so, you need to share the spreadsheet with the Service Account's email address. This can be found in the  [Google Sheets API credentials page](https://console.cloud.google.com/apis/api/sheets.googleapis.com/credentials) or in the JSON file under the `"client_email"` key. Sharing is done like you would share with any regular user.

After the spreadsheet is shared with your Service Account email address, create a new query in Redash and select your Google Sheets data source. In the query editor text box, type your desired Spreadsheet ID. You can optionally select a specific tab of your spreadsheet by adding its tab position as a zero-indexed number separated by a vertical bar or pipe symbol.

For example:

	1DFuuOMFzNoFQ5EJ2JE2zB79-0uR5zVKvc0EikmvnDgk|0

to load the first sheet or

	1DFuuOMFzNoFQ5EJ2JE2zB79-0uR5zVKvc0EikmvnDgk|1

to load the second. That's the whole query. Leave out any SQL at this point.

{% callout info %}
**What is the Spreadsheet ID?**

You can find your Spreadsheet ID in its URL. So for example, if the spreadsheet URL is:


	https://docs.google.com/spreadsheets/d/
	b94d27b9934d3e08a52e52d7da7dabfac484efe37


Then the ID will be:

	b94d27b9934d3e08a52e52d7da7dabfac484efe37

{% endcallout %}

{% callout warning %}

This procedure might fail if your organization has restrictions on sharing spreadsheets with external accounts. To improve outcomes, be sure to create the Service Account with a Google account from the same organization. 

{% endcallout %}

### Filtering The Data

When you connect a Google Sheet with Redash, we load it in full. You can generate visualizations from the data and add it to your dashboards. If you want to filter some data or aggregate it beyond what a pivot table can accomplish, you can use one of the following methods:

  * Use the ["Query Results" data source]({% link _kb/user-guide/querying/query-results-data-source.md %}), which allows you to run queries on top of existing queries.
  * Use [Google BigQuery's integration with Google Drive](https://cloud.google.com/blog/big-data/2016/05/bigquery-integrates-with-google-drive) to create a Google BigQuery external table based on the Google Spreadsheet.

