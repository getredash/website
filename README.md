# redash.io

Currently this is a mashup of a Jekyll website and a GitBook:

- [Main website and Knowledge Base](https://github.com/getredash/website/tree/master/website) (Jekyll)
- [On Premise Setup and Maintenance Guide](https://github.com/getredash/website/tree/master/onpremise) (GitBook)

The website is built and hosted with Netlify. When deployed, it runs the [bulid script](https://github.com/getredash/website/blob/master/bin/build).
Each part can be developed separately using each tool's live preview (`serve` command).

Eventually we will switch to a single tool (Jekyll) for all the parts.

## Updating contributors data file

```
npm run fetch-contributors > website/_data/contributors.js
```

## Website

```
npm run dev
```

