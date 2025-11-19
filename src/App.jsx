import  { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import {   Route, Routes } from 'react-router-dom'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'
import Menu from './pages/Menu/Menu'


const App = () => {

  const [showLogin , setShowLogin] = useState(false)

  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin} />:<></>}
      <div className='app'>
        <Navbar  setShowLogin={setShowLogin} />
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
          <Route path='/list' element={<Menu />} />
          
        </Routes>
      </div>
      <Footer />
    </>

  )
};

export default App
