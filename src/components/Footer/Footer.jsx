
import './footer.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt='' />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora consequatur magnam ratione maxime perspiciatis at totam maiores asperiores consequuntur voluptatem, delectus doloremque laboriosam ipsa non quas ab similique culpa autem?</p>
            <div className="footer-social-icons">
               <Link to='https://www.facebook.com/'><img src={assets.facebook_icon} alt="" /></Link> 
              <Link><img src={assets.twitter_icon} alt="" /></Link>  
               <Link><img src={assets.linkedin_icon} alt="" /></Link> 
            </div>
        </div>

        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
              <Link to='/'>  <li>Home</li></Link> 
                <li>About us</li>
              <Link to='/order'><li>Delivery</li></Link>  
                <li>Privacy policy</li>
            </ul>
        </div>

        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+1-428-584-0874</li>
                <li>contact@tomato.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className='footer-copyright'> copyright 2024 Tomato.com - All Right Reserved</p>
    </div>
  )
}

export default Footer
