import React from 'react'
import './Loan.css'
const Loan = () => {
  return (
    <div className="loan">
       <form className='container'>
        <h1 className='auto-loan'>Auto Loan Calculator</h1>
        <p className='loan-para'>Use our calculator to estimate your monthly car payments.</p>
        <label>Total price</label><br></br>
        <input type='text'placeholder='10,0000'></input>
        <div class="form-group">
         <div class="input-group">
              <label >Down payment</label>
              <input  type='text' placeholder="   3000" required/>
         </div>
         <div class="input-group">
              <label >Amortization period</label>
              <input style={{marginLeft:'10px'}} type='text' placeholder="   Select Amorization Period"/>    
         </div>
        </div>
       <label>Interest rate</label><br></br>
       <input style={{paddingRight:'10px'}} type='number' placeholder='   5'></input>
       <p className='amount'>Down payment amount</p>
       <p className='monthly'>Monthly payment</p>
       <button type='submit' className='submit'>Apply for loan</button>
       </form>
    </div>
  )
}

export default Loan