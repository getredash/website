import React from 'react'
import Link from 'components/Link'

const SearchResults = () => (
  <div className="container search-results hidden">
    <div className="hits" />
    <div className="hits-rest">
      <p>
        Didn't find what you're looking for? Try checking our{' '}
        <Link to="https://discuss.redash.io/" target="_blank">
          forum
        </Link>
        .
      </p>
      <p>
        If you're a hosted Redash user or have a support contract, you can also
        contact support.
      </p>
    </div>
  </div>
)

export default SearchResults
