
import GalpaoG6 from '../pages/G6';
import GalpaoG8 from '../pages/G8';
import GalpaoG10 from '../pages/G10';



import { useState, useEffect } from 'react';
import '../styles/Galpoes/galpoes.scss';
import G10 from '../img/g61.jpeg';
import G6 from '../img/g6.jpg'
import G8 from '../img/g8.jpg'


const Galpoes = () => {

  useEffect(() => {window.scrollTo(0, 0);},);

  const [openG6, setOpenG6] = useState(false); // Variável de estado para controlar a exibição do G6
  const openDescriptionG6 = () => {
    setOpenG6(!openG6);
    console.log(openG6)
  }

  const [openG8, setOpenG8] = useState(true); // Variável de estado para controlar a exibição do G8
  const openDescriptionG8 = () => {
    setOpenG8(!openG8);
    console.log(openG8)
  }

  const [openG10, setOpenG10] = useState(true); // Variável de estado para controlar a exibição do G8
  const openDescriptionG10 = () => {
    setOpenG10(!openG10);
    console.log(openG10)
  }
 
  


  return (
    
    <section id="services">
      
      <div className="title-services">
        <h1>Galpões disponiveis</h1>
        
        <div className="icon-title">
          <hr />
          <div className="box-icon">
          <span className="material-symbols-outlined">corporate_fare</span>
          </div>
        </div>
  </div>



      <div className="container-services">

        <div className="cards-services">
          
          <div className='img-card'>
            <img src={G6} alt="" />
          </div>
          
          <div className="txt-card">
          <p className='availability_ok'>2 Módulos disponiveis</p>
            <h2>G6 Empresarial</h2>
            <p><span>G6 Empresarial</span> é um condomínio industrial e logístico composto por 10 módulos com alto padrão de qualidade.</p>
            <button onClick={openDescriptionG6}>Veja mais</button>
            
            </div>

          
        </div>

        <div className="cards-services">
          
        <div className='img-card'>
            <img src={G8} alt="" />
          </div>
          
          <div className="txt-card">
            <p className='availability'>Indisponivel*</p>
            <h2>G8 Business Park</h2>
            <p><span>G8 Business Park</span> é um condomínio industrial e logístico composto por 8 módulos com alto padrão de qualidade.</p>
            <button onClick={openDescriptionG8}>Veja mais</button>
            
            </div>
        </div>

        <div className="cards-services">
          
        <div className='img-card'>
            <img src={G10} alt="" />
          </div>
          
          <div className="txt-card" >
          <p className='availability'>Indisponivel*</p>
            <h2>G10 Empresarial</h2>
            <p><span>G10 Empresarial</span> é um condomínio industrial e logístico composto por 10 módulos com alto padrão de qualidade.</p>
            <button onClick={openDescriptionG10} >Veja mais</button>
          </div>
    
        </div>
      
       
      </div> 




      <div className='g6' style={{ display: openG6 ? 'block' : ''}}>
      <GalpaoG6 closeG6={openDescriptionG6}/>
      </div>

      <div className='g8' style={{ display: openG8 ? 'none' : ''}}>
      <GalpaoG8 closeG8={openDescriptionG8}/>
      </div>

      <div className='g10' style={{ display: openG10 ? 'none' : ''}}>
      <GalpaoG10 closeG10={openDescriptionG10}/>
      </div>

      

      

    

       

    </section>
   
   
   


  )
}

export default Galpoes