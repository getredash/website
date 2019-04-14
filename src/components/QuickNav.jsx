import React from 'react'

class QuickNav extends React.Component {
  constructor(props) {
    super(props)

    this.buildNav = this.buildNav.bind(this)
    this.state = {
      navContent: null,
    }
  }

  buildNav() {
    const content = document.createElement('div')
    content.innerHTML = this.props.html
    const headings = content.querySelectorAll('h1, h2, h3, h4, h5, h6')
    let ToC = ``,
      level,
      baseLevel

    let min_heading = 6
    headings.forEach(heading => {
      min_heading = Math.min(min_heading, parseInt(heading.tagName.substr(1)))
    })
    headings.forEach(heading => {
      let newLine
      const title = heading.textContent
      const id =
        heading.id ||
        heading.textContent.replace(/[\. ,:-]+/g, '-').replace(/-$/, '')
      const link = `#${id}`
      const li = `<li class="toc-entry toc-${heading.tagName.toLowerCase()}">`

      let prevLevel = level || min_heading
      level = heading.tagName.substr(1)
      baseLevel = baseLevel || level

      if (prevLevel == 0 && level == min_heading) {
        newLine = `${li}`
      } else if (level == prevLevel) {
        newLine = `</li>${li}`
      } else if (level > prevLevel) {
        newLine = `<ul>${li}`.repeat(level - prevLevel)
      } else if (level < prevLevel) {
        newLine = `</li></ul>`.repeat(prevLevel - level) + `</li>${li}`
      }
      newLine += `<a href="${link}">${title}</a>`
      ToC += newLine
    })

    ToC += `</li></ul>`.repeat(Math.max(1, level - baseLevel))
    ToC += `</li>`
    return ToC
  }

  componentDidMount() {
    const navContent = this.buildNav()
    this.setState({
      navContent: navContent,
    })
  }

  render() {
    return (
      <div className="sticky-in-parent">
        <div className="panel panel-default">
          <div className="panel-body">
            <p className="text-uppercase mt-0">
              <b>QUICK NAV</b>
            </p>
            <hr className="hr--sm" />
            <ul
              className="panel-nav list-unstyled"
              dangerouslySetInnerHTML={{ __html: this.state.navContent }}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default QuickNav
