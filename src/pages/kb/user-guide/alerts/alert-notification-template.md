---
category: alerts
parent_category: user-guide
helpscout_url: https://help.redash.io/article/74-alert-notification-template
keywords:
- Alert
- Notification
- Template
- Custom Template
- Formatting
- Email
title: Alxert Notification Templating
slug: alert-notification-template
order: 1
---
Redash alerts can notify you when your [**Scheduled Queries**]({% link _kb/user-guide/querying/scheduling-a-query.md %}) match some arbitrary criteria. If you wish to modify the notification message subject or body contents, click the "Edit" button at the top of the alert page.

Next to the setting labeled "Template", click the dropdown and select "Custom template".
A box will appear, consisting of input fields for subject and body.

Any static content is valid, but you can also incorporate the following built-in template variables:

* `ALERT_STATUS` - The alert evaluated status (string)
* `ALERT_CONDITION` - The alert operator (string).
* `ALERT_THRESHOLD` -  The alert threshold (string or number).
* `ALERT_NAME` - The alert name (string).
* `ALERT_URL` - The alert link url (string).
* `QUERY_NAME` - The related query name (string).
* `QUERY_URL` - The related query link url (string).
* `QUERY_RESULT_VALUE` - The query result top row value (string or number)
* `QUERY_RESULT_ROWS` - The query result rows (value array)
* `QUERY_RESULT_COLS` - The query result column (string array),

An example subject, for instance, could be:
```Alert "{{ALERT_NAME}}" changed status to {{ALERT_STATUS}}```

Click the "Preview" toggle button to make sure template variables get rendered correctly.

To save your changes, click the "Save" button.

To return to the default Redash message templates, reselect "Default template" at any time.