---
permalink: /help/user-guide/getting-started
layout: kb-category
order: 1
toc: true
description: Getting started with Redash is easy and takes only a few minutes - connect a data source, write a query, add a visualization, create a dashboard and invite your colleagues!
category: getting-started
parent_category: user-guide
helpscout_url: https://help.redash.io/article/32-getting-started
keywords:
- Add Data Source
- datasource
- datasources
- adding datasource
title: Getting Started
slug: getting-started
---

## Add A Data Source

The first thing you'll want to do is connect at least one [data source]({% link _kb/data-sources/supported-data-sources.md %}). You can add open the Data Sources management page by clickingo on the settings icon:

![](/assets/images/docs/settings_icon.png)

{% callout %}
If you’re using the Hosted Redash service and your datasource is behind a firewall, you'll need to allow access from the IP address 52.71.84.157 in your database firewall/Security Groups.
{% endcallout %}

{% callout %}
When possilble, we recommend using a user with *read-only permissions*.
{% endcallout %}

## Write A Query

Once you've connected at least one data source, give it a go and write a query: **click on "Create" in the navigation bar, and then choose "Query"**. See the [“Writing Queries” page]({% link _kb/user-guide/querying/writing-queries.md %}) for detailed instructions on how to write queries.

![](https://59005a708ebdd932a2ed5f47--redashio.netlify.com/assets/images/docs/gifs/queries/add_new_query.gif)

## Adding Visualizations

Query results (good old tables) are great, but visualizations are even better at helping us digest complex information. Redash supports [multiple types of
visualizations]({% link _kb/user-guide/visualizations/visualization-types.md %}) so you should find one that suits your needs (let us know if something is missing).

Click the “New Visualization” button just above the results to select the perfect visualization for your needs.  You can view more detailed instructions [here]({% link _kb/user-guide/visualizations/visualizations-how-to.md %}).

![](https://59005a708ebdd932a2ed5f47--redashio.netlify.com/assets/images/docs/gifs/visualization/new_viz.gif)

## Create A Dashboard

Easily combine visualizations and text into thematic dashboards and share them in minutes. You can add a new dashboard by clicking on "Create" in the navigation bar, and then choose "Dashboard". For more details, [click here]({% link _kb/user-guide/dashboards/dashboard-editing.md %}).

![](https://59005a708ebdd932a2ed5f47--redashio.netlify.com/assets/images/docs/gifs/dashboards/dashboards.gif)

## Invite Colleagues

Redash is better together.

Admins, to start enjoying the collaborative nature of Redash you'll want to
invite your team!

Users can view team member's queries for inspiration (or debugging ;)), fork
them to create similar queries of their own, view & create dashboards, and
share insights with others in your team via Email, Slack or HipChat.

Users can only be invited by admins - to invite a new user go to
Settings>Users and hit New User:

![](https://lh4.googleusercontent.com/oI5jelwLl2ke9qFzJyckCmBgKlmAiofRLUdR5uBBxzasGLsC-0-AC7TPvOGUnJZbWCVy3ESioGq4C5-7FDovR5m5tX364RrmA9riJ54rU1rMaMAM10supFsDlOvok0F4Ib2gcunJ)

Then, fill in their name and email. They'll get an invite via email and be
required to set up a Redash account.

Users can be added to existing groups - add users to it by typing their name:

![](https://lh4.googleusercontent.com/JeYKlKvqDS_r4q29WkWf-3URjixdwYnL4jz4QdHnbtdhN2FGEmPxNILR7qWd71wvImxcmJcTuBkjmwXhfzrBkF7Uh65y48E4t6ofacjT06d5a4zpLb52UJNAzfsfuCUJjMz52ioZ)

