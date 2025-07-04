import LOGO from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'
import  '../../styles/main.scss'


function Header(){
    return (
    <>
        <div className='header'>
            <img src={LOGO} alt='logo site'></img>
            <nav className='nav-header'>
                <ul>
                    <li>
                        <Link to="/">Accueil</Link>
                    </li>
                    <li>
                        <Link to="/About">A propos</Link>
                    </li>
                </ul>
            </nav>
        </div>
    </>
    )
}

export default Header