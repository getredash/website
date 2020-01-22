---
category: dev-guide
parent_category: open-source
title: Developer Installation Guide
slug: setup
---

## Installing Dependencies

### PostgreSQL & Redis

Refer to the documentation of Python (3), PostgreSQL (9.5 or newer), Redis (2.8.3 or newer) and Node.js (v12 or newer) on how to install them in your environment. On MacOS, you can use `brew` to install them. On Linux you can use your package manager, although need to make sure it installs recent enough versions.

### Python Packages

For development the minimum required packages to install are described in:

- `requirements.txt`
- `requirements_dev.txt`

You install them with pip:

```bash
pip install -r requirements.txt -r requirements_dev.txt
```

(We recommend installing them in a virtualenv. For using some data source types, you need to install additional dependencies from `requirements_all_ds.txt`.)

### Node.js Packages

Install all packages with:

```bash
npm install
```

First time build assets:

```bash
npm run build
```

## Configuration

For development, in most cases the default configuration is enough. But if you need
to adjust the database configuration, mail settings or any [other setting](../admin-guide/env-vars-settings.md),
you do so with environment variables.

## Creating Database Tables

```bash
./manage.py database create_tables
```

## Processes

The main Redash processes you have to run:

- Web server
- RQ worker(s) & scheduler

In development you will also run Webpack's dev server or watch utility.

Our recommendation:

- Web server: `./manage.py runserver --debugger --reload`
- RQ: `./manage.py rq worker`
- RQ Scheduler: `./manage.py rq scheduler`
- Frontend watch process to rebuild changes: `npm run watch`

This will result in a Flask web server listening on port `5000`, Webpack rebuilding changes to the frontend, RQ worker ready to run queries and RQ scheduler to enqueue periodic tasks.

## Running Tests

Backend tests:

```bash
pytest tests/
```

Frontend tests using Cypress:

TBD.
