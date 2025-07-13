import Slideshow from "../../components/Slideshow"
import logement from '../../logement.json'
import {useParams } from "react-router-dom"
import Collapse from "../../components/Collapse";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Logement(){
   
   const{id} = useParams(); // ← id correspond à :id dans l’URL

   /*const findLogement = logement.find((appart) => appart.id === id)*/

   const [currentLogement, setLogement] = useState(null);

   

   useEffect(()=>{
            const findLogement = logement.find((appart) => appart.id === id)
            setLogement(findLogement)
   }, [id]
)


if(!currentLogement) return <div></div>

const ratingNumber = parseInt(currentLogement.rating);
    return(
        <>
        <div className="slideshow">
            <Slideshow  pictures={currentLogement.pictures} className="img-slideshow" />
            <div className="logement-header">   

                <div className="left-info">
                    <h1 className="title-logement">{currentLogement.title}</h1>
                    <p className="location-logement">{currentLogement.location}</p>
                    <div className="tags">
                        <ul>
                        {currentLogement.tags.map((tag,index)=>(
                            <li key={index}>
                                {tag}
                            </li>
                        
                        ))}
                        </ul>
                    </div> 
                </div>
                <div className="right-info">
                    <div className="id-person">
                        <p>{currentLogement.host.name.replace(/ (?!.* )/, '\n')}</p>
                        <img src={currentLogement.host.picture} alt="photo-person" className="photo-person"/>
                    </div>
                    <div className="stars">
                        {[0,1,2,3,4].map((index)=> (
                            <FontAwesomeIcon 
                                key={index}
                                icon={faStar}
                                style={{ color: index < ratingNumber ? "#FF6060" : "#E3E3E3" }} />
                        ))}
                    </div>
                </div>
            
                
        </div>
            <div className="data-logement">
            <Collapse title="Description" className="collapse-logement-description">
                <div className="description">
                    {currentLogement.description}
                </div>
            </Collapse>
            
            <Collapse title="Equipements" className="collapse-logement-equipements">
                <div className="equipements">
                    <ul>
                    {currentLogement.equipments.map((equipement, index) => (
                        <li key={index}>{equipement}</li>
                    ))}    
                    </ul>
                </div>
            </Collapse>
            </div>
        </div>
        </>
    )
}

export default Logement