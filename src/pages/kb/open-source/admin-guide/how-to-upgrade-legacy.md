---
category: admin-guide
parent_category: open-source
title: How to Upgrade (Legacy Images)
order: 2
slug: how-to-upgrade-legacy
---

{% callout important %}
This instructions are for those who use our older instace that did not use Docker. If you use our new Docker based instance, check the [updated guide]({% link _kb/open-source/admin-guide/how-to-upgrade.md %}).
{% endcallout %}

It's recommended to upgrade your Redash instance once there are new releases, to benefit from new features and bug fixes. The upgrade process is relatively simple, and assuming you used one of the base images we provide, you can simply run the upgrade script. **If you have a custom deployment, you can use the upgrade script as reference to create your own process**.

{% callout danger %}
Bitnami instances are not compatible with this script.
{% endcallout %}

## How to upgrade (v1.0.0 and newer)

Starting from v1.0.0, the upgrade script is part of the codebase, and running the script is as simple as:

```bash
cd /opt/redash/current
sudo bin/upgrade
```

{% callout info %}
If you're upgrading to a beta version, you need to specify the channel: `sudo bin/upgrade --channel beta`.
{% endcallout %}

### Docker

If you're using Docker to run Redash, **don't use the upgrade script**. Instead you need to:

1. Update the Docker image you're using.
2. Apply migrations (if needed). To apply migrations you need to invoke the image with `manage db upgrade` as the command. The way to do this depends on the way you deploy Redash.

## How to upgrade (pre v1.0.0 versions)

In v1.0.0 we added the script to the repository, but if you have an earlier version, you will need to download the script first (**note that you need to download it to your Redash server**):

```bash
wget https://raw.githubusercontent.com/getredash/redash/master/bin/upgrade
chmod +x upgrade
```

Run it:

```bash
sudo ./upgrade
```

Before doing the upgrade, please make sure to do the following changes to your `/opt/redash/.env` file:

1. If you have local PostreSQL database, you will need to update the URL from `postgresql://redash` to `postgresql:///redash`.
2. Remove the `REDASH_STATIC_ASSETS_PATH` definition.

{% callout %}
You can upgrade to v1.0.0 and later only from v0.12.0, so if you have an older version, run: `sudo upgrade --channel legacy` first and then `sudo upgrade`.
{% endcallout %}

## Troubleshooting

### Upgrade failing with "sudo: /etc/init.d/redash_supervisord: command not found"

You need to manually run the restart command:

```
sudo service supervisor restart
```

In v2.0.0 we fixed the upgrade script to use the correct command.

### Some (or all) data sources disappeared after upgrading

The upgrade process updates the code, applies migrations and upgrade Python requirements. But it does not upgrade Python requirements for the data sources (described in `/opt/redash/current/requirements_all_ds.txt`).

In some cases, old packages will prevent the data source from loading. Make sure to manually update the requirements relevant to the data sources you need.

#### I don't see BigQuery in the data sources list after upgrading to v2.0.0

You need to upgrade the following Python packages:

```
google-api-python-client==1.5.1
oauth2client==3.0.0
```

(`sudo pip install -U google-api-python-client==1.5.1 oauth2client==3.0.0`)

#### I don't see Athena in the data sources list after upgrading to v2.0.0

Make sure to install PyAthena:

`sudo pip install PyAthena>=1.0.0`

### Getting "AttributeError: 'module' object has no attribute 'SSL_ST_INIT'" error during upgrade

Make sure to upgrade the PyOpenSSL package (see the version specified in `requirements_all_ds.txt`).
