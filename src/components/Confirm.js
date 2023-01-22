import Navbar from "./Navbar";
import Button from "./Button";

const Confirm =() => {
    const required='*';
    return(
       <div className="section">
        <Navbar />
        <div className="hero">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        
       <form className="">
       <p>
        Booking Details
        </p>
        <div>
            <input type='text' placeholder="Date - Time - Number of Diners" />
        </div>
        <p>Credit Card Details</p>
        <div>
            <input type='number' placeholder={`${required} Card number`} />
            <span>Card number is required</span>
        </div>
        <div>
            <input type='text' placeholder={`${required} First name / Last name`} />
            <span>Name is required</span>
        </div>

        <div className="small margin">
        <div>
            <span>Expiry Date</span>
            <input type='number' placeholder='MM/YYYY' />
        </div>
        <div>
            <span>CVV</span>
            <input type='text' placeholder='' />
        </div>
        </div>
      
        <div className="radio">
        <label for='standard'>Send me booking confirmation by text</label>
        <input type='radio' id='standard' />
        </div>
        <div className="radio">
        <label for='outside'>Send me booking confirmation by email</label>
        <input type='radio' id='outside' />
        </div>
        <Button name={`Book`} />
       </form>
       
        </div>
       </div >
    )
       
}

export default Confirm;