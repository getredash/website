---
category: dev-guide
parent_category: open-source
title: Frontend End-to-End Tests
slug: end-to-end-tests
---

Redash uses [Cypress]([https://cypress.io](https://www.cypress.io/)) for E2E tests, running as the CI build check "frontend-e2e-tests"  on each pull request.
Test specs are located in the folder `/client/cypress/integrations`. 

-------------


## Running E2E tests locally

#### Prerequisites
1. If you haven't already, install Redash's [Docker services]({% link _kb/open-source/dev-guide/docker.md %}) first.

2. Install Cypress:
    ```bash
   npm run cypress:install
   ```
3. Stop your development environment, if currently running:
   ```bash
   docker-compose stop
   ```

<br />

#### Run tests
Run the full test suite with a detailed report:
```bash
npm run cypress
```
<br />

#### Create, edit and debug tests
If you wish to change, observe and debug tests as they run, we recommend using the Cypress interface.

1. Start the Cypress server:
   ```bash
   npm run cypress start
   ```
2. Seed initial data:
   ```bash
   npm run cypress db-seed
   ```
3. Open the Cypress interface:
   ```bash
   npm run cypress open
   ```
   Now you can select and run individual test suites, set breakpoints and logs, utilize Chrome Developer Tools, etc. You can refer to [their documentantion](https://docs.cypress.io/).

   Any changes to a test will trigger its rerun.
If you make changes to Redash frontend code though, make sure to keep it in sync by running the following command in parallel:
   ```bash
   npm run watch
   ```
4. When you're done, stop the server:
   ```bash
   npm run cypress stop
   ```
   This will also reset tests state.

<br /><br />

For any question on installations, troubleshooting and best practices, please refer to our [forum](https://discuss.redash.io).
