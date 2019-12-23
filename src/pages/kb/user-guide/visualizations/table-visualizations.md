---
category: visualizations
parent_category: user-guide
title: Table Visualization Options
slug: table-visualizations
toc: true
---

Because tables are a natural way to present database results, Redash builds one automatically for every query you run. It's more than a lowly HTML table, though. This one includes pagination, order, visibility, search, and format settings for each column. You can modify this default table with the **Edit Visualization** button or make a new one by clicking **New Visualization** and type `Table`.

{% callout info %}

The default table visualization cannot be deleted.

{% endcallout %}


# Order, Visibility, and Pagination

From the visualization editor:

- Use the drag handle left of each column alias to **reorder columns**.
- Toggle the eye glyph to **hide a column**.
- Switch to the "Grid" tab to change **pagination settings**.
- Click the angle bracket `>` glyph to expand the full column settings.

![](/assets/images/docs/gitbook/table-column-settings.png)

# Search

// Need a screenshot here of the table search widget


# Formatting Columns

Redash knows the data types that are common to most DBs: text, numbers, dates, and booleans. And it also supports a few non-standard column types: JSON documents, images, and links.

{% callout info %}

Table visualizations try to guess field data types in your query results. This is sometimes an educated guess if the database cursor includes type information. Redash will also coerce other formats that the DB returns as text, like numbers or ISO8601 dates. When Redash can't determine a column data type it falls back to the text returned from the database.

{% endcallout %}

You can override the default data type format from the visualization editor.

// Need a screenshot here showing the different settings panels for field data types.

## **Common Data Types**

Redash will render a column as text if your underlying data source does not provide type information. But you can force it to use arbitrary types using the table visualization editor. This is especially useful for sources like SQLite, Google Sheets, or CSV files where type data is not available. You can, for example:

- Display all floats out to three decimal places
- Show only the month and year of a date column
- Zero-pad all integers
- Prepend or Append text to your number fields

A full reference for rendering numbers in Redash is available [here]({% link _kb/user-guide/visualizations/formatting-numbers.md %}). You can read about how to format dates [here](https://momentjs.com/docs/#/displaying/format/).

## **Special Data Types**

Redash also supports data types outside the common database specifications.

- **JSON Documents**

    If you're underlying data returns JSON formatted text in a field, you can instruct Redash to display it as such. This lets you collapse and expand elements in a clean format. This is particularly useful when querying RESTful APIs with the [JSON Data Source]({% link _kb/data-sources/querying/urls %})

- **Images**

    If a field in your database contains links to an image, Redash can display that image inline with your table results. This is especially useful for dashboards.

    ![](/assets/images/docs/gitbook/dashboard-with-images.png)

    In the above dashboard, the **Customer Image** field is a URL to a picture which Redash displays in-place.

- **HTML Links**

    Just like with images, HTML links from your DB can be made clickable in Redash. Just use the Link option in the column format selector.