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

      ```sql
      CASE
          WHEN cat.color IN ('short_hair',
                                'semi_short_hair')
               AND cat_count > 1000 THEN '<div class="bg-success p-10 text-center">count(cat)</div>'
               OR cat_count > 200 THEN '<div class="bg-warning p-10 text-center">count(cat)</div>'
          ELSE '<div class="bg-danger p-10 text-center">count(cat)</div>'
      END AS cat_count
      ```

In this example we covered different formatting types you can apply in a div:
1. Colors - green (bg-success), yellow (bg-warning) and red (bg-danger). You can also use bg-info for blue but who wants blue in their tables?
2. Padding - we used 10 to pad the text just a little bit.
3. Text alignment - we aligned our cat counts to the center (text-center), by default tables are aligned to the left.

Other styling formats you can use:
1. Font Size (font-size) - can be pixels (10ox, 20px, 34px and so on), relative (50%, 150%...), textual (large, medium, xx-small..) or HTML tags for headings (h1, h2...).
2. Headings ``<h1>`` and Displays (class = display1) - h1-h6 are heading sizes when h1 is the largest, display is a class you can combine with a heading to get a more stylized look.
3. Font type (font-family) - change the font, not all fonts are supported in each browser so it's tricky.
4. Misc- <mark>mark (mark)</mark>, <u>underline (u)</u>, <strong>bold (strong)</strong>, <em>italic (em)</em>

You are welcome to try other Bootstrap CSS tricks and share with us.

## Clickable URLs in tables {#clickable-urls-in-table}

To create clickable links in your table, use this template:
      ```sql
      SELECT 'http://demo.redash.io/queries/' || id  || '/source' AS url, name, created_at
      FROM queries
      WHERE is_archived = false
      AND name != 'New Query'
      ```
Please note that || is a PostgreSQL operator/function - for other databases you'll need to use the suitable concat operator.

The results will be clickable links, like in this query in our demo account: http://demo.redash.io/queries/3420/source
![](../assets/url_results.png)

You can also use the anchor tag to show a name instead of the URL:
      ```sql
      SELECT <a href="https://demo.redash.io/queries/' || id || '">' || name || '</a>' as name
      ...
      '''

## Images Inside tables {#images-inside-table}

To add images to tables you can use the `img` tag.

For example:
      ```sql
      SELECT cat, '<img src="https://demo.redash.io/images/'|| cat ||'.png" alt="cat" width="'||20||'" height="20";>' AS image
      FROM cats
      ```

Please note that || is a PostgreSQL operator/function - for other databases you'll need to use the suitable concat operator.

You can view a [live example](http://demo.redash.io/queries/1896/source#table) in our demo account.

## Default Parameter Value {#default-param-value}

Schedules and alerts don't handle parameters well so it's needed to create a specific query with the value you want to have a scheduled query and/or and alert for (alerts require scheduled queries anyway) or using filters that run only in the client side while querying all options.

This way you can have an "all" parameter that shows all values, allowing the query to be scheduled and get alerts for.

      ```sql
      CASE
              WHEN '{{date}}' = 'All' THEN date IS NOT NULL
              ELSE date = '{{date}}'
        END
        ```
Kelly (thanks Kelly!) from Hudl shared this in our [Slack community](https://slack.redash.io).
