import { Routes, Route } from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Skills from './components/Skills'

function App() {
  return (
    <>
      <Navbar />
      <Home/>
      <About/>
      <Skills/>
      {/* <Routes>
        <Route path="/" element={<Home/>} />
      </Routes> */}
    </>
  )
}

export default App
