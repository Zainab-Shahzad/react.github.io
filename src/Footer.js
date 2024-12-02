import React from 'react'
import './Footer.css';
const Footer = () => {
  return (
   <footer className='footer'>
    <div className="upper-panel">
        <div className="panel-icon">
         <img src="https://autodealwp.demothemesflat.co/wp-content/themes/autodeal/images/information-box/icon-1.png" alt="images" height="70px" />
          <div className="icon-info">
            <p className='dark'>Top 1 Americas</p>
            <p className='light'>Largest Auto portal</p>
            </div> 
        </div>

        <div className="panel-icon">
        <img src="https://autodealwp.demothemesflat.co/wp-content/themes/autodeal/images/information-box/icon-2.png" alt="images" width="70px" height="70px"/>
          <div className="icon-info">
            <p className='dark'>Car Sold</p>
            <p className='light'>Every 5 minute</p>
            </div> 
        </div>

        <div className="panel-icon">
        <img src="https://autodealwp.demothemesflat.co/wp-content/themes/autodeal/images/information-box/icon-3.png" alt="images" height="70px" width="70px"/>
          <div className="icon-info">
            <p className='dark'>Offers</p>
            <p className='light'>Stay updated pay less</p>
            </div> 
        </div>

        <div className="panel-icon">
        <img src="https://autodealwp.demothemesflat.co/wp-content/themes/autodeal/images/information-box/icon-4.png" alt="images" height="70px" width="70px"></img>
          <div className="icon-info">
            <p className='dark'>     .</p>
            <p className='light'>Decode right code</p>
            </div> 
        </div>
    </div>

    <div className="footer-content">
        <ul>
            <h4>About Auto Decor</h4>
            <li className='light list-item'>About us</li>
            <li className='light list-item'>Compare listings</li>
            <li className='light list-item'>Dealer listings</li>
            <li className='light list-item'>Sale Agent</li>
            <li className='light list-item'>Contact Us</li>
            <li className='light list-item'>Blog List</li>
            <li className='light list-item'>FAQ's</li>
        </ul>

        <ul>
            <h4>Popular use car</h4>
            <li className='light list-item'>KIA</li>
            <li className='light list-item'>Ford</li>
            <li className='light list-item'>Isuzu</li>
            <li className='light list-item'>Foton</li>
            <li className='light list-item'>Toyota</li>
            <li className='light list-item'>Land</li>
            <li className='light list-item'>Merceed's Benz</li>
        </ul>

        <ul>
            <h4>Other</h4>
            <li className='light list-item'>How it work</li>
            <li className='light list-item'>Terms and condition</li>
            <li className='light list-item'>Privacy Policy</li>
            <li className='light list-item'>Copyright</li>
            <li className='light list-item'>Health Center</li>
            <li className='light list-item'>Care sales trends </li>
            <li className='light list-item'>Personal loan</li>
        </ul>

        <ul>
            <h4 style={{marginTop:'20px'}}>Newsletters</h4>
            <li className='light list-item'>Stay on the top of the latest car trends, tips and tricks for selling you car</li>
            <input className='footer-email' type='email' placeholder='Your email address'/>
            <button className='footer-btn'>Send</button>
        </ul>
    </div>

      <div className="lower-panel">
      <div className='logo'>
        <img class="site-logo" width="225" height="45"  src="http://autodealwp.demothemesflat.co/wp-content/uploads/2024/10/Logo-1.png" alt="AutoDeal – Car Dealer, Rental &amp; Listing WordPress Theme"></img>
        </div>
        <div className="inner-right">
          <div className="inner-description">
          © 2024 Auto Decar. All rights reserved
          </div>
          <div className="inner-icons">
            <li className='inner-icon'>
            <i class="fa-brands fa-facebook"></i>
            </li>
            <li className='inner-icon'>
            <i class="fa-brands fa-linkedin-in"></i>
            </li>
            <li className='inner-icon'>
            <i class="fa-brands fa-twitter"></i>
            </li>
            <li className='inner-icon'>
            <i class="fa-brands fa-instagram"></i>
            </li>
          </div>
        </div>
      </div>
   </footer>
 )
}

export default Footer