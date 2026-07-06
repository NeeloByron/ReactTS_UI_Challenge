import HeroImg from '../assets/BerryBowl.png';
import './HeroSec.css';

export const HeroSec = () => {
  return (
    <>
      <div className='backgroundImg'>
        <img src={HeroImg} alt='' />

         <div className='text'>
           <h3>Prelum Restraurant</h3>
           <h1>Anida Dedelay</h1>
           <p>BEST HEALTHY SALAD SERVED IN OUR RESTRAURANT</p>
         </div>

      </div>

   </> );
};
