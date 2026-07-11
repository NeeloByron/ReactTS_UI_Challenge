import strewBerryImg from '@/assets/strewberries.png'
import './aboutSec.Module.css'

export const AboutSec = () => {
  return (
     <>
        <div className='aboutSection'> 
          <div className='aboutText'>
             <p>Just imagine seeds and summer in gell sunshine.</p>
           </div>

           <div className="aboutImageCard">
             <img src={strewBerryImg} alt="Strewberries" />
           </div>

          
      </div>
    </>
      )
}
