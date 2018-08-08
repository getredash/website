---
category: user-management
parent_category: user-guide
title: Authentication Options (SSO, Google OAuth, SAML)
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






