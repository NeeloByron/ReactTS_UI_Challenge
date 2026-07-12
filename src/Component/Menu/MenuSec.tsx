import MenuImage1 from '@/assets/Orange1.jpg'
import MenuImage2 from '@/assets/Orange2.jpg'
import MenuImage3 from '@/assets/StrewBerryBowl.png'
import './menuSec.Module.css'

export const MenuSec = () => {
  return (
    <>
      {/*main menu section*/}
      <div className="Main-Menu">

            {/*Menu 1*/}
            <div className="Menu-card">
              <img src={MenuImage1} alt='MenuIamge' />
              <h3 className='Menu-card-head'>ARCU VOLUT VITAE</h3>
              <p className='Menu-card-text'>Phestiers lgeart</p>
            </div>
            
            {/*Menu 2*/}
            <div className='Menu-card'>
              <img src={MenuImage2} alt='MenuIamge' />
              <h3 className='Menu-card-head'>$19,99,90,99E</h3>
              <p className='Menu-card-text'>Orviste past bronps</p>
            </div>
            
            {/*Menu 3*/}
            <div className='Menu-card'>
              <img src={MenuImage3} alt='MenuIamge' />
              <h3 className='Menu-card-head'>SFIELY TUN DRENARD</h3>
              <p className='Menu-card-text'>Ongand suniers</p>
            </div>

      </div>
    </>
    
  )
}
