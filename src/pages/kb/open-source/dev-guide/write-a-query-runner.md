---
category: dev-guide
parent_category: open-source
title: Writing a New Query Runner 
slug: write-a-query-runner
---

## Intro 
Redash can already query many databases and REST APIs. To support new data source type in Redash, you need to implement a Query Runner for it. A Query Runner is a Python class. This document describes the process of adding a new data source type. It uses the Snowflake query runner as an example.

Start by creating a new `.py` file in the `/redash/query_runner` directory and  implement the BaseQueryRunner class:

```python
from redash.query_runner import BaseQueryRunner


class Snowflake(BaseQueryRunner):
    def run_query(self, query, user):
        pass
```

The only method that you must implement is the `run_query` method, which accepts a `query` parameter (string) and the `user` who invoked this query. The user is irrelevant for most query runners and can be ignored.

## Configuration

Usually the Query Runner needs some configuration to be used, so for this we need to implement the `configuration_schema` class method:

```python
@classmethod
def configuration_schema(cls):
    return {
        "type": "object",
        "properties": {
            "account": {
                "type": "string"
            },
            "user": {
                "type": "string"
            },
            "password": {
                "type": "string"
            },
            "warehouse": {
                "type": "string"
            },
            "database": {
                "type": "string"
            }
        },
        "required": ["user", "password", "account", "database", "warehouse"],
        "secret": ["password"]
    }
```

This method returns a JSON schema object. The supported types for the properties are string, number and boolean. Also note the required field which defines the required properties (all of them in this case) and secret, which defines the secret fields (which won’t be sent back to the UI).

Values for these settings are accessible as a dictionary on the `self.configuration` field of the Query Runner object.

## Executing the query

Now that we defined the configuration we can implement the `run_query` method:

```python
def run_query(self, query, user):
    connection = snowflake.connector.connect(
        user=self.configuration['user'],
        password=self.configuration['password'],
        account=self.configuration['account'],
    )

    cursor = connection.cursor()

    try:
        cursor.execute("USE WAREHOUSE {}".format(self.configuration['warehouse']))
        cursor.execute("USE {}".format(self.configuration['database']))

        cursor.execute(query)

        columns = self.fetch_columns([(i[0], TYPES_MAP.get(i[1], None)) for i in cursor.description])
        rows = [dict(zip((c['name'] for c in columns), row)) for row in cursor]

        data = {'columns': columns, 'rows': rows}
        error = None
        json_data = json_dumps(data)
    finally:
        cursor.close()
        connection.close()

    return json_data, error
```

This is the minimum required code. Here's what it does:

1. Connect to the Snowflake cluster.
2. Run the query.
3. Transform the results into the format Redash expects.

## Mapping Column Types to Redash Types

Note this line:

```python
columns = self.fetch_columns([(i[0], TYPES_MAP.get(i[1], None)) for i in cursor.description])
```

We use a helper function (`fetch_columns`) to de-duplicate column names and assign the type (if known) to the column. If no type is assigned, the default is string. The `TYPES_MAP` dictionary is a custom one we define elsewhere in the file. It will be different from one Query Runner to the next.
 
The return value of the `run_query` method is a tuple of the JSON encoded results and error string. The error string is used in case you want to return some kind of custom error message, otherwise you can let the exceptions propagate (this is useful when first developing your Query Runner).

## Fetching Database Schema

Up to this point, we've shown the minimum required to run a query. If you want Redash to show the database schema and enable autocomplete, you need to implement the `get_schema` method:

```python
def get_schema(self, get_stats=False):
    query = """
    SELECT col.table_schema,
            col.table_name,
            col.column_name
    FROM {database}.information_schema.columns col
    WHERE col.table_schema <> 'INFORMATION_SCHEMA'
    """.format(database=self.configuration['database'])

    results, error = self.run_query(query, None)

    if error is not None:
        raise Exception("Failed getting schema.")

    schema = {}
    results = json.loads(results)

    for row in results['rows']:
        table_name = '{}.{}'.format(row['TABLE_SCHEMA'], row['TABLE_NAME'])

        if table_name not in schema:
            schema[table_name] = {'name': table_name, 'columns': []}

        schema[table_name]['columns'].append(row['COLUMN_NAME'])

    return schema.values()
```

The implementation of `get_schema` is specific to the data source you’re adding support to but the return value needs to be an array of dictionaries, where each dictionary has a `name` key (table name) and `columns` key (array of column names).

### Including Column Types in the Schema Browser
...

## Adding Test Connection Support

You can also implement the Test Connection button support. The Test Connection button appears on the data source setup and configuration screen. You can either supply a `noop_query` property on your Query Runner or implement the `test_connection` method yourself. In this example we opted for the first:

```python
class Snowflake(BaseQueryRunner):
    # ...
    noop_query = "SELECT 1"
```

## Checking for Required Dependencies

If the Query Runner needs some external Python packages, we wrap those imports with a try/except block, to prevent crashing deployments where this package is not available:

```python
try:
    import snowflake.connector
    enabled = True
except ImportError:
    enabled = False
```    

The enabled variable is later used in the Query Runner’s enabled class method:

```python
@classmethod
def enabled(cls):
    return enabled
```

If it returns False the Query Runner won’t be enabled.

## Finishing up

Usually the connector will need to have some additional Python packages, we add those to the `requirements_all_ds.txt` file. If the required Python packages don’t have any special dependencies (like some system packages), we usually add the query runner to the `default_query_runners` in `redash/settings/__init__.py`.

You can see the full pull request for the Snowflake query runner [here](https://github.com/getredash/redash/pull/1488).

## Summary

A Redash Query runner is a Python class that, at minimum, implements a `run_query` that returns results in the format Redash expects. Configurable data source settings are defined by the `configuration_schema` class method which returns a JSON schema. You may optionally implement a connection test, schema fetching, and automatic limits. You can enable your data source by adding it to the `default_query_runners` list in settings, or by modifying setting the `ADDITIONAL_QUERY_RUNNERS` environment variable.
