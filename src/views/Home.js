import m from 'mithril'

const Home = {
  view: () => {
    return m("section", [
      m("h1", "Hey, I'm Ricardo."),
      m("p", "Welcome. Have a look around.")
    ])
  }
}

export default Home