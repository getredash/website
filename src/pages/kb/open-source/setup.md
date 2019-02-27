---
category: setup
parent_category: open-source
title: Setting up a Redash Instance
toc: true
layout: kb-category
order: 1
---

## Create an Instance

For basic deployments we recommend a minimum of 2GB of RAM and reasonable amount of CPU allocation. As usage grows you might need additional RAM and CPU power to support increased number of background workers and API processes.

To create an instance, you have the following options:

1. [AWS EC2 AMI](#aws)
2. [Google Compute Engine Image](#gce)
3. [Other](#other)
4. [Docker](#docker)

### <a name="aws"></a> AWS

Launch the instance with the pre-baked AMI we create (for small deployments t2.small should be enough):

| Region | AMI |
| ------------- | -------------|
| us-east-1 | [ami-0c654c3ab463d22f6](https://console.aws.amazon.com/ec2/home?region=us-east-1#LaunchInstanceWizard:ami=ami-0c654c3ab463d22f6) |
| us-east-2 | [ami-009571af26dc2a231](https://console.aws.amazon.com/ec2/home?region=us-east-2#LaunchInstanceWizard:ami=ami-009571af26dc2a231) |
| us-west-1 | [ami-0f01ea8717350fb36](https://console.aws.amazon.com/ec2/home?region=us-west-1#LaunchInstanceWizard:ami=ami-0f01ea8717350fb36) |
| us-west-2 | [ami-0e164aeccb29a1be7](https://console.aws.amazon.com/ec2/home?region=us-west-2#LaunchInstanceWizard:ami=ami-0e164aeccb29a1be7) |
| eu-west-1 | [ami-0d2cad8c08ea629b5](https://console.aws.amazon.com/ec2/home?region=eu-west-1#LaunchInstanceWizard:ami=ami-0d2cad8c08ea629b5) |
| eu-west-2 | [ami-0a33a6ac6a556f82d](https://console.aws.amazon.com/ec2/home?region=eu-west-2#LaunchInstanceWizard:ami=ami-0a33a6ac6a556f82d) |
| eu-west-3 | [ami-000cdecb7942d1bb5](https://console.aws.amazon.com/ec2/home?region=eu-west-3#LaunchInstanceWizard:ami=ami-000cdecb7942d1bb5) |
| eu-central-1 | [ami-026f66c6ba3cedf99](https://console.aws.amazon.com/ec2/home?region=eu-central-1#LaunchInstanceWizard:ami=ami-026f66c6ba3cedf99) |
| ap-south-1 | [ami-06f0212e0421ac789](https://console.aws.amazon.com/ec2/home?region=ap-south-1#LaunchInstanceWizard:ami=ami-06f0212e0421ac789) |
| ap-northeast-1 | [ami-0c7d9b740e997aa69](https://console.aws.amazon.com/ec2/home?region=ap-northeast-1#LaunchInstanceWizard:ami=ami-0c7d9b740e997aa69) |
| ap-northeast-2 | [ami-0666f50746c473b4e](https://console.aws.amazon.com/ec2/home?region=ap-northeast-2#LaunchInstanceWizard:ami=ami-0666f50746c473b4e) |
| sa-east-1 | [ami-089fb47d4de9cd2ff](https://console.aws.amazon.com/ec2/home?region=sa-east-1#LaunchInstanceWizard:ami=ami-089fb47d4de9cd2ff) |
| ca-central-1 | [ami-092f8e28acda0fb0e](https://console.aws.amazon.com/ec2/home?region=ca-central-1#LaunchInstanceWizard:ami=ami-092f8e28acda0fb0e) |
| ap-southeast-1 | [ami-0f62f9ad30c784647](https://console.aws.amazon.com/ec2/home?region=ap-southeast-1#LaunchInstanceWizard:ami=ami-0f62f9ad30c784647) |
| ap-southeast-2 | [ami-00174774b5620691a](https://console.aws.amazon.com/ec2/home?region=ap-southeast-2#LaunchInstanceWizard:ami=ami-00174774b5620691a) |

(the above AMIs are of version: 5.0.2)

When launching the instance make sure to use a Security Group, that only allows incoming traffic on ports: 22 (SSH), 80 (HTTP) and 443 (HTTPS). These AMIs are based on Ubuntu so you will need to use the user `ubuntu` when connecting to the instance via SSH.

Now proceed to “[Setup](#setup-redash-instance-setup)”.

### <a name="gce"></a> Google Compute Engine

To get started on GCE, run the following commands in your [Cloud Shell](https://console.cloud.google.com/compute/instances?cloudshell=true).

First, you need to add the Redash image to your account:

```
$ gcloud compute images create "redash-5-0-2" --source-uri gs://redash-images/redash.5.0.2-b5486-build2.tar.gz
```

Next, you need to launch an instance using this image. The `n1-standard-1` [machine type](https://cloud.google.com/compute/docs/machine-types#standard_machine_types) is recommended. You can launch an instance using the image with the command below (you may need to specify the [zone](https://cloud.google.com/compute/docs/regions-zones/#available) of the instance with the `--zone` [parameter](https://cloud.google.com/sdk/gcloud/reference/compute/instances/create#--zone)):

```
$ gcloud compute instances create redash --image redash-5-0-2
```

Now proceed to “[Setup](#setup-redash-instance-setup)”.

### <a name="other"></a> Other

The AWS and Google Compute Engine images are created using our [Setup Script](https://github.com/getredash/redash/tree/master/setup), which is designed to run on Ubuntu 18.04 server. You can either use the script as is (if you intend to run it on Ubuntu) or use it as a blueprint to create your own setup.

What the script does is:

1. Install Docker and Docker Compose.
2. Download our recommended [Docker Compose configuration](https://github.com/getredash/redash/blob/master/setup/docker-compose.yml) and create initial configuration.
3. Start everything.

Note that the script assumes you are running it on a "clean" machine. If you’re running this script on a machine that is used for other purposes, you might want to tweak it to your needs.

### <a name="docker"></a> Docker

For development environment setup, please refer to the [developer guide]({% link _kb/open-source/dev-guide.md %}) (which includes Docker specific instructions as well).

For every Redash release we also create updated [Docker image](https://hub.docker.com/r/redash/redash). Our image follows best practices and can be used in any container orchestation platforms like Kubernetes, ECS or just simply with Docker Compose (which we use in our images).

To run Redash you need several instances of Redash (API server and background workers to run queries) along with Redis and PostgreSQL. If you don't want or can't use our images or [Setup Script](https://github.com/getredash/redash/tree/master/setup), you can refer to the [Docker Compose configuration](https://github.com/getredash/redash/blob/master/setup/docker-compose.yml) to understand what services you need to define.

## <a name="setup-redash-instance-setup"></a> Setup

Once you created the instance with either the image or the script, you should have a running Redash instance with everything you need to get started. Redash should be available using the server IP or DNS name you assigned to it. You can point your browser to this address. 

Before you can continue, it will ask you to create your admin account. Once this is done, you can start using Redash. 

![Initial Setup Screen](/assets/images/docs/redash_initial_setup.png)

{% callout warning %}
Make sure to complete the web based setup before using the CLI or proceeding with the rest of the setup.
{% endcallout %}

To make your setup more complete, there are a few more steps that you need to manually do:

### Mail Configuration

For the system to be able to send emails (user invites, password resets, when alerts trigger and more), you need to configure Redash with the mail server you use. Mail server configuration is done using Envrionment Variables. If you’re using one of our images, you can do this by editing the `/opt/redash/env` file.

The relevant configuration variables are (note that not all of them are required):

* `REDASH_MAIL_SERVER` (default: localhost)
* `REDASH_MAIL_PORT` (default: 25)
* `REDASH_MAIL_USE_TLS` (default: false)
* `REDASH_MAIL_USE_SSL` (default: false)
* `REDASH_MAIL_USERNAME` (default: None)
* `REDASH_MAIL_PASSWORD` (default: None)
* `REDASH_MAIL_DEFAULT_SENDER` (Email address to send from)

Also you need to set the value of `REDASH_HOST`, which is the base address of your Redash instance (the DNS name or IP) with the protocol, so for example: `https://demo.redash.io`.

Once you updated the configuration, restart all services (`docker-compose up -d`, running `docker-compose restart` won't be enough as it won't read changes to env file). To test email configuration, you can run `docker-compose run --rm server manage send_test_mail`.

It’s recommended to use some mail service, like [Amazon SES](https://aws.amazon.com/ses/) or [Mailgun](http://www.mailgun.com/) to send emails to ensure deliverability.

### Google OAuth Setup

If you want to use Google OAuth to authenticate users, you need to create a Google Developers project (see [instructions]({% link _kb/open-source/admin-guide/google-developer-account-setup.md %}) and then add the needed configuration in the `/opt/redash/env` file:

* `REDASH_GOOGLE_CLIENT_ID` (Google OAuth Client ID)
* `REDASH_GOOGLE_CLIENT_SECRET` (Google OAuth Client Secret)

Once updated, restart the web server (`docker-compose up -d server`). Once enabled, Redash will use Google OAuth to authenticate _existing_ user accounts. To enable automatic user creation who belong to a specific domain name, you can add this domain (or more) in the setting page:

![](/assets/images/docs/redash_google_oauth_domain.png)

### Other Configuration Options

Redash uses environment variables for configuration. For a full list of environment variables, see the [settings article]({% link _kb/open-source/admin-guide/env-vars-settings.md %}).


### HTTPS

{% callout %}
If this is a production setup, you should enforce HTTPS and make sure you set the cookie secret (see [instructions]({% link _kb/open-source/admin-guide/https-ssl-setup.md %})).
{% endcallout %}

## How to upgrade?

It’s recommended to upgrade when new releases are available to benefit from bug fixes and new features. See [_here_]({% link _kb/open-source/admin-guide/how-to-upgrade.md %}) for full upgrade instructions.
