import React from 'react'
import Layout from 'components/Layout'
import Link from 'components/Link'
import SectionSlackExamples from 'components/SectionSlackExamples'

const SlackFailurePage = ({ location }) => (
  <Layout title="Make Your Company Data Driven" location={location}>
    <section className="section section--hero bg-blue-gray">
      <div className="container">
        <h1 className="text-center text-white mb-xs">
          Something went wrong... want to try again?
        </h1>
        <div className="text-center mb-sm" style={{ 'padding-top': '10px' }}>
          <Link to="https://dashbot.redash.io/login">
            <img
              alt="Add to Slack"
              height="40"
              width="139"
              src="https://platform.slack-edge.com/img/add_to_slack.png"
              srcset="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x"
            />
          </Link>
        </div>
      </div>
    </section>

    <SectionSlackExamples />
  </Layout>
)

export default SlackFailurePage
