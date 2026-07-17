import footerImage from '@/assets/BerryBowlfooter.png'
import firstIcon from '@/assets/icon_1.png'
import secondIcon from '@/assets/icon_2.png'
import thirdIcon from '@/assets/icon_3.png'
import './Footer.Module.css'

export const FooterSec = () => {
  return (
    <>
      {/*Main Footer*/}
      <div className='footerMain'>

        <div className='footerCard'>
          <img src={footerImage} alt='backgroundDescription' />
          <div className='helloBox'>HELLO.</div>
        </div>

        {/*Our menu benefit section*/}
        <div className='footerCard'>

            <h1>OUR MENU BENEFIT</h1>

          <div className='subFooterCard'>
            <div className='fresh'>
              {/*icon 1*/}
              <img src={firstIcon} className='icon1' style={{ width: '120px', height: 'auto' }} />
              <h1>Fresh</h1>
              <p>Plays orand on inorianties</p>
            </div>

            {/*icon 2*/}
            <div className='vitamin'>
              <img src={secondIcon} className='icon2' style={{ width: '120px', height: 'auto' }} />
              <h1>VITAMIN</h1>
              <p>Nispen noa proerns</p>
            </div>

            {/*icon 3*/}
            <div className='OreAnic'>
              <img src={thirdIcon} className='icon3' style={{ width: '120px', height: 'auto' }} />
              <h1>ORE ANIC</h1>
              <p>Towagoloes weruis</p>
            </div>
           </div>
        </div>

        {/*Opening hours*/}
        <div className='footerCard'>
          <h1>OPENING HOURS</h1>
          <div className='daysAndhours'>
            <span>Monday</span> 17.00 cm x17 <span></span>
            <span>Tuesday</span> 13.60 cm x17 <span></span>
            <span>Wednesday</span>19.00 km x11 <span></span>
            <span>Thursday</span>13.00 cm x11 <span></span>
            <hr className='operationHoursBottomDiver' />

            <div className='iconLinks'>
             <h3 className='quicklink'>QUICK LINKS</h3>
             <i className="bi bi-facebook"></i>
             <i className="bi bi-twitter-x"></i>
             <i className="bi bi-instagram"></i>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
