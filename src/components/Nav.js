import m from 'mithril'

const Nav = {
  view: () => {
    return m("nav", [
      m("a[href='/']", { oncreate: m.route.link }, "Home"),
      m("a[href='/about']", { oncreate: m.route.link }, "About"),
      m("a[href='https://github.com/rjcolmed'][target='_blank'][rel='noopener noreferrer']", "GitHub"),
      m("a[href='https://medium.com/@rjcolmed'][target='_blank'][rel='noopener noreferrer']", "Blog")
    ])
  }
}

export default Nav