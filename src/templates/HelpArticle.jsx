import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Layout from 'components/Layout'
import Link from 'components/Link'
import SearchResults from 'components/SearchResults'
import ArticlesList from 'components/ArticlesList'
import QuickNav from 'components/QuickNav'
import withIframeHook from 'components/hoc/withIframeHook'
import index from 'data/algolia.js'

class HelpPageTemplate extends React.Component {
  constructor(props) {
    super(props)

    this.updateMarkdownContent = this.updateMarkdownContent.bind(this)
    this.handleKeyUp = this.handleKeyUp.bind(this)
    this.search = this.search.bind(this)
    this.state = {
      htmlContent: null,
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
    this.setState({
      searchQuery: e.target.value,
    })
    setTimeout(() => {
      index.search(this.state.searchQuery, (err, content) => {
        this.setState({
          hits: content.hits,
        })
      })
    })
  }

  updateMarkdownContent(html) {
    /* Replace Jekyll tags with valid html */
    const calloutStartRE = /{% callout( [a-zA-Z]*)? %}/g
    const calloutEndRE = /{% endcallout %}/g
    const rawStartRE = /{%( |)raw( |)%}/g
    const rawEndRE = /{%( |)endraw( |)%}/g
    const linkRE = /({% |%7B%25%20)link( |%20)([a-zA-Z-_\/.]*)?( %}|%20%25%7D)/g
    let matched
    while ((matched = calloutStartRE.exec(html)) !== null) {
      const type = (matched[1] && matched[1].trim()) || 'primary'
      html = html.replace(
        matched[0],
        `<div class="bs-callout bs-callout-${type}">`
      )
    }
    html = html.replace(calloutEndRE, '</div>')
    while ((matched = linkRE.exec(html)) !== null) {
      const link = matched[3] && matched[3].trim()
      if (link) {
        link = link.replace('_kb', '/help').replace('.md', '')
        html = html.replace(matched[0], link)
      }
    }
    html = html.replace(rawStartRE, '<pre>').replace(rawEndRE, '</pre>')

    return html
  }

  updateContentAnchors() {
    const headings = document
      .getElementById('pageContent')
      .querySelectorAll('h1, h2, h3, h4, h5, h6')
    headings.forEach(heading => {
      heading.id =
        heading.id ||
        heading.textContent.replace(/[\. ,:-]+/g, '-').replace(/-$/, '')
    })
  }

  componentWillMount() {
    const htmlContent = this.updateMarkdownContent(this.props.data.Article.html)
    this.setState({
      htmlContent: htmlContent,
    })
  }

  componentDidMount() {
    this.updateContentAnchors()
    window.onload = () => {
      if (window.location.hash) {
        const anchor = document.getElementById(window.location.hash.substr(1))
        window.scrollTo(0, anchor.getBoundingClientRect().top)
      }
    }
  }

  render() {
    const {
      location,
      data: {
        Article: { frontmatter, parent },
        Parent,
        Section,
      },
    } = this.props

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
              )}
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
            <div className="container content docs">
              {frontmatter.layout === 'kb-category' && (
                <div className="row row--flex">
                  <div className="col-md-8 col-sm-7 push-xs-down">
                    <div
                      id="pageContent"
                      dangerouslySetInnerHTML={{
                        __html: this.state.htmlContent,
                      }}
                    />

                    {!frontmatter.hide_topics && (
                      <ArticlesList
                        category={frontmatter.category}
                        parent_category={frontmatter.parent_category}
                      />
                    )}
                  </div>

                  <div className="col-md-4 col-sm-5">
                    {frontmatter.toc && (
                      <QuickNav html={this.state.htmlContent} />
                    )}
                  </div>
                </div>
              )}

              {frontmatter.layout !== 'kb-category' && (
                <div className="row row--flex">
                  <div className="col-md-4 col-md-push-8 col-sm-5 col-sm-push-7 push-xs-down quick-nav">
                    {frontmatter.toc && (
                      <QuickNav html={this.state.htmlContent} />
                    )}
                  </div>
                  <div className="col-md-8 col-md-pull-4 col-sm-7 col-sm-pull-5 underline-link-holder">
                    <div
                      id="pageContent"
                      dangerouslySetInnerHTML={{
                        __html: this.state.htmlContent,
                      }}
                    />
                    <hr />
                    <p className="edit-on-github">
                      <small>
                        <Link
                          to={`https://github.com/getredash/website/edit/master/src/pages/${
                            parent.relativePath
                          }`}
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
          )}
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
      parent {
        ... on File {
          relativePath
        }
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

export default withIframeHook(HelpPageTemplate)
