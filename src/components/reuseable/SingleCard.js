const SingleCard=(props)=>{
    const {title,totaleNumber,icon}=props.item
    return(
        <div className="single_card">
        <div className="card_content">
            <h4>{title}</h4>
            <span>{totaleNumber}+</span>
        </div>
        <span className="card_icon">
        <i className={icon}></i>
        <img src={icon} alt="" />
        </span>
    </div>
               
    )
}

export default SingleCard