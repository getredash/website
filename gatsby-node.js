const path = require('path')

exports.createPages = ({ actions: { createPage }, graphql }) => {
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

      KnowledgeBase: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/pages/kb/" } }
      ) {
        edges {
          node {
            frontmatter {
              category
              parent_category
              slug
              layout
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
        component: path.resolve('src/templates/TextPage.jsx'),
        context: {},
      })
    })

    result.data.NarrowTextPages.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: path.resolve('src/templates/NarrowTextPage.jsx'),
        context: {},
      })
    })

    result.data.DataSources.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: path.resolve('src/templates/DataSourcePage.jsx'),
        context: {},
      })
    })

    result.data.KnowledgeBase.edges.forEach(
      ({
        node: {
          frontmatter: { category, parent_category, slug },
        },
      }) => {
        const slugPath = slug ? `/${slug}` : ''
        const pagePath = `/help/${parent_category}/${category}${slugPath}`
        createPage({
          path: pagePath,
          component: path.resolve('src/templates/HelpArticle.jsx'),
          context: {
            category,
            parent_category,
            slug,
          },
        })
      }
    )
  })
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        components: path.resolve(__dirname, 'src/components'),
        data: path.resolve(__dirname, 'src/data'),
        scss: path.resolve(__dirname, 'src/scss'),
      },
    },
  })
}
