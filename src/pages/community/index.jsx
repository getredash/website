import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from 'components/Layout'
import Link from 'components/Link'
import SectionGetStarted from 'components/SectionGetStarted'

const CommunityPage = ({
  location,
  data: {
    allContributorsJson: { totalCount, edges },
  },
}) => {
  const contributorsAmount = totalCount - (totalCount % 10)
  return (
    <Layout
      title="Redash is built by the open source community"
      description="More than 200 contributors and years of constant development..."
      location={location}
    >
      <Helmet>
        <script async defer src="https://buttons.github.io/buttons.js" />
      </Helmet>

      <section className="section section--pt-lg section__os--hero">
        <div className="container">
          <div className="row">
            <div className="col-sm-7">
              <img
                src="/assets/images/elements/open-source.png"
                id="open-source-illustrated"
              />
            </div>
            <div className="col-sm-5">
              <h1>
                Redash is built by the open source community of{' '}
                {contributorsAmount}+ contributors
              </h1>
              <Link
                className="github-button"
                to="https://github.com/getredash/redash"
                data-icon="octicon-star"
                data-size="large"
                data-show-count="true"
                aria-label="Star getredash/redash on GitHub"
                target="_blank"
              >
                Star
              </Link>{' '}
              <Link
                className="github-button"
                to="https://github.com/getredash"
                data-size="large"
                aria-label="Follow @getredash on GitHub"
                target="_blank"
              >
                Follow @getredash
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section p-t-25 section__os--content">
        <div className="container">
          <div className="row text-center">
            <div className="col-sm-4">
              <h1>{contributorsAmount}+</h1>
              <p>Total contributors</p>
            </div>

            <div className="col-sm-4">
              <h1>2100+</h1>
              <p>Forks</p>
            </div>

            <div className="col-sm-4">
              <h1>1500</h1>
              <p>Days of constant building and shipping</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section p-t-25 p-b-10 section__os--content">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center">
              <h2>Our contributors</h2>
            </div>
          </div>
        </div>
      </section>

      <section className="section p-t-0 section__os--contributor-list">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="contributor-list text-center">
                {edges.map(({ node }) => (
                  <div className="contributor-pics" key={node.id}>
                    <Link to={node.html_url} target="_blank">
                      <img src={node.avatar_url} width="64px" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="row m-t-25">
          <div className="col-md-12 text-center">
            <p>
              <Link
                to="https://github.com/getredash/redash/graphs/contributors"
                target="_blank"
              >
                All contributors →
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className="section p-t-0">
        <div className="container">
          <div className="row">
            <div className="col-sm-8 col-sm-offset-2 text-center">
              <h2 className="serif">
                "Project maintainers are responsible for clarifying the
                standards of acceptable behavior and are expected to take
                appropriate and fair corrective action in response to any
                instances of unacceptable behavior."
              </h2>

              <Link
                data-track
                data-track-location="open-source"
                track-event="Clicked Code of Conduct"
                to="/community/code_of_conduct"
                className="btn btn-secondary"
              >
                Our Code of Conduct
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section__os--feature-bug">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="card card--blue">
                <h3>Got a feature request?</h3>
                <p>
                  Check out our Forum for more and open a new topic. Looking
                  forward to hear more!
                </p>

                <Link
                  data-track
                  data-track-location="open-source"
                  track-event="Clicked Go to Forum"
                  to="https://discuss.redash.io/c/feature-requests"
                  className="btn btn-secondary"
                  target="_blank"
                >
                  Go to Redash Forum →
                </Link>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card card--red">
                <h3>Need Support?</h3>
                <p>
                  Check out our support forum and ask help from our community.
                </p>

                <Link
                  data-track
                  data-track-location="open-source"
                  track-event="Clicked go to Forum"
                  to="https://discuss.redash.io/c/support"
                  className="btn btn-secondary"
                  target="_blank"
                >
                  Go to Support Forum →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionGetStarted />
    </Layout>
  )
}

export const customersQuery = graphql`
  {
    allContributorsJson {
      totalCount
      edges {
        node {
          id
          html_url
          avatar_url
        }
      }
    }
  }
`

export default CommunityPage
