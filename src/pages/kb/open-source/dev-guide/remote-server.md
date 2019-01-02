---
category: dev-guide
parent_category: open-source
title: Using a Remote Server and Installing Locally only the Frontend Dependencies
slug: remote-server
---

If you want to work only on the frontend side of Redash, and have a Redash instance
deployed already (running version 1.0.0 or newer), you can use this instance as
your API server and run locally only the webpack dev-server.

The setup in this case is very simple:

1. [Install Node.js](https://nodejs.org/en/download/) (v6 or later is recommended, can be installed with Homebrew on OS/X)
2. Git clone the repository.
3. Change to the repository directory, and install npm packages: `npm install`.
4. Start webpack dev-server: `REDASH_BACKEND="URL of your redash server" npm run start`.

The `REDASH_BACKEND=""` part of the command sets the URL of your remote Redash server.
