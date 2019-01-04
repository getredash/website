import React from 'react'
import { Popover, OverlayTrigger } from 'react-bootstrap'
import Layout from 'components/Layout'
import Link from 'components/Link'
import SectionGetStarted from 'components/SectionGetStarted'

const popover = (id, text) => <Popover id={id}>{text}</Popover>

const PricingPage = ({ location }) => (
  <Layout
    title="Redash as a Service"
    description="Redash offers an affordable hosted solution so you don't need to worry about setting up and updating your Redash servers"
    location={location}
  >
    <section className="section">
      <div className="container">
        <h1 className="text-center mb-xs">
          Try Redash for Free - 30 days, unlimited everything
        </h1>
        <h4 className="text-center font-light">
          Easy setup. Query and visualize in minutes. No credit card required.
        </h4>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <div className="flex-content-center pricing-plan-container">
          <div className="pricing-plan text-center">
            <div className="pricing-body">
              <div>
                <div className="pricing-icon">
                  <img src="/assets/images/pricing-starter.png" />
                </div>
                <div className="pricing-name">Starter</div>
                <div className="pricing-charge">
                  $49<sub>/month</sub>
                </div>
                <div className="pricing-description">
                  <p>Unlimited users</p>
                  <p>3 Data Sources</p>
                  <p>5 Dashboards</p>
                  <p>100 Saved Queries</p>
                  <p>
                    30 minutes minimum{' '}
                    <OverlayTrigger
                      trigger={['hover', 'focus']}
                      placement="top"
                      overlay={popover(
                        1,
                        'How often queries can be scheduled to automatically refresh in the background.'
                      )}
                    >
                      <span className="dotted-helper">
                        automatic refresh frequency
                      </span>
                    </OverlayTrigger>
                  </p>
                  <p>
                    5 minutes maximum{' '}
                    <OverlayTrigger
                      trigger={['hover', 'focus']}
                      placement="top"
                      overlay={popover(
                        2,
                        'How long your query is allowed to run.'
                      )}
                    >
                      <span className="dotted-helper">
                        query execution time
                      </span>
                    </OverlayTrigger>
                  </p>
                </div>
              </div>

              <div className="pricing-notes">
                <Link
                  data-track
                  data-track-location="pricing-lite"
                  data-track-event="Start Trial"
                  to="https://app.redash.io/signup?plan=starter"
                  className="btn btn-primary"
                >
                  Start Trial
                </Link>
              </div>
            </div>
          </div>

          <div className="pricing-plan text-center">
            <div className="pricing-body">
              <div>
                <div className="pricing-icon">
                  <img src="/assets/images/pricing-pro.png" />
                </div>
                <div className="pricing-name">Pro</div>
                <div className="pricing-charge">
                  $99<sub>/month</sub>
                </div>
                <div className="pricing-description">
                  <p>Unlimited Users</p>
                  <p>10 Data Sources</p>
                  <p>50 Dashboards</p>
                  <p>1000 Saved Queries</p>
                  <p>
                    5 minutes minimum{' '}
                    <OverlayTrigger
                      trigger={['hover', 'focus']}
                      placement="top"
                      overlay={popover(
                        1,
                        'How often queries can be scheduled to automatically refresh in the background.'
                      )}
                    >
                      <span className="dotted-helper">
                        automatic refresh frequency
                      </span>
                    </OverlayTrigger>
                  </p>
                  <p>
                    2 hours maximum{' '}
                    <OverlayTrigger
                      trigger={['hover', 'focus']}
                      placement="top"
                      overlay={popover(
                        2,
                        'How long your query is allowed to run.'
                      )}
                    >
                      <span className="dotted-helper">
                        query execution time
                      </span>
                    </OverlayTrigger>
                  </p>
                </div>
              </div>

              <div className="pricing-notes">
                <Link
                  data-track
                  data-track-location="pricing-startup"
                  data-track-event="Start Trial"
                  to="https://app.redash.io/signup?plan=pro"
                  className="btn btn-primary"
                >
                  Start Trial
                </Link>
              </div>
            </div>
          </div>
          <div className="pricing-plan text-center">
            <div className="pricing-body">
              <div>
                <div className="pricing-icon">
                  <img src="/assets/images/pricing-business.png" />
                </div>
                <div className="pricing-name">Business</div>
                <div className="pricing-charge">
                  $450<sub>/month</sub>
                </div>
                <div className="pricing-description">
                  <p>Unlimited Users</p>
                  <p>Unlimited Data Sources</p>
                  <p>Unlimited Dashboards</p>
                  <p>Unlimited Saved Queries</p>
                  <p>
                    1 minute minimum{' '}
                    <OverlayTrigger
                      trigger={['hover', 'focus']}
                      placement="top"
                      overlay={popover(
                        1,
                        'How often queries can be scheduled to automatically refresh in the background.'
                      )}
                    >
                      <span className="dotted-helper">
                        automatic refresh frequency
                      </span>
                    </OverlayTrigger>
                  </p>
                  <p>
                    12 hours maximum{' '}
                    <OverlayTrigger
                      trigger={['hover', 'focus']}
                      placement="top"
                      overlay={popover(
                        2,
                        'How long your query is allowed to run.'
                      )}
                    >
                      <span className="dotted-helper">
                        query execution time
                      </span>
                    </OverlayTrigger>
                  </p>
                  <p>Audit logging</p>
                  <p>Group permissions</p>
                  <p>SAML SSO</p>
                </div>
              </div>
              <div className="pricing-notes">
                <Link
                  data-track
                  data-track-location="pricing-business"
                  data-track-event="Start Trial"
                  to="https://app.redash.io/signup?plan=business"
                  className="btn btn-primary"
                >
                  Start Trial
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 text-center m-t-25">
            <i className="silver">
              Fair use policy: We reserve the right to contact and limit users
              who exceed what we consider fair use.
            </i>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 text-center on-premise-container">
            <h3>Self Hosted Redash</h3>
            <div className="on-premise-box">
              <p>
                You can run the open source version of Redash free of charge on
                your own servers.{' '}
                <Link
                  to="https://redash.io/help/open-source/setup"
                  target="_blank"
                >
                  Setup Guide →
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section section--small">
      <div className="container text-center">
        <h2>Redash is trusted by thousands of companies around the globe</h2>
        <img src="/assets/images/elements/users-list-strip.png" width="100%" />
      </div>
    </section>

    <section className="section">
      <div className="container">
        <h2 className="text-center mb-lg h1">Frequently asked questions</h2>
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <div className="content-item">
              <h3 className="font-regular">
                What is included in the 30-day free trial?
              </h3>
              <p>
                All the features and capabilities Redash has to offer -
                collaborative cloud based query editor, visualization tools,
                auto-updating dashboards, alerts and integrations. The first
                month has unlimited everything, so you could really try it out.
                Once the trial is over and you select your plan the volumes will
                get restricted accordingly.
              </p>
            </div>

            <div className="content-item">
              <h3 className="font-regular">
                Do you offer educational or non-profit discounts?
              </h3>
              <p>
                Yes. If you are a legally recognized educational or non-profit
                organization, we can offer a discount. Please
                <Link to="/contact">contact us</Link> after starting your trial.
              </p>
            </div>

            <div className="content-item">
              <h3 className="font-regular">What is a saved query?</h3>
              <p>Any query that you save and has a URL you can share.</p>
            </div>
            <div className="content-item">
              <h3 className="font-regular">Is my data secure with Redash?</h3>
              <p>We're hosted on AWS and follow best practices:</p>
              <ul>
                <li>
                  All our servers are in a private network and are not
                  accessible from the Internet, except for the load balancer and
                  a bastion server for SSH (that does not have any credentials
                  on it).
                </li>
                <li>HTTPS/SSL for everything.</li>
                <li>2FA for our internal systems.</li>
              </ul>

              <p>
                If you have any specific concerns, please{' '}
                <Link to="/contact">contact</Link> us and we'll be happy to
                help.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <SectionGetStarted />
  </Layout>
)

export default PricingPage
