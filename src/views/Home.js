import m from 'mithril'

const Home = {
  view: () => {
    return m("div.mw9.center.ph2-ns", [
        m("div.cf.ph2-ns", [
          m("div.fl.w-100.w-75-ns.pa2", [
            m("h1.f1.f-subheadline-ns.fh-solid.ph3.pb3.bb.bw4", "Hi, I'm Ricardo."),
            m("p.f4.f2-ns.lh-copy.ph1.ph3-l", "Welcome. Have a look around."),
            m("p.f4.f2-ns.lh-copy.ph1.ph3-l", "I'm a full stack web developer, human guy, and can make something for you, if you'd like."),
            m("p.f6.f4-ns.lh-copy.ph1.ph3-l", [
              m("span", "If you're curious, I built this page with "),
              m("a[href='https://mithril.js.org'][target='_blank'][rel='noopener noreferrer'].link.bg-light-yellow.hover-bg-yellow.black-80", "Mithril.js "),
              m("span", "and "),
              m("a[href='http://tachyons.io/'][target='_blank'][rel='noopener noreferrer'].link.bg-light-yellow.hover-bg-yellow.black-80", "Tachyons")
            ])
          ]),
          m("div.fl.w-100.w-25-ns.pa2", [
            m("img[src='https://imgur.com/zMUAxLU.jpg'].h-100.w-100.mb3"),
            m("a[href='mailto:rjcolmed@gmail.com'].f3.f5-ns.fw6.dib.ba.bg-green.bg-light-green-ns.hover-bg-green-ns.white.ph3.ph4-ns.pv2.pv3-ns.grow.no-underline.w-100.tc", "Email Me"),
            m("a[href='https://www.linkedin.com/in/rcolonmedina/'].f3.f5-ns.fw6.mv3.dib.ba.bg-blue.bg-light-blue-ns.hover-bg-blue-ns.white.ph3.ph4-ns.pv2.pv3-ns.grow.no-underline.w-100.tc", "Catch Me on LinkedIn")
        ])
        ])
      ])
  }
}

export default Home


// const Home = {
//   view: () => {
//     return m("section.fl.w-100.w-75-ns.pa2", [
//       m("h1.f1.f-subheadline-ns.fh-solid.ph3.pb3.bb.bw4", "Hi, I'm Ricardo."),
//       m("p.f4.f2-ns.lh-copy.ph1.ph3-l", "Welcome. Have a look around."),
//       m("p.f4.f2-ns.lh-copy.ph1.ph3-l", "I'm a full stack web developer, human guy, and can make something for you, if you'd like."),
//       m("p.f6.f4-ns.lh-copy.ph1.ph3-l", [
//         m("span", "If you're curious, I built this page with "),
//         m("a[href='https://mithril.js.org'][target='_blank'][rel='noopener noreferrer'].link.bg-light-yellow.hover-bg-yellow.black-80", "Mithril.js "),
//         m("span", "and "),
//         m("a[href='http://tachyons.io/'][target='_blank'][rel='noopener noreferrer'].link.bg-light-yellow.hover-bg-yellow.black-80", "Tachyons")
//       ]),
//     ]
//   )
//   }
// }
