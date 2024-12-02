import React from 'react'
import './Review.css';
const Review = () => {
  return (
    <div className="review">
        <div className="head">
    <p className='type'>Car reviews</p>
    <button className='view'>View all  &#8594;</button>
    </div>
    <div className="review-img">
     <p className='rev-name'>
     2024 Hyundai<br></br>
     Staria Premium Review</p>
     <p className='rev-para'>
     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non egestas justo.<br></br> Vestibulum ac commodo enim, eget fringilla lectus.
     </p>
     <button className='rev-btn'>
        Review Detail
     </button>
    </div>
    </div>
  )
}

export default Review