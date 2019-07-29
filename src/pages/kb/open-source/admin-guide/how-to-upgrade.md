---
category: admin-guide
parent_category: open-source
title: How to Upgrade
order: 1
slug: how-to-upgrade
---

{% callout important %}
This instructions are for those who use our new Docker based instance. If you use our older instances (or used the old bootstrap script), check the [legacy guide]({% link _kb/open-source/admin-guide/how-to-upgrade-legacy.md %}).
{% endcallout %}

It's recommended to upgrade your Redash instance, once there is a new release, to benefit from new features and bug fixes. These instructions assume you used our images to setup Redash, but even if you haven't they provide enough information to apply it to your setup.

## Upgrade Process

1. Make sure to backup your data. You only need to backup Redash's PostgreSQL database (the database Redash stores metadata in, not the ones you might be querying) as the data in Redis is transient.
2. Change directory ot `/opt/redash`.
3. Update `/opt/redash/docker-compose.yml` Redash image reference to the one you want to upgrade to.
4. Stop Redash services: `docker-compose stop server scheduler scheduled_worker adhoc_worker` (you might need to list additional services if you updated your configuration)
5. Apply migration (if necessary): `docker-compose run --rm server manage db upgrade`
6. Start services: `docker-compose up -d`

_Done!_

{% callout %}
**Getting an error when running `docker` or `docker-compose` commands?**

Make sure the `ubuntu` user is part of the `docker` group:

1. Run `sudo usermod -aG docker $USER` to add current user to the docker group.
2. Logout and login again.

{% endcallout %}
