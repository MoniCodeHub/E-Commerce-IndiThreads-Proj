import React from 'react';
import {useState, useContext} from 'react';
import './Navbar.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from "react-router-dom";
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {

  const [menu, setMenu] = useState("shop");
  const {getTotalCartItems} = useContext(ShopContext);


  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="logo-img" />
            <p><i>IndiThreads</i></p>
        </div>
        <ul className="nav-menu">
            <li onClick={()=>{setMenu("shop")}}>
              <Link style={{textDecoration:'none'}} to='/'>Shop</Link>{menu === "shop" ? <hr/>: <></>}
            </li>
            <li onClick={()=>{setMenu("ethnic")}} >
              <Link style={{textDecoration:'none'}} to='/ethnic'>Ethnic</Link>{menu === "ethnic" ? <hr/>: <></>}
            </li>
            <li onClick={()=>{setMenu("indo-western")}}>
              <Link style={{textDecoration:'none'}} to='/indo-western'>IndoWestern</Link>{menu === "indo-western"?<hr/>:<></>}
            </li>
            <li onClick={()=>{setMenu("handlooms")}}>
              <Link style={{textDecoration:'none'}}  to='/handlooms'>Handlooms</Link>{menu=== "handlooms"?<hr/>:<></>}
            </li>
        </ul>
        <div className="nav-search">
          <input type="text" placeholder="search" />
        </div>
        <div className="nav-login-cart">
            <Link to="/login"><button>Login</button></Link>
            <Link to='/cart'><img src={cart_icon} alt="" /></Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>

    </div>
  )
}

export default Navbar;