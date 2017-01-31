# **How to Upgrade Redash**

It's recommended to upgrade your Redash instance once there are new releases, to benefit from new features and bug fixes. The upgrade process is relatively simple, and assuming you used one of the base images we provide, you can simply run the upgrade script. If you have a custom deployment, you can use the upgrade script as reference to create your own process.

## **How to upgrade -- pre v1.0.0 versions**

In v1.0.0 we added the script to the repository, but if you have an earlier version, you will need to download the script first:

```bash
wget https://raw.githubusercontent.com/getredash/redash/master/bin/upgrade
chmod +x upgrade
```

Run it:

```bash
sudo ./upgrade
```

## **How to upgrade -- v1.0.0 and newer**

In the final release of v1.0.0 the upgrade script will be part of the Redash deployment, and running the script will be simple as:

```bash
cd /opt/redash/current
sudo bin/upgrade
```
