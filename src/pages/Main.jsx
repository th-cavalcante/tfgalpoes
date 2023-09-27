import { useEffect } from 'react'

import '../styles/Main/Main.css'


const Main = () => {

  useEffect(() => {window.scrollTo(0, 0);});


  return (
    <section id="main">
      

      <div className="content-main">
        <div className="text-content">
          <h1>GALPÕES EM CONDOMINIO LOGÍSTICO</h1>
          
          <h3>Entre em contato e solicite o seu orçamento.</h3>
        </div>

        

        

      </div>

    </section>
  )
}

export default Main