---
category: visualizations
parent_category: user-guide
title: Chart Visualizations
toc: true
slug: chart-visualizations
# IMG BASE URL /assets/images/docs/gitbook/
---

Redash bundles together charts that use X & Y axes into the **Chart** visualization type, which can take eight different forms. Because the forms are similar, you can often switch seamlessly between them to find the one that best conveys your meaning. In the animation below, all eight charts were built from the same SQL query result:

`video: /assets/images/docs/gifs/visualization/chart-examples.mp4`

# Setup

Your query should return at least two columns before you make a **Chart** visualization: one column of values for the **X axis** and  one column of values for the **Y Axis**. Your query can also return values for trace [grouping], displaying [error bars], and bubble sizes.

The charts in the above animation were all produced from the following tabular result:

![](/assets/images/docs/gitbook/animation-table-data.png)

It's easy to configure a visualization when your query returns the right columns. Start by setting your X and Y axis values. The visualization preview updates instantly. You don't need to save the visualization to see how a change affects its appearance. Tabs along the top of the Visualization Settings screen give you fine-grained control over the chart.

Use the **X Axis** and **Y Axis** tabs to modify the axis ranges and labels.

The **Series** tab is powerful. It lets you change your data aliases, z-index behavior, assign traces between the left- and right- Y axes. It also lets you combine different trace forms on one chart like in the chart below.

![](/assets/images/docs/gitbook/multi-form-chart.png)

**Colors** gives you a color picker for changing the appearance of the traces on your charts.

**Data Labels** controls what appears when you hover your mouse over a chart. 

# Grouping

The **Group By** setting can generate multiple traces against the same X and Y axes. Almost every time you see multiple colors of line or bar in a Redash chart, it's because the query results included a grouping column.

As shown in the below example, the grouping column is used to sort `(x,y)` pairs together.

![](/assets/images/docs/gitbook/group-by-ex.png)

Use of **Group By** is often easier than writing queries which return multiple Y columns for an X value. The following two data sets are identical.

![](/assets/images/docs/gitbook/grouped-vs-pivot.png)

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
[grouping]: #group-by
[Errors]: #error
[error bars]: #error
[Stacking]: #stacking

[Line]: #line
[Bar]: #bar
[Area]: #area

[Stacked Bar Charts]: https://en.wikipedia.org/wiki/Bar_chart#Grouped_and_stacked