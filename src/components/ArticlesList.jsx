import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Link from 'components/Link'

const ArticlesList = ({
  data: {
    allMarkdownRemark: { edges },
  },
  category,
  parent_category,
}) => (
  <ul className="topics__list list-unstyled">
    {edges
      .filter(({ node: { frontmatter } }) => {
        return (
          frontmatter.category === category &&
          frontmatter.parent_category === parent_category
        )
      })
      .map(({ node: { frontmatter } }, index) => (
        <li className="topics__list__item" key={index}>
          <Link
            to={`/help/${frontmatter.parent_category}/${frontmatter.category}/${
              frontmatter.slug
            }`}
            className="topics__list__link"
          >
            <h4 className="topics__list__title">{frontmatter.title}</h4>
            {frontmatter.description && <p>{frontmatter.description}</p>}
          </Link>
        </li>
      ))}
  </ul>
)

ArticlesList.propTypes = {
  category: PropTypes.string.isRequired,
  parent_category: PropTypes.string.isRequired,
}

export default props => (
  <StaticQuery
    query={graphql`
      {
        allMarkdownRemark(
          sort: {
            order: ASC
            fields: [frontmatter___order, frontmatter___title]
          }
          filter: {
            fileAbsolutePath: { regex: "/pages/kb/" }
            frontmatter: { layout: { ne: "kb-category" } }
          }
        ) {
          edges {
            node {
              frontmatter {
                title
                category
                parent_category
                slug
                description
              }
            }
          }
        }
      }
    `}
    render={data => <ArticlesList data={data} {...props} />}
  />
)
