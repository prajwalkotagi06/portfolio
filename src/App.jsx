import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Pages/Home'
import Contact from './Components/Pages/Contact'
import About from './Components/Pages/About'
import Experience from './Components/Pages/Experience'
import Projects from './Components/Pages/Projects'
import Blogs from './Components/Pages/Blogs'
import NoPage from './Components/Pages/NoPage'
import Header from './Components/Components/Header/Header'
import Footer from './Components/Components/Footer/Footer'

function App() {
  

  return (
    <>
    <div className='overlay'>
      <Header />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="About" element={<About />} />
          <Route path="Experience" element={<Experience />} />
          <Route path="Projects" element={<Projects />} />
          <Route path="Blogs" element={<Blogs />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
      
      <Footer />
      </div>
    </>
  )
}

export default App
