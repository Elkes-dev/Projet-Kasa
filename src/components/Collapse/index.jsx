import {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'

function Collapse({title, children, className=''}){

    const [isOpen, setOpen] = useState(false)

    return(
        <>
            <div className='collapse-wrapper'>
                <div className={`collapse ${className}`}>
                    <div className='collapse-header'>
                    <h2 className="title-collapse">{title}</h2>
                    <FontAwesomeIcon 
                    icon= {isOpen ?  faChevronDown : faChevronUp} 
                    className={`arrow-icon ${isOpen ?  'rotate' : ""} `}
                    onClick={() => setOpen(!isOpen)}/>   
                    </div>
                </div>
                {isOpen && ( 
                    <div className='collapse-text'>
                        {children}
                    </div>
                    )
                    }   
            </div>
        </>
    )
}

export default Collapse 