import Button from '@/Component/Button/Button'
import './HeroSec.css';

export const HeroSec = () => {
  return (
    <>
      <div className='backgroundImg'>
       
           <div className='text'>
              <p className='P1'>Prelum Restraurant</p>
              <h1>Anida Dedelay</h1>
              <p className='p2'>BEST HEALTHY SALAD SERVED IN OUR RESTRAURANT</p>
              <Button btnText='LEARN MORE' style={{width: '100px', height: '42px'}}/>
           </div>
          
          <div className='signup'>
              <Button btnText='SIGN IN' style={{width: '160px', height: '55px'}}/>
          </div>


      </div>

   </> );
};
