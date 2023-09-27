
import { useState } from 'react';


import '../styles/G10/g10.scss';
import Logo from '../img/logogalpao.png'
import Planilha from '../img/G10/tabela.png'


import G1 from '../img/G10/g1.jpeg'
import G2 from '../img/G10/g2.jpeg'
import G3 from '../img/G10/g3.jpeg'
import G4 from '../img/G10/g4.jpeg'
import G5 from '../img/G10/g5.jpeg'
import G6 from '../img/G10/g6.jpeg'
import G7 from '../img/G10/g7.jpeg'
import G8 from '../img/G10/g8.jpeg'



// eslint-disable-next-line react/prop-types
const GalpaoG10 = ({closeG10}) => {

  const [containerVisible] = useState(true);
  

 
  return (
    <>
    {containerVisible && (
    <div className='container_g10' >

    <div className='box-icon'> 
    <span className="material-symbols-outlined" onClick={closeG10}>close</span>
    </div>

        <div className='box-1'>
          <div className='description-box-1'>
            <h1>G10 Empresarial</h1>
            <div className="video_g10">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Z1jWbZJtRlM?si=xKCcpk4hbHLMVTjz" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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
        <div id="carouselExampleIndicators2" className="carousel slide">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="2" aria-label="Slide 3"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="3" aria-label="Slide 4"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="4" aria-label="Slide 5"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="5" aria-label="Slide 6"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="6" aria-label="Slide 7"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="7" aria-label="Slide 8"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={G1} className="d-block w-100" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src={G2} className="d-block w-100" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src={G3} className="d-block w-100" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src={G4} className="d-block w-100" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src={G5} className="d-block w-100" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src={G6} className="d-block w-100" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src={G7} className="d-block w-100" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src={G8} className="d-block w-100" alt="..."/>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide="next">
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
        src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d21758.62758131789!2d-46.906067!3d-23.525557!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDMxJzMwLjQiUyA0NsKwNTQnMjEuNyJX!5e1!3m2!1spt-BR!2sus!4v1695666149550!5m2!1spt-BR!2sus"
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


export default GalpaoG10