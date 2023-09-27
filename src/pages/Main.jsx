
import { useEffect } from 'react'

import '../styles/Main/Main.css'
import { Link } from 'react-router-dom';


const Main = () => {

  useEffect(() => {window.scrollTo(0, 0);});


  return (
    <section id="main">
      

      <div className="content-main">
        <div className="text-content">
          <h1>LOCAÇÃO DE GALPÕES INDUSTRIAIS EM CONDOMÍNIO LOGÍSTICO EM JANDIRA E CAJAMAR</h1>
          
          <h3>Entre em contato </h3>
        </div>

        <div className='btn-main'>
          <a href="https://api.whatsapp.com/send?phone=5511910306758"><button className='btn-whatsapp'><i className="fa-brands fa-whatsapp"></i>Fale pelo whatsapp</button></a>
          <Link to="galpoes"><button className='btn-msg'><i className="fa-solid fa-building-flag"></i>Galpões disponiveis</button></Link>
          
        </div>

        

        

      </div>

    </section>
  )
}

export default Main