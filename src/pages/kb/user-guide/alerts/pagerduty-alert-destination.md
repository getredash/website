---
category: alerts
parent_category: user-guide
helpscout_url: 
title: Adding PagerDuty Alert Destination
slug: pagerduty-alert-destination
---

First you need to obtain the PagerDuty Integration Key from your PagerDuty console.

Services > Service Details > Integrations  

![](/assets/images/docs/alerts/pagerduty-key-location.png)

If you don't have an API v2 Integration yet, you need to create it.

After obtaining the Integration Key:

1. Open "Alert Destinations" tab in the settings screen, and click on "+ New Alert Destination".
2. In the form that opens pick "PagerDuty" as the type.
![](/assets/images/docs/alerts/pd_destination.png)

3. The mandatory fields are Name and Integration Key.
4. You add this new destination for any alert that you want to trigger PagerDuty incident.

Only users with admin rights can create new destinations, but any user can use
them in their alerts once created.

