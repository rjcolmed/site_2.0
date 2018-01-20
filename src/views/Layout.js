import m from 'mithril'
import Footer from '../components/Footer'
import Nav from '../components/Nav'

const Layout = {
  view: vnode  => {
    return m("main.layout", [
      m(Nav),
      m("section", vnode.children),
      m(Footer)
    ])
  }
}

export default Layout

