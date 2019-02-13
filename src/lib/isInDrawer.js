export default function isInDrawer() {
  const result = false
  // Need try/catch because in server mode this is not available.
  try {
    const urlParams = new URLSearchParams(window.location.search)
    result = !!urlParams.get('drawer-mode')
  } catch (error) {}
  return result
}
