# Query snippets and shortcuts

Query snippets are small (or not so small) pieces of queries you want to share with your team to reduce the need to type them over and over again or looking for a reference.

You create them at `https://app.redash.io/<your company>/query_snippets` (currently only admins can create them, but anyone can use).

![](/user-guide/assets/Snippet.png)

A snippet can be something like: (the ${1:table} part is a placeholder)

`join organizations org on org.id = ${1:table}.org_id`

Then you can trigger them while writing a query with the trigger word you define - it'll be suggested (auto-completed) like all other fields.
