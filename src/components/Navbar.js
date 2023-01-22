import { HiMenuAlt2 } from 'react-icons/hi';
import { BsCartPlus } from 'react-icons/bs';
import  logo  from '../assets/Image.png';
const Navbar =()=>{

    return(
        <nav>
            <li><HiMenuAlt2 fontSize='2.5em' /></li>
            <li><img src={logo} alt='' /></li>
            <li><BsCartPlus fontSize='2.5em' /></li>
        </nav>
    )
}

export default Navbar;