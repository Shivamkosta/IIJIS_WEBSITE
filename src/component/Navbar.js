import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        
            <header className="section site-header" role="banner">
                <div className="site-header__inner section__inner region region-header ">
                  <Link href="#"><img src="images/logo.png" style={{width: '120px'}} />
                  </Link>
                  <nav className="site-header__nav main-nav">
                    <nav role="navigation" aria-labelledby="block-mainnavigation-menu" id="block-mainnavigation" className="block block-menu navigation menu--main">
                      <h2 className="visually-hidden" id="block-mainnavigation-menu" />
                      <ul className="menu">
                        <li className="menu-item ">
                          <Link to="/">Home</Link>
                        </li>
                        <li className="menu-item ">
                          <Link to="/about">About us</Link>
                        </li>
                        <li className="menu-item ">
                          <Link to="/contact">Contact</Link>
                        </li>
                        <li className="menu-item ">
                          <Link to="/login"> Login / Logout</Link>
                        </li>
                      </ul>
                    </nav>
                  </nav>
                  <button className="site-header__burger">
                    menu
                  </button>
                </div>
              </header>
        
    )
}
export default Navbar