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
