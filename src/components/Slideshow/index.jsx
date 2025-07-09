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
            <div className="logementConainer">
                <img src={pictures[index]} alt="logement"  className="img-logement"/>

                {pictures.length > 1 && (
                <>
                    <div>
                    {index + 1} / {pictures.length}
                    </div>
                    <FontAwesomeIcon icon={faChevronLeft} onClick={handlePrev}/>
                    <FontAwesomeIcon icon={faChevronRight}  onClick={handleNext}/>
                </>
                )} 
            </div>
        </>
    )
}

export default Slideshow