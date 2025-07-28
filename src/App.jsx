import { HashRouter as Router, Routes, Route,  Link } from 'react-router-dom'
import Home from './Pages/Home'
import AboutUs from './Pages/AboutUs'
import Academics from './Pages/Academics'
import Navbar from './components/Home/Navbar'
import Footer from './components/Home/Footer'
import Extracurriculars from './Pages/Extracurriculars'
import {useState} from 'react'


const App = () => {
   

  return (
   

    <Router>
      
       
    <Routes>
     
      <Route path="/" element={<Home/>}/>
       <Route path="/AboutUs" element={<AboutUs/>}/>
        <Route path="/Academics" element={<Academics/>}/>
        <Route path="/Extracurriculars" element={<Extracurriculars/>}/>
    </Routes>
    <Footer/>
    </Router>
   
  )
}

export default App
