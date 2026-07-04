import './NavBar.css'

function NavBar () {
  return (
    
  <header className="Navheader">
    <div className="logo">
      <img src="/src/assets/akasa-air.svg" alt="akasa-air" />
    </div>

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
    </header>

  )
  
}

export { NavBar };
