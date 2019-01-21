---
category: setup
parent_category: data-sources
title: BigQuery Setup
slug: bigquery
toc: true
---

### Set Up The Data Source

From all the settings the mandatory ones are the JSON Key File and the Project
ID.

![](/assets/images/docs/gitbook/bigquery_mandatories.PNG)

### Create a Service Account

You'll need to create a service account from your Google Cloud Console and
assign it permissions to access BigQuery.

1. Open the [Service accounts page](https://console.developers.google.com/permissions/serviceaccounts). If prompted, select a project. 
2. Click Create service account. 
3. In the Create service account window, type a name for the service account, and select Furnish a new private key. When prompted, select JSON key file type. Then click CREATE.

Don't forget to select the JSON type when generating the key file.  Later,
you'll also use it when setting up the data source.

### BigQuery Permissions and Roles

If you’re using the predefined roles in BigQuery, you need to use the admin
role since it's the only one that can create queries and list tables.

Want to create your own role? The permissions you need to assign are:

  * bigquery.jobs.create
  * bigquery.jobs.get
  * bigquery.jobs.update
  * bigquery.datasets.list
  * bigquery.datasets.get
  * bigquery.tables.list
  * bigquery.tables.get
  * bigquery.tables.getData
