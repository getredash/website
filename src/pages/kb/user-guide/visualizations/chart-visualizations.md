---
category: visualizations
parent_category: user-guide
title: Chart Visualizations
toc: true
slug: chart-visualizations
---

/assets/images/docs/gitbook/

The most common visualizations in Redash are bundled together in Redash under the **Chart** visualization type. This is the default type when you add a new visualization for a query.

This document will discuss how your data should come from the database in order to visualize.

# Setup

To use the *Chart* visualization type, your query must return at least two columns. The simplest *Chart* can be made from just two rows of data.

![](/assets/images/docs/gifs/visualization/basic_chart_ex.gif)

# Chart Types

Most chart types have settings in common. So you can switch between different chart types to see which kind conveys your information best. The Line, Area, and Bar charts especially share a few common parameters.

* **X Column**: Will be displayed along the horizontal axis.
* **Y Columns**: Will be displayed along the vertical axis 
* **Group By**: Is built to generate multiple traces along the same X and Y axis.
* **Stacking**: 
* **Errors Column** Displays a margin of error for each record. This is a numeric value that will be charted around a given Y coordinate. 

{% callout info %}

The [Error] column does not aggregate when you stack records. An error bar will be shown for each trace.

{% endcallout %}


If you want to show more than one series of data on the same X + Y axis combination, then you need to group your data.

You _can_ use Error bars on a bar chart, but they are generally reserved for Line Charts.
## Line

The simples query result you can use to make a line chart looks like this:

| stage | value |
| ----- | ----- |
| a     | 2     |
| b     | 1     |
| c     | 3     |




## Bar
## Area
## Pie


# Tabs

## General
## X Axis
## Y Axis
## Series
## Colors
## Data Labels 

# Group By

Group by lets you generate multiple traces against the same X and Y axes. To use it, your query result must return at least three columns: an x value, y value, and a group value. As shown in the below example, the grouping column is used to sort `(x,y)` pairs together.

Group By is a shortcut for making charts that share the same X axis and multiple Y coordinates. The following two data sets are identical.

{% callout info %}

Use the **Group By** column for melted data sets. Use multiple Y-columns for pivoted data sets

{% endcallout %}

# Stacking

This setting determines whether or not to aggregate all the Y-axis values for a given X-axis value. The name name is borrowed from [Stacked Bar Charts], but it can be useful with area charts as well. Stacking is only available for Line, Bar, and Area charts. It is almost exclusively used in Bar or Area charts, however.

{% callout info %}

Stacking and [Group-By] are related. You won't stack data unless you have also grouped it.

{% endcallout %}


# Common Errors

For these errors, lets assume we sales data broken out by `Day`, `Category`, and `Amount`. The data looks like this:



## Multiple Records per X-axis value

You commonly want to see sales data with another metric reflected, like sales category. If your SQL returns multiple records for the same X-axis value, the chart will try to draw all the data points. You can resolve this by filtering out the doubled entries on the X-axis. Or revise your query to include a field that can be used for the [Group-By] Setting.

![](error_double_x_entries.png)

[Group-By]: #group-by
[Error]: #error

[Stacked Bar Charts]: https://en.wikipedia.org/wiki/Bar_chart#Grouped_and_stacked