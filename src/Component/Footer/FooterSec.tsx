import footerImage from '@/assets/BerryBowlfooter.png'
import './Footer.Module.css'

export const FooterSec = () => {
  return (
    <>
      {/*Main Footer*/}
      <div className='footerMain'>
         
          <div className='imageCard'>
            <img src={footerImage} />
          </div>

          {/*Our menu benefit section*/}
          <div className='info'>
               <div className='infoHeader'>
                  <h1>OUR MENU BENEFIT</h1>
               </div>
           
           <div className='container'>
               <div className='fresh'>
                  <h1>Fresh</h1>
                  <p>Plays orand on inorianties</p>
               </div>

               <div className='vitamin'>
                  <h1>VITAMIN</h1>
                  <p>Nispen noa proerns</p>
               </div>

               <div className='OreAnic'>
                  <h1>ORE ANIC</h1>
                  <p>Towagoloes weruis</p>
               </div>
            </div>

          </div>

           {/*Opening hours*/}
           <div className='OperationHours'>
             <h1>OPENING HOURS</h1>
           </div>

      </div>
    </>
  )
}
