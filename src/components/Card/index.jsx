function Card({nom, photo}){



    return(
        <>
        <div>
            <figure>
                <img src={photo} alt={nom}/>
               <figcaption>{nom}</figcaption>
            </figure>
        </div>
        </>
    )
}

export default Card