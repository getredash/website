import React from 'react'

const SectionSlackExamples = () => (
  <section className="section section--small text-center">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h3>Search for Queries</h3>
          <p>
            Use the <code>/redash</code> slash command to search for Redash
            queries to add to the conversation.
            <img
              src="/assets/images/slack_slash_command.png"
              alt="Slash Command Example"
              className="img-responsive"
              style={{ margin: '0 auto' }}
            />
          </p>
        </div>
        <div className="col-md-6">
          <h3>Embed Redash URLs</h3>
          <p>
            Convert Redash URLs in your conversation into rich embeds with
            preview of the visualization.
            <img
              src="/assets/images/slack_preview.png"
              alt="Slash Attachment Example"
              className="img-responsive"
              style={{ margin: '0 auto' }}
            />
          </p>
        </div>
      </div>
    </div>
  </section>
)

export default SectionSlackExamples
