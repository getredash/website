---
title: Hosted Redash
permalink: /help/faq/hosted-redash
parent_category: faq
category: hosted-redash
layout: kb-category
order: 3
---

## Does Redash Store My Data?

Each time you run a query we cache the query results. This means there's always
some subset of your data cached in our system. The most recent query result is
cached indefinitely.

## How Can I Cancel My Subscription?

Subscription cancellations currently need to be handled on our end. But don’t
worry - it’s still fast and easy. If you want to cancel your subscription please
reach out to our Support Team and we'll cancel your subscription.

We're always working to improve Redash so any feedback you have would be super
helpful. We'd love to learn how we could have served you better and why you've
decided to cancel.

## Privacy & Security

Redash is hosted on AWS and we follow the best practices:

1. All our servers are in a private network and are not accessible from the
   Internet, except for the load balancer and a bastion server for SSH (that
   does not have any credentials on it).
2. HTTPS/SSL for everything.
3. 2FA for our internal systems.

If you have any specific concerns, please Contact Us and we'll be happy to help.

## Can I Connect Redash To My Database Through An SSH Tunnel?

Yes. Hosted Redash includes an [API] for establishing tunneled connections to a
bastion within your

[api]: /help/user-guide/integrations-and-api/ssh-tunnel-api
