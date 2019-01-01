import React from 'react'
import Layout from 'components/Layout'
import Link from 'components/Link'
import SectionSlackExamples from 'components/SectionSlackExamples'

const SlackPage = ({ location }) => (
  <Layout title="Make Your Company Data Driven" location={location}>
    <section className="section section--hero">
      <div className="container">
        <h1 className="text-center mb-xs">Bring data to your conversations</h1>
        <div className="text-center mb-sm" style={{ paddingTop: '10px' }}>
          <Link to="https://dashbot.redash.io/login">
            <img
              alt="Add to Slack"
              height="40"
              width="139"
              src="https://platform.slack-edge.com/img/add_to_slack.png"
              srcSet="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x"
            />
          </Link>
        </div>

        <div style={{ paddingTop: '10px' }}>
          <img
            src="/assets/images/elements/slack-redash.png"
            alt="Slack chat example"
            className="img-responsive center-block img-rounded img--has-shadow"
            width="75%"
            style={{ margin: '0 auto' }}
          />
        </div>
      </div>
    </section>

    <SectionSlackExamples />
  </Layout>
)

export default SlackPage
