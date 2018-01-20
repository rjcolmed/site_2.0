import m from 'mithril'

const About = {
  view: () => {
    return m("section", [
      m("h1", "About"),
        m("p", "This is the about page.")
    ])
  }
}

export default About