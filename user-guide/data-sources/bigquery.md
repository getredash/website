# BigQuery Setup

From your Google Cloud Console, you need to create a service account and assign it permissions to access BigQuery. See details on creating a service account here: https://developers.google.com/identity/protocols/OAuth2ServiceAccount#creatinganaccount

> #### primary::
>
> Note that when generating the key file, select the JSON type and later use it when setting > up the data source.

From all the settings the mandatory ones are the key file and the Project ID.

## BigQuery Permissions and Roles
If you're using the predefined roles in BigQuery you need to use the admin role, as this is the only role that can create queries and list tables.

If you want to create your own role, the permissions you need to assign are:
bigquery.jobs.create
bigquery.jobs.get
bigquery.jobs.update
bigquery.datasets.list
bigquery.datasets.get
bigquery.tables.list
bigquery.tables.get
bigquery.tables.getData
