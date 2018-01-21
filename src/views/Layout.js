import m from 'mithril'
import Footer from '../components/Footer'
import Nav from '../components/Nav'

const Layout = {
  view: vnode  => {
    console.log(vnode.children)
    return m("main.sans-serif", [
      m(Nav),
      m("section.mv4-ns", vnode.children)
    ])
  }
}

export default Layout

