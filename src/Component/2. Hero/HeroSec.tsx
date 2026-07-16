import Button from '@/Component/Button/Button'
import './HeroSec.Module.css'

export const HeroSec = () => {
  return (
    <>
      {/*Main section and background picture set*/}
      <div className='mainContainerBackground'>

        {/*Restaurent name Sign up button*/}
        <div className='PrelumAndSignIn'>
          <p className='P1'>Prelum Restraurant</p>
          <Button btnText='SIGN IN' onClick={() => alert('Please enter your credentials')} />
        </div>

        {/*Learn more button*/}
        <div className='TextSection'>
          <h1>Anida Dedelay</h1>
          <p className='P2'>BEST HEALTHY SALAD SERVED<br /> IN OUR RESTRAURANT</p>
          <Button btnText='LEARN MORE' onClick={() => alert('Prelum Restraurant serves healthy salads, Come dine at our restraurant enjoy nice healthy meals')} />
        </div>

      </div>

    </>
    
  );
};
