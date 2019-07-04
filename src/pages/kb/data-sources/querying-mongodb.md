---
category: querying
parent_category: data-sources
title: Querying MongoDB
slug: mongodb
toc: true
---

Write your MongoDB query as a JSON object. During execution, Redash will convert it into either a [`db.collection.find()`](https://docs.mongodb.com/manual/reference/method/db.collection.find/) call or a [`db.collection.aggregate()`](https://docs.mongodb.com/manual/reference/method/db.collection.aggregate/) call. Here's how your JSON object is mapped and sent to MongoDB:

| MongoDB Token                  | Where to write in Redash                              | 
|--------------------------------|-------------------------------------------------------| 
| `db`                           | On the data source setup screen                       | 
| `collection`                   | Add a `collection` key in your query object           | 
| `query`                        | Add a `query` key in your query object                | 
| `projection`                   | Add a `fields` key in your query object               | 
| `.sort() method`               | Add a `sort` key in your query object                 | 
| `.skip() method`               | Add a `skip` key in your query object                 | 
| `.limit() method`              | Add a `limit` key in your query object                | 
| `db.collection.count()` method | Use a `count` key with any value in your query object | 

The values you use for each key are passed unmodified as as parameters to MongoDB.

## Query Examples

### Simple Query Example


    {
    	"collection": "my_collection",
    	"query": {
    		"type": 1
    	},
    	"fields": {
    		"_id": 1,
    		"name": 2
    	},
    	"sort": [{
    		"name": "date",
    		"direction": -1
    	}]
    }
    

An equivalent query in Javascript would be written: `db.my_collection.find({"type": 1}, {"_id": 1, "name": 2}).sort([{"name": "date","direction": -1}])`


### Count Query Example

    
    
    {
    	"collection": "my_collection",
    	"count": true
    }
    

### Aggregation

Aggregation uses a syntax similar to the one used in PyMongo. However, to support the correct order of sorting, it uses a regular list for the “$sort” operation that converts into a SON (sorted dictionary) object before execution.

Aggregation query example:


    {
    	"collection": "things",
    	"aggregate": [{
    		"$unwind": "$tags"
    	}, {
    		"$group": {
    			"_id": "$tags",
    			"count": {
    				"$sum": 1
    			}
    		}
    	}, {
    		"$sort": [{
    			"name": "count",
    			"direction": -1
    		}, {
    			"name": "_id",
    			"direction": -1
    		}]
    	}]
    }


### MongoDB Extended JSON Support

We support  [MongoDB Extended JSON](https://docs.mongodb.com/manual/reference/mongodb-extended-json/) along with our own extension - `$humanTime`:

    {
    	"collection": "date_test",
    	"query": {
    		"lastModified": {
    			"$gt": {
    				"$humanTime": "3 years ago"
    			}
    		}
    	},
    	"limit": 100
    }
    

It accepts a human-readable string like the above (“3 years ago”, “yesterday”, etc) or timestamps.

{% callout info %}

The `$humanTime` function is also needed when using [Query Parameters]({% link _kb/user-guide/querying/query-parameters.md %}) of type Date or Date/Time with MongoDB, due to the difference between the format Redash uses and the one MongoDB expects. 

When using a Date (or Date Range) parameter, wrap it with a `$humanTime` object: `{{param}}` becomes `{"$humanTime": "{{param}} 00:00"}` (the ` 00:00` suffix is needed only with Date parameters, for Date Time parameters you should skip it).

{% endcallout %}

### MongoDB Filtering

You can add filters to Mongo queries by projecting a column with the
'::filter' keyword added on to the end.

    
    
    {
    	"collection": "zipcodes",
    	"aggregate": [{
    		"$project": {
    			"_id": "$_id",
    			"city": "$city",
    			"loc": "$loc",
    			"pop": "$pop",
    			"state::filter": "$state"
    		}
    	}]
    }
    

The above example will show a 'State' column, and allow you to filter on this
column.

## Troubleshooting

### Sort exceeded memory limit of 104857600 bytes

> Sort exceeded memory limit of 104857600 bytes, but did not opt in to external sorting. Aborting operation. Pass allowDiskUse:true to opt in.

In MongoDB, the in-memory sorting have a limit of 100M, to perform a large sort, you need enable `allowDiskUse` option to write data to a temporary files for sorting.

To enable the `allowDiskUse` option, just add the option to your query:

```json
{
  ...
  "allowDiskUse": true
}
```
