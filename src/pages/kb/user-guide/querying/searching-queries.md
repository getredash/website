---
category: querying
parent_category: user-guide
helpscout_url: https://help.redash.io/article/153-searching-queries
title: Search Queries
slug: searching-queries
toc: true
order: 1
---

To search queries, click `Queries` in the navbar then use the Search Queries input form.

# Search Queries

Redash uses different search logic depending on the **Enable multi-byte** feature flag. The **Enable multi-byte** feature flag can be set on General tab under Settings page.

## When "Enable multi-byte" is disabled (default)

When **Enable multi-byte** is disabled, Redash uses [PostgreSQL full-text search](https://www.postgresql.org/docs/current/textsearch.html) to search queries.


## When "Enable multi-byte" is enabled

When **Enable multi-byte** is enabled, Redash uses a custom search syntax.

The search logic is as follows:

- Search is case-insensitive.
- Search terms are separated by spaces.
- Each search term is searched in the following fields:
  - Query name
  - Query description
  - Query text
- The query may contain qualifiers to specify the field to search:
  - `name:`: Search in query name.
  - `description:`: Search in query description.
  - `query:`: Search in query text.

### Search Examples
| Query Name       | Description               |
|------------------|---------------------------|
| term | find queries containing 'term' in the query name or description |
| term1 term2     | find queries containing both term1 and term2 |
| "exact phrase"  | find queries containing the exact phrase |
| query:term      | find queries containing 'term' in the query text |
| term1 query:term2 | find queries containing 'term' in the query name/description and 'term2' in the query text |
| query:"exact phrase" | find queries containing the exact phrase in the query text |
