import { Routes, Route } from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import Work from './components/Work'

function App() {
  return (
    <>
      <Navbar />
      <Home/>
      <About/>
      <Skills/>
      <Work/>
      {/* <Routes>
        <Route path="/" element={<Home/>} />
      </Routes> */}
    </>
  )
}

export default App
