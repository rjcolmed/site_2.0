import m from 'mithril'

const Layout = {
  view: vnode  => {
    return m("main.layout", [
      m("nav.menu", [
        m("a[href='/'", { oncreate: m.route.link }, "Home")
      ]),
      m("section", vnode.children),
      m("footer", [
        m("p", "This is the footer...")
      ])
    ])
  }
}

export default Layout

