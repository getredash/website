---
category: dev-guide
parent_category: open-source
title: Docker Based Developer Installation Guide
slug: docker
---

## Installing Docker, Docker Compose and Node.js

We will use Docker to run all the services needed for Redash, except for Node.js
which we will run locally.

1. [Install Docker and Docker Compose](https://docs.docker.com/engine/installation/).
2. [Install Node.js](https://nodejs.org/en/download/) (14.16.1 or newer, can be
   installed with Homebrew on OS/X)
3. Install Yarn (1.22.10 or newer): `npm install --global yarn@1.22.10`

## Setup

### Clone the Git repository

First you will need to clone the Git repository:

```bash
git clone https://github.com/getredash/redash.git
cd redash/
```

### Create .env

Create an `.env` file under the project root, and specify a value for `REDASH_COOKIE_SECRET` environment variable.

```
REDASH_COOKIE_SECRET=mysecret
```

### Create Docker Services

Once you have the above setup, you need to create the Docker services:

```bash
docker-compose up -d
```

This will build the Docker images and fetch some prebuilt images and then start
the services (Redash web server, worker, PostgreSQL and Redis). You can refer to
the `docker-compose.yml` file to see the full configuration.

If you hit an `errno 137` or `errno 134` particularly at `RUN yarn build`, make
sure you give your Docker VM enough memory (4GB or more).

### Install Node Packages

```bash
yarn --frozen-lockfile
```

### Create Database

```bash
# Create tables
docker-compose run --rm server create_db

# Create database for tests
docker-compose run --rm postgres psql -h postgres -U postgres -c "create database tests"
```

### Health Check for Installation

{% callout warning %}
After your installation is complete, you can do the healthcheck by calling `/ping` API endpoint.
{% endcallout %}

```
RESPONSE

PONG.
```

## Usage

### Run webpack Dev Server

Once all Docker services are running (can be started either by
`docker-compose up` or `docker-compose start`), Redash is available at
`http://localhost:5000/`.

While we will use webpack's dev server, we still need to build the frontend
assets at least once, as some of them used for static pages (login page and
such):

```bash
yarn build
```

To work on the frontend code, you need to use the webpack dev server, which you
start with:

```bash
yarn start
```

Now the dev server is available at `http://localhost:8080`. It rebuilds the
frontend code when you change it and refreshes the browser. All the API calls
are proxied to `localhost:5000` (the server running in Docker).

### Installing new Python packages (requirements.txt)

If you pulled a new version with new packages or added some yourself, you will
need to rebuild the `server` and `worker` images:

```bash
docker-compose build worker
docker-compose build server
```

### Running Tests

```bash
docker-compose run --rm server tests
```

Before running tests for the first time, you need to create a database for
tests:

```bash
docker-compose run --rm postgres psql -h postgres -U postgres -c "create database tests;"
```

### Debugging

See [Debugging a Redash Server on Docker Using Visual Studio
Code]({% link _kb/open-source/dev-guide/debugging.md %})
