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

0. First, go to Create > Alert
    ![](/assets/images/docs/gitbook/create-alert.png)
1. Select the query you want to trigger an alert for (just start typing). Note that queries with parameters won't work.
2. Select the column you want to watch.
3. Select the trigger type (greater/less than or equals to).
4. Select your magic number:
    ![](/assets/images/docs/gitbook/alerts_settings.png)
5. Leave Rearm Seconds empty to get 1 alert when the status changes from Triggered to OK, enter a number to get an alert every time the query runs (by schedule) + the Rearm seconds value. 
6. Save.
7. Define alert destinations - email, [Slack]({% link _kb/user-guide/alerts/slack-alert-destination.md %}), Mattermost, HipChat and webhooks are supported.

<img src="/assets/images/docs/gitbook/alert_destination.png" width="60%">

## Alert Status & Frequency

The Alert Status is checked every time the query is executed - (alerts only work with scheduled queries).

Alerts have 3 Status Types:

* `TRIGGERED` - the value you set the alert for is triggered (if you set your alert to trigger when the value of "cats" is greater than 1500 as long as it's above 1500 your alert is triggered)
* `OK` - the value you have set to trigger the alert is not reached for now (might happen after the alert was triggered or before it was ever triggered, if your "cats" value is now 1470 your alert will show as OK)
* `UNKNOWN` - you should see this status once you have set your alert and it wasn't yet checked. To make your alert in the know, run the query it is linked to after setting the alert.

### Get an Alert Upon Status Change

If you leave the REARM value empty alerts will only be sent when the status
changes (from OK to Triggered or vice versa).

#### Get an Alert Everytime the Query Runs

To get an alert every time the query runs, set the REARM value - the value is
for seconds that pass since the system detects a change until it sends the
alert, a 1-minute "delay" would require entering '60' in the REARM field.

