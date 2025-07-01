import LOGO from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'


function Header(){
    return (
    <>
        <div>
            <img src={LOGO} alt='logo site'></img>
        </div>
        <nav>
            <ul>
                <li>
                    <Link to="/">Accueil</Link>
                </li>
                <li>
                    <Link to="/About">A propos</Link>
                </li>
            </ul>
        </nav>
    </>
    )
}

export default Header