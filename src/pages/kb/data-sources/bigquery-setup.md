---
category: setup
parent_category: data-sources
title: BigQuery Setup
slug: bigquery
toc: true
---

### Data Source Setup Screen

When setting up the BigQuery data source, only the **Project ID** and **JSON Key File** are required. If you don't have a JSON key file then you will need to create a new service account (details below).

![](/assets/images/docs/gitbook/bigquery_mandatories.PNG)

+ The **Load Schema** tickbox lets you disable Redash from fetching your BigQuery schema. You may want to do this if your BigQuery instance contains more than \~2500 tokens. Application performance can deteriorate above this threshold because the schema is loaded into your browser on the Query Editor screen.

+ Since BigQuery 2.0, you can use either BigQuery SQL syntax (now called Legacy SQL) or [Standard SQL Syntax](https://cloud.google.com/bigquery/docs/reference/standard-sql/migrating-from-legacy-sql). Redash supports both (Legacy SQL is the default) but this preference applies at the Data Source-level by toggling the **Use Standard SQL** box. Your selection here is passed to BigQuery along with your query text. If some of your queries use Legacy SQL and others use Standard SQL, you can create two data sources.

+ If you enter a **Scanned Data Limit**, Redash will perform a dry-run when you execute your query to check how much data will be processed. And if it is larger than the limit you specify, an error will appear.

+ The **Maximum Billing Tier** is an integer number that Redash can pass along to BigQuery via their API. See [their documentation](https://cloud.google.com/bigquery/docs/reference/rest/v2/JobConfiguration)  for more info.

### How to create a Google Service Account?

1. Open the [API Credentials Page](https://console.cloud.google.com/apis/credentials). If prompted, select or create a project. 
2. Click the "Create credentials" button. On the dropdown that appears, chose "Service account key".
3. On the following page, use the dropdown to select the project you elected in step 1. For role select `BigQuery Admin` from the tree menu.
4. Under key type, select JSON and hit "Create"

A `.json` file will then download to your computer. Use this when setting up your Data Source.

### BigQuery Permissions and Roles

If you’re using the predefined roles in BigQuery, you need to use the admin
role since it's the only one that can create queries and list tables.

Want to create your own role? The permissions you need to assign are:

  * bigquery.jobs.create
  * bigquery.jobs.get
  * bigquery.jobs.update
  * bigquery.datasets.get
  * bigquery.tables.list
  * bigquery.tables.get
  * bigquery.tables.getData
