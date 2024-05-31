
import Navbar from './components/navbar'
import {Routes, Route} from 'react-router-dom'
import About from './components/about'
import Home from './components/home'
import Skills from './components/skills'
import Education from './components/education'
import Contact from './components/contact'

function App() {
  return (
    <div>
      <Navbar/>
      <div style={{margin: "3vh 3vh"}}>
      <Routes>
        <Route exact path="/about_me" element={<About/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
        <Route exact path="/skills" element={<Skills/>}/>
        <Route exact path="/education" element={<Education/>}/>
        <Route index path="/" element={<Home/>}/>
      </Routes>
      </div>
    </div>
  )

}

export default App