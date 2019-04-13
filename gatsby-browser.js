exports.onRouteUpdate = ({ location }) => {
  window.analytics && window.analytics.page()
  if (window.location.hash) {
    if (document.readyState === 'complete') {
      scrollToAnchor()
    } else {
      window.addEventListener('load', scrollToAnchor)
    }
  }
}

function scrollToAnchor() {
  // setTimeout for Safari, to ensure window load completed (tested 10/10 with 100ms)
  setTimeout(() => {
    const el = document.querySelector(`${window.location.hash}`)
    el && el.scrollIntoView()
  }, 100)
}
