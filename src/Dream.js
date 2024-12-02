import React from 'react'
import './Dream.css'
const Dream = () => {
  return (
    <>
    <h2  style={{ paddingLeft: '120px'}}>Find your dream car easily and quickly</h2>
    <p className='browse'>Browse thousands of new and used cars from all reputable brands on the market.</p>
    <div className="dream-boxes">
      <div className="dream-box">
        <div className="dream-box-img1"></div>
        <h3 className='title'>
        Browse inventory
        </h3>
        <p className='box-description'>Find the ideal car for you and browse our affordable inventory.</p>
        <button className="dream-box-btn">
          Search inventory  <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
      <div className="dream-box">
        <div className="dream-box-img2" ></div>
        <h3 className='title'>
        Get An Offer
        </h3>
        <p className='box-description'>What's your car worth? Get the best value for your vehicle.</p>
        <button className="dream-box-btn">
          Get trade-in Value  <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
      <div className="dream-box">
        <div className="dream-box-img3"></div>
        <h3 className='title'>
        Apply For Finance
        </h3>
        <p className='box-description'>Fill out our credit approval form for your next used vehicle loan.
        </p>
        <button className="dream-box-btn">
          Apply Now  <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
      <div className="dream-box">
        <div className="dream-box-img4"></div>
        <h3 className='title'>
        Expert Service
        </h3>
        <p className='box-description'>Expert technicians will keep your vehicle in top running condition.</p>
        <button className="dream-box-btn">
          Schedule Services <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
    </>
  
  )
}

export default Dream