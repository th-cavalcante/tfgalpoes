

import { useEffect } from 'react'
import '../styles/Contact/contact.scss'

const Contact = () => {

  useEffect(() => {window.scrollTo(0, 0);});



  return (
    <section id="contact">

    <h1>Entre em contato</h1>
    <div className="container-main-contact">
      <div className="box-contact">
        <p><i className="fa-solid fa-phone"></i>(11) 91030-6758</p>
        <p><i className="fa-solid fa-envelope"></i>contato@tfgalpoes.com.br</p>
        <p><i className="fa-brands fa-instagram"></i>@tf_imoveis</p>

      </div>
      <div className="box-form">
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

export default Contact