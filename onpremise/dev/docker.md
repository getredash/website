# Docker Based Developer Installation Guide

## Installing Docker, Docker Compose and Node.js

We will use Docker to run all the services needed for Redash, except for Node.js
which we will run locally.

1. [Install Docker and Docker Compose](https://docs.docker.com/engine/installation/).
2. [Install Node.js](https://nodejs.org/en/download/) (v6 or later is recommended, can be installed with Homebrew on OS/X)

## Setup

### Create Docker Services
Once you have the above setup, you need to create the Docker services:

```bash
docker-compose up
```

This will build the Docker images and fetch some prebuilt images and then start the services
(Redash web server, worker, PostgreSQL and Redis). You can refer to the `docker-compose.yml`
file to see the full configuration.

### Install npm Packages

```bash
npm install
```

### Create Database

```bash
# Create tables
docker-compose run --rm server create_db

# Create database for tests
docker-compose run --rm postgres psql -h postgres -U postgres -c "create database tests"
```

## Usage

### Run webpack Dev Server

Once all Docker services are running (can be started either by `docker-compose up` or
`docker-compose start`), Redash is available at `http://localhost:5000/`.

While we will use webpack's dev server, we still need to build the frontend assets at least once, as some of them used for static pages (login page and such):

```bash
npm run build
```

To work on the frontend code, you need to use the webpack dev server, which you start with:

```bash
npm run start
```

Now the dev server is available at `http://localhost:8080`. It rebuilds the frontend
code when you change it and refreshes the browser. All the API calls are proxied to
`localhost:5000` (the server running in Docker).

### Restarting Celery Workers

The Web server will restart on code changes, but the Celery workers won't. To restart
the Celery workers run:

```
docker-compose restart worker
```

(or just stop `docker-compose up` and run it again)

### Installing new Python packages (requirements.txt)

If you pulled a new version with new packages or added some yourself, you will need to
rebuild the `server` and `worker` images:

```bash
docker-compose rebuild worker
docker-compose rebuild server
```

### Running Tests

```bash
docker-compose run --rm server tests
```

Before running tests for the first time, you need to create a database for tests:

```bash
docker-compose run --rm postgres psql -h postgres -U postgres -c "create database tests;"
```

## Configuration

TBD.
