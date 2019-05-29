---
category: setup
parent_category: data-sources
title: MongoDB Setup
slug: mongodb
---
To setup a MongoDB connection, you need to at least provide a **Connection
String**  and a **DB Name**.

 **Connection String**

  * The simplest: `mongodb://username:password@hostname:port/dbname` 

  * With SSL enabled: `mongodb://username:password@hostname:port/dbname?ssl=true` 

  * With SSL enabled and self-signed certificates (disables certificate verification): `mongodb://username:password@hostname:port/dbname?ssl=true&ssl_cert_reqs=CERT_NONE` 

If needed, you can pass additional connection options in the query string. See
full details in [MongoDB's
documentation](https://docs.mongodb.com/manual/reference/connection-string
/#connection-options).

You might notice that there is a separate field for the DB Name in the data
source configuration and we also include it in the connection string. This is
usually required on shared hosts like MLab.

### Troubleshooting

**Error: "SSL handshake failed: [SSL: CERTIFICATE_VERIFY_FAILED] certificate verify failed"**

This usually happens when your MongoDB server is using self signed certificates. You can either switch to a properly signed certificate or just add the `ssl_cert_reqs=CERT_NONE` option to your Connection String.
