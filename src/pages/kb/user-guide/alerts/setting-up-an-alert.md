---
category: alerts
parent_category: user-guide
helpscout_url: https://help.redash.io/article/67-setting-up-an-alert
toc: True
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
Alerts provide a convenient way for Redash to notify you when your scheduled queries match some arbitrary criteria. They are often used to monitor system statuses, financial goals, and unusual account activity. Through integrations with Zapier and IFTTT they can also trigger business processes like user on-boarding work flows or support tickets.

You can see all of your existing alerts by clicking `Alerts` on the main navigation menu. This will show you all the alerts in your organization by name, user, current state, and created date.

![](/assets/images/docs/gitbook/alerts.png)

# Usage

Create a new Alert by clicking the blue `Create` button in the navigation menu and selecting `Alert`.

![](/assets/images/docs/gitbook/create-alert.png)

Find the query that you would like to monitor using the search bar. Keep in mind that Alerts do not work with queries that use parameters.

![](/assets/images/docs/gitbook/new-alert-query-search.png)

{% callout info %}

If you set an Alert for a query that returns more than one row of data, the Alert will only read the first row of data.

{% endcallout %}

Use the settings panel to configure your alert:

![](/assets/images/docs/gitbook/alerts_settings.png)

* **Value Column** is the column in your query return that you would like to watch.
* **Op** is short for "Operation". You can choose greater than, less than, or equal to.
* **Reference** is the absolute value that your _Value Column_ will be compared to. The most recent query return is shown as the **Value**
* **Rearm seconds** effects how frequently you will receive notifications when your query meets the Alert criteria and does not change. See further discussion below.

Finally add an [alert destination]({% link _kb/user-guide/alerts/creating-new-alert-destination.md %}) and save your alert. If you skip this step you will not receive any notifications when the alert is triggered.

![](/assets/images/docs/gitbook/alert_destination.png)

# Alert Status & Frequency

The status of your Alert criteria is checked every time the query is executed. Alerts have three possible statuses:

* `TRIGGERED` means that your query matched the criteria defined in your alert configuration. If you set your alert to trigger when the value of "cats" is greater than 1500 as long as it's above 1500 your alert is triggered.
* `OK` means that the most recent query execution did not match the criteria defined in your alert. This doesn't mean that the Alert has not been triggered previously. If your "cats" value is now 1470 your alert will show as OK.
* `UNKNOWN` means the query has not executed since you configured the Alert. You should see this status immediately after creating your Alert. The status will always show triggered or OK after that. If it does not change following your next query execution then review the above instructions as you have likely configured the Alert incorrectly.

Redash sends notifications to your chosen Alert Destinations whenever it detects that the Alert status has changed from `OK` to `TRIGGERED` or vice versa. Consider this example where an Alert is configured on a query that is scheduled to run once daily. The daily status of the Alert appears in the table below. Prior to Monday the alert status was `OK`.

| Day       | Alert Status | 
|-----------|--------------| 
| Monday    | OK           | 
| Tuesday   | OK           | 
| Wednesday | TRIGGERED    | 
| Thursday  | TRIGGERED    | 
| Friday    | TRIGGERED    | 
| Saturday  | TRIGGERED    | 
| Sunday    | OK           | 

By default, Redash would send a notification on Wednesday when the status changed from `OK` to `TRIGGERED` and again on Sunday when it switches back. It will not send alerts on Thursday, Friday, or Saturday unless you specifically configure it to do so because the Alert status did not change between executions on those days.

## Setting Rearm Seconds for an Alert

To send notifications more frequently, set the **Rearm seconds** to any nonzero value. This tells Redash to treat the next query execution after the chosen number of seconds as though the status has changed and therefore send a notification.

For example, if the Alert above were configured with **Rearm seconds** equal to `1` a notification would be sent every day. Normally, Redash would see the `OK` status on Monday but would not send a notification because the value the previous day was also `OK`. But with _Rearm seconds_ elected, Redash will treat _any status_ as though it were different from the previous execution and send a notification anyway.

{% callout info %}

Alert notifications are directly tied to the query execution schedule. If a query is scheduled to execute one per week then you will receive one notification per week at most, regardless of the configured _Rearm seconds_.

{% endcallout %}

### Query execution schedule and Rearm seconds

The _Rearm seconds_ interval and query schedule are inversely related. If the interval between query executions is shorter, your _Rearm seconds_ value will usually be higher to prevent excessive notifications. If your query only executes once per week, then any _Rearm seconds_ that is shorter than the query execution interval will behave the same way. Most users just use `1` in this case.

{% callout info %}

For a query that executes every 24 hours, any _Rearm seconds_ value between 1 and 86,400 will result in a notification being sent once daily.

{% endcallout %}

Imagine you set an Alert on a query that executes every five minutes. You have configured _Rearm seconds_ equal to `3600` (one hour). This guarantees that you will receive a status notification at least once an hour. But you will also receive a notification if the status changes. The one hour rearm prevents Redash from sending you a notification every five minutes while the Alert is triggered. So in the below time-line:

| Time    | Alert Status | 
|---------|--------------| 
| 8:00 AM | OK           | 
| 8:05 AM | TRIGGERED    | 
| 8:10 AM | TRIGGERED    | 
| 8:15 AM | OK           | 
| 8:20 AM | OK           | 
| 8:25 AM | TRIGGERED    | 
| 8:30 AM | TRIGGERED    | 
| 8:35 AM | TRIGGERED    | 
| 8:40 AM | TRIGGERED    | 
| 8:45 AM | TRIGGERED    | 
| 8:50 AM | TRIGGERED    | 
| 8:55 AM | OK           | 
| 9:00 AM | OK           | 

You would receive the following notifications:

| Alert Time | Alert Message       | Reason                                 | 
|------------|---------------------|----------------------------------------| 
| 8:00 AM    | Status is OK        | Alert was rearmed by Rearm seconds     | 
| 8:05 AM    | Status is TRIGGERED | The query meets alert criteria         | 
| 8:15 AM    | Status is OK        | The query does not meet alert criteria | 
| 8:25 AM    | Status is TRIGGERED | The query meets alert criteria         | 
| 8:55 AM    | Status is OK        | The query does not meet alert criteria | 

Importantly, assuming the alert was not triggered at all during the nine o'clock hour, the next alert would not arrive until 9:55 AM, the next scheduled query execution after the _Rearm seconds_ was completed.

