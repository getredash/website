# Dashboard Filters (flags)

If you’ve got queries that have some filters and you want to apply filters at the dashboard level (that apply to all queries), you need to set a flag.

You can do it through the admin interface at /admin/dashboard or manually by setting the column dashboard_filters_enabled of the table dashboards to TRUE in the Redash database.

Please notice this feature is supported from version 0.11 (it was introduced a few versions before but had some issues).
