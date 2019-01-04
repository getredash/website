/* To use index export you must have API key with correct rights */

const algoliasearch = require('algoliasearch/lite')
const searchClient = algoliasearch(
  'QFZW4KBIT0',
  '1c74ec31459a537e57b2c94a01d061b7'
)
const index = searchClient.initIndex('docs')
const fs = require('fs')
const browser = index.browseAll()
const hits = []

browser.on('result', function onResult(content) {
  hits = hits.concat(content.hits)
})

browser.on('end', function onEnd() {
  fs.writeFile('browse.json', JSON.stringify(hits, null, 2), 'utf-8', function(
    err
  ) {
    if (err) throw err
    console.log('Your index has been exported!')
  })
})

browser.on('error', function onError(err) {
  throw err
})
