
import { useState } from 'react';


import '../styles/G6/g6.scss';
import Logo from '../img/logoG6.png'
import Planilha from '../img/planilhaG6.png'


import G6_1 from '../img/G6/g1.jpg'
import G6_2 from '../img/G6/g2.jpg'
import G6_3 from '../img/G6/g3.jpg'
import G6_4 from '../img/G6/g4.jpg'
import G6_5 from '../img/G6/g5.jpg'
import G6_6 from '../img/G6/g6.jpg'


// eslint-disable-next-line react/prop-types
const GalpaoG6 = ({closeG6}) => {

  const [containerVisible] = useState(true);

 
  return (
    <>
    {containerVisible && (
    <div className='container_g6' >

    <div className='box-icon'> 
    <span className="material-symbols-outlined" onClick={closeG6}>close</span>
    </div>

        <div className='box-1'>
          <div className='description-box-1'>
            <h1>G6 EMPRESARIAL</h1>
            

            <div className="video_g6">
            <iframe  src="https://www.youtube.com/embed/XpmoOEhq_gI?si=0RGdUGzWCmI8_tOm" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            
            <h2>Infraestrutura</h2>
            <ul>
              <li>Portaria com guarita blindada</li>
              <li>Sala de monitoramento</li>
              <li>Segurança 24h</li>
              <li>Controle de acesso e CFTV</li>
              <li>Cabine primaria com medição individualizada de energia</li>
              <li>Gerador</li>
            </ul>
            <h2>Características dos Galpões</h2>
            <ul>
              <li>Piso Industrial nivelado a laser com resistência de 6 ton/m2</li>
              <li>Cobertura com isolamento termo-acústico</li>
              <li>Fechamento lateral em painéis de concreto (sistema tilt-up)</li>
              <li>Pé direito livre de 12m.</li>
              <li>Escritório, refeitório e vestiários individualizados por módulo</li>
              <li>Área para recepção</li>
              <li>5 Vagas de garagem demarcadas por módulo</li>
              <li>2 docas cobertas por galpão</li>
              <li>Sistema de combate a incêndio com Sprinklers</li>
            </ul>
          </div>

          <div className='img-box-1'>
            <img src={Logo} alt="Logo-marca"  />
            <a href=""><button>Entrar em contato</button></a>
          </div>

        </div>

        <div className="box-4">
        <div id="carouselExampleIndicators" className="carousel slide">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={G6_2} className="d-block w-100" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src={G6_3} className="d-block w-100" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src={G6_1} className="d-block w-100" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src={G6_4} className="d-block w-100" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src={G6_5} className="d-block w-100" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src={G6_6} className="d-block w-100" alt="..."/>
              </div>
              
             
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div className="box-3">
          <img src={Planilha} alt="" />
        </div>

        

        <div className="box-4">
          <h2>Localização</h2>
          <p>
          O G6 Empresarial está localizado dentro do Pólo Industrial Jandira II, um loteamento industrial estrategicamente posicionado e com fácil acesso as estradas e rodovias .
          O Pólo Industrial Jandira II tem portaria central 24h e esta a 500m da estação Jandira da CPTM que tem integração ao metrô de São Paulo na estação Barra Funda.
          </p>

        </div>

        <div className='box-5'>
        <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29266.777946358816!2d-46.911735!3d-23.52001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf04177d61dd6b%3A0x23b09b3bdce99642!2sVia%20de%20Acesso%20Jo%C3%A3o%20de%20G%C3%B3es%2C%20S%C3%A3o%20Paulo%2C%2006612-000%2C%20Brasil!5e0!3m2!1spt-BR!2sus!4v1695329221193!5m2!1spt-BR!2sus"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade">
        </iframe>

        <form action="https://formsubmit.co/your@email.com" method='POST'>
            <h2>Entre em contato</h2>
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

    )};

    </>
  )
}


export default GalpaoG6