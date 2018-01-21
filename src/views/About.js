import m from 'mithril'

const About = {
  view: () => {
    return m("section.fl.w-100", [
      m("h1.f1.f-subheadline-ns.fh-solid.ph3.pb3.bb.bw4", "About"),
      m("section.f4-ns.lh-copy.ph3", [
        m("h2.f2-ns", "...Me"),
        m("p", "I'm a Flatiron School graduate, erstwhile student of history, and I love building web apps."),
        m("p", "A lot of things are cool. To name a few, programming languages, linguistics, movies, and social justice. ")
      ]),
      m("section", [
        m("h2.f2-ns.ph3", "...My Skills"),
        m("section.f-subheadline-ns.f1.tc.ph2.pv3", [
            m("div.dib.w-20", m("i.devicon-javascript-plain.hover-yellow")),
            m("div.dib.w-20", m("i.devicon-ruby-plain-wordmark.hover-red")),
            m("div.dib.w-20", m("i.devicon-rails-plain-wordmark.hover-dark-red")),
            m("div.dib.w-20", m("i.devicon-nodejs-plain.hover-green")),
            m("div.dib.w-20", m("i.devicon-react-original-wordmark.hover-light-blue"))
        ])
      ]),
      m("section.f4-ns.lh-copy.ph3.mb3", [
        m("h2.f2-ns", "...Sundry Things I'm Into Right Now"),
        m("section.f3-ns.ph2", [
          m("ul.list.pa1", [
            m("li.pa1",[
              m("a[href='https://viacampesina.org/en/'][target='_blank'][rel='noopener noreferrer'].link.bg-yellow.hover-bg-light-blue.black-80.pa2", "La Via Campesina"), 
              m("p.f4-ns.lh-copy.ml1", "An international movement supporting peasants' rights, food sovereignty, and sustainable agriculture.")
            ]),
            m("li.pa1", [
              m("a[href='https://swift.org/getting-started/'][target='_blank'][rel='noopener noreferrer'].link.bg-light-red.hover-bg-light-blue.black-80.pa2", "Swift"), 
              m("p.f4-ns.lh-copy.ml1", "A programming language for Apple's various OS's.")
            ]),
            m("li.pa1", [
              m("a[href='http://tachyons.io/'][target='_blank'][rel='noopener noreferrer'].link.bg-light-purple.hover-bg-light-blue.black-80.pa2", "Tachyons"),
              m("p.f4-ns.lh-copy.ml1", "Fast, functional CSS. Good stuff.")
            ]),
            m("li.pa1", [
              m("a[href='http://rspec.info/'][target='_blank'][rel='noopener noreferrer'].link.bg-light-green.hover-bg-light-blue.black-80.pa2", "RSpec"),
              m("p.f4-ns.lh-copy.ml1", "A nice, BDD-driven testing framework for Ruby.")
            ]),
            m("li.pa1", [
              m("a[href='https://facebook.github.io/jest/'][target='_blank'][rel='noopener noreferrer'].link.bg-light-pink.hover-bg-light-blue.black-80.pa2", "Jest"),
              m("p.f4-ns.lh-copy.ml1", "Facebook's JavaScript testing framework.")
            ]),
            m("li.pa1", [
              m("a[href='https://mithril.js.org/'][target='_blank'][rel='noopener noreferrer'].link.bg-lightest-blue.hover-bg-light-yellow.black-80.pa2", "Mithril.js"),
              m("p.f4-ns.lh-copy.ml1", "A speedy, powerful, client-side JS library for building SPA's. Very cool.")
            ])
          ])
        ])
      ])
    ])
  }
}

export default About