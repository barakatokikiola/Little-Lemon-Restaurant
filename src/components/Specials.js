const Specials =(props)=>{

    return(
        <div className="specials">
            <h4>{props.dish}</h4>
            <div className="dish-details">
                <div className="dish-text">
                    <p className="dish-description">{props.description}</p>
                    <span>{props.price}</span>
                </div>
                <div className="dish-img">
                    <img src={props.image} alt='' />
                </div>
            </div>
        </div>
    )
}

export default Specials;