import Button from '../Button/Button';
import './HeroSec.css';

export const HeroSec = () => {
  return (
    <>
      <div className='backgroundImg'>
       
           <div className='text'>
              <h3>Prelum Restraurant</h3>
              <h1>Anida Dedelay</h1>
              <p>BEST HEALTHY SALAD SERVED IN OUR RESTRAURANT</p>
              <Button btnText='LEARN MORE' style={{width: '100px', height: '42px'}}/>
           </div>
          
          <div className='signup'>
              <Button btnText='SIGN IN' style={{width: '120px', height: '45px'}}/>
          </div>


      </div>

   </> );
};
