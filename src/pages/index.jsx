import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from 'components/Layout'
import SectionUsers from 'components/SectionUsers'
import SectionIntegrations from 'components/SectionIntegrations'
import SectionGetStarted from 'components/SectionGetStarted'

const Homepage = () => (
  <Layout>
    <Helmet>
      <title>Redash helps you make sense of your data</title>
      <meta name="title" content="Redash helps you make sense of your data" />
      <meta
        name="description"
        content="Use Redash to connect to any data source (Redshift, BigQuery, MySQL, PostgreSQL, MongoDB and many others), query, visualize and share your data to make your company data driven."
      />
    </Helmet>

    <section className="section section--hero">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <h1 className="mb-xs">Redash helps you make sense of your data</h1>
            <h3 className="font-light">
              Connect and query your data sources, build dashboards to visualize
              data and share them with your company.
            </h3>
            <a
              data-track
              data-track-location="hero"
              track-event="Clicked Get Started"
              href="https://app.redash.io/signup"
              className="btn btn-primary btn-lg"
            >
              Get Started
            </a>
            <p className="weekly-signups">
              <span>879 businesses signed up last week</span>
            </p>
          </div>
          <div className="col-md-7 hidden-xs hidden-sm">
            <div className="browser-container hidden-xs">
              <img src="/img/elements/browser-header.png" />
              <video
                width="100%"
                height="100%"
                autoPlay
                loop
                muted
                id="main-video"
              >
                <source
                  src="/img/elements/redash-intro-720.mp4"
                  type="video/mp4"
                />
                <source
                  src="/img/elements/redash-intro-720.ogv"
                  type="video/ogg"
                />
                <source
                  src="/img/elements/redash-intro-720.webm"
                  type="video/webm"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>

    <SectionUsers />

    <section className="section section__feature section__feature--query">
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <img
              src="/img/elements/write-queries.png"
              id="write-query-illustrated"
              className="visible-xs"
            />

            <h2>Write queries effectively</h2>

            <p className="highlight-p">
              Enjoy the power and comfort of a SQL client with the collaborative
              advantages of a cloud based service.
            </p>

            <ul className="highlight-ul">
              <li>Powerful online SQL editor</li>
              <li>Browse schema and click-to-insert</li>
              <li>Create snippets and reuse them</li>
            </ul>
          </div>
          <div className="col-sm-6 hidden-xs">
            <img
              src="/img/elements/write-queries.png"
              id="write-query-illustrated"
            />
          </div>
        </div>
      </div>
    </section>

    <section className="section section__feature section__feature--visualize">
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <img
              src="/img/elements/visualize-data.png"
              id="visualize-illustrated"
            />
          </div>
          <div className="col-sm-6">
            <h2>Visualize your data on dashboards</h2>

            <p className="highlight-p">
              Always see the big, easy to digest picture for deeper
              understanding and better decision making.
            </p>

            <ul className="highlight-ul">
              <li>Drag & Drop and resize any visualization</li>
              <li>Schedule refresh from your data sources</li>
              <li>Share dashboards with your team or with the public</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section className="section section__more-features">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-lg-offset-2 col-xs-12 p-0 flex-content-center flex">
            <div className="feature-container">
              <img src="/img/elements/icon-api.png" width="64px" />
              <h4>API</h4>
            </div>

            <div className="feature-container">
              <img src="/img/elements/icon-alerts.png" width="64px" />
              <h4>Alerts</h4>
            </div>

            <div className="feature-container">
              <img src="/img/elements/icon-user-management.png" width="64px" />
              <h4>User Management</h4>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 text-center">
            <br />
            <a
              data-track
              data-track-location="features"
              track-event="Clicked All Redash Features"
              href="/product/"
              className="btn btn-secondary"
            >
              All Redash Features
            </a>
          </div>
        </div>
      </div>
    </section>

    <SectionIntegrations />

    <section className="section section__open-source">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-lg-offset-2 col-sm-5 col-sm-offset-1">
            <img
              src="/img/elements/open-source.png"
              id="open-source-illustrated"
              className="visible-xs"
            />
            <h2>Redash is a popular Open Source project</h2>
            <p className="highlight-p">
              Customize and add features, no lock-in, contribute back to the
              community
            </p>
            <a
              data-track
              data-track-location="open-source"
              track-event="Clicked Community"
              href="/community/"
              className="btn btn-secondary"
            >
              Our Community
            </a>
          </div>

          <div className="col-lg-4 col-sm-5 text-right hidden-xs">
            <img
              src="/img/elements/open-source.png"
              id="open-source-illustrated"
            />
          </div>
        </div>
      </div>
    </section>

    <SectionGetStarted />
  </Layout>
)

export default Homepage
