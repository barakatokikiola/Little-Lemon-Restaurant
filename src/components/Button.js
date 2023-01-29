import { Link } from "react-router-dom";

const Button =(props)=> {

    return(
        <button type="submit" className="yellow-btn">
        <Link className="link" to={props.link}>{props.name}</Link>
        </button>
    )
}
export default Button;