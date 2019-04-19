---
category: users
parent_category: user-guide
title: Authentication Options (SSO, Google OAuth, SAML)
slug: authentication-options
---

Authentication settings are available in the `Settings`>`Settings` tab.

![](/assets/images/docs/gitbook/settings-saml.png)

{% callout %}
Only admins can view and change authentication settings.
{% endcallout %}

There are 3 authentication related settings here:

1. Enable/disable password based login.
2. Google SSO: add Google Apps based domains to allow login from. Any user with a Google account from these domain(s) will be able to login. If they don't have an account yet, an account will be automatically created.
3. Enable/disable SAML support.

Once you enable SAML, additional settings will appear:

![](/assets/images/docs/gitbook/saml-details.png)

1. SAML Metadata URL is required to make SAML authentication work. You can get this URL from your SAML provider like [OneLogin](https://www.onelogin.com/connector/redash).
2. Set up Redash callback URL in your SAML provider: `https://app.redash.io/saml/callback?org_slug=<organization name>`. If you have single organization name, set `default` as value for org_slug.
3. Within SAML provider, map user fields FirstName and LastName to matching values as those two fields are mandatory for user creation.

By default any user created with SAML/SSO will join the default group. It's possible to configure the SAML provider to pass what groups the user should join by setting the `RedashGroups` parameter. If you use OneLogin's predefined Redash application, it will always pass this parameter, meaning that even for existing users, it will override their current groups memberships. Hence you need to make sure it's up to date.

### How to Configure Okta

Redash uses SAML 2.0 which makes it compatible with Okta. To get started, create a new application inside the Okta control panel. Choose `Web` as a platform. The sign-on method is `SAML 2.0`.

On the next page you need to enter the same URL in a few places. The Redash endpoint is: `https://app.redash.io/org-slug/saml/callback`

{% callout info %}
Make sure you replace `org-slug` in this URL with the unique slug for your organization.

{% endcallout %}

Okta expects this in a few different places:

+ Single sign on URL
+ Recipient URL
+ Destination URL
+ Audience URI

The Name Id format is `EmailAddress`.
The Application username is `Email`

You also need to add two attribute statements:

| Name | Value |
|------|-------|
|FirstName|user.firstName|
|LastName|user.lastName|

Make any necessary changes and then finish the setup.

Next you need to provide Okta's information to Redash. For the `SAML Metadata URL`, look under the **Sign On** tab of your Okta settings for a link called "Identity Provider Metadata" and paste it into Redash.

From the **Sign On** tab in Okta you can view your application-specific endpoints. Just click the "View Setup Instructions" button. Paste the "Identity Provider Single Sign-On URL" into Redash's `SAML Entity ID` field.

Finally, look for the IDP metadata (a blob of XML markup). Within this XML text you will see a key called `<md:NameIDFormat>`. Paste the contents of this tag into Redash's `SAML NameID Format` box. For example: `urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress`

Your changes on this screen will save automatically.

You can now log in to Redash using Okta SSO.