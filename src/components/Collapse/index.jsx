import arrow from '../../assets/images/arrow.png'
import {useState} from 'react'

function Collapse({title, children}){

    const [isOpen, setOpen] = useState(false)

    return(
            <div className='collapse'>
                <h2>{title}</h2>
                <button onClick={() => setOpen(!isOpen)}>
                    <img src={arrow} alt='arrow'/>
                </button>
                {isOpen && ( 
                <div className='collapse-text'>
                    {children}
                </div>
                )
                }   
            </div>
    )
}

export default Collapse 