import {  useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight,faChevronLeft } from "@fortawesome/free-solid-svg-icons";


function Slideshow({pictures}){

    const [index, setIndex] = useState(0);

    const handleNext = () =>{
        setIndex((prevIndex) => {
            if(prevIndex + 1 >= pictures.length){
                return 0
            }else{
                return prevIndex + 1
            }
        })
    }

    const handlePrev =  () =>{
        setIndex((prevIndex) =>{
            if(prevIndex === 0){
                return pictures.length -1
            }else{
                return prevIndex - 1
            }
        }
    )
    }

    return(
        <>
            <div className="logement-container">
                <img src={pictures[index]} alt="logement"  className="img-logement"/>

                {pictures.length > 1 && (
                <>
                    <div className="rating">
                    {index + 1} / {pictures.length}
                    </div>
                    <FontAwesomeIcon icon={faChevronLeft} onClick={handlePrev} className="arrow-left"/>
                    <FontAwesomeIcon icon={faChevronRight}  onClick={handleNext} className="arrow-right"/>
                </>
                )} 
            </div>
        </>
    )
}

export default Slideshow