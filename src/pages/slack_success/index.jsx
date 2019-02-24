import React from 'react'
import Layout from 'components/Layout'
import SectionSlackExamples from 'components/SectionSlackExamples'

const SlackSuccessPage = ({ location }) => (
  <Layout title="Make Your Company Data Driven" location={location}>
    <section className="section section--hero bg-blue-gray">
      <div className="container">
        <h1 className="text-center text-white mb-xs">
          <strong>Success!</strong> Now please complete the setup.
        </h1>
        <div style={{ 'padding-top': '10px' }}>
          <img
            src="/assets/images/slack_setup.png"
            alt="Slack chat example"
            className="img-responsive"
            style={{ margin: '0 auto' }}
          />
        </div>
      </div>
    </section>

    <SectionSlackExamples />
  </Layout>
)

export default SlackSuccessPage
