import React from 'react'

class QuickNav extends React.Component {
  constructor(props) {
    super(props)

    this.buildNav = this.buildNav.bind(this)
    this.handleScroll = this.handleScroll.bind(this)
    this.menuContent = null
    this.menuElement = React.createRef()
  }

  buildNav() {
    const content = document.createElement('div')
    content.innerHTML = this.props.html
    const headings = content.querySelectorAll('h1, h2, h3, h4, h5, h6')
    const list = document.createElement('ul')
    let min_heading = 6
    headings.forEach(heading => {
      min_heading = Math.min(
        min_heading,
        parseInt(heading.tagName.replace('H', ''))
      )
    })
    headings.forEach(heading => {
      const li = document.createElement('li')
      const anchor = document.createElement('a')
      li.classList.add('toc-entry', `toc-${heading.tagName.toLowerCase()}`)
      anchor.setAttribute('href', `#${heading.id}`)
      anchor.textContent = heading.textContent.replace(/[:.,]$/, '')
      li.appendChild(anchor)
      list.appendChild(li)
    })
    this.menuContent = list
  }

  handleScroll() {}

  componentDidMount() {
    //this.handleScroll()
  }

  render() {
    this.buildNav()
    return (
      <div className="sticky-in-parent" ref={this.menuElement}>
        <div className="panel panel-default">
          <div className="panel-body">
            <p className="text-uppercase mt-0">
              <b>QUICK NAV</b>
            </p>
            <hr className="hr--sm" />
            <ul
              className="panel-nav list-unstyled"
              dangerouslySetInnerHTML={{ __html: this.menuContent.innerHTML }}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default QuickNav
