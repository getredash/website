# Redash Hacks

We recommend to add your favorite hacks as snippets for quick and easy access when writing your queries.
Learn how to create snippets [here](../queries/writing_queries.md#query_snippets)

Documented hacks up-to-date are:
* [Conditional Formatting](#conditional-formatting)
* [Clickable URLs in tables](#clickable-urls-in-table)
* [Images Inside tables](#images-inside-table)
* [Default Parameter Value](#default-param-value)

## Conditional Formatting and General Text Formatting {#conditional-formatting}

While Redash doesn't naturally support conditional formatting, this can be bypassed quite easily with some html tags.

```CASE
    WHEN cat.color IN ('short_hair',
                          'semi_short_hair')
         AND cat_count > 1000 THEN '<div class="bg-success p-10 text-center">count(cat)</div>'
         OR cat_count > 200 THEN '<div class="bg-warning p-10 text-center">count(cat)</div>'
    ELSE '<div class="bg-danger p-10 text-center">count(cat)</div>'
END AS cat_count```

In this example we covered different formatting types you can apply in a div:
1. Colors - green (bg-success), yellow (bg-warning) and red (bg-danger). You can also use bg-info for blue but who wants blue in their tables?
2. Font size - we used 10, if needed you can use 70 or any other size.
3. Text alignment - we aligned our cat counts to the center (text-center), by default tables are aligned to the left.

You are welcome to try other bootstrap css tricks and share with us.

## Clickable URLs in tables {#clickable-urls-in-table}

To create clickable links in your table, use this template:
```
Select 'http://demo.redash.io/queries/' || id  || '/source' as url, name, created_at
from queries
where is_archived = false
and name != 'New Query'
```
Please note that || is a PostgreSQL operator - for other databases you'll need to use the suitable concat operator.

The results will be clickable links, like in this query in our demo account: http://demo.redash.io/queries/3420/source
![](../assets/url_results.png)

## Images Inside tables {#images-inside-table}

To add images to tables you can use the `img src` tag.

For example:
```Select cat, '<img src="https://demo.redash.io/images/'|| cat ||'.png" alt="cat" width="'||20||'" height="20";>' as image
from cats```

Please note that || is a PostgreSQL operator - for other databases you'll need to use the suitable concat operator.

## Default Parameter Value {#default-param-value}

Schedules and alerts don't handle parameters well and it's usually better creating a specific query with the value you want to have a scheduled query and/or and alert for (alerts require scheduled queries anyway) or using filters that run only in the client side while querying all options.

Kelly (thanks Kelly!) came up with this hack to allow an "all" parameter that shows all values, allowing the query to be scheduled and get alerts for.

```CASE
        WHEN '{{date}}' = 'All' THEN date IS NOT NULL
        ELSE date = '{{date}}'
  END ```
