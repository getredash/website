---
category: alerts
parent_category: user-guide
helpscout_url: https://help.redash.io/article/67-setting-up-an-alert
keywords:
- Set up Alert
- setup alert
- setup an alert
- queries with parameters
- trigger alert
- alert destinations
- alert destination
title: Setting Up An Alert
slug: setting-up-an-alert
order: 1
---
In the Alerts view, you'll see all existing alerts.

![](/assets/images/docs/gitbook/alerts.png)

To set up a new alert you'll need to follow these steps:

0. First, go to `Create > Alert`
    ![](/assets/images/docs/gitbook/create-alert.png)
1. Select the query you want to trigger an alert by typing in the search box. Note that **queries with parameters won't work**.
2. Select the column you want to watch in the `Value Column` field. That field's current value is displayed to the right.
3. Select the trigger type (greater/less than or equals to) with the `Op` field.
4. Type your desired threshold into the `Reference` field:
    ![](/assets/images/docs/gitbook/alerts_settings.png)
5. Leave `Rearm Seconds` empty to get 1 alert when the status changes from Triggered to OK. Or enter a number to be alerted every time the query runs.
6. Save.
7. Define alert destinations - email, [Slack]({% link _kb/user-guide/alerts/slack-alert-destination.md %}), Mattermost, HipChat and webhooks are supported.

<img src="/assets/images/docs/gitbook/alert_destination.png" width="60%">

## Alert Status & Frequency

The Alert Status is checked every time the query is executed, but an Alert notification is sent only for scheduled queries.

Alerts have 3 Status Types:

* `TRIGGERED` - Your alert has been tripped because the current value of the desired field matches your criteria. For example, if you set your alert to trigger when the value of "cats" is greater than 1500, your alert will remain triggered as long as the query shows more than 1500 "cats".
* `OK` - Your alert is not tripped as of the most recent query execution. This can happen after the alert has been triggered (in which case the status will change from TRIGGERED to OK) or before it was ever triggered. If your "cats" value is now 1470 your alert will show as OK.
* `UNKNOWN` - You should see this status when you first set up your alert because it hasn't been checked yet. You can run the query to confirm that the Alert logic works. Manually running the query can change the Alert status but will not trigger a notification.

#### Get an Alert Upon Status Change

If you leave the REARM value empty alerts will only be sent when the status changes (from OK to Triggered or vice versa).

#### Get an Alert Everytime the Query Runs

To get an alert every time the query runs, set the REARM value - the value is for seconds that pass since the system detects a change until it sends the alert, a 1-minute "delay" would require entering '60' in the REARM field.

