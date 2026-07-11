import footerImage from '@/assets/BerryBowlfooter.png'
import './Footer.Module.css'

export const FooterSec = () => {
  return (
    <>
      <div className='footerMain'>
         
          <div className='imageCard'>
            <img src={footerImage} />
          </div>

          <div className='info'>
            <h1 className='infoHeader'>Our Menu Benefit</h1>
            
            <div className='freshImg'>
              
              <h1>Fresh</h1>
              <p>Plays orand on inorianties</p>
            </div>


         </div>
      </div>
    </>
  )
}
