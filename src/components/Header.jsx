import React from 'react'
import Link from 'components/Link'

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.toggleDropdown = this.toggleDropdown.bind(this)
    this.state = {
      open: false,
    }
  }

  toggleDropdown(e) {
    e.preventDefault()
    const currentState = this.state.open
    this.setState({ open: !currentState })
  }

  render() {
    return (
      <nav className="navbar navbar-fixed-top navbar-has-shadow">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <Link className="navbar-brand" to="/">
              <img
                src="/assets/images/elements/redash-logo.svg"
                className="navbar-brand__img"
                alt=""
              />
            </Link>
          </div>

          <div className="collapse navbar-collapse" id="navbar-collapse">
            <ul className="nav navbar-nav navbar-left">
              <li>
                <Link data-track data-track-location="header" to="/product/">
                  Product
                </Link>
              </li>
              <li>
                <Link data-track data-track-location="header" to="/customers/">
                  Customers
                </Link>
              </li>
              <li>
                <Link
                  data-track
                  data-track-location="header"
                  to="/case-studies/"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link data-track data-track-location="header" to="/community/">
                  Community
                </Link>
              </li>
              <li>
                <Link data-track data-track-location="header" to="/pricing/">
                  Pricing
                </Link>
              </li>
              <li
                className={`dropdown ${this.state.open ? 'open' : null}`}
                onClick={this.toggleDropdown}
              >
                <Link
                  to="#"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Help
                  <span className="caret" />
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/help/">Knowledge Base</Link>
                  </li>
                  <li>
                    <Link to="https://discuss.redash.io/">Forum</Link>
                  </li>
                </ul>
              </li>
            </ul>

            <ul className="nav navbar-nav navbar-right">
              <li>
                <Link
                  data-track
                  data-track-location="header"
                  to="https://app.redash.io/"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  data-track
                  data-track-location="header"
                  track-event="Clicked Get Started"
                  to="https://app.redash.io/signup"
                  className="btn btn-primary navbar-btn"
                >
                  Get Started
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header
