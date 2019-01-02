import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Layout from 'components/Layout'
import Link from 'components/Link'
import SearchResults from 'components/SearchResults'
import ArticlesList from 'components/ArticlesList'
import QuickNav from 'components/QuickNav'

class HelpPageTemplate extends React.Component {
  constructor(props) {
    super(props)

    this.updateMarkdownContent = this.updateMarkdownContent.bind(this)
  }

  updateMarkdownContent(html) {
    /* Replace Jekyll tags with valid html */
    const calloutStartRE = /{% callout( [a-zA-Z]*)? %}/g
    const calloutEndRE = /{% endcallout %}/g
    const linkRE = /({% |%7B%25%20)link( |%20)([a-zA-Z-_\/.]*)?( %}|%20%25%7D)/g
    let matched
    while ((matched = calloutStartRE.exec(html)) !== null) {
      const type = (matched[1] && matched[1].trim()) || 'primary'
      html = html.replace(
        matched[0],
        `<div className="bs-callout bs-callout-${type}">`
      )
    }
    while ((matched = linkRE.exec(html)) !== null) {
      const link = matched[3] && matched[3].trim()
      if (link) {
        link = link.replace('_kb', '/help').replace('.md', '')
        html = html.replace(matched[0], link)
      }
    }
    html = html.replace(calloutEndRE, '</div>')
    const content = document.createElement('div')
    content.innerHTML = html
    const headings = content.querySelectorAll('h1, h2, h3, h4, h5, h6')
    headings.forEach(heading => {
      heading.id =
        heading.id ||
        heading.textContent.replace(/[\. ,:-]+/g, '-').replace(/-$/, '')
    })
    return content
  }

  render() {
    const {
      location,
      data: {
        Article: { html, frontmatter },
        Parent,
        Section,
      },
    } = this.props
    const content = this.updateMarkdownContent(html)
    return (
      <Layout
        title={frontmatter.title}
        descrtiption={frontmatter.description}
        location={location}
      >
        {frontmatter.keywords && (
          <Helmet>
            <meta name="keywords" content={frontmatter.keywords} />
          </Helmet>
        )}
        <section className="section section--small bg-mutted">
          <div className="container">
            <ol className="breadcrumb">
              <li>
                <Link to="/help">Home</Link>
              </li>{' '}
              <li>{Section && Section.name}</li>{' '}
              {frontmatter.layout !== 'kb-category' && (
                <li>
                  <Link
                    to={`/help/${frontmatter.parent_category}/${
                      frontmatter.category
                    }`}
                  >
                    {Parent.frontmatter.title}
                  </Link>
                </li>
              )}{' '}
              <li className="active">{frontmatter.title}</li>
            </ol>

            <div className="row">
              <div className="col-md-8 col-sm-7 push-xs-down">
                <h1 className="h2 h2--kb-page-title">{frontmatter.title}</h1>
              </div>

              <div className="col-md-4 col-sm-5">
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
          <div className="container content docs">
            {frontmatter.layout === 'kb-category' && (
              <div className="row row--flex">
                <div className="col-md-8 col-sm-7 push-xs-down">
                  <div
                    dangerouslySetInnerHTML={{ __html: content.innerHTML }}
                  />

                  {!frontmatter.hide_topics && (
                    <ArticlesList
                      category={frontmatter.category}
                      parent_category={frontmatter.parent_category}
                    />
                  )}
                </div>

                <div className="col-md-4 col-sm-5">
                  {frontmatter.toc && <QuickNav html={content.innerHTML} />}
                </div>
              </div>
            )}

            {frontmatter.layout !== 'kb-category' && (
              <div className="row row--flex">
                <div className="col-md-4 col-md-push-8 col-sm-5 col-sm-push-7 push-xs-down">
                  {frontmatter.toc && <QuickNav html={content.innerHTML} />}
                </div>
                <div className="col-md-8 col-md-pull-4 col-sm-7 col-sm-pull-5 underline-link-holder">
                  <div
                    dangerouslySetInnerHTML={{ __html: content.innerHTML }}
                  />
                  <hr />
                  <p className="edit-on-github">
                    <small>
                      <Link
                        to={`https://github.com/getredash/website/edit/master/website${
                          location.pathname
                        }.md`}
                        target="_blank"
                      >
                        Edit on GitHub
                      </Link>
                    </small>
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query($category: String!, $parent_category: String, $slug: String) {
    Article: markdownRemark(
      frontmatter: {
        parent_category: { eq: $parent_category }
        slug: { eq: $slug }
        category: { eq: $category }
      }
    ) {
      html
      frontmatter {
        permalink
        title
        description
        keywords
        parent_category
        category
        toc
        layout
        hide_topics
      }
    }

    Parent: markdownRemark(
      frontmatter: { slug: { eq: null }, category: { eq: $category } }
    ) {
      frontmatter {
        title
      }
    }

    Section: kbSectionsYaml(slug: { eq: $parent_category }) {
      name
    }
  }
`

export default HelpPageTemplate
