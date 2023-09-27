import { Link } from 'react-router-dom'
import Logo from '../img/logo.png'

import { useState } from 'react'


function Header() {

   const [menuOpen, setMenuOpen] = useState(false)
   const toggleMenu = () => {
      setMenuOpen(!menuOpen)
      console.log(menuOpen)
   }

   const IconMenu = menuOpen ? (
      <span className="material-symbols-outlined">close</span>
   ) : (
      <span className="material-symbols-outlined" >menu</span> 
   )

   const removeNav = () => {
      setMenuOpen(false)
   }
    
  

   return (
      <header>
         <div className="content-header">
            <div className="box-logo">
             <img src={Logo} alt="" />
            </div>

            <nav className={`nav ${menuOpen ? 'open' : ''}`}>
               <ul>
                  <li><Link to='/' onClick={removeNav}>Home</Link></li>
                  <li><Link to='/galpoes'onClick={removeNav}>Serviços</Link></li>
                  <li><Link to='/about'onClick={removeNav}>Sobre</Link></li>
                  <li><Link to='/contact'onClick={removeNav}>Contatos</Link></li>
                 
                 
               </ul>
            </nav>
            <div className='box-toogle' onClick={toggleMenu}>
              {IconMenu}
            </div>
         </div>
      </header>
   )
}

export default Header

 
