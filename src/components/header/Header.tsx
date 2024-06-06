import React, { useState } from 'react'
// import search from '../../assets/images/search.png';
// import wishlist from '../../assets/images/heart.png';
// import cart from '../../assets/images/bag.png';

const Header = () => {
  return (
    <header className='header-nav'>
        <nav className="navbar">
        <div className="navbar-container container">
            <input type="checkbox" name="" id="" />
            <div className="hamburger-lines">
                <span className="line line1"></span>
                <span className="line line2"></span>
                <span className="line line3"></span>
            </div>
            <ul className="menu-items">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Category</a></li>
                <li><a href="#">Menu</a></li>
                <li><a href="#">Testimonial</a></li>
                <li><a href="#">Contact</a></li>
                {/* <li><a href="#"><img src={search} alt="icon" className='img-fluid'/></a></li>
                <li><a href="#"><img src={wishlist} alt="icon" className='img-fluid'/></a></li>
                <li><a href="#"><img src={cart} alt="icon" className='img-fluid'/></a></li> */}
            </ul>
            <h1 className="logo">Logo</h1>
        </div>
    </nav>
  </header>

  )
}

export default Header;
