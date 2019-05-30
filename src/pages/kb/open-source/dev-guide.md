---
category: dev-guide
parent_category: open-source
title: Developer Guide
layout: kb-category
permalink: /help/open-source/dev-guide
order: 3
hide_topics: true
---

Redash is a Python (2.7) and Javascript app. To fully run Redash you will also need
PostgreSQL (version 9.5 or newer) and Redis (version 2.8 or newer). While it's not
needed in production, for development you will need a recent version of Node.js
(latest LTS version is recommended).

On the backend we use Flask, Celery and SQLALchemy (along with many other packages) and on
the frontend we use ES6, Angular (1.5) and Webpack for bundling.

{% callout %}
Windows users: while it should be possible to run Redash on a Windows machine, we don't know anyone who did this and lived to tell. We recommend using some sort of a virtual machine or Docker in such case.
{% endcallout %}

## Setup

* [Docker Based Developer Installation Guide]({% link _kb/open-source/dev-guide/docker.md %}) (recommended for beginners)
* [Debugging a Redash Server on Docker Using Visual Studio Code]({% link _kb/open-source/dev-guide/debugging.md %})
* [Developer Installation Guide]({% link _kb/open-source/dev-guide/setup.md %}) (recommended for experienced developers)
* [Using a remote server and installing locally only the frontend dependencies]({% link _kb/open-source/dev-guide/remote-server.md %})
* [Frontend End-to-End Tests]({% link _kb/open-source/dev-guide/end-to-end-tests.md %})

## Additional Resources

* [How to create a new visualization](https://discuss.redash.io/t/how-to-create-new-visualization-types-in-redash/86)
* [How to create a new query runner](https://discuss.redash.io/t/creating-a-new-query-runner-data-source-in-redash/347)

## Getting Help

* [Discussion Forum](https://discuss.redash.io/c/development)
