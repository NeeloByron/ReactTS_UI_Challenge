import MenuImage1 from '../../assets/ARCU.png'
import MenuImage2 from '../../assets/Orange2.png'
import MenuImage3 from '../../assets/StrewBerryBowl.jpg'
import './MenuSec.css'

export const MenuSec = () => {
  return (
    <>
      <div className="Main-Menu">

           <div className="Menu-card1">
             <img src={MenuImage1} alt='MenuIamge-1' />
             <h3 className='Menu-card1-head'>ARCU VOLUT VITAE</h3>
             <p className='Menu-card1-text'>Phestiers lgeart</p>
           </div>
       
           <div className='Menu-card2'>
             <img src={MenuImage2} alt='MenuIamge-2' />
             <h3 className='Menu-card2-head'>$19,99,90,99E</h3>
             <p className='Menu-card2-text'>Orviste past bronps</p>
           </div>

           <div className='Menu-card3'>
             <img src={MenuImage3} alt='MenuIamge-3' />
             <h3 className='Menu-card3-head'>SFIELY TUN DRENARD</h3>
             <p className='Menu-card3-text'>Ongand suniers</p>
           </div>

      </div>
    </>
    
  )
}
