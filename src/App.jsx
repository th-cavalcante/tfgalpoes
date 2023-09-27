import { BrowserRouter as Router, Routes, Route   } from 'react-router-dom';


import Main from './pages/Main';
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
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/galpoes' element={<Galpoes/>}/> 
    </Routes>

    <Footer/>
   </Router>
   
    

    
        
  );
}

export default App
