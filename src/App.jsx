import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import CurrentFocus from './components/CurrentFocus.jsx'
import Workflow from './components/Workflow.jsx'
import SelectedProjects from './components/SelectedProjects.jsx'
import Journey from './components/Journey.jsx'
import Interests from './components/Interests.jsx'
import Contact from './components/Contact.jsx'

export default function App() {
  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <CurrentFocus />
        <Workflow />
        <SelectedProjects />
        <Journey />
        <Interests />
        <Contact />
      </main>
      <footer className="container" style={{ paddingBlock: 'var(--space-l)', color: 'var(--ink-faint)', fontSize: 'var(--step--1)', borderTop: '1px solid var(--line)' }}>
        <p>© {new Date().getFullYear()} Milton Lenis · Built with React, hosted on GitHub Pages.</p>
      </footer>
    </>
  )
}
