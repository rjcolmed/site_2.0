import m from 'mithril'
import Home from './views/Home'
import About from './views/About'
import Layout from './views/Layout'

m.route(document.body, "/", {
  "/": {
    render: () => m(Layout, m(Home))
  },
  "/about": {
    render: () => m(Layout, m(About))
  }
})