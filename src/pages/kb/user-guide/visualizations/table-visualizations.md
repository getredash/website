---
category: visualizations
parent_category: user-guide
title: Table Visualization Options
slug: table-visualizations
toc: true
---

# Using Tables

For most table visualizations, you determine column choice and order with a `SELECT` statement in the query editor. But certain data sources like CSV files or Google Spreadsheets aren't directly queryable with SQL. You can use the **Query Results** data source to post-process these files. But  if your visualization or dashboard simply requires the tabular content of your data source, you can reorder, hide, and format columns manually. 

## Visualization Settings

To get started, click the `Edit Visualization` button under the table view. A settings panel appears that looks like this:

![](/assets/images/docs/gitbook/table-viz-options.png)

- **Reorder Columns** by dragging them to the left or right as shown in the yellow highlight.
- **Hide Columns** by toggling the check mark highlighted in green
- **Format Columns** using the format settings highlighted red. Read more about column formatting below.

# Formatting Columns

Redash is sensitive to the data types that are common to most databases: text, numbers, dates and booleans. But it also has special support for non-standard column types like JSON documents, images, and links.

### **Common Data Types**

Redash will render a column as text if your underlying data source does not provide type info. But you can force it to use arbitrary types using the table visualization editor. This is especially useful for sources like SQLite, Google Sheets, or CSV files where type data is not available. You can, for example:

- Display all floats out to three decimal places
- Show only the month and year of a date column
- Zero-pad all integers
- Prepend or Append text to your number fields

A full reference for rendering numbers in Redash is available [here]({% link _kb/user-guide/visualizations/formatting-numbers.md %}). You can read about how to format dates [here](https://momentjs.com/docs/#/displaying/format/).

### **Special Data Types**

Redash also supports data types outside the common database specifications.

- **JSON Documents**

    If you're underlying data returns JSON formatted text in a field, you can instruct Redash to display it as such. This lets you collapse and expand elements in a clean format.

- **Images**

    If a field in your database contains links to an image, Redash can display that image inline with your table results. This is especially useful for dashboards.

    ![](/assets/images/docs/gitbook/dashboard-with-images.png)

    In the above dashboard, the **Customer Image** field is a link to an image which Redash displays in-place.

- **HTML Links**

    Just like with images, html links from your DB can be made clickable in Redash. Just use the Link option in the column format selector.