import Card from '../Card'


function Gallery({appartements}){

 

    return(
        <>
        <div>
            {appartements.map((appartement) =>{
           return < Card 
                        nom={appartement.title} 
                        photo={appartement.cover} 
                        key={appartement.id} />
                }       
            )}
        </div>
        </>
    )
}

export default Gallery