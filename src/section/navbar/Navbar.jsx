import React from 'react'
import "./nav.css"
import Logo from "../../assets/images/logo.png"

const Navbar = () => {
  return (
   <nav id="navbar">
            <div className="container">
                <div className="nav_wrapper">
                    <div className="logo">
                        <a href="#">
                            <img src={Logo} alt="Not found"/>
                        </a>
                    </div>
                    <div className="menu">
                        <ul>
                            <li><a href="#">home</a></li>
                            <li><a href="#">about</a></li>
                            <li><a href="#">service<i class="fa-solid fa-chevron-down"></i></a></li>
                            <li><a href="#">Portfolio</a></li>
                            <li><a href="#">Price</a></li>
                            <li><a href="#">Blog</a></li>
                        </ul>
                    </div>
                    <div className="nav_btn">
                        <a href="#" className="common_btn">contact us</a>
                    </div>
                </div>
            </div>
        </nav>
  )
}

export default Navbar
