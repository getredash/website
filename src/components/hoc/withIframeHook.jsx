import React from 'react'

const CLASSNAME = 'drawer'

export default function withIframeHook(Component) {
  return class extends React.Component {
    componentDidMount() {
      if (window.parent !== window) {
        document.body.classList.add(CLASSNAME)
      }
    }

    render() {
      return <Component {...this.props} />
    }
  }
}
