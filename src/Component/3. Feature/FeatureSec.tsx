import SliceOrange from '@/assets/Orange.png'
import OrangeContainer from '@/assets/OrangeGlass.png'
import Button from '@/Component/Button/Button'
import './FeatureSec.Module.css'

export const FeatureSec = () => {
  return (
    <> 
      {/*Main feacture section*/}
       <div className='mainFeature'>
 
          {/*Sub main for the orange benefits part*/}
           <div className='subMainFeature'>

              {/*header*/}
              <div className='SubHeader'>
           
                <div className='OrangeContainer'>
                  <h1>Orange Benefit</h1>
                </div>
                  
                  <div className='orangeAndText'>
                      {/*Image for the half orange*/}
                      <div className='orangeImage'>
                        <img src={SliceOrange} />
                      </div>
                  
                      {/*Paragraph message*/}
                      <div className='MainText'>
                        <p>Just reogine eseds and summer in golled quasiunp</p>
                        <Button btnText='LEARN MORE' />
                      </div>

                  </div>

              </div>

          </div>

          {/*Image of orange juice*/}
           <div className='FeatureSecOrangeGlass'>
             <img src={OrangeContainer} alt='OrangeJuiceGlass' />
           </div>

    </div>          
 </>
  )
}
