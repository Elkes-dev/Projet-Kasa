import logements from '../../logement.json'

function Card(logements){



    const viewGallery =logements.map((logement)=>
               <figure key={logement.id}>
                <img src={logement.cover} alt={logement.title}/>
               <figcaption>{logement.title}</figcaption>
               </figure>
            )
console.log(viewGallery)
    return(
        <>
        <div>
            {viewGallery}
        </div>
        </>
    )
}

export default Card