---
category: querying
parent_category: data-sources
title: NewRelic
slug: newrelic-ds
---

# Setup

You need an **[Account ID](https://docs.newrelic.com/docs/accounts/accounts-billing/account-structure/account-id/)** provided by NewRelic, **[User API Token](https://docs.newrelic.com/docs/apis/intro-apis/new-relic-api-keys/)** and **[NewRelic GraphQL API URL](https://docs.newrelic.com/docs/apis/nerdgraph/get-started/introduction-new-relic-nerdgraph/)** to connect to NewRelic GraphQL API. The token behaves like a password. 


{% callout warning %}

This query runner only support **count** and **comparison** queries

{% endcallout %}

![](/assets/images/docs/gitbook/newrelic-setup.png)

# Querying

For a simple count query, one that returns single result:
    
```
{
	"queryType": "count",
	"nrql": "SELECT count(*) FROM Transactions"
}
```

For a comparison query, one that returns two results (current and previous)

```
{
	"queryType": "comparison",
	"nrql": "SELECT count(*) FROM Transactions COMPARE WITH 1 day ago"
}
```
