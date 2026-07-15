import Button from '@/Component/Button/Button'
import './HeroSec.Module.css'

export const HeroSec = () => {
  return (
    <>
      {/*Main section and background picture set*/}
       <div className='mainContainerBackground'>
       
           {/*Restaurent name */}
             <div className='text'>
               <p className='P1'>Prelum Restraurant</p>
               <h1>Anida Dedelay</h1>
               <p className='P2'>BEST HEALTHY SALAD SERVED IN OUR RESTRAURANT</p>
              
               {/*Learn more button*/}
                <div className='learnmore'>
                 <Button btnText='LEARN MORE' style={{width: '18rem', height: '7rem', fontSize: '1.59rem', borderRadius: '8px', backgroundColor: '#d4632e'}}/>
                </div>
             </div>
           
            {/*Sign up button*/}
              <div className='signup'>
                <Button btnText='SIGN IN' style={{width: '14rem', height: '5.5rem', fontSize: '1.59rem', borderRadius: '8px', backgroundColor: '#d4632e'}}/>
              </div>

       </div>

   </> );
};
