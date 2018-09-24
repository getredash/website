# Redash Website and Knowledge Base

We use Jekyll as our static site generator.

The website is built and hosted with Netlify. When deployed, it runs the [build script](https://github.com/getredash/website/blob/master/bin/build).

## Updating contributors data file

```
npm run fetch-contributors > website/_data/contributors.json
```

## Website development

`npm run dev` will run a Gulp task that will watch for changes and trigger Jekyll or assets build when necessary. Uses port `3200` by default.
