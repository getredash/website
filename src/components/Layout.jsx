import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import Header from 'components/Header'
import Footer from 'components/Footer'

import 'scss/main.scss'

export const RESET_URL = 'reset'
export function reportUrlChange(arg) {
  // should match https://git.io/fjzPu
  const data = {
    type: 'iframe_url',
    message: arg === RESET_URL ? '' : window.location.href,
  }
  window.parent.postMessage(data, '*')
}

export default ({ children, title, description, location }) => {
  useEffect(() => {
    window.addEventListener('hashchange', reportUrlChange)
    reportUrlChange()
    return () => window.removeEventListener('hashchange', reportUrlChange)
  }, [])

  return (
    <div className="wrapper">
      <Helmet>
        <title>{title || 'Make Your Company Data Driven'}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="Query, SQL, Visualize, Data, Insights, Dashboard, Alert, Alerts, web based sql client, integration, integrations, Amazong Redshift, BigQuery, PotsgreSQL, MySQL, TreasureData, MS SQL Server, MongoDB, ElasticSearch, Hive, Google Spreadsheets, Impala, InfluxDB, Presto, ScyllaDB, Cassandra, Amazon DynamoDB, Python, Vertica, Graphite, Stitch, URL"
        />
        <link rel="icon" href="/assets/images/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/assets/images/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/assets/images/favicon-16x16.png"
        />

        <meta name="format-detection" content="telephone=no" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta
          property="og:url"
          content={`https://redash.io${location && location.pathname}`}
        />
        <meta
          property="og:image"
          content="https://redash.io/assets/images/social-facebook-1200x630.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@getredash" />
        <meta name="twitter:creator" content="@getredash" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta
          name="twitter:image"
          content="https://redash.io/assets/images/social-twitter-600x314.png"
        />

        <script src="/assets/scripts/a.js" />
      </Helmet>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
