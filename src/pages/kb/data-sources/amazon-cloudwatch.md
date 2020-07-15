---
category: querying
parent_category: data-sources
title: Amazon CloudWatch
slug: amazon-cloudwatch
toc: true
---


## Setup

Redash connects to CloudWatch using the `boto3` client. From their [documentation](https://boto3.amazonaws.com/v1/documentation/api/latest/guide/quickstart.html), before you can query with Redash:

> [Y]ou should set up authentication credentials. Credentials for your AWS account can be found in the IAM Console. You can create or use an existing user. Go to manage access keys and generate a new set of keys.

With your `access_key_id` and `secret_access_key` you can set up the CloudWatch and CloudWatch Log Insights data sources.

## Querying

These instructions assume you are familiar with CloudWatch's ad-hoc query language. The schema browser on the query screen shows which **Namespaces** and **Metrics** are available for querying.

![CloudWatch Schema Example](/assets/images/docs/gitbook/cloudwatch-schema.png)

Write an array of `MetricDataQuery` objects using [YAML syntax](https://yaml.org/start.html) under a key called `MetricsDataQueries`. Redash converts this array to `get_metric_data()` calls.

Here's an example that sends two `MetricDataQuery` objects.

```yaml
MetricDataQueries: 
  - Id: database_connections
    MetricStat:
      Metric:
        Namespace: AWS/RDS
        MetricName: DatabaseConnections
      Period: 60
      Stat: Maximum
  - Id: swap_usage
    MetricStat:
      Metric:
        Namespace: AWS/RDS
        MetricName: SwapUsage
      Period: 60
      Stat: Maximum
StartTime: "2020-01-01 00:00:00"
```

{% callout info %}
To query your CloudWatch data with SQL, first pull data using the YAML syntax. Then use QRDS to filter and sort the results
{% endcallout %}


## Helpful Links

To learn more about the CloudWatch ad-hoc query language you can study the following links.

- [`boto3` reference](https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/cloudwatch.html#CloudWatch.Client.get_metric_data)
- [`GetMetricData` API Description](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricData.html)
- [`MetricDataQuery` Format](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_MetricDataQuery.html)
- [`MetricStat` Format](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_MetricStat.html)

