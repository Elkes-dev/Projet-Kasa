import LOGO from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'
import  '../../styles/main.scss'
import { useLocation } from 'react-router-dom'


function Header(){

const location = useLocation();

    return (
    <>
        <div className='header'>
            <img src={LOGO} alt='logo site'></img>
            <nav className='nav-header'>
                <ul>
                    <li>
                        <Link to="/" className={location.pathname === "/" ? 'active' : ""}>
                        Accueil
                        </Link>
                    </li>
                    <li>
                        <Link to="/About" className={location.pathname === "/About" ? 'active' : ""}>
                        A propos
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    </>
    )
}

export default Header