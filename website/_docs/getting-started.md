---
title: Getting Started
layout: docs-category
order: 1
toc: true
description: Getting started with Redash is easy and takes only a few minutes - connect a data source, write a query, add a visualization, create a dashboard and invite your colleagues!
---

To get the most out of Redash, we recommend following these 5 steps:
* Add a Datasource
* Write a Query
* Add a Visualization
* Create a Dashboard
* Invite Colleagues

You can browse the different sections in the Help Center for a more in depth review of Redash's functions and how-to's but this guide should get you started easily.

## Adding Datasources to Redash

To start using Redash, connect at least one [data source]({% link _docs/data-sources/index.md %}). You can add a new datasource from the quick link at the navigation bar:

{% doc_img /assets/images/docs/data_source_quick_link.png %}

Or via the Data Source tab in your admin settings:

{% doc_img /assets/images/docs/add_new_datasource.png %}

{% callout %}
If you're using the hosted Redash service, you need to allow access from the IP address 52.71.84.157 in your database firewall/security groups (unless it's publicly available).

We recommend using a user with read only permissions for the database ([BigQuery is an exception]({% link _docs/data-sources/bigquery.md %}#bigquery-permissions-and-roles)).

{% endcallout %}

## Writing Queries

Once you have at least one data source connected, give it a go and write a query in our comfy query editor.

Click "New Query" on the home page or under the Queries menu in the navigation bar. See the ["Writing Queries" page]({% link _docs/querying/writing_queries.md %}) for detailed instructions about writing queries or explore the [Querying]({% link _docs/querying/index.md %}) category for more details on our query editor.

{% doc_img /assets/images/docs/gifs/queries/add_new_query.gif %}

## Adding Visualizations

Query results (good old tables) are great but visualizations are even better to digest complex info. Redash supports [multiple types of visualizations]({% link _docs/visualizations/new_visualization.md %}#visualization-types) so you should find one that suits your needs (let us know if something is missing).

Click the "New Visualization" button just above the results or view more detailed instructions [here]({% link _docs/visualizations/new_visualization.md %}).

{% doc_img /assets/images/docs/gifs/visualization/new_viz.gif %}

## Creating Dashboards

Combine visualizations and text into thematic dashboards easily and share them in minutes. You can add a new dashboard via the Dashboard menu (bottom item will be New Dashabord) or via the home screen. For more details, [click here](../dashboards/dashboards.md).

{% doc_img /assets/images/docs/gifs/dashboards/dashboards.gif %}

## Invite Colleagues

Redash is better together.

This is only for admins - invite your team members to use Redash, to enjoy its collaborative nature.

Users can view others' queries for inspiration (or debugging ;)), fork them to create similar queries of their own, view and create dashboards and share with other in your team insights via Email, Slack or HipChat.

