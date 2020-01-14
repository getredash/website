---
category: visualizations
parent_category: user-guide
title: Chart Visualizations
toc: true
slug: chart-visualizations
# IMG BASE URL /assets/images/docs/gitbook/
---

Eight common visualization types are bundled into Redash's default visualization called **Chart**. You can seamlessly switch between different types because they share the same visualization engine. If you're not sure which to use at first then go ahead and experiment! Change their grouping, axes, stacking, and colors to see which combination best conveys your meaning. 

`video: /assets/images/docs/gifs/visualization/chart-examples.mp4`


{% callout info %}

This animation shows all eight chart types powered by the same underlying query result. The Chart visualization makes it easy to try different looks. Go ahead and experiment to see which one best conveys your meaning.

{% endcallout %}

{% callout info %}

It can be useful to include many columns when writing queries in Redash. Once you have the query configured to make the right chart, you can safely remove columns not used by the visualization. This can improve Redash's performance for larger queries since less information is sent to the browser.

{% endcallout %}

# Chart Types

To get started configuring a chart visualization you can pick from eight different chart types. Switching between types is seamless. So if you're not sure which to use then go ahead and experiment! Try them all to see which one best conveys your meaning.

![](/assets/images/docs/gitbook/chart-viz-types.png)



All chart visualizations need an **X Column** of distinct values and at least one **Y Column** of values. These values are displayed along the horizontal and vertical axes, respectively. A [Group By] column is also supported for all eight types. [Stacking] and [Errors] are available for [Line], [Bar], and [Area] charts. 

<!-- Here put a picture of the X and Y column selectors!!! -->

## Line

Line charts are almost exclusively used to present change in one or more metrics over time.

## Bar

Bar charts can be used to present change in metrics over time or to show proportionality, like a pie chart.

Bar charts can be combined with [Stacking] with great effect.

## Area

Area charts are often used to show sales funnel changes over time. They are frequently combined with [Stacking] to grant a better picture of several metrics over time.

## Pie

Pie charts are designed to show proportionality between metrics. They are _not_ meant for conveying time series data.

## Scatter


One reason to use scatter plots is for data with many groups of data points. Under the covers, Scatter plots are just like [Line] plots, but without the connecting lines. This is useful for presenting grouped data where some groups appear just once. Use of a line chart for these groups would conceal the singleton values because the line chart can only show data where two or more points are present. A scatter graph is more precise but less useful for time series data.

## Bubble

A Bubble chart is a [Scatter] graph where the size of the point marker reflects a relevant metric.

## Heatmap

## Box Plot

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

{% callout info %}

The [Error] column does not aggregate when you stack records. An error bar will be shown for each trace.

{% endcallout %}


# Common Errors

For these errors, lets assume we sales data broken out by `Day`, `Category`, and `Amount`. The data looks like this:



## Multiple Records per X-axis value

You commonly want to see sales data with another metric reflected, like sales category. If your SQL returns multiple records for the same X-axis value, the chart will try to draw all the data points. You can resolve this by filtering out the doubled entries on the X-axis. Or revise your query to include a field that can be used for the [Group By] Setting.

![](error_double_x_entries.png)


<!-- Scratch stuff -->
* **Group By**: Is built to generate multiple traces along the same X and Y axis.
* **Stacking**: 
* **Errors Column** Displays a margin of error for each record. This is a numeric value that will be charted around a given Y coordinate. 

If you want to show more than one line on the same X + Y axis combination, then you need to group your data.

You _can_ use Error bars on a bar chart, but they are generally reserved for Line Charts.
## Line

The simples query result you can use to make a line chart looks like this:

| stage | value |
| ----- | ----- |
| a     | 2     |
| b     | 1     |
| c     | 3     |



[Group By]: #group-by
[Errors]: #error
[Stacking]: #stacking

[Line]: #line
[Bar]: #bar
[Area]: #area

[Stacked Bar Charts]: https://en.wikipedia.org/wiki/Bar_chart#Grouped_and_stacked