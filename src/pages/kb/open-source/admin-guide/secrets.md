---
category: admin-guide
parent_category: open-source
title: Secrets Keys in Redash
slug: secrets
toc: true
---

# Usage
To encrypt secret information, Redash reads two environment variables:

- `REDASH_SECRET_KEY` is used to encrypt database passwords, API keys, connection strings, and other secret fields needed when querying external data sources. 
- `REDASH_COOKIE_SECRET` is used for various cryptographic features of the web server, such as authenticating users, signing cookies, and storing user session information.

## Setup

A value for `REDASH_COOKIE_SECRET` is required to start the application. The webserver will fail to initialise without one. If you attempt to start the webserver without specifying `REDASH_COOKIE_SECRET` you will see the following exception in your logs:

```bash
Exception: You must set the REDASH_COOKIE_SECRET environment variable.
```

A value for `REDASH_SECRET_KEY` is required to start the application. However, if you do not set one explicitly, Redash will use the `REDASH_COOKIE_SECRET` instead. This is helpful for development. For maximum security, we recommend you set a unique value for both variables.

{% callout info %}
The official Redash cloud images found [here]({% link _kb/open-source/setup.md %}) generate unique secret keys automatically during deployment. If you deploy Redash manually with Docker Compose you can set these variables using the `environment` key in `docker-compose.yml`.
{% endcallout %}

### Choosing a Secret Key

Secret keys are like passwords. A strong secret key will be unique and hard to guess. Do not reuse secret keys across instances of Redash or commit them to version control. If a hostile actor guesses your secret key they might compromise your Redash instance. 

Our cloud images use the CLI tool `pwgen` to generate secret keys, but any [strong password generator](https://duckduckgo.com/?q=pwgen+32+strong) will work:

![Example pwgen usage](/assets/images/docs/gitbook/pwgen-example.png)

## Changing a Secret Keys

Under normal circumstances, you set these environment variables when installing Redash for the first time and will not touch them again. However, if your secret keys are publicly exposed (by committing them to a version control system, for example) you should change your secret keys immediately.

### Changing the Cookie Secret

Assuming you have already explicitly set `REDASH_SECRET_KEY`, you can safely change `REDASH_COOKIE_SECRET` at any time. This will immediately reset all active user sessions, but is otherwise free of side-effects.

If you did not already explicitly set `REDASH_SECRET_KEY`, then you should use the instructions in the next section to reencrypt your data source fields before modifying `REDASH_COOKIE_SECRET`. Otherwise your existing data sources will become inaccessible.

### Reencrypting Data Source Details

Because Redash encrypts secret fields at rest in its internal database, if you change the `REDASH_SECRET_KEY` you must also reencrypt these fields. Otherwise you will not be able to execute queries, modify your data sources, or even access the data source settings screen. The Redash CLI includes a command to reencrypt field by providing the old secret that was used to encrypt the data, and the new secret to be used.

If you deployed Redash using docker-compose (from one of our cloud images, e.g.) you can reencrypt the secret fields by running the following command on your docker host.

```bash
$ docker-compose run --rm server manage database reencrypt ${old_secret} ${new_secret}
```
