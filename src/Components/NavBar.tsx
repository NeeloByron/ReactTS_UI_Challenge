import './NavBar.css'

function NavBar () {
  return (
    <div className="navbar">
      <nav className="links">
        <a href="/home">HOME</a>
        <a href="/menu">MENU</a>
        <a href="/pages">PAGES</a>
        <a href="/blog">BLOG</a>
        <a href="/contact">CONTACT US</a>
       </nav>

       <div className="navIcons">
        <button className='iconBtn'>👤</button>
        <button className='iconBtn'>🛒</button>
       </div>
       
      </div>

  )
  
}

export { NavBar };
