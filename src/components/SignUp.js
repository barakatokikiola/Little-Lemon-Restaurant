import Navbar from "./Navbar";
import Button from "./Button";

const SignUp =() => {
 const required = '*';
 
    return(
       <div className="section">
        <Navbar />
        <div className="hero">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>Please sign up to collect points</p>
       <form className="">
        <div>
            <input type='text' placeholder={`${required} First name`} />
            <span>First name is required</span>
        </div>
        <div>
            <input type='text' placeholder={`${required} Last name`} />
            <span>Last name is required</span>
        </div>
        <div>
            <input type='number' placeholder={`${required} Phone number`} />
            <span>Phone number is required</span>
        </div>
        <div>
            <input type='email' placeholder={`${required} Email`} />
            <span>Email is required</span>
        </div>
       
        <div>
            <input type='password' placeholder={`${required} Password`} />
            <span>6 - characters password is all you need</span>
        </div>
        <div>
            <textarea
            placeholder="Add a special request (optional)"
            rows={5}
             />
        </div>
        <Button name={`Continue`} />
       </form>
       
        </div>
       </div >
    )
       
}

export default SignUp;