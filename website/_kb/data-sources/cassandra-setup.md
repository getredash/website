---
category: setup
parent_category: data-sources
helpscout_url: 
title: Cassandra Setup
slug: cassandra-setup
---
### Make Cassandra Data Source Available

Cassandra is not available in default configuration of Redash installation. To make it available, you need to add Cassandra as available data sources by adding `REDASH_ADDITIONAL_QUERY_RUNNERS=redash.query_runner.cass` as environment variable.


### Create The Connection

To setup a Cassandra connection, you need to at least provide `username`, `keyspace name`, `host`, `password`, and `port`. Currently, Cassandra runner in Redash does not support cluster mode and SSL. 
