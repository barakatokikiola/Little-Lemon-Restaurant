import heroimg from '../assets/Frame.png';
import Button from './Button';
const Hero =()=>{

    return(
        <div className="hero">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <div className='hero-text'>
               <div className='col'>
               <p>
                We are a family owned 
                Mediterranean restaurant, 
                focused on traditional
                recipes served with a 
                modern twist.
                </p>
               </div>
                <div className='col'>
                <img src={heroimg} className='responsive' alt='' />
                </div>
            </div>
            <Button name='Reserve a table' />
        </div>
    )
}

export default Hero;