import React from 'react'
import { Link as GatsbyLink } from 'gatsby'

class Link extends React.Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
    this.trackable = false
  }

  handleClick(e) {
    const { children, to, activeClassName, ...other } = this.props

    if (!other['data-track'] || !window.analytics) {
      return
    }
    const element = e.target
    const eventName = other['data-track-event'] || 'Clicked Link'

    analytics.trackLink(element, eventName, {
      location: other['data-track-location'],
      text: element.textContent,
      category: 'Home Page',
      page: document.location.pathname,
      pageTitle: document.title,
      type: element.tagName.toLowerCase(),
    })
  }

  render() {
    const { children, to, activeClassName, ...other } = this.props
    const internal = /^\/(?!\/)/.test(to)

    if (internal) {
      return (
        <GatsbyLink
          to={to}
          activeClassName={activeClassName}
          {...other}
          onClick={this.handleClick}
        >
          {children}
        </GatsbyLink>
      )
    }
    return (
      <a href={to} {...other} onClick={this.handleClick}>
        {children}
      </a>
    )
  }
}

export default Link
