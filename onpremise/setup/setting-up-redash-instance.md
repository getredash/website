# Setting up a Redash Instance

The [provisioning script](https://raw.githubusercontent.com/getredash/redash/master/setup/ubuntu/bootstrap.sh) works on Ubuntu 16.04. This script installs all needed dependencies and creates basic setup.

To ease the process, there are also images for AWS, Google Compute Cloud and Docker. These images were created with the same provision script using Packer.

## Create an Instance

### AWS

Launch the instance with from the pre-baked AMI (for small deployments t2.small should be enough):

| Region | AMI |
| ------------- | -------------|
| us-east-1 | [ami-2d3c0a56](https://console.aws.amazon.com/ec2/home?region=us-east-1#LaunchInstanceWizard:ami=ami-2d3c0a56) |
| us-west-1 | [ami-5a1d373a](https://console.aws.amazon.com/ec2/home?region=us-west-1#LaunchInstanceWizard:ami=ami-5a1d373a) |
| us-west-2 | [ami-2325c85b](https://console.aws.amazon.com/ec2/home?region=us-west-2#LaunchInstanceWizard:ami=ami-2325c85b) |
| eu-west-1 | [ami-6abd4013](https://console.aws.amazon.com/ec2/home?region=eu-west-1#LaunchInstanceWizard:ami=ami-6abd4013) |
| eu-central-1 | [ami-13cd657c](https://console.aws.amazon.com/ec2/home?region=eu-central-1#LaunchInstanceWizard:ami=ami-13cd657c) |
| sa-east-1 | [ami-1695e47a](https://console.aws.amazon.com/ec2/home?region=sa-east-1#LaunchInstanceWizard:ami=ami-1695e47a) |
| ap-south-1 | [ami-29daa046](https://console.aws.amazon.com/ec2/home?region=ap-south-1#LaunchInstanceWizard:ami=ami-29daa046) |
| ap-northeast-1 | [ami-fde8199b](https://console.aws.amazon.com/ec2/home?region=ap-northeast-1#LaunchInstanceWizard:ami=ami-fde8199b) |
| ap-northeast-2 | [ami-0fba6261](https://console.aws.amazon.com/ec2/home?region=ap-northeast-2#LaunchInstanceWizard:ami=ami-0fba6261) |
| ap-southeast-2 | [ami-4a879f29](https://console.aws.amazon.com/ec2/home?region=ap-southeast-2#LaunchInstanceWizard:ami=ami-4a879f29) |
| ap-southeast-1 | [ami-0dc2a76e](https://console.aws.amazon.com/ec2/home?region=ap-southeast-1#LaunchInstanceWizard:ami=ami-0dc2a76e) |

(the above AMIs are of version: 2.0.0)

When launching the instance make sure to use a security group, that only allows incoming traffic on: port 22 (SSH), 80 (HTTP) and 443 (HTTPS). These AMIs are based on Ubuntu so you will need to use the user `ubuntu` when connecting to the instance via SSH.

Now proceed to “[Setup](#setup-redash-instance-setup)”.

### Google Compute Engine

First, you need to add the images to your account:

```
$ gcloud compute images create "redash-1-0-1" --source-uri gs://redash-images/redash.2.0.0.b2990.tar.gz

```

Next you need to launch an instance using this image (n1-standard-1 instance type is recommended).

### Docker Compose

For development environment setup, please refer to the [developer guide](../dev/guide.md) (which includes Docker specific instructions as well).

1. Make sure you have a Docker machine up and running.
2. Make sure your current working directory is the root of this GitHub repository.
3. Use the `docker-compose.production.yml` configuration and modify
   configuration values as needed. For example, you may want to change:
    * The Postgres volume location
    * The value of `REDASH_COOKIE_SECRET` (especially if this instance is not
      just for testing purposes)
4. Run `docker-compose -f docker-compose.production.yml run --rm server create_db` to setup the database.
5. Run `docker-compose -f docker-compose.production.yml up`
6. Run `docker-machine ls`, take note of the ip for the Docker machine you are using, and open the web browser.
7. Visit that Docker machine IP at port 80, and you should see a Redash login screen.

Now proceed to “[Setup](#setup-redash-instance-setup)”.

### Other

Download the [provisioning script](https://raw.githubusercontent.com/getredash/redash/master/setup/ubuntu/bootstrap.sh) and run it on a new machine. Note that:

1. You need to run the script as root.
2. It was tested only on Ubuntu 16.04.
3. It’s designed to run on a “clean” machine. If you’re running this script on a machine that is used for other purposes, you might want to tweak it to your needs.

## <a name="setup-redash-instance-setup"></a> Setup

Once you created the instance with either the image or the script, you should have a running Redash instance with everything you need to get started. Redash should be available using the server IP or DNS name you assigned to it. You can point your browser to this address. 

Before you can continue, it will ask you to create your admin account. Once this is done, you can start using Redash. But to make it useful, there are a few more steps that you need to manually do to complete the setup:

> #### warning::
>
> Make sure to complete the web based setup before using the CLI or proceeding with the rest of the setup.

First ssh to your instance and change directory to `/opt/redash`. If you’re using the GCE image, switch to root (`sudo su`).

### Users & Google Authentication Setup {#google_oauth}

Most of the settings you need to edit are in the `/opt/redash/.env` file.

If you want to use Google OAuth to authenticate users, you need to create a Google Developers project (see [instructions](../setup/how-to-create-a-google-developers-project.md) and then add the needed configuration in the `.env` file:

```
export REDASH_GOOGLE_CLIENT_ID=""
export REDASH_GOOGLE_CLIENT_SECRET=""
```

1. Configure the domain(s) you want to allow to use with Google Apps, by running the command:

```
cd /opt/redash/current
sudo -u redash bin/run ./manage.py org set_google_apps_domains {{domains}}

```

If you’re passing multiple domains, separate them with commas.

1. Restart the web server to apply the configuration changes: `sudo supervisorctl restart redash_server`.
2. Once you have Google OAuth enabled, you can login using your Google Apps account. If you want to grant admin permissions to some users, you can do this by adding them to the admin group (from `/groups` page).
3. If you don’t use Google OAuth or just need username/password logins, you can create additional users by opening the `/users/new` page.

### Data Sources

To make Redash truly useful, you need to setup your data sources in it. Browse to `/data_sources` on your instance, to create new data source connection.

See [_documentation_](https://redash.io/help-onpremise/setup/supported-data-sources-options-reqs.html) for the different options. Your instance comes ready with dependencies needed to setup supported sources.

### Mail Configuration

For the system to be able to send emails (for example when alerts trigger), you need to set the mail server to use and the host name of your Redash server. If you’re using one of our images, you can do this by editing the .env file:

```
# Note that not all values are required, as they have default values.

export REDASH_MAIL_SERVER="" # default: localhost
export REDASH_MAIL_PORT="" # default: 25
export REDASH_MAIL_USE_TLS="" # default: false
export REDASH_MAIL_USE_SSL="" # default: false
export REDASH_MAIL_USERNAME="" # default: None
export REDASH_MAIL_PASSWORD="" # default: None
export REDASH_MAIL_DEFAULT_SENDER="" # Email address to send from

export REDASH_HOST="" # base address of your Redash instance, for example: "https://demo.redash.io"
```

Once you updated the configuration, restart all services with `sudo supervisorctl restart all`.

* Note that not all values are required, as there are default values.
* It’s recommended to use some mail service, like [Amazon SES](https://aws.amazon.com/ses/) or [Mailgun](http://www.mailgun.com/) to send emails to ensure deliverability.

To test email configuration, you can run bin/run ./manage.py send_test_mail (from /opt/redash/current).

### How to upgrade?

It’s recommended to upgrade once in a while your Redash instance to benefit from bug fixes and new features. See [_here_](../maintenance/how-to-upgrade-redash.md) for full upgrade instructions (including Fabric script).

### Configuration

Redash uses environment variables for configuration. For a full list of environment variables, see the [settings article](../setup/settings-environment-variables.md).

> #### primary::
>
> If this is a production setup, you should enforce HTTPS and make sure you set the cookie secret (see [instructions](../setup/ssl-https-setup.md).
