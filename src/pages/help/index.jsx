import React from 'react'
import { graphql } from 'gatsby'
import Layout from 'components/Layout'
import Link from 'components/Link'
import SearchResults from 'components/SearchResults'

const HelpPage = ({ location, data: { Sections, Categories } }) => (
  <Layout title="Make Your Company Data Driven" location={location}>
    <section className="section bg-mutted">
      <div className="container">
        <h1 className="text-center">Knowledge Base</h1>
        <div className="row">
          <div className="col-sm-8 col-sm-offset-2">
            <form action="">
              <div className="form-group form-group--search">
                <input
                  className="form-control input-lg form-control--white search-box"
                  type="text"
                  placeholder="Search for..."
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    <section className="section section--small section--kb">
      <SearchResults />

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
    </section>
  </Layout>
)

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
      sort: { order: ASC, fields: [frontmatter___order] }
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

export default HelpPage
