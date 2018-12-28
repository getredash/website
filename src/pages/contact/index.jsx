import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from 'components/Layout'
import Link from 'components/Link'

const ContactPage = () => (
  <Layout>
    <Helmet>
      <title>Contact Redash</title>
      <meta name="title" content="Contact Redash" />
    </Helmet>

    <section className="section">
      <div className="container">
        <h1 className="text-center">
          👋
          <br />
          Hey Redash
        </h1>

        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <div className="bs-callout bs-callout-primary">
              <p>
                Please notice this contact form is{' '}
                <strong>
                  only for general inquires and for customers with active
                  subscription.
                </strong>
              </p>

              <p>
                If you are using the open source version of Redash, and need
                support, please use our{' '}
                <Link to="https://discuss.redash.io/">Forum</Link>.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-4">
            <form
              name="contact"
              method="POST"
              className="redash-contact-form"
              action="/contact/thank-you/"
              netlify="true"
            >
              <p className="hidden">
                <label>
                  Don’t fill this out if you're human:{' '}
                  <input name="bot-field" />
                </label>
              </p>

              <div className="form-group">
                <label htmlFor="name">My name is</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  id="name"
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">My email is</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">My message</label>
                <textarea
                  name="message"
                  className="form-control"
                  id="message"
                  placeholder="Message..."
                  rows="3"
                  width="100%"
                  required
                />
              </div>

              <p>
                <button
                  type="submit"
                  className="btn btn-primary btn-lg btn-block"
                >
                  Send message
                </button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default ContactPage
