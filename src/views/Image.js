import m from 'mithril'

const Image = {
  view: () => {
    return m("section.fl.w-100.w-25-ns.pa2", [
      m("img[src='https://imgur.com/zMUAxLU.jpg'].h-100.w-100.mb3"),
      m("a[href='mailto:rjcolmed@gmail.com'].f3.f5-m.fw6.dib.ba.bg-green.bg-light-green-ns.hover-bg-green-ns.white.ph3.ph4-ns.pv2.pv3-ns.grow.no-underline.w-100.tc", "Email Me"),
      m("a[href='https://www.linkedin.com/in/rcolonmedina/'].f3.f5-m.fw6.mv3.dib.ba.bg-blue.bg-light-blue-ns.hover-bg-blue-ns.white.ph3.ph4-ns.pv2.pv3-ns.grow.no-underline.w-100.tc", "Catch Me on LinkedIn")
    ])
  }
}

export default Image
