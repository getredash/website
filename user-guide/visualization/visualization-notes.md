# Visualizations

## <a name="create_new_viz"></a>How to create a visualization from my dataset?

Once your query finished running for the first time, you can add a visualization for your results by clicking the "New visualization" button above the results (currently shown only when the source code is shown).

![](/user-guide/assets/add_new_vis.png)

## <a name="viz_types"></a> What types of visualization can I use for my results?

Redash supports many type of visualization - table is just the default view.

Visualization types:

**Boxplot**
![](/user-guide/assets/visualization_examples/boxplot.png)

**Chart -** Line, Bar, Area, Pie, Scatter

![](/user-guide/assets/visualization_examples/chart.png)

![](/user-guide/assets/visualization_examples/pie_chart.png)

**Cohort - ** Daily, Weekly, Monthly

![](/user-guide/assets/visualization_examples/cohort.png)

**Counter **- optionally define a target for it

![](/user-guide/assets/visualization_examples/counter.png)

**Map **- define the lat/lon columns from your database to see points on a map

![](/user-guide/assets/visualization_examples/map.png)

**Pivot table**

**Sankey **- define stages and see values for different combinations or flows

![](/user-guide/assets/visualization_examples/Sankey.png)

**Sunburst **- define stages and see values for different combinations or flows OR define sequences, stages and nodes.

![](/user-guide/assets/visualization_examples/Sunburst.png)

**Word cloud**- make sure to use this visualization on raw results and not counted ones

# <a name="embed_viz"></a> How to embed visualizations?

Redash allows your to embed visualization that will update every time the query they belong to will run (amazing!).

![](/user-guide/assets/embed_viz.png)

Click the "Embed" button to view the iFrame code you need to copy or a link to the image you can place anywhere.

# <a name="edit_viz"></a>How to edit a visualization?

To change an existing widget's parameters, enter the query of that widget (just click it's title). Then, show the source code and you'll see an "Edit" option under each visualization, clicking it will open the current settings for that visualization (type, x, y, group...).

![](/user-guide/assets/visualization_examples/edit_viz.png)

Hit "Save" to apply your changes or "Cancel" to leave no trace.


# <a name="download_viz"></a> Can I download a visualization as an image file?

Yes, you can!

Hover the top right area of a visualization you wish to download and click the camera icon to simply download it to your device or the floppy icon to open and edit it in plot.ly.

![](/user-guide/assets/download_viz.png)
