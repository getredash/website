# Redash Website and Knowledge Base

We use Gatsby as our static site generator. The website is built and hosted with Netlify.

## Updating contributors data file

```
npm run fetch-contributors > website/_data/contributors.json
```

## Website development

To start Gatsby in development mode and serve the the website on `http://localhost:8000` use:

```
yarn run develop
```

If you prefer Gatsby listen on an interface or IP address other than localhost, use:

```
yarn run develop -H ip_address
```

For example:

```
yarn run develop -H 10.11.12.13
```

Using a DNS name in place of an IP address will also work, assuming the DNS entry resolves
to an IP address on the local machine.  This can be achieved through editing your /etc/hosts.
