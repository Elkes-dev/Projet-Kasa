import Banner from '../../components/Banner'
import AboutImage from '../../assets/images/AboutImage.png'
import Collapse from '../../components/Collapse'

function About(){

    return(
        <>
         <Banner image={AboutImage} alt='About-Banner' />
         < Collapse title ="Fiabilité" className='collapse-about'>
         <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
         </Collapse>
         < Collapse title ="Respect" className='collapse-about'>
         <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
         </Collapse>
         < Collapse title ="Services" className='collapse-about'>
         <p>La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque intéraction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.</p>
         </Collapse>
         < Collapse title ="Sécurité" className='collapse-about'>
         <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestiques pour nos hôtes.</p>
         </Collapse>
        </>
    )
}
export default About