exports.onRouteUpdate = ({ location }) => {
  window.analytics && window.analytics.page()
}
