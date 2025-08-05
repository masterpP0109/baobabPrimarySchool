import { HashRouter as Router, Routes, Route,  Link } from 'react-router-dom'
import Home from './Pages/Home'
import AboutUs from './Pages/AboutUs'
import Academics from './Pages/Academics'
import Admissions from './Pages/Admissions'
import Footer from './components/Home/Footer'
import Extracurriculars from './Pages/Extracurriculars'
import Navbar from './components/Navbar'



const App = () => {
   

  return (
   
<>

    <Router>
      
      
       
    <Routes>
     
      <Route path="/" element={<Home/>}/>
       <Route path="/AboutUs" element={<AboutUs/>}/>
        <Route path="/Academics" element={<Academics/>}/>
        <Route path="/Extracurriculars" element={<Extracurriculars/>}/>
        <Route path="/Admissions" element={<Admissions/>}/>
    </Routes>

    </Router>
        <Footer/>
   </>
  )
}

export default App
