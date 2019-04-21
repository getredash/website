import React from 'react'
import Layout from 'components/Layout'
import Link from 'components/Link'
import { navigateTo } from 'gatsby-link'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

class ContactForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigateTo(form.getAttribute('action')))
      .catch(error => alert(error))
  }

  render() {
    return (
      <form
        name="contact"
        method="post"
        action="/contact/thank-you/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={e => this.handleSubmit(e)}
      >
        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
        <input type="hidden" name="form-name" value="contact" />

        <div className="form-group">
          <label htmlFor="name">My name is</label>
          <input
            type="text"
            className="form-control"
            name="name"
            id="name"
            placeholder="Your name"
            required
            onChange={e => this.handleChange(e)}
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
            onChange={e => this.handleChange(e)}
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
            onChange={e => this.handleChange(e)}
          />
        </div>

        <p>
          <button type="submit" className="btn btn-primary btn-lg btn-block">
            Send message
          </button>
        </p>
      </form>
    )
  }
}

const ContactPage = ({ location }) => (
  <Layout title="Contact Redash" location={location}>
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
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default ContactPage
