import LOGO from '../assets/images/logo.png'


function Header(){
    return (
    <>
        <div>
            <img src={LOGO} alt='logo site'></img>
        </div>
        <ul>
            <li>
                Accueil
            </li>
            <li>
                A propos
            </li>
        </ul>
    </>
    )
}

export default Header