import Navbar from "./Navbar";
import img from '../assets/img.png';
import Button from "./Button";
import { useState } from "react";

const BookingForm =(props)=>{
    const [state, setState ] = useState({});
  
   const handleChange=(e)=> {
       setState(e.target.value)
   }
  
    return(
        <div className="section">
        <Navbar />
        <div className="hero">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
        Find a table for any occassion
        </p>
        <div className='row'>
           <div className='c'>
            <img src={img} className='responsive' alt='' />
            </div>
          
            <div className='c'>
            <img src={img} className='responsive' alt='' />
            </div>
        </div>
       <form className="">
        <div className="small">
            <input type='date' placeholder="Date"
            value={state}
            onChange={handleChange} />

            <select
            onChange={props.handleTime}>
                    {props.availableTimes.map((time)=>{
                        return(
                            <option key={time}>{time}</option>
                        )
                    })}
            
            </select>

        </div>
        <div>
        <label htmlFor='guests'>Number of Diners</label>
            <input type='number'
            value={state}
            onChange={handleChange}
            id='guests'
             placeholder="1"
             min='1'
             max='10' />
        </div>
       <label htmlFor='occasion'>Occasion</label>
       <select id='occasion'
       value={state} onChange={handleChange}>
        <option>Birthday</option>
        <option>Anniversary</option>
        <option>Dinner</option>
       </select>
        <span>
        Seating Options
        </span>
        <div className="radio">
        <label htmlFor='standard'>Standard</label>
        <input type='radio' id='standard' />
        </div>
        <div className="radio">
        <label htmlFor='outside'>Outside</label>
        <input type='radio' id='outside' />
        </div>
        <Button
         link='/signup'
         name={`Let's go`} />
       </form>
       
        </div>
       </div >
    )
}

export default BookingForm;