import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from 'components/Layout'
import Link from 'components/Link'
import ContributorCard from 'components/ContributorCard'
import SectionGetStarted from 'components/SectionGetStarted'

const ProductPage = () => (
  <Layout>
    <Helmet>
      <title>Redash is an Open Source company</title>
      <meta name="title" content="Redash is an Open Source company" />
      <meta
        name="description"
        content="Meet our team and get to know the story behind Redash"
      />
    </Helmet>

    <section className="section section--pt-lg">
      <div className="container">
        <div className="row">
          <div className="col-sm-5 col-sm-offset-2">
            <img
              src="/img/elements/computing-on-a-chart.png"
              width="30%"
              className="visible-xs"
            />
            <h1>Redash is an Open Source Company</h1>
            <p className="highlight-p">
              We're here to democratize data and make data driven decision
              making easy
            </p>

            <Link
              data-track
              data-track-location="about-hero"
              track-event="Clicked How Redash Started"
              to="https://medium.com/@arikfr/the-journey-from-side-project-to-open-source-company-taking-the-first-step-8e8259ac80cb"
              target="_blank"
              className="btn btn-secondary btn-lg m-t-25"
            >
              Read how Redash started →
            </Link>
          </div>
          <div className="col-sm-3 text-right hidden-xs">
            <img src="/img/elements/computing-on-a-chart.png" width="250px" />
          </div>
        </div>
      </div>
    </section>

    <section className="section p-t-25 p-b-10 section__os--content">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 text-center">
            <h2>Meet Our Team</h2>
          </div>
        </div>
      </div>
    </section>

    <section className="section p-t-0 section__os--contributor-list">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="contributor-list contributor-list--team">
              <ContributorCard
                name="Arik Fraimovich"
                photo="/img/contributors/arikfr.jpg"
                github="https://github.com/arikfr"
                twitter="https://twitter.com/arikfr"
              />

              <ContributorCard
                name="Levko Kravets"
                photo="/img/contributors/kravets-levko.jpg"
                github="https://github.com/kravets-levko"
              />

              <ContributorCard
                name="Zsolt Kocsmarszky"
                photo="/img/contributors/kocsmy.jpg"
                github="https://github.com/kocsmy"
                twitter="https://twitter.com/kocsmy"
              />

              <ContributorCard
                name="Omer Lachish"
                photo="/img/contributors/rauchy.jpg"
                github="https://github.com/rauchy"
                twitter="https://twitter.com/rauchy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <SectionGetStarted />
  </Layout>
)

export default ProductPage
