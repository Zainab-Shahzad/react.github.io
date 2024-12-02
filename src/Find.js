import React from 'react'
import './Find.css';
const Find = () => {
  return (
    <>
   <div className="find-cars">
    <div className="find-car">
     <div className="find-content">
     <img  className='find-image' decoding="async" src="http://autodealwp.demothemesflat.co/wp-content/uploads/2024/10/previewcar-1.webp" width="210" height="171" alt="image"/>
     <div className="content-description">
     <h3 className='content-heading'>Are you looking for a car?</h3>
     <p className='content-para'>
     Save time and effort as you no longer need to visit multiple stores to find the right car.
     </p>
     <button className="find-car-btn">Find more <i class="fa-solid fa-magnifying-glass"></i></button>
     </div>
     </div>
    </div>

    <div className="find-car" style={{backgroundColor:'#24272c'}}>
     <div className="find-content" >
     <img className='find-image' decoding="async" src="http://autodealwp.demothemesflat.co/wp-content/uploads/2024/10/previewcar-2.webp" width="260" height="171" alt="image"></img>
     <div className="content-description">
     <h3 className='content-heading'>Do you want to sell a car?</h3>
     <p className='content-para'>
     Save time and effort as you no longer need to visit multiple stores to find the right car.
     </p>
     <button className="find-car-btn2">Find more <i class="fa-solid fa-magnifying-glass"></i></button>
     </div>
     </div>
    </div>
   </div>
    
    <h2 className='search-heading'>Search by body</h2>
    <div className="search-options">
      <div className="search-option">
      <img decoding="async" loading="lazy" class="image-taxonomy" src="https://autodealwp.demothemesflat.co/wp-content/uploads/2024/10/Vector.svg" alt="image" height='30px' width='60px'/>
       <p className='option-name'>Coupe</p>
       <p className='count'>1 car</p>
      </div>

      <div className="search-option">
      <img decoding="async" loading="lazy" class="image-taxonomy" src="https://autodealwp.demothemesflat.co/wp-content/uploads/2024/10/12.-Crossover-car.svg" alt="image" height='30px' width='60px'/>
       <p className='option-name'>MUV</p>
       <p className='count'>0 cars</p>
      </div>

      <div className="search-option">
      <img decoding="async" loading="lazy" class="image-taxonomy" src="https://autodealwp.demothemesflat.co/wp-content/uploads/2024/10/Vector-6.svg" alt="image" height='30px' width='60px'></img>
       <p className='option-name'>Sedan</p>
       <p className='count'>1 car</p>
      </div>

      <div className="search-option">
      <img decoding="async" loading="lazy" class="image-taxonomy" src="https://autodealwp.demothemesflat.co/wp-content/uploads/2024/10/Vector-5.svg" alt="image" height='30px' width='60px' />
       <p className='option-name'>Hatchbook</p>
       <p className='count'>2 car</p>
      </div>

      <div className="search-option">
      <img decoding="async" loading="lazy" class="image-taxonomy" src="https://autodealwp.demothemesflat.co/wp-content/uploads/2024/10/Vector-4.svg" alt="image" height='30px' width='60px'></img>
       <p className='option-name'>SUV</p>
       <p className='count'>1 car</p>
      </div>

      <div className="search-option">
      <img decoding="async" loading="lazy" class="image-taxonomy" src="https://autodealwp.demothemesflat.co/wp-content/uploads/2024/10/Vector-3.svg" alt="image" height='30px' width='60px'></img>
       <p className='option-name'>Pickup Truck</p>
       <p className='count'>1 car</p>
      </div>

      <div className="search-option">
      <img decoding="async" loading="lazy" class="image-taxonomy" src="https://autodealwp.demothemesflat.co/wp-content/uploads/2024/10/Vector-2.svg" alt="image" height='30px' width='60px'></img>
       <p className='option-name'>Minivan</p>
       <p className='count'>3 cars</p>
      </div>

      <div className="search-option">
      <img decoding="async" loading="lazy" class="image-taxonomy" src="https://autodealwp.demothemesflat.co/wp-content/uploads/2024/10/Vector-1.svg" alt="image" height='30px' width='60px'></img>
       <p className='option-name'>Crossover</p>
       <p className='count'>4 cars</p>
      </div>

      
    </div>
   </>
  )
}

export default Find