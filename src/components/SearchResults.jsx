import React from 'react'
import Link from 'components/Link'
import PropTypes from 'prop-types'

const SearchResults = ({ hits }) => (
  <div className="container search-results">
    {hits.length > 0 && (
      <div className="hits">
        <ul className="topics__list list-unstyled">
          {hits.map(result => (
            <li className="topics__list__item" key={result.objectID}>
              <a href={result.url} className="topics__list__link">
                <h4
                  className="topics__list__title"
                  dangerouslySetInnerHTML={{
                    __html: result._highlightResult.title.value,
                  }}
                />
                <p
                  dangerouslySetInnerHTML={{
                    __html: result._highlightResult.text.value,
                  }}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    )}
    {hits.length === 0 && (
      <div className="hits-rest">
        <p>
          Didn't find what you're looking for? Try checking our{' '}
          <Link to="https://discuss.redash.io/" target="_blank">
            forum
          </Link>
          .
        </p>
        <p>
          If you're a hosted Redash user or have a support contract, you can
          also contact support.
        </p>
      </div>
    )}
  </div>
)

SearchResults.propTypes = {
  hits: PropTypes.array,
}

export default SearchResults
