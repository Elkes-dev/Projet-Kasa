function Card({nom, photo}){



    return(
        <>
            <figure className='card'>
                <img src={photo} alt={nom} className="card-img"/>
                <div className="card-overlay">
               <figcaption className="card-text">{nom}</figcaption>
               </div>
            </figure>
        </>
    )
}

export default Card