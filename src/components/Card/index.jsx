function Card({nom, photo}){



    return(
        <>
            <figure className='card'>
                <img src={photo} alt={nom} className="card-img"/>
               <figcaption className="card-text">{nom}</figcaption>
            </figure>
        </>
    )
}

export default Card