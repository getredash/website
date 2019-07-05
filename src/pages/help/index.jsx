import React from 'react'
import { graphql } from 'gatsby'
import Layout from 'components/Layout'
import Link from 'components/Link'
import SearchResults from 'components/SearchResults'
import withIframeHook from 'components/hoc/withIframeHook'
import index from 'data/algolia.js'

class HelpPage extends React.Component {
  constructor(props) {
    super(props)

    this.handleKeyUp = this.handleKeyUp.bind(this)
    this.search = this.search.bind(this)
    this.state = {
      searchQuery: '',
      hits: [],
    }
  }

  handleKeyUp(e) {
    if (e.keyCode === 8) {
      this.search(e)
    }
  }

  search(e) {
    this.setState({ searchQuery: e.target.value }, () => {
      index.search(this.state.searchQuery, (err, content) => {
        if (content && content.query === this.state.searchQuery) {
          this.setState({
            hits: content.hits,
          })
        }
      })
    })
  }

  render() {
    const {
      location,
      data: { Sections, Categories },
    } = this.props

    return (
      <Layout title="Make Your Company Data Driven" location={location}>
        <section className="section bg-mutted">
          <div className="container">
            <h1 className="text-center">Knowledge Base</h1>
            <div className="row">
              <div className="col-sm-8 col-sm-offset-2">
                <form action="" onSubmit={e => e.preventDefault()}>
                  <div className="form-group form-group--search">
                    <input
                      className="form-control input-lg form-control--white search-box"
                      type="text"
                      placeholder="Search for..."
                      value={this.state.searchQuery}
                      onChange={this.search}
                      onKeyUp={this.handleKeyUp}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--small section--kb">
          {this.state.searchQuery.length > 0 && (
            <SearchResults hits={this.state.hits} />
          )}

          {this.state.searchQuery.length === 0 && (
            <div className="container content">
              {Sections.edges.map(({ node }) => (
                <div key={node.id}>
                  <h3>{node.name}</h3>
                  <div className="topics topics--mb-xl">
                    <div className="row row--flex">
                      {Categories.edges
                        .filter(
                          ({ node: { frontmatter } }) =>
                            frontmatter.parent_category === node.slug
                        )
                        .map(({ node: { frontmatter } }) => (
                          <div className="col-sm-4" key={frontmatter.title}>
                            <Link
                              to={`/help/${frontmatter.parent_category}/${
                                frontmatter.category
                              }`}
                              className="topics__item"
                            >
                              {frontmatter.title}
                            </Link>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </Layout>
    )
  }
}

export const categoriesQuery = graphql`
  {
    Sections: allKbSectionsYaml {
      edges {
        node {
          id
          name
          slug
        }
      }
    }

    Categories: allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___order, frontmatter___title] }
      filter: {
        fileAbsolutePath: { regex: "/pages/kb/" }
        frontmatter: { layout: { eq: "kb-category" } }
      }
    ) {
      edges {
        node {
          frontmatter {
            title
            category
            parent_category
            order
          }
        }
      }
    }
  }
`

export default withIframeHook(HelpPage)
