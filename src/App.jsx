import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Chapter from './pages/Chapter'
import Project from './pages/Project' 

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-white text-black font-sans">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/capitulo-01" element={<Chapter />} />
          <Route path="/proyecto" element={<Project />} /> 
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App