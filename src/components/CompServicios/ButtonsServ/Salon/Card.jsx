function Card({id, num, title, description}){
    return(
        <>
        <input className="InServ" type="radio" name="slide" id={id}></input>
                <label htmlFor={id} className="card">
                  <div className="row">
                    <div className="icon">{num}</div>
                    <div className="description">
                      <h4>{title}</h4>
                      <p>{description}</p>
                    </div>
                  </div>
                </label>
        </>
    )
}

export default Card