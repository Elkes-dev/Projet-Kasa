import Banner from '../../components/Banner/index.jsx'
import logements from '../../logement.json'
import Gallery from '../../components/Gallery'


function Home(){

    return(
        <>
         <Banner />
         <Gallery appartements = {logements}/>
        </>
    )
}
export default Home