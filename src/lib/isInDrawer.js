export default function isInDrawer() {
  const urlParams = new URLSearchParams(window.location.search)
  return !!urlParams.get('drawer-mode')
}
