const path = require('path')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const textPageTemplate = path.resolve('src/templates/TextPage.jsx')
  const narrowTextPageTemplate = path.resolve(
    'src/templates/NarrowTextPage.jsx'
  )
  const dataSourcesTemplate = path.resolve('src/templates/DataSourcePage.jsx')

  return graphql(`
    {
      TextPages: allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/pages/text_pages/" }
          frontmatter: { path: { ne: null } }
        }
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }

      NarrowTextPages: allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/pages/narrow_text_pages/" }
          frontmatter: { path: { ne: null } }
        }
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }

      DataSources: allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/pages/data_sources/" }
          frontmatter: { path: { ne: null } }
        }
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }
    result.data.TextPages.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: textPageTemplate,
        context: {},
      })
    })

    result.data.NarrowTextPages.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: narrowTextPageTemplate,
        context: {},
      })
    })

    result.data.DataSources.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: dataSourcesTemplate,
        context: {},
      })
    })
  })
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        components: path.resolve(__dirname, 'src/components'),
        scss: path.resolve(__dirname, 'src/scss'),
      },
    },
  })
}
