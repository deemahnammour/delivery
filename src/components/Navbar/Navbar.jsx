import React, { useContext, useState } from 'react'
import "./navbar.css"
import { assets } from './../../assets/assets'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({ setShowLogin }) => {

  const [menu, setMenu] = useState('menu');

  const {getTotalCartAmount} = useContext(StoreContext)

  const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} alt='' className='logo' /></Link>
      <ul className="navbar-menu">
        <Link to='/' onClick={() => setMenu("Home")} className={menu === 'Home' ? 'active' : ''}>Home</Link>
        <a onClick={() => { setMenu("Menu"); scrollToSection('explore-menu'); }} className={menu === 'Menu' ? 'active' : ''}> Menu</a>
        <a onClick={() => { setMenu("Mobile-App"); scrollToSection('app-download'); }} className={menu === 'Mobile-App' ? 'active' : ''}>Mobile App</a>
        <a onClick={() => { setMenu("Contect-us"); scrollToSection('footer'); }} className={menu === 'Contect-us' ? 'active' : ''}>Contact Us</a>
       </ul>

      <div className="navbar-right">

        <img src={assets.search_icon} alt='' />

        <div className="navbar-search-icon">
          <Link to='/Cart' > <img src={assets.basket_icon} alt='' /> </Link>
          <div className={getTotalCartAmount()===0?'':'dot'}></div>
        </div>
        <button onClick={() => setShowLogin(true)}>Sign in</button>
      </div>

    </div>
  )
}

export default Navbar
