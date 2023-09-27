
import { useEffect } from 'react'

import '../styles/Main/Main.css'
import { Link } from 'react-router-dom';


const Main = () => {

  useEffect(() => {window.scrollTo(0, 0);});


  return (
    <section id="main">
      

      <div className="content-main">
        <div className="text-content">
          <h1>GALPÕES EM CONDOMÍNIO LOGÍSTICO</h1>
          
          <h3>Entre em contato </h3>
        </div>

        <div className='btn-main'>
          <a href=""><button className='btn-whatsapp'><i className="fa-brands fa-whatsapp"></i>Fale pelo whatsapp</button></a>
          <Link to="contact"><button className='btn-msg'><i className="fa-regular fa-envelope"></i>Entre em contato</button></Link>
          
        </div>

        

        

      </div>

    </section>
  )
}

export default Main