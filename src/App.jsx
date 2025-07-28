import { HashRouter as Router, Routes, Route,  Link } from 'react-router-dom'
import Home from './Pages/Home'
import AboutUs from './Pages/AboutUs'
import Academics from './Pages/Academics'

import Footer from './components/Home/Footer'

import './App.css'


import Extracurriculars from './Pages/Extracurriculars'
import CustomCursor from './components/CustomCursor'
import {useState} from 'react'
import Navbar from './components/Navbar'


const App = () => {
   const [isHovering3D, setIsHovering3D] = useState(false);

  return (
   
<>
<Navbar/>
    <Router>
      <CustomCursor isHovering3D={isHovering3D} />
       
    <Routes>
     
      <Route path="/" element={<Home/>}/>
       <Route path="/AboutUs" element={<AboutUs/>}/>
        <Route path="/Academics" element={<Academics/>}/>
        <Route path="/Extracurriculars" element={<Extracurriculars/>}/>
    </Routes>

    </Router>
        <Footer/>
   </>
  )
}

export default App
