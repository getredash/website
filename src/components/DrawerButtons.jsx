import React from 'react'
import Link from 'components/Link'

export default class DrawerButtons extends React.Component {
  constructor() {
    super()
    this.state = {
      href: '', // this too will work but without '#'
    }
  }

  componentDidMount() {
    this.setState({ href: window.location.href }) // now the full current url
  }

  render() {
    return (
      <div id="drawerButtons">
        <Link to={this.state.href} target="_blank" title="Open in New Window">
          <i className="fa fa-external-link" />
        </Link>
      </div>
    )
  }
}
