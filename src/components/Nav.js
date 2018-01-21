import m from 'mithril'

const Nav = {
  view: () => {
    return m("nav.tc.fw6.bg-near-white.w-100.h-100", [
            m("a[href='/'].f4.link.black-80.hover-bg-light-blue.dib.pa2.ph4-l", { oncreate: m.route.link }, "Home"),
            m("a[href='/about'].f4.link.black-80.hover-bg-light-blue.dib.pa2.ph4-l", { oncreate: m.route.link }, "About"),
            m("a[href='https://github.com/rjcolmed'][target='_blank'][rel='noopener noreferrer'].f4.f5-m.link.black-80.hover-bg-light-blue.dib.pa2.ph4-l", "GitHub"),
            m("a[href='https://medium.com/@rjcolmed'][target='_blank'][rel='noopener noreferrer'].f4.f5-m.link.black-80.hover-bg-light-blue.dib.pa2.ph4-l", "Blog"),
            m("a[href='mailto:rjcolmed@gmail.com'].f4.f5-m.link.black-80.hover-bg-light-green.dib.pa2.ph4-l", "Contact")
          ])
  }
}

export default Nav