# Redash Website and Knowledge Base

We use Gatsby as our static site generator. The website is built and hosted with
Netlify.

## Updating contributors data file

```
npm run fetch-contributors > website/_data/contributors.json
```

## Website development

### Gatsby Installed Locally

**This seems to depend on Node v10. Until the dependencies updated to support
newer versions of Node, you can use the Docker setup.**

To start Gatsby in development mode and serve the the website on
`http://localhost:8000` use:

```
yarn run develop
```

If you prefer Gatsby listen on an interface or IP address other than localhost,
use:

```
yarn run develop -H ip_address
```

For example:

```
yarn run develop -H 10.11.12.13
```

Using a DNS name in place of an IP address will also work, assuming the DNS
entry resolves to an IP address on the local machine. This can be achieved
through editing your /etc/hosts.

### Docker Setup

First install dependencies:

```
docker-compose run --rm gatsby install
```

On first run, it will build the Docker image we're using. Once the npm modules
were installed, you can run the following to start the dev server:

```
docker-compose up -d
```

This will run `gatsby develop` in the Docker container in the background,
listening on [`http://localhost:8000`](http://localhost:8000). The first time
you run this command it might take a few moments for Gatsby to compile the
website. You can check progress by tailing the logs:

```
docker-compose logs -f
```

You can edit the project locally and the changes will be reflected inside the
Docker container.
