---
category: alerts
parent_category: user-guide
keywords:
- Alert
- Notification
- Template
- Custom Template
- Formatting
- Email
- Customize
- Customizing
title: Customizing Alert Notifications
slug: custom-alert-notifications
order: 5
---
Redash alerts can notify you when your queries match some arbitrary criteria. If you wish to modify the notification message, click the "Edit" button at the top of the alert page.

Next to the setting labeled "Template", click the dropdown and select "Custom template".
A box will appear, consisting of input fields for subject and body.

Any static content is valid, and you can also incorporate some built-in template variables:

* `ALERT_STATUS` - The evaluated alert [status]({% link _kb/user-guide/alerts/setting-up-an-alert.md %}#Alert-Status-&-Frequency) (string).
* `ALERT_CONDITION` - The alert [condition operator]({% link _kb/user-guide/alerts/setting-up-an-alert.md %}#Configuration-settings) (string).
* `ALERT_THRESHOLD` -  The alert [threshold]({% link _kb/user-guide/alerts/setting-up-an-alert.md %}#Configuration-settings) (string or number).
* `ALERT_NAME` - The alert name (string).
* `ALERT_URL` - The alert page url (string).
* `QUERY_NAME` - The correlated query name (string).
* `QUERY_URL` - The correlated query page url (string).
* `QUERY_RESULT_VALUE` - The query result value (string or number)
* `QUERY_RESULT_ROWS` - The query result rows (value array)
* `QUERY_RESULT_COLS` - The query result columns (string array),

An example subject, for instance, could be:
```Alert "{{ALERT_NAME}}" changed status to {{ALERT_STATUS}}```

Click the "Preview" toggle button to preview the rendered result and save your changes by clicking the "Save" button.

{% callout warning %}

The preview is useful for verifying that template variables get rendered correctly. It is not an accurate representation of the eventual notification content, as each alert destinations can display notifications differently.

{% endcallout %}

To return to the default Redash message templates, reselect "Default template" at any time.