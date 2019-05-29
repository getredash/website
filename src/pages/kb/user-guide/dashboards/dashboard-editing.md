---
category: dashboards
parent_category: user-guide
helpscout_url: https://help.redash.io/article/61-creating-a-dashboard
title: Creating and Editing Dashboards
slug: dashboard-editing
toc: true
---

## Creating a Dashboard

A dashboard lets you combine visualizations and text boxes that provide context with your data.

![](/assets/images/docs/gifs/dashboards/dashboards.gif)

You can create a new dashboard with the **Create** button from the main navigation menu:

![](/assets/images/docs/gitbook/create-dashboard.png)

After naming your dashboard, you can add widgets from existing query visualizations or by writing commentary with a text box. Start by clicking the **Add Widget** button.

![](/assets/images/docs/gitbook/add-widgets-to-dashboard.png)

Search existing queries or pick a recent one from the pre-populated list:

![](/assets/images/docs/gitbook/add-widgets-modal.png)

### Picking Visualizations

By default, query results are shown in a table. At the moment it's not possible to create a new visualization from the "Add Widget" menu, so you'll need to open the query and add the visualization there beforehand ([instructions]({% link _kb/user-guide/visualizations/visualizations-how-to.md %})).

### Adding Text Boxes

Add a text box to your dashboard using the `Text Box` tab on the **Add Widget** dialog. You can style the text boxes in your dashboards using [Markdown](https://daringfireball.net/projects/markdown/syntax).

{% callout info %}

You can include static images on your dashboards within your markdown-formatted text boxes. Just use markdown image syntax:`![]( <url for image > )`

{% endcallout %}

## Dashboard Filters

When queries have filters you need to apply filters at the dashboard level as well. Setting your dashboard filters flag will cause the filter to be applied to all Queries.

1\. Open dashboard settings:

<img src="/assets/images/docs/gitbook/edit-dashboard.png" width="60%">

2\. Check the "Use Dashboard Level Filters" checkbox:

![](/assets/images/docs/gitbook/dashboard-filter.png)

## Managing Dashboard Permissions

By default, dashboards can only be modified by the user who created them and members of the Admin group. But Redash includes experimental support to share edit permissions with non-Admin users. An Admin in your organization needs to enable it first. Open your organization settings and check the "Enable experimental multiple owners support"

![](/assets/images/docs/gitbook/experimental-owners-support.png)

Now the Dashboard options menu includes a `Manage Permissions` option. Clicking on it it will open a dialog where you can add other users as editors to your dashboard.

![](/assets/images/docs/gitbook/experimental-permissions-button.png)

Please note that currently the users you add won't receive a notification, so you will need to notify them manually.

## Dashboard Refresh

When you open a dashboard, Redash displays the most recent cached query result for each visualization. Dashboard data may grow stale as a result, depending on how often you run the underlying queries (either manually or with a scheduled query). However, you can force Redash to execute all of the underlying queries by clicking the Refresh button on the upper-right. 

If you want your dashboards to stay fresh but don't want to make scheduled queries, you can use Automatic Dashboard Refresh. When enabled, the underlying queries will be executed periodically as long as your browser is open.

![](/assets/images/docs/gitbook/dashboard-refresh.png)

{% callout info %}

Automatic Dashboard Refresh occurs as part of the Redash frontend application. Your refresh schedule is only in-effect as long as a logged-in user has the dashboard open in their browser. To guarantee that your queries are executed regularly (which is important for alerts), you should use a [Scheduled Query]({% link _kb/user-guide/querying/scheduling-a-query.md %}) instead.

{% endcallout %}

Importantly, when visitors access a public dashboard they will always see the cached query result. Refreshing a public dashboard does **not** execute the underlying queries. The only way that visitors to a public dashboard link will see refreshed data is if a logged-in Redash user executes the underlying queries or if a query schedule is in effect.
