---
category: users
parent_category: user-guide
title: Authentication Options (SSO, Google OAuth, SAML)
toc: true
slug: authentication-options
---

Authentication settings are available in the `Settings`>`Settings` tab.

![](/assets/images/docs/gitbook/authentication-options.png)

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

It takes just a couple of minutes to setup Redash with Okta over the SAML 2.0 protocol. Start in your Okta control panel by clicking the button to add a new application. Choose `Web` as the platform. The sign-on method is `SAML 2.0`. On the next screen Okta has fields for a few URLs:

+ Single Sign On URL
+ Recipient URL
+ Destination URL
+ Audience URI

You will use the same value in all of these fields. For SaaS customers, the URL is: `https://app.redash.io/org-slug/saml/callback`

{% callout info %}
Make sure you replace `org-slug` in this URL with the unique slug for your organization.
{% endcallout %}

If you are using a self-hosted version of Redash, you will need to use the URL `https://<Your Self-Hosted Domain>/saml/callback?org_slug=default`

After you fill in these URLs, set the Name Id format to `EmailAddress`. The Application username is `Email`. You also need to add two attribute statements and then save your changes:

|    Name |     Value    |
|---------|--------------|
|FirstName|user.firstName|
|LastName |user.lastName |

Next you will provide Okta's information to Redash. Navigate to the `Settings` tab under the Redash settings menu. Toggle the `SAML Enabled` option. Three fields will appear. For the `SAML Metadata URL`, look under the **Sign On** tab of your Okta settings for a link called "Identity Provider Metadata" and paste the link into Redash. This link will point to an XML document on Okta's server.

To get the `SAML Entity ID`, click the "View Setup Instructions" button in Okta's **Sign On** tab. Paste the "Identity Provider Single Sign-On URL" into Redash's `SAML Entity ID` field.  

Lastly, look for the "IDP metadata" on the setup instructions page in Okta. The "IDP metadata" is a blob of XML that contains a key called `<md:NameIDFormat>`. Paste its contents into Redash's `SAML NameID Format` box. For example: `urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress`

Your changes on this screen will save automatically. Now you can login to Redash using your Okta credentials.

You can now log in to Redash using Okta SSO.

### How to Configure Auth0

1. Create a traditional webapp
2. Under add-ons, enable SAML2
3. In the SAML2 config set up the callback URL:
   - For SaaS customers, the URL is: `https://app.redash.io/org-slug/saml/callback`
   - For Open Source users, the URL is: `https://[YOUR_REDASH_HOSTNAME]/saml/callback?org_slug=default`
4. In the SAML2 config use the following settings JSON:

```
{
  "mappings": {
    "given_name": "FirstName",
    "family_name": "LastName"
  },
  "passthroughClaimsWithNoMapping": false,
  "includeAttributeNameFormat": false
}
```

Within Redash, use the following config:
  
- SAML Metadata URL: `https://[YOUR_TENANT_HOSTNAME]/samlp/metadata/[CONNECTION_ID]`
- SAML Entity ID: `urn:auth0:[YOUR_TENANT_NAME]:[CONNECTION_NAME]`
- SAML NameID Format: `EmailAddress`

These changes were drawn from our [user forum](https://discuss.redash.io/t/auth0-integration/586/5).
