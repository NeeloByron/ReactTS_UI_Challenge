import strewBerryImg from '@/assets/strewberries.png'
import Button from '@/Component/Button/Button'
import './aboutSec.Module.css'

export const AboutSec = () => {
  return (
    <>
      {/*Main section*/}
      <div className='aboutMain'>

         <div className='aboutCard'>
           <p className='JustImagine'>Just imagine seeds and summer in gell sunshine.</p>
         </div>

          {/*Image for the middle card holding strewberries*/}
           <div className='aboutCard'>
             <img src={strewBerryImg} alt="Strewberries" />
           </div>

          {/*the which background card*/}
          <div className='aboutCardBackground'>
            <h2 className='EBEE'>EBEE WOUS </h2>
            <h1>BENEFIT.</h1>
            <p className='Wotv'>Wotv & verd. Pasafafadd aafafa</p>
            <hr className='diverOne' />
            <p className='Ruoedll'>ruocedll condition</p>
            <hr className='diverTwo' />
            <Button btnText='HEAD MORE' onClick={() => alert('Head more to other things on our Restaurant')} />
          </div>

      </div>
    </>
  )
}
