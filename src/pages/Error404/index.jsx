import Error404 from '../../assets/images/404.png'
import { Link } from 'react-router-dom'


function Error(){
    return(
        <>
        <div className='error-header'>
            <img src={Error404} alt='logo-error404'/>
            <p>Oups! La page que vous demandez n'existe pas.</p>
        </div>
        <div className='error-redirection'>
            <Link to="/">
            Retourner sur la page d'Accueil
            </Link>
        </div>
        </>
    )
}

export default Error