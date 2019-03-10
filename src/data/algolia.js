import algoliasearch from 'algoliasearch/lite'

const searchClient = algoliasearch(
  'QFZW4KBIT0',
  '1c74ec31459a537e57b2c94a01d061b7'
)

const index = searchClient.initIndex('kb')

export default index
