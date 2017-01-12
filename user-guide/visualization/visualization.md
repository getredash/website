---
description: Create various visualizations easily in a few moments. Share, embed and download visualizations and use wherever needed.
---

# Visualizations

* [How to Create a Visualization from My Dataset?](#create_new_viz)
* [What Types of Visualization Can I Use for My Results?](#viz_types)
* [How to Embed Visualizations?](#embed_viz)
* [How to Edit a Visualization?](#edit_viz)
* [Can I Download a Visualization as an Image File?](#download_viz)

## How to Create a Visualization from My Dataset? {#create_new_viz}

Once your query finished running for the first time, you can add a visualization for your results by clicking the "New visualization" button above the results (currently shown only when the source code is shown).

![](../assets/gifs/visualization/new_viz.gif)

## What Types of Visualization Can I Use for My Results? {#viz_types}

Redash supports many type of visualization - table is just the default view.

Visualization types:

**Boxplot**
![](../assets/visualization_examples/boxplot.png)

**Chart -** Line, Bar, Area, Pie, Scatter

![](../assets/visualization_examples/chart.png)

![](../assets/visualization_examples/pie_chart.png)

**Cohort - ** Daily, Weekly, Monthly

![](../assets/visualization_examples/cohort.png)

**Counter **- optionally define a target for it

![](../assets/visualization_examples/counter.png)

**Map **- define the lat/lon columns from your database to see points on a map

![](../assets/visualization_examples/map.png)

**Pivot table**

**Sankey **- define stages and see values for different combinations or flows

![](../assets/visualization_examples/Sankey.png)

**Sunburst **- define stages and see values for different combinations or flows OR define sequences, stages and nodes.

![](../assets/visualization_examples/Sunburst.png)

**Word cloud**- make sure to use this visualization on raw results and not counted ones

## How to Embed Visualizations? {#embed_viz}

Redash allows your to embed visualization that will update every time the query they belong to will run (amazing!).

![](../assets/embed_viz.png)

Click the "Embed" button to view the iFrame code you need to copy or a link to the image you can place anywhere.

## How to Edit a Visualization? {#edit_viz}

To change an existing widget's parameters, enter the query of that widget (just click it's title). Then, show the source code and you'll see an "Edit" option under each visualization, clicking it will open the current settings for that visualization (type, x, y, group...).

![](../assets/visualization_examples/edit_viz.png)

Hit "Save" to apply your changes or "Cancel" to leave no trace.

## Can I Download a Visualization as an Image File? {#download_viz}

Certainly!

Hover the top right area of a visualization you wish to download and click the camera icon to simply download it to your device or the floppy icon to open and edit it in plot.ly.

![](../assets/download_viz.png)
