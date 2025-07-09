import Card from '../Card'
import { Link } from 'react-router-dom'


function Gallery({appartements}){

 

    return(
        <>
        <div className='gallery'>
            {appartements.map((appartement) =>( 
                
                <Link to={`/logement/${appartement.id}`}  key={appartement.id}>
                <Card 
                        nom={appartement.title} 
                        photo={appartement.cover} 
                />
                </Link>
                   
            ))}
        </div>
        </>
    )
}

export default Gallery