import strewBerryImg from '@/assets/strewberries.png'
import Button from '@/Component/Button/Button'
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
               <p className='Wotv'>Wotv & verd. Pasafafadd aafafa</p>
               <hr className='diverOne'/>
               <p className='Ruoedll'>ruocedll condition</p>
               <hr className='diverTwo'/>
               <Button btnText='HEAD MORE' style={{width: '12rem', height: '4rem', fontSize: '1.2rem', borderRadius: '8px', backgroundColor: '#d4632e'}}/>
             </div>   
              
          </div> 

      </div>
    </>
      )
}
