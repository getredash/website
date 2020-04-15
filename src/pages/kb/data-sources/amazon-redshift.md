---
category: querying
parent_category: data-sources
title: Amazon Redshift
slug: amazon-redshift
toc: true
---

{% callout warning %}

This page is still under construction!

{% endcallout %}

## How to Configure Security Groups

1. In the Amazon Redshift console, in the navigation pane, choose Clusters.
2. Choose your cluster to open it, and make sure that you are on the Configuration tab.
3. Under Cluster Properties, for VPC Security Groups, choose your security group.
  ![image](/assets/images/docs/gitbook/redshift-vpc-security-groups.png)


4. After your security group opens in the Amazon EC2 console, choose the Inbound tab.
  ![image](/assets/images/docs/gitbook/redshift-inbound-tab.png)
5. Choose Edit, and enter the following, then choose Save:
  * Type: Custom TCP Rule.
  * Protocol: TCP.
  * Port Range: type the same port number that you used when you launched the cluster. The default port for Amazon Redshift is 5439, but your port might be different.
Source: select Custom IP, then type 52.71.84.157/32.

(need to make the last step more generic but also mention the hosted Redash IP)