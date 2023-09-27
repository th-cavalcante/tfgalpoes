
import { useState } from 'react';


import '../styles/G8/g8.scss';
import Logo from '../img/logoG8.png'
import Planilha from '../img/G8/tabela.jpg'

import G1 from '../img/G8/g1.jpg'
import G2 from '../img/G8/g2.jpg'
import G3 from '../img/G8/g3.jpg'
import G4 from '../img/G8/g4.jpg'
import G5 from '../img/G8/g5.jpg'
import G6 from '../img/G8/g6.jpg'
import G7 from '../img/G8/g7.jpg'
import G8 from '../img/G8/g8.jpg'
import G9 from '../img/G8/g9.jpg'


// eslint-disable-next-line react/prop-types
const GalpaoG8 = ({closeG8}) => {

  const [containerVisible] = useState(true);
  

 
  return (
    <>
    {containerVisible && (
    <div className='container_g8' >

    <div className='box-icon'> 
    <span className="material-symbols-outlined" onClick={closeG8}>close</span>
    </div>

        <div className='box-1'>
          <div className='description-box-1'>
            <h1>G8 Business Park</h1>
            
            <h2>Infraestrutura</h2>
            <ul>
              <li>Portaria 24hs</li>
              <li>Segurança 24h</li>
              <li>Controle de acesso e CFTV</li>
              <li>Sistema de voz e dados: 20 pares metálicos por módulo</li>
              <li>Estacionamento rotativo para visitantes</li>
              <li>Estacionamento privativos para condôminos</li>
              <li>Rua larga para melhor manobra de caminhões</li>
              <li>Pista em bloco de concreto intertravado para trafego pesado</li>
              <li>Espaço para refeição</li>
            </ul>
            <h2>Características dos Galpões</h2>
            <ul>
              <li>Piso Industrial nivelado a laser com resistência de 5 ton/m²</li>
              <li>Cobertura com isolamento termo-acústico</li>
              <li>Fechamento lateral em painéis de concreto termoacústicos</li>
              <li>Pé direito livre de 10m.</li>
              <li>Escritório, refeitório e vestiário</li>
              <li>Área para recepção</li>
              <li>4 Vagas de garagem demarcadas por módulo</li>
              <li>Cabine primária de 1000 KVA com medição individualizada de energia</li>
              <li>Disponibilidade de energia elétrica por modulo 50KVA com possibilidade de ampliação para 120KVA</li>
            </ul>
          </div>

          <div className='img-box-1'>
            <img src={Logo} alt="Logo-marca"  />
            <a href=""><button>Entrar em contato</button></a>
          </div>

        </div>

        <div className="box-4">
        <div id="carouselExampleIndicators1" className="carousel slide">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="2" aria-label="Slide 3"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="3" aria-label="Slide 4"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="4" aria-label="Slide 5"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="5" aria-label="Slide 6"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="6" aria-label="Slide 7"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="7" aria-label="Slide 8"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="8" aria-label="Slide 9"></button>
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
              <div className="carousel-item">
                <img src={G9} className="d-block w-100" alt="..."/>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide="next">
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
          O G8 Business Park está localizado dentro do Parque Empresarial Anhanguera em Cajamar , um dos mais importantes e modernos centro de produção do Estado de São Paulo proporciona maior segurança e Infra- estrutura diferenciada. O Parque Empresarial Anhanguera oferece ruas asfaltadas, rede de água própria, sistema de telefonia com fibra ótica , segurança 24h balança para controle de peso de cargas e heliporto.
          </p>

        </div>

        <div className='box-5'>
        <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7324.378000545829!2d-46.831575!3d-23.381379!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf1d8470c90bf7%3A0x3abd5aed8976f6a4!2sG8%20Business%20Park!5e0!3m2!1spt-BR!2sus!4v1695665124935!5m2!1spt-BR!2sus"
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


export default GalpaoG8