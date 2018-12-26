import React from 'react'

const GetStarted = () => (
  <section className="section section--small get-started">
    <div className="container">
      <div className="row get-started--signup text-center">
        <div className="col-sm-12 p-0">
          <h3 className="mb-xs">
            Get started with Redash and build more data-driven future
          </h3>
          <a
            data-track
            data-track-location="get-started"
            data-track-event="Clicked Get Started"
            href="https://app.redash.io/signup"
            className="btn btn-lg btn-primary"
          >
            Sign Up Free
          </a>
        </div>
      </div>
    </div>
  </section>
)

export default GetStarted
