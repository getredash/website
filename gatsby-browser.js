exports.onRouteUpdate = ({ location }) => {
  if (
    typeof window !== 'undefined' &&
    (!location.action || location.action === 'push')
  ) {
    setTimeout(() => {
      window.scrollTo(0, 0)
    })
  }
}
