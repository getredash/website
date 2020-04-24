---
category: querying
parent_category: data-sources
title: Microsoft Azure SQL Database & Synapse
slug: azure-sql-database
---

Redash has two SQL Server connectors which use different python libraries: **Microsoft SQL Server** (`pymssql`) and **Microsoft SQL Server (ODBC)** (`pyodbc`). Either connector will work with Azure SQL Database. The ODBC connector is required to connect with Synapse.

![](/assets/images/docs/gitbook/mssql-ds-choice.png)

When entering the username you need to make sure it's of the form: `user@server-name`. Where `server-name` is your server address without the `.database-windows.net` suffix.

Check out [Microsoft's documentation](https://docs.microsoft.com/en-us/azure/synapse-analytics/sql-data-warehouse/create-data-warehouse-portal#create-a-server-level-firewall-rule) for instructions to whitelist your Redash IP address when connecting to Synapse.
