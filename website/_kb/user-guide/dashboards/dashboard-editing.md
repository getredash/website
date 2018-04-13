---
category: dashboards
parent_category: user-guide
helpscout_url: https://help.redash.io/article/61-creating-a-dashboard
title: Creating and Editing Dashboards
slug: creating-a-dashboard
toc: true
---

## Creating a Dashbaord

A dashboard is defined as a combination of visualizations and text boxes. Want
to know more? Keep reading!

![](https://s3.amazonaws.com/helpscout.net/docs/assets/5877897f90336009736c5d9b/images/5a4e89222c7d3a194367dd0d/file-uINxRd8tXD.gif)

You can create a new dashboard from the navigation:

![](/assets/images/docs/gitbook/create-dashboard.png)

After naming your dashboard, you can start adding widgets to it from existing
query visualizations or create different commentary texts.

![](/assets/images/docs/gitbook/add-widgets-to-dashboard.png)

Search existing queries or pick a recent one from the pre-populated list:

![](/assets/images/docs/gitbook/add-widgets-modal.png)

## Adding Visualizations

Dashboards aggregate multiple query datasets, visualizations, and texts into
one handy view.

To add widgets to a dashboard, select the query you want to feature and the
relevant visualization. By default, query results are shown in a table.

At the moment it's not possible to create a new visualization from the "Add
Widget" menu, so you'll need to open the query and add the visualization there
beforehand ([instructions]({% link _kb/user-guide/visualizations/visualizations-how-to.md %})).

## Dashboard Filters

When queries have filters you need to apply filters at the dashboard level as
well. Setting your dashboard filters flag will cause the filter to be applied
to all Queries.

1\. Open dashboard settings:

<img src="/assets/images/docs/gitbook/edit-dashboard.png" width="60%">

2\. Check the "Use Dashboard Level Filters" checkbox:

![](/assets/images/docs/gitbook/dashboard-filter.png)
