
import Navbar from './components/navbar'
import {Routes, Route} from 'react-router-dom'
import About from './components/about'
import Home from './components/home'
import Skills from './components/skills'
import Education from './components/education'
import Contact from './components/contact'

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route exact path="/about_me" element={<About/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
        <Route exact path="/skills" element={<Skills/>}/>
        <Route exact path="/education" element={<Education/>}/>
        <Route index path="/" element={<Home/>}/>
      </Routes>
    </>
  )

}

export default App