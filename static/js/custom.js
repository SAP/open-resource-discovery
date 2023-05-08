// Little script to highlight the links and definitions that were navigated to
window.addEventListener('load', locationHashChanged, false)
window.addEventListener('hashchange', locationHashChanged, false)
function locationHashChanged() {
  document.querySelectorAll('.highlight').forEach((dfn) => {
    dfn.classList.remove('highlight')
  })
  const highlightedElementId = location.hash.split('#')[1]
  console.debug('highlighting', highlightedElementId)
  const highlightedElement = document.getElementById(highlightedElementId)
  if (highlightedElement) {
    highlightedElement.classList.add('highlight')
    addAnchorTitle(highlightedElement.textContent)
  }
}

function addAnchorTitle(anchorTitle) {
  const split = document.title.split(' | ')
  document.title = `${anchorTitle} | ${split[split.length - 1]} | ${split[split.length - 2]}`
}
