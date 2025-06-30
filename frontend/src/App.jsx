import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/Login.jsx'
import Home from './pages/Home.jsx'
import Navbar from './components/Navbar.jsx'
import Features from './pages/Features.jsx'
import Pricing from './pages/Pricing.jsx'
import Blog from './pages/Blog.jsx'

const App = () => {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: 'linear-gradient(135deg, #0f0f0f, #1c1c1e, #2a2a2d)' }}>
      <Router>
        <Navbar />
        <main className="flex-1 flex flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/features" element={<Features />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </main>
      </Router>
    </div>
  )
}

export default App
