import { HashRouter as Router, Routes, Route,  Link } from 'react-router-dom'
import Home from './Pages/Home'
import AboutUs from './Pages/AboutUs'
import Academics from './Pages/Academics'

import Footer from './components/Home/Footer'
import Extracurriculars from './Pages/Extracurriculars'



const App = () => {
   

  return (
   
<>

    <Router>
      
      
       
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
