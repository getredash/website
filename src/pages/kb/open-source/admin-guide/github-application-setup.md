---
category: admin-guide
parent_category: open-source
title: How to Create a Github Application
slug: github-application-setup
---

1. Sign into the Github and open Developer settings / OAuth Apps.
2. Likely you will need to create a new application in Github, so click [`New OAuth App`](https://github.com/settings/applications/new).
   ![Create new application](/assets/images/docs/github_oauth_1.png)
3. Give your application a name, like "Redash",
   In the Authorized redirect URIs section, put the address of your Redash instance suffixed by `/oauth/github_callback` (i.e. `https://redash.acme.com/oauth/github_callback`).
   Click create.
   ![Give application name](/assets/images/docs/github_oauth_2.png)

4. Copy your client ID and secret.
   ![Copy Client ID and Secret](/assets/images/docs/github_oauth_3.png)

5. Add the following to your environment variables (`.env` file or Docker
configuration):

    - `REDASH_GITHUB_CLIENT_ID`: Github client Id. **[Required]**
    - `REDASH_GITHUB_CLIENT_SECRET`: Github client secret. **[Required]**
