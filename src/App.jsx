import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Blog from './pages/Blog'
import Contact from './pages/Contact'

function App() {
  return (
    <div>
      {/* Simple Navbar */}
      <nav style={{ background: '#eee', padding: '10px', display: 'flex', gap: '15px' }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      {/* Page Routing */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
