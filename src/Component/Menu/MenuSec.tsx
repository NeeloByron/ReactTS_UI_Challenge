import MenuImage1 from '@/assets/ARCU.png'
import MenuImage2 from '@/assets/Orange2.png'
import MenuImage3 from '@/assets/StrewBerryBowl.png'
import './MenuSec.css'

export const MenuSec = () => {
  return (
    <>
      <div className="Main-Menu">

           <div className="Menu-card">
             <img src={MenuImage1} alt='MenuIamge' />
             <h3 className='Menu-card-head'>ARCU VOLUT VITAE</h3>
             <p className='Menu-card-text'>Phestiers lgeart</p>
           </div>
       
           <div className='Menu-card'>
             <img src={MenuImage2} alt='MenuIamge' />
             <h3 className='Menu-card-head'>$19,99,90,99E</h3>
             <p className='Menu-card-text'>Orviste past bronps</p>
           </div>

           <div className='Menu-card'>
             <img src={MenuImage3} alt='MenuIamge' />
             <h3 className='Menu-card-head'>SFIELY TUN DRENARD</h3>
             <p className='Menu-card-text'>Ongand suniers</p>
           </div>

      </div>
    </>
    
  )
}
