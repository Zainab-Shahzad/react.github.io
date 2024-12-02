import React from 'react'
import './News.css';
const New = () => {
  return (
    <div className="news">
      <div className="head">
    <p className='type'>News to help choose your car</p>
    <button className='view'>View all  &#8594;</button>
    </div>
     <div className="news-boxes">
      <div className="new-box">
        <div style={{position:'relative'}}>
      <img  className='box-img' decoding="async" src="https://autodealwp.demothemesflat.co/wp-content/uploads/2024/10/Img-33.webp" alt="image" />
      <button className='date'>October 15,2024</button>
      </div>
       <div className="news-box-contenet">
        <div className="Admin">
          <p className='Admin-name'>Admin</p>
          <a>New car review</a>
        </div>
         <div className="news-heading">
          Rivian Launches RIT Lease Program in Select States 
         </div>
         <p className='news-description'>
          2024 BMW skytop concept Much like last year's touring Coupe unveiled at the Concorso d'Eleeganza Villa
         </p>
       </div>
      </div>

      <div className="new-box" style={{marginLeft:'40px'}}>
      <div style={{position:'relative'}}>
      <img   className='box-img' decoding="async" src="https://autodealwp.demothemesflat.co/wp-content/uploads/2024/10/Img-32.webp" alt="image"></img>
      <button className='date'>October 15,2024</button>
       </div>
       <div className="news-box-contenet">
        <div className="Admin">
          <p className='Admin-name'>Admin</p>
          <a>New car review</a>
        </div>
         <div className="news-heading">
          Rivian Launches RIT Lease Program in Select States 
         </div>
         <p className='news-description'>
          2024 BMW skytop concept Much like last year's touring Coupe unveiled at the Concorso d'Eleeganza Villa
         </p>
       </div>
      </div>

      <div className="new-box" style={{marginLeft:'40px'}}>
      <div style={{position:'relative'}}>
      <img className='box-img' decoding="async" src="https://autodealwp.demothemesflat.co/wp-content/uploads/2024/10/Img-31.webp" alt="image"></img>
      <button className='date'>October 15,2024</button>
       </div>
       <div className="news-box-contenet">
        <div className="Admin">
          <p className='Admin-name'>Admin</p>
          <a>New car review</a>
        </div>
         <div className="news-heading">
          Rivian Launches RIT Lease Program in Select States 
         </div>
         <p className='news-description'>
          2024 BMW skytop concept Much like last year's touring Coupe unveiled at the Concorso d'Eleeganza Villa
         </p>
       </div>
      </div>
   
    </div>
    </div>
  )
}

export default New