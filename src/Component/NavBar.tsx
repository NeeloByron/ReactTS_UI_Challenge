import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar () {
  const navLinks = [
    { path: '/home', label: 'HOME' },
    { path: '/menu', label: 'MENU' },
    { path: '/pages', label: 'PAGES' },
    { path: '/blog', label: 'BLOG' },
    { path: '/contactUs', label: 'CONTACT US'}
  ]
  return (
  <header className="nav-header">
    <div className="logo">
      <img src="/src/assets/logo.png" alt="bower-logo" />
    </div>

    <nav className="navbar" role="navigation" aria-label="Main Navigation">
      <ul className='nav-links'>
         {navLinks.map((link) => (
           <li key={link.path}>
             <Link to={link.path}>{link.label}</Link>
           </li>
        ))}
      </ul>

     <div className="nav-icons">
         <button className='ProfileBtn' aria-label="User Profile">
           <img src="/src/assets/Profile.png" alt="user-logo" className='ProfileImg'/>
         </button>

         <button className='ShoppingCartBtn' aria-label="Shopping Cart">
           <img src="/src/assets/cart.webp" alt="shopping-cart" className='CartImg'/>
         </button>
      </div>
   </nav>
 </header>

  ) 
}

export { NavBar };
