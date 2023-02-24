import React from 'react'
import logo from "../../logo.png";
import {Link} from "react-router-dom";
import {ImSearch} from "react-icons/im";
const Header = () => {
  return (
    <nav className="head"> 
        <img src={logo} alt="" />
        <div>
            <Link to="/tv">Tv</Link>
            <Link to="/movies" >Movies</Link>
            <Link to="/Popular">Popular</Link>
            <Link to="Serials">Serials</Link>
        </div>
       <ImSearch/>
    </nav>
  )
}

export default Header;