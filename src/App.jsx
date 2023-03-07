import { Routes, Route } from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <Home/>
      <About/>
      {/* <Routes>
        <Route path="/" element={<Home/>} />
      </Routes> */}
    </>
  )
}

export default App
