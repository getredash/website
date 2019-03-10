---
category: integrations-and-api
parent_category: user-guide
helpscout_url: https://help.redash.io/article/128-api-key-authentication
title: API
slug: api
---

## API Authentication

All the API calls support authentication with an API key. Redash has two types
of API keys:

  * User API Key: has the same permissions as the user who owns it. Can be found on a user profile page.
  * Query API Key: has access only to the query and its results. Can be found on the query page.

Whenever possible we recommend using a Query API key.

## API Usage Examples

Below you can find a few example scripts that use our API for various tasks:

### Export All Your Queries as Files

<https://gist.github.com/arikfr/598590356c4da18be976>

Given an API key, it will export all the account queries as simple files on
your file system. Can be useful for backups or to sync a git repository.

### Poll for Fresh Query Results (including parameters)

<https://gist.github.com/arikfr/e3e434d8cfd7f331d499ccf351abbff9>

This example uses the refresh API to make Redash refresh a query to make sure
you get fresh results and then poll the API until a result is ready. Can be
used for queries with or without parameters.
