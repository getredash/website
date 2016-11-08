# How to use parameters?

You can add parameters to your query to make it easier to edit outside the source code.

Here is a small example the demonstrates adding a date picker to a query/chart:

`select date, count(*)
from mytable
where date = "{{date}}"`

The {{date}} part is the parameter. It can be called whatever you want.

After you add it, you will see an input field show up. Next to it there is a gear icon - when clicked it opens an options screen where you can set the parameter type and friendly name.

Make sure to execute the query again after entering your parameter.
