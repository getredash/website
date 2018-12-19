---
title: What's New
layout: whats-new
permalink: /whats-new/
---

> This page tracks updates to the [hosted version](https://app.redash.io/) of Redash. If you're using the open source version, you should follow the CHANGELOG.

## Coming Up

- Better dashboard parameters support
- Shared ownership of queries and dashboards (already available via a feature flag)

## Coming Later

- Parameters support in embeds
- Dynamic query snippets

## December 2018

- We have 5 new data sources: Apache Kylin, Databricks, IBM DB2, Druid and Rockset.
- There are fixes and improvements to 11 existing data sources (MySQL, Redshift, Postgres, MongoDB, Google BigQuery, Vertica, TreasureData, Presto, ClickHouse, Google Sheets and Google Analytics).
- The Query Results data source can now load cached results, just use the `cached_query_` prefix instead of `query_`.

![New Heatmap Visualization (pictured here: when people write their queries)](https://cdn-images-1.medium.com/max/1600/1*vrq7shvfqzJxy7viQzLwwQ.png)

- On the visualizations front we added a Heatmap visualization and updated the table and counter visualizations.
- Alerts got some fixes and a new destination: [PagerDuty](https://www.pagerduty.com/).
- You can now turn live autocomplete on and off in the query editor ([although we’re working to make it better](http://github.com/getredash/redash/issues/3092), so you wouldn’t want to).
- Fast queries will now load faster. 🏃‍♂️
- We improved the layout of visualizations and content on smaller screen sizes. 📱
- For those of you who like sharing, you can now enable the ability to share ownership of queries and dashboards and let others to edit them. Check the Settings page to enable this feature.