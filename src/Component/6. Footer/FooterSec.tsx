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

            <h1 className='ourMenu'>OUR MENU BENEFIT</h1>

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
            <span>Tuesday <span> 8:00am</span><br /></span>
            <span>Tuesday <span> 8:00am</span><br /></span>
            <span>Wednesday <span> 8:00am</span><br /></span>
            <span>Thursday <span> 8:00am</span><br /></span>
            <hr className='operationHoursBottomDiver' />

          </div>
        </div>

      </div>
    </>
  )
}
