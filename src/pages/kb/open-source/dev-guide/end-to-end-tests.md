---
category: dev-guide
parent_category: open-source
title: Frontend End-to-End Tests
slug: end-to-end-tests
---

{% callout %}
The E2E tests are based in the [Docker Based Developer Installation]({% link _kb/open-source/dev-guide/docker.md %}), so make sure you have it if need to run our tests locally.
{% endcallout %}

## Running E2E tests locally

Redash uses Cypress for E2E tests and its dependencies are not installed by default, so first you will need to install them:
```bash
npm run cypress:install
```

Stop your development environment if it's running:
```bash
docker-compose stop
```

If you just want to run the tests and get a report you can run `npm run cypress`. In case you want to create/change tests it's recommended to run the commands separately:

1. Start the server:
```bash
npm run cypress start
```
2. Seed data:
```bash
npm run cypress db-seed
```
3. Open Cypress interface:
```bash
npm run cypress open
```
5. Change what you need and explore Cypress, you can refer to [their documentantion](https://docs.cypress.io/). To keep frontend code in sync with the server you can use:
```bash
npm run watch
```
6. When done, stop the server (this will also reset tests state):
```bash
npm run cypress stop
```
