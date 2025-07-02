import Banner from '../../components/Banner/index.jsx'
import logements from '../../logement.json'
import Gallery from '../../components/Gallery'
import Collapse from '../../components/Collapse'
import HomeImage from '../../assets/images/HomeImage.png'

function Home(){

    return(
        <>
         <Banner image={HomeImage} alt='Home-Banner' />
         <Gallery appartements = {logements}/>
        </>
    )
}
export default Home