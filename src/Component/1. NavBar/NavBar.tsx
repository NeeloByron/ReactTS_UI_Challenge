import { Link } from 'react-router-dom';
import logoImg from '@/assets/logo.png'
import firstICon from '@/assets/location.png'
import shopCart from '@/assets/cart-shopping.png'
import './NavBar.Module.css'
import { useState } from 'react';


function NavBar () {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const hide = () => setIsOpen(false);
  const show = () => setIsOpen(true);

  const navLinks = [
    { path: '/home', label: 'HOME' },
    { path: '/menu', label: 'MENU' },
    { path: '/pages', label: 'PAGES' },
    { path: '/blog', label: 'BLOG' },
    { path: '/contactUs', label: 'CONTACT US'}
  ]
  return (
    <>
      {/*Main container of the navigation bar*/}
      <header className="nav-header">
        
        {/*Logo class*/}
        <div className="logo">
          <img src={logoImg} alt="bower-logo" />
        </div>

        {/*nagivation bar map in list item*/}
         <nav className="navbar" role="navigation" aria-label="Main Navigation">
          
          {/* hamburger menu */}
          <button className='menu-toggle' onClick={toggle}>
            <span className={`menu ${isOpen ? 'cross' : 'hamburger'}`}></span>
          </button>

           <ul className='nav-links'>
               {navLinks.map((link) => (
                 <li key={link.path}>
                   <Link to={link.path}>{link.label}</Link>
                </li>
                 ))}
            </ul>

          {/*first icon either location or profile is not specified*/}
          <div className="nav-icons">
           <button className='locationBtn' aria-label="location">
             <img src={firstICon} alt="user-logo" className='ProfileImg'/>
           </button>
          
           {/*Shopping cart icon*/}
           <button className='ShoppingCartBtn' aria-label="Shopping Cart">
           <img src={shopCart} alt="shopping-cart" className='CartImg'/>
         </button>
      </div>
   </nav>
 </header>
</>
  ) 
}

export { NavBar };
