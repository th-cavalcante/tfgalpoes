import { useEffect } from 'react'

import '../styles/Main/Main.css'


const Main = () => {

  useEffect(() => {window.scrollTo(0, 0);});


  return (
    <section id="main">
      

      <div className="content-main">
        <div className="text-content">
          <h1>CONSTRUÇÕES E REFORMAS RESIDENCIAIS E INDUSTRIAIS</h1>
          
          <h3>Entre em contato e solicite o seu orçamento.</h3>
        </div>

        <div className="form">
        <form action="https://formsubmit.co/your@email.com" method='POST'>
            <label htmlFor="">Nome:</label>
            <input type="text" />
            <label htmlFor="">Email:</label>
            <input type="text" />
            <label htmlFor="">Digite sua mensagem:</label>
            <textarea name="" id="" cols="40" rows="5"></textarea>
            <button type="submit">Enviar</button>
        
        </form>
          
        </div>

        

      </div>

    </section>
  )
}

export default Main