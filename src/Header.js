import React from 'react'
import './Header.css'
import  { useState } from "react";

export const Header = () => {
  const images = [
    "/slider-home-2.webp",
    "/slider-home-1.webp",
   
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  return (
    <header style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${images[currentIndex]})` }}>
      <button className="arrow left-arrow" onClick={handlePrevious}>
      <i class="fa-solid fa-arrow-left arrow-i"></i>
      </button>
      <button className="arrow right-arrow" onClick={handleNext}>
      <i class="fa-solid fa-arrow-right arrow-i"></i>
      </button>

      <div className="nav">
        <div className='logo'>
        <img class="site-logo" width="225" height="45"  src="http://autodealwp.demothemesflat.co/wp-content/uploads/2024/10/Logo-1.png" alt="AutoDeal – Car Dealer, Rental &amp; Listing WordPress Theme"></img>
        </div>
      
      <div className='tabs'>
        <select className='home nav-select'>
          <option >Home</option>
        </select>
        <select className='nav-select'>
          <option>By Car</option>
        </select>
        <select className='nav-select'>
          <option>Listing</option>
        </select>
        <select className='nav-select'>
          <option>Pages</option>
        </select>
        <select className='nav-select'>
          <option>Blog</option>
        </select>
        <select className='nav-select'>
          <option>Contact</option>
        </select>
      </div>
      <div className='icons'>
      <i class="fa-solid fa-magnifying-glass icn"></i>
      <i class="fa-regular fa-heart icn"></i>
      <div className='login'>Register/Login</div>
      <div className='add-list'> <i class="fa-solid fa-car-rear add-icn"></i> Add listing</div>
      </div>
      </div>
      
     <div className="content">
     <h1>Nissan Kicks 2022</h1>
      <div className='attributes'>
       <p className='attribute'><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none"><path d="M25.406 12.1967C25.051 11.5568 24.5392 11.0175 23.9187 10.6294L22.5255 9.75818H24.7453C25.229 9.75818 25.6226 9.36467 25.6226 8.88091V8.06775C25.6226 7.80817 25.4111 7.59675 25.1512 7.59675H24.2332C23.2864 7.59675 22.4907 8.25748 22.2838 9.14208L20.9763 6.54314C20.5914 5.77812 20.0028 5.1362 19.2738 4.68689C18.5448 4.23757 17.7071 4 16.8506 4H9.15131C8.29478 4 7.45674 4.23757 6.72776 4.68689C5.99878 5.1362 5.41011 5.77812 5.02521 6.54314L3.70883 9.16026C3.48816 8.29448 2.7021 7.65255 1.76872 7.65255H0.850634C0.59074 7.65255 0.379316 7.86398 0.379316 8.12387V8.93672C0.379316 9.42047 0.772825 9.81398 1.25658 9.81398H3.38676L2.08282 10.6291C1.46354 11.0162 0.94949 11.5583 0.595523 12.1967C0.241269 12.8372 0.0551925 13.557 0.0546875 14.2889V17.5952C0.0546875 17.9944 0.1258 18.3864 0.265792 18.7607L0.35253 18.9929C0.457444 19.2719 0.638254 19.5076 0.878696 19.6788V21.0395C0.878696 21.5692 1.30983 22 1.83951 22H4.69229C5.22228 22 5.6531 21.5692 5.6531 21.0395V18.9221L6.16205 18.5538L19.8389 18.6144L20.3488 18.9833V21.0395C20.3488 21.5692 20.7796 22 21.3096 22H24.1624C24.692 22 25.1232 21.5692 25.1232 21.0395V19.6785C25.3614 19.5079 25.5463 19.2671 25.649 18.9929L25.7358 18.7607C25.8761 18.3867 25.9472 17.9948 25.9472 17.5952V14.2889C25.9472 13.5587 25.76 12.8355 25.406 12.1967ZM5.74877 16.4517H2.86984C2.32486 16.4517 1.8816 16.0084 1.8816 15.4634V14.5243C1.8816 14.2379 2.11471 14.0048 2.40107 14.0048H3.46138C4.72258 14.0048 5.74877 15.031 5.74877 16.2922V16.4517ZM18.3685 16.0993H7.6334V15.1426H18.3685V16.0993ZM18.3481 12.6626C18.1086 12.8801 17.8608 13.1049 17.6242 13.3291L16.9663 12.6342C17.2106 12.4034 17.4619 12.175 17.7049 11.9544C18.4437 11.2841 19.1513 10.6412 19.7056 9.8937C19.7448 9.84109 19.7831 9.78815 19.8201 9.73426C19.857 9.68164 19.8928 9.62871 19.9278 9.57481H6.07403C6.10911 9.62871 6.14483 9.68164 6.18182 9.73426C6.21881 9.78815 6.25708 9.84109 6.2963 9.8937C6.85021 10.6412 7.55782 11.2837 8.29669 11.9544C8.53968 12.175 8.79129 12.4034 9.03524 12.6342L8.37769 13.3291C8.14075 13.1049 7.89329 12.8801 7.65381 12.6626C6.7437 11.8367 5.80553 10.9849 5.14447 9.8937C5.11258 9.84109 5.08133 9.78783 5.05104 9.73426C5.02074 9.68164 4.99172 9.62871 4.96334 9.57481H4.92795L6.1646 7.1165C6.73573 5.98094 7.88022 5.27555 9.15131 5.27555H16.8506C18.1217 5.27555 19.2658 5.98094 19.837 7.1165L21.0736 9.57481H21.0382C21.0098 9.62871 20.9808 9.68164 20.9505 9.73426C20.9202 9.78783 20.8893 9.84109 20.8574 9.8937C20.196 10.9849 19.2582 11.8367 18.3481 12.6626ZM24.1203 15.4634C24.1203 16.0084 23.6767 16.4517 23.1317 16.4517H20.2531V16.2922C20.2531 15.031 21.279 14.0048 22.5405 14.0048H23.6005C23.8872 14.0048 24.1203 14.2379 24.1203 14.5243V15.4634Z" fill="white"></path></svg><h4>Used Car</h4></p>
       <p className='attribute'><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none"><path d="M13.0201 1.36567C6.01644 1.36567 0.338867 7.04319 0.338867 14.0469C0.338867 17.5621 1.76949 20.7429 4.0797 23.0397L5.9713 21.1482C4.21609 19.4062 3.10579 17.0174 3.0217 14.3695H4.4646C4.53121 14.3695 4.59717 14.3564 4.65872 14.3309C4.72026 14.3055 4.77618 14.2681 4.82328 14.221C4.87038 14.1739 4.90774 14.118 4.93323 14.0564C4.95871 13.9949 4.97182 13.9289 4.97181 13.8623C4.97181 13.5823 4.74478 13.3552 4.4646 13.3552H3.04011C3.19341 11.1113 4.08583 9.0715 5.47678 7.47599L6.51366 8.51297C6.71168 8.71114 7.03293 8.71114 7.23095 8.51297C7.42912 8.31485 7.42912 7.99375 7.23095 7.79568L6.18096 6.74554C7.85526 5.17655 10.0676 4.17518 12.5129 4.05314V5.37779C12.5129 5.65781 12.74 5.88484 13.0201 5.88484C13.3002 5.88484 13.5273 5.65781 13.5273 5.37779V4.05304C16.0066 4.17674 18.2463 5.20489 19.9286 6.81153L18.9446 7.79558C18.7465 7.99365 18.7465 8.31475 18.9446 8.51287C19.1427 8.71104 19.4638 8.71104 19.6619 8.51287L20.6263 7.54842C21.9813 9.13307 22.8492 11.1451 23.0001 13.3551H21.4342C21.1542 13.3551 20.927 13.5822 20.927 13.8622C20.927 14.1424 21.1542 14.3694 21.4342 14.3694H23.0184C22.9344 17.0174 21.8239 19.4061 20.0688 21.1481L21.9603 23.0396C24.2707 20.7427 25.7012 17.562 25.7012 14.0468C25.7012 7.04314 20.0237 1.36567 13.0201 1.36567Z" fill="white"></path><path d="M18.3226 9.01872C17.9481 8.69788 17.4941 9.2079 17.0806 9.57169L11.9705 14.3412C11.6574 14.6758 11.7415 15.2637 12.1586 15.6542L12.2426 15.7325C12.6596 16.1229 13.2518 16.1681 13.5651 15.8336L17.8246 10.3619C18.2099 9.85707 18.6592 9.35106 18.3769 9.07041L18.3226 9.01872Z" fill="white"></path></svg><h4>50445</h4></p>
       <p className='attribute'><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none"><g clip-path="url(#clip0_2002_24800)"><path d="M13.0001 0.222775C5.95485 0.222775 0.222852 5.95478 0.222852 13C0.222852 20.0452 5.95485 25.7772 13.0001 25.7772C20.0453 25.7772 25.7773 20.0452 25.7773 13C25.7773 5.95478 20.0453 0.222775 13.0001 0.222775ZM13.0001 23.8051C7.04202 23.8051 2.195 18.9581 2.195 13C2.195 7.04195 7.04202 2.19493 13.0001 2.19493C18.9581 2.19493 23.8051 7.04195 23.8051 13C23.8051 18.9581 18.9581 23.8051 13.0001 23.8051Z" fill="white" stroke="white" stroke-width="0.4"></path><path d="M13 12.1875C11.6789 12.1875 10.5625 11.4433 10.5625 10.5625C10.5625 9.68175 11.6789 8.9375 13 8.9375C13.7475 8.9375 14.4398 9.1715 14.898 9.57775C14.9777 9.64877 15.0707 9.70335 15.1716 9.73837C15.2724 9.77338 15.3792 9.78814 15.4858 9.7818C15.5924 9.77546 15.6967 9.74814 15.7927 9.70142C15.8887 9.65469 15.9745 9.58947 16.0452 9.5095C16.3442 9.17475 16.3134 8.66125 15.977 8.36225C15.4082 7.85687 14.6445 7.51562 13.8125 7.38075V6.5C13.8125 6.0515 13.4485 5.6875 13 5.6875C12.5515 5.6875 12.1875 6.0515 12.1875 6.5V7.3775C10.335 7.67975 8.9375 8.99275 8.9375 10.5625C8.9375 12.3549 10.7607 13.8125 13 13.8125C14.3211 13.8125 15.4375 14.5568 15.4375 15.4375C15.4375 16.3182 14.3211 17.0625 13 17.0625C12.2525 17.0625 11.5602 16.8285 11.102 16.4222C10.7672 16.1233 10.2537 16.1525 9.95475 16.4905C9.65575 16.8252 9.68663 17.3387 10.023 17.6378C10.5918 18.1448 11.3555 18.4844 12.1875 18.6209V19.5C12.1875 19.9485 12.5515 20.3125 13 20.3125C13.4485 20.3125 13.8125 19.9485 13.8125 19.5V18.6225C15.665 18.3203 17.0625 17.0072 17.0625 15.4375C17.0625 13.6451 15.2393 12.1875 13 12.1875Z" fill="white"></path></g><defs><clipPath><rect width="26" height="26" fill="white"></rect></clipPath></defs></svg> <h4>Disel</h4></p>
      </div>

      <div className='detail'>
       <button className='detail-btn'>Detail</button>
       <div className="admin">
       <img style={{borderRadius:'50%', marginLeft:'20px'}} height="50px"  width="50px" alt="Leslie Alex" src="https://autodealwp.demothemesflat.co/wp-content/uploads/2024/11/Img-18-50x50.webp" onerror="this.src = 'http://autodealwp.demothemesflat.co/wp-content/uploads/2024/10/user_01.jpg';" class="avatar avatar-96 photo" loading="lazy" ></img>
        <div className="admin-info">
        <span className='name'>Leslie Alex</span><br></br>
        <span className='post'>Administrative staff</span>
        </div>
       </div>
      </div>
     </div>
      
      <div className='line1'>
        <span className='all'>All</span>
        <span className='new'>New</span>
        <span className='used'>Used Car</span>
      </div>
      <div className="line2">
        <div className="line2-content">
            <div className='block' style={{borderRight:'0.7px solid lightGrey'}}>
            <p className='opt-name'>Make</p>
            <select className='select-opt' >
              <option className='opts'>Make</option>
              <option  className='opts'>BMW</option>
              <option  className='opts'>Audi</option>
              <option  className='opts'>Make</option>
            </select>
            </div>
            <div className='block' style={{borderRight:'0.7px solid  lightGrey'}}>
            <p className='opt-name' >Model</p>
            <select className='select-opt'>
              <option className='opts'>Models</option>
              <option  className='opts'>4A</option>
              <option  className='opts'>Allmera</option>
              <option  className='opts'>Ballets</option>
            </select>
            </div>
            <div className='block' style={{borderRight:'0.7px solid  lightGrey'}}>
            <p className='opt-name'>Door</p>
            <select className='select-opt'>
              <option className='opts'>Door</option>
              <option  className='opts'>2</option>
              <option  className='opts'>4</option>
              <option  className='opts'>6</option>
            </select>
            </div>
            <div>
            <p className='opt-name'>Body</p>
            <select className='select-opt'>
              <option className='opts'>Body</option>
              <option  className='opts'>Convertible</option>
              <option  className='opts'>Crossver</option>
              <option  className='opts'>Coupe</option>
            </select>
            </div>
            <div className="more">
              <button></button>
            </div>
            <div className='find'>
              <button>
                Find more   <i class="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
        </div>
      </div>

      <span className='heading'>Transition: </span>
      <span className='sub-heading'>Coupe,</span>
      <span  className='sub-heading'>MVP,</span>
      <span  className='sub-heading'>Sedan,</span>
      <span  className='sub-heading'>Hatchbook,</span>
      <span  className='sub-heading'>SUV,</span>
      <span  className='sub-heading'>Pickup Truck</span>
      <span  className='sub-heading'>Minivan</span>
      <span  className='sub-heading'>Crossover</span>
    </header>
  )
}
export default Header
