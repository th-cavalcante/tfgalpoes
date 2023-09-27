import { BrowserRouter as Router, Routes, Route   } from 'react-router-dom';


import Main from './pages/Main';
import About from './pages/About.jsx';
import Contact from './pages/Contact';
import Galpoes from './pages/Galpoes';
import Header from './components/Header';
import Footer from './components/Footer.jsx';




function App() {
 
  return (
       
   <Router>
    <Header/>
    

    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/galpoes' element={<Galpoes/>}/> 
    </Routes>

    <Footer/>
   </Router>
   
    

    
        
  );
}

export default App
