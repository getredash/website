import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from 'components/Layout'
import SectionGetStarted from 'components/SectionGetStarted'

const CaseStudiesPage = () => (
  <Layout>
    <Helmet>
      <title>Case Studies</title>
      <meta name="title" content="Case Studies" />
      <meta
        name="description"
        content="Stories about how Redash is being used"
      />
    </Helmet>

    <section className="section">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center">
            <h1 className="">Case Studies</h1>
            <p>
              See how various organizations use Redash to build a data-driven
              business
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <a
              data-track
              href="/case-studies/stasher/"
              className="featured-customer case-study-item"
            >
              <img
                src="/img/customers/stasher.jpg"
                alt="Stasher logo"
                className="customer-logo"
              />
              <h2>Stasher</h2>
              <p>
                Stasher uses Redash to track KPIs and collaborate with partners
              </p>
              <button className="btn btn-secondary">Learn more →</button>
            </a>

            <a
              data-track
              href="/case-studies/bubbleiq/"
              className="featured-customer case-study-item"
            >
              <img
                src="/img/customers/bubbleiq.png"
                alt="BubbleIQ logo"
                className="customer-logo"
              />
              <h2>BubbleIQ</h2>
              <p>
                BubbleIQ uses Redash to support sales, save engineering time and
                report towards investors
              </p>
              <button className="btn btn-secondary">Learn more →</button>
            </a>
          </div>
          <div className="col-md-6">
            <a
              data-track
              href="/case-studies/studio71/"
              className="featured-customer case-study-item"
            >
              <img
                src="/img/customers/studio71.png"
                alt="Studio71 logo"
                className="customer-logo"
              />
              <h2>Studio71</h2>
              <p>
                Studio71 uses Redash to build a data driven culture, save time
                and support sales and talent management
              </p>
              <button className="btn btn-secondary">Learn more →</button>
            </a>
          </div>
        </div>
      </div>
    </section>

    <SectionGetStarted />
  </Layout>
)

export default CaseStudiesPage
