const query = `{
  allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/src/pages/kb/"}}) {
    edges {
      node {
        objectID: id
        frontmatter {
          title
          layout
          parent_category
          category
          slug
          description
        }
        headings {
          value
        }
        text: excerpt
      }
    }
  }
}`

function aritclePath(frontmatter) {
  let path =
    '/help/' + frontmatter.parent_category + '/' + frontmatter.category + '/'
  if (frontmatter.slug) {
    path += frontmatter.slug
  }
  return path
}

function transformer({ data }) {
  // console.log(data)
  return data.allMarkdownRemark.edges.map(edge => {
    return {
      url: aritclePath(edge.node.frontmatter),
      title: edge.node.frontmatter.title,
      parent_category: edge.node.frontmatter.parent_category,
      category: edge.node.frontmatter.category,
      text: edge.node.frontmatter.description || edge.node.text,
      headings: edge.node.headings.map(heading => heading.value),
      objectID: aritclePath(edge.node.frontmatter),
    }
  })
}

const indexName = 'kb'

const queries = [
  {
    query,
    transformer,
    indexName,
    settings: {},
  },
]

module.exports = {
  resolve: `gatsby-plugin-algolia`,
  options: {
    appId: 'QFZW4KBIT0',
    apiKey: process.env.ALGOLIA_API_KEY,
    indexName,
    queries,
    chunkSize: 10000, // default: 1000
  },
}
