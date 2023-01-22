import Navbar from "./Navbar";
import img from '../assets/img.png';
import Button from "./Button";
const Reserve =() => {

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
            <input type='text' placeholder="Date" />
            <input type='text' placeholder="Time" />
        </div>
        <div>
            <input type='text' placeholder="Number of Diners" />
        </div>
        <div>
            <input type='text' placeholder="Occassion" />
        </div>
        <span>
        Seating Options
        </span>
        <div className="radio">
        <label for='standard'>Standard</label>
        <input type='radio' id='standard' />
        </div>
        <div className="radio">
        <label for='outside'>Outside</label>
        <input type='radio' id='outside' />
        </div>
        <Button name={`Let's go`} />
       </form>
       
        </div>
       </div >
    )
       
}

export default Reserve;