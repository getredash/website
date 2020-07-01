---
category: integrations-and-api
parent_category: user-guide
title: SSH Tunnel API
slug: ssh-tunnel-api
---

Hosted Redash SSH Tunnel API
============================

SaaS Redash traffic always arrives from our public IP address:
`52.71.84.157`. We recommend directly whitelisting this address through
your firewall. Alternatively, you can set up an SSH tunnel using the API
described below.

{% callout info %}

If the below instructions don't work for you, contact Redash support
using the in-app chat box.

{% endcallout %}

Overview
========

Two sets of details are needed to connect Redash with your database over
SSH: database access details and SSH access details.

**Database access details** are always entered into Redash directly,
regardless whether an SSH tunnel is required. Any member of the `admin`
group can do this from the **Settings** > **Data Sources** tab. For
tunneled connections, the `host` for your data source will be the
private hostname *within* your VPC/intranet. Attempts to connect with
this data source will fail unless your firewall allows traffic from our
IP or you configure an SSH tunnel.

**SSH access details** are supplied using Redash's REST API because this
feature has not yet been added to our front-end user interface. The
tunnel API uses [public key
authentication](https://tools.ietf.org/html/rfc4716) to connect with a
bastion server in your network. Once connected to the bastion via SSH,
Redash sends the **database access details** to your database.

For this to work, your bastion host must be exposed over the internet.
And you should add [our public
key](https://arikfr.keybase.pub/redash_ssh_key.pub) to
`.ssh/allowed_keys` within the home folder of the system user that
Redash will use to authenticate. We recommend creating a dedicated user
for this purpose.

*Note: SSH Connections are ad-hoc. A new connection is tried on each
query execution.*

Setup The Connection
====================

You will need:

(a)  The address, port, and system user that Redash will use to connect
    with your bastion  
(b)  The URL for the data source to be tunneled  
(c)  The organization slug for your hosted account  
(d)  The API key of an admin user within your organization (available
    from the Profile screen)  

Step 1: `GET` the data source details
-------------------------------------

Copy your organization slug and the numerical data source ID and make an
API call to the `/api/data_sources` endpoint.

`https://app.redash.io/<slug>/api/data_sources/<data source id>`

This request must include an `Authorization` header with a value of
`Key <admin api key>`.

The JSON response includes all the details for the specified data
source. Copy the `name`, `type`, and `options` objects and proceed to
the next step.

Step 2: `POST` the SSH access details
-------------------------------------

Make a `POST` api call to the same endpoint as step 1 adding an
`ssh_tunnel` object with three key-value-pairs: `ssh_host`, `ssh_port`,
and `ssh_username`. Using the values from **(a)** above. For example:

    {
      "name": "My Sample Database",
      "type": "pg",
      "options": {
        "host": "private.address.in.my.domain.xyz",
        "port": 5432,
        "database": "sampledb",
        "user": "redash-db-user",
        "password": "-------------------",
        "ssh_tunnel": {
          "ssh_username": "redash-tunnel",
          "ssh_port": 22,
          "ssh_host": "bastion.my.domain.xyz"
        }
      }
    }

If you receive an HTTP response with code `200` then your SSH access
details were saved.

Step 3: Test the connection
---------------------------

You can either visit the data source within Redash and click **Test
Connection** or make a `POST` api call to
`https://app.redash.io/<slug>/api/data_sources/<data source id>/test`.

The JSON response will indicate whether Redash successfully reached your
database through the tunnel.