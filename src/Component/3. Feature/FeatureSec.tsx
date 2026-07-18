import SliceOrange from '@/assets/Orange.png'
import OrangeContainer from '@/assets/OrangeGlass.png'
import Button from '@/Component/Button/Button'
import './FeatureSec.Module.css'

export const FeatureSec = () => {
  return (
    <>
      {/*Main feacture section*/}
      <div className='mainFeature'>

          <div className='orangeAndText'>
            <h1>Orange Benefit</h1>

            {/*Paragraph message*/}
            <div className='MainTextImgAndText'>
              {/*Image for the half orange*/}
              <img src={SliceOrange} />

              <div className='MainText'>
                <p>Just reogine eseds and summer in golled quasiunp</p>
                <Button btnText='LEARN MORE' onClick={() => alert('Health food')} />
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
