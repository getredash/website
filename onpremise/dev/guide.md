# Developer Guide

> #### primary::
>
> **This page is a work in progress. [Comments are more than welcome](https://github.com/getredash/redash/issues/1480).**

Redash is a Python (2.7) and Javascript app. To fully run Redash you will also need
PostgreSQL (version 9.3 or newer) and Redis (version 2.8 or newer). While it's not
needed in production, for development you will need a recent version of Node.js
(v6 is recommended).

On the backend we use Flask, Celery and SQLALchemy (along with many other packages) and on
the frontend we use ES6, Angular (1.5) and Webpack for bundling.

> #### primary::
>
> Windows users: while it should be possible to run Redash on a Windows machine,
> we don't know anyone who did this and lived to tell. We recommend using some
> sort of a virtual machine in such case.

## Installing Dependencies

### PostgreSQL & Redis

Refer to the documentation of Python, PostgreSQL, Redis and Node.js on how to install
them in your environment. On macOS, you can use `brew` to install them. On Linux
you can use your package manager, although need to make sure it installs recent
enough versions.

### Python Packages

For development the minimum required packages to install are described in:

* requirements.txt
* requirements_dev.txt

You install them with pip:

```bash
pip install -r requirements.txt -r requirements_dev.txt
```

(We recommend installing them in a virtualenv)

### Node.js Packages

Install all packages with:

```bash
npm install
```

## Configuration

For development, in most cases the default configuration is enough. But if you need
to adjust the database configuration, mail settings or any [other setting](../setup/settings-environment-variables.md),
you do so with environment variables.

To avoid having to export those variables manually, you can use a `.env` file and
the `bin/run` helper script. By invoking any command with `bin/run` prefix, it will
load your environment variables from the `.env` file and then run your command. For
example:

```bash
bin/run ./manage.py check_settings
```

## Creating Database Tables

TBD

## Processes

The main Redash processes you have to run:

* Web server
* Celery worker(s) & scheduler

In development you will also run Webpack's dev server or watch utility.

Our recommendation:

* Web server: `bin/run ./manage.py runserver --debugger --reload`
* Celery: `./bin/run celery worker --app=redash.worker --beat -Qscheduled_queries,queries,celery -c2`
* Webpack dev server: `npm run start`

This will result in a Flask web server listening on port `5000`, Webpack dev server
on port `8080` and 2 Celery workers ready to run queries.

To open the app in your web browser, use Webpack's dev server -- `localhost:8080`,
which will auto reload and refresh whenever you make changes to the frontend code.

## Running Tests

Currently we currently have tests only for the backend code. To run them invoke:

```bash
make test
```

## Additional Resources

* [How to create a new visualization](https://discuss.redash.io/t/how-to-create-new-visualization-types-in-redash/86)
* [How to create a new query runner](https://discuss.redash.io/t/creating-a-new-query-runner-data-source-in-redash/347)

## Getting Help

* [Discussion Forum](https://discuss.redash.io/)
* [Gitter (chat)](https://gitter.im/getredash/redash)
* [Slack Community](http://slack.redash.io/)
