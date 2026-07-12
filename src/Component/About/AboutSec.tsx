import strewBerryImg from '@/assets/strewberries.png'
import './aboutSec.Module.css'

export const AboutSec = () => {
  return (
     <>
        {/*Main section*/}
        <div className='aboutSection'> 
          <div className='aboutText'>
             <p>Just imagine seeds and summer in gell sunshine.</p>
           </div>
           
           {/*contains the two cards*/}
           <div className='containerCard'>

             {/*Image for the middle card holding strewberries*/}
              <div className='aboutImageCard'>
                <img src={strewBerryImg} alt="Strewberries" />
              </div>

              {/*the which background card*/}
             <div className='cardBox'>
               <h1>EBEE WOUS BENEFIT.</h1>
               <p></p>
             </div>   
              

          </div> 

      </div>
    </>
      )
}
