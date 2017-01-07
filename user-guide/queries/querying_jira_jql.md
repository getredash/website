---
description: Connect JQL to Redash easily and query in JQL, visualize and share it in moments.
---

# Querying JIRA (JQL)

Simple query, just return issues with no filtering:

```
{
}
```

Return only specific fields:

```
{
    "fields": "summary,priority"
}
```

Return only specific fields and filter by priority:

```
{
    "fields": "summary,priority",
    "jql": "priority=medium"
}
```

Count number of issues with `priority=medium`:

```
{
    "queryType": "count",
    "jql": "priority=medium"
}
```

Some fields returned by JIRA are JSON objects with multiple properties. You can define a field mapping to pick a specific member property you want to return:

```
{
    "fields": "summary,priority",
    "jql": "priority=medium",
    "fieldMapping": {
        "priority": {
            "member": "id"
        }
    }
}
```

You can also use the field mapping to rename a field for the result - this is useful when working with custom fields:

```
{
    "fields": "summary,priority,customfield_10672",
    "jql": "priority=medium",
    "fieldMapping": {
        "customfield_10672": {
            "name": "my_custom_field_name"
        }
    }
}
```

More complex example combining the different filter options:

```
{
    "fields": "summary,priority,customfield_10672,resolutiondate,fixVersions,watches,labels",
    "jql": "project = MYPROJ AND resolution = unresolved ORDER BY priority DESC, key ASC",
    "maxResults": 30,
    "fieldMapping": {
        "customfield_10672": {
            "name": "my_custom_field_name"
        },
        "priority": {
            "member": "id"
        },
        "fixVersions": {
            "member": "name",
            "name": "my_fix_version"
        }
    }
}
```

If a field contains a list of values all are returned concatenated with ",".
