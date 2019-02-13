import React from 'react'
import Layout from 'components/Layout'
import SectionGetStarted from 'components/SectionGetStarted'

const WhatsNewPage = ({ location }) => (
  <Layout
    title="What's New?"
    description="Learn What's New and What's Coming in Redash"
    location={location}
  >
    <section className="section section--small bg-mutted">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-7 push-xs-down">
            <h1 className="h1 h1--kb-page-title">📦 What's New?</h1>
          </div>
        </div>
      </div>
    </section>

    <section className="section section--small section--kb">
      <div className="container content docs">
        <div className="row row--flex">
          <div className="col-12 underline-link-holder">
            <blockquote>
              This page tracks updates to the{' '}
              <a href="https://app.redash.io">hosted version </a>
              of Redash. If you're using the open source version, you should
              follow the CHANGELOG.
            </blockquote>

            <h3>Coming Up</h3>
            <ul>
              <li>Better dashboard parameters support</li>
              <li>
                Shared ownership of queries and dashboards (already available
                via a feature flag)
              </li>
            </ul>

            <h3>Coming Later</h3>
            <ul>
              <li>Parameters support in embeds</li>
              <li>Dynamic query snippets</li>
            </ul>

            <h3>December 2018</h3>
            <ul>
              <li>
                We have 5 new data sources: Apache Kylin, Databricks, IBM DB2,
                Druid and Rockset.
              </li>
              <li>
                There are fixes and improvements to 11 existing data sources
                (MySQL, Redshift, Postgres, MongoDB, Google BigQuery, Vertica,
                TreasureData, Presto, ClickHouse, Google Sheets and Google
                Analytics).
              </li>
              <li>
                The Query Results data source can now load cached results, just
                use the `cached_query_` prefix instead of `query_`.
              </li>

              <img
                src="https://cdn-images-1.medium.com/max/1600/1*vrq7shvfqzJxy7viQzLwwQ.png"
                title="New Heatmap Visualization (pictured here: when people write their queries)"
              />
            </ul>
            <li>
              On the visualizations front we added a Heatmap visualization and
              updated the table and counter visualizations.
            </li>
            <li>
              Alerts got some fixes and a new destination:
              <a href="https://www.pagerduty.com">PagerDuty</a>.
            </li>
            <li>
              You can now turn live autocomplete on and off in the query editor{' '}
              (
              <a href="http://github.com/getredash/redash/issues/3092">
                although we’re working to make it better
              </a>
              , so you wouldn’t want to).
            </li>
            <li>Fast queries will now load faster. 🏃‍️</li>
            <li>
              We improved the layout of visualizations and content on smaller
              screen sizes. 📱
            </li>
            <li>
              For those of you who like sharing, you can now enable the ability
              to share ownership of queries and dashboards and let others to
              edit them. Check the Settings page to enable this feature.
            </li>
          </div>
        </div>
      </div>
    </section>
    <SectionGetStarted />
  </Layout>
)

export default WhatsNewPage
