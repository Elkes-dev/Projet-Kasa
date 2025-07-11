import {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'

function Collapse({title, children}){

    const [isOpen, setOpen] = useState(false)

    return(
        <>
            <div className='collapse'>
                <div className='collapse-header'>
                <h2 className="title-collapse">{title}</h2>
                <FontAwesomeIcon icon= {isOpen ?  faChevronDown : faChevronUp} onClick={() => setOpen(!isOpen)}/>   
                </div>
                
            </div>
                {isOpen && ( 
                <div className='collapse-text'>
                    {children}
                </div>
                )
                }   
        </>
    )
}

export default Collapse 