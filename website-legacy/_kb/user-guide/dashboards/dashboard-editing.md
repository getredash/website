---
category: dashboards
parent_category: user-guide
helpscout_url: https://help.redash.io/article/61-creating-a-dashboard
title: Creating and Editing Dashboards
slug: creating-a-dashboard
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

## Dashboard Filters

When queries have filters you need to apply filters at the dashboard level as well. Setting your dashboard filters flag will cause the filter to be applied to all Queries.

1\. Open dashboard settings:

<img src="/assets/images/docs/gitbook/edit-dashboard.png" width="60%">

2\. Check the "Use Dashboard Level Filters" checkbox:

![](/assets/images/docs/gitbook/dashboard-filter.png)
