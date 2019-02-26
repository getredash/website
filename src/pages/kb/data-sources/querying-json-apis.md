---
category: querying
parent_category: data-sources
title: Querying JSON APIs
slug: json-apis
---
To query arbitrary JSON URLs, you can use the new `JSON` type Data Source. To start, simpliy create a new Data Source of type 
`JSON` (you can give it any name, simple "JSON" is a good choice).

This Data Source takes queries in [YAML format](https://www.tutorialspoint.com/yaml/yaml_basics.htm). Here's some examples using the GitHub API:

**Just return a list of objects from a URL**

```yaml
url: https://api.github.com/repos/getredash/redash/issues
```

This will return the result of the above API call as is.

**Return a single object**

```yaml
url: https://api.github.com/repos/getredash/redash
```

The above API call returns a single object, and this object is being converted to a row.

**Return only specific fields**

In case you want to pick only specific fields from the resulting object(s), you can pass the `fields` option:

```yaml
url: https://api.github.com/repos/getredash/redash/issues
fields: [number, title]
```

**Use an inner object as the query result**

```yaml
url: https://api.github.com/repos/getredash/redash
path: owner
```

The above query will use the `owner` object from the API result as the query result.

**Pass query string parameters**

You can either craft your own URLs, or you can pass the `params` option:

```yaml
url: "https://api.github.com/search/issues"
params:
  q: is:open type:pr repo:getredash/redash
  sort: created
  order: desc
```

The above is the same as:

```yaml
url: "https://api.github.com/search/issues?q=+is:open+type:pr+repo:getredash/redash&sort=created&order=desc"
```

**Additional HTTP Options**

You can pass additional HTTP options:

* `method` - the HTTP method to use (default: `get`)
* `headers` - a dictionary of headers to send with the request
* `auth` - basic authentication username/password (should be passed as an array: `[username, password]`)
* `params` - a dictionary of query string parameters to add to the URL
* `data` - a dictionary of values to use as request body
* `json` - same as `data` except that it's being converted to JSON