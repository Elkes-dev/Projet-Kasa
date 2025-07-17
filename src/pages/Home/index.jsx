import Banner from '../../components/Banner/index.jsx'
import logements from '../../logement.json'
import Gallery from '../../components/Gallery'
import HomeImage from '../../assets/images/HomeImage.png'

function Home(){

    return(
        <>
         <Banner image={HomeImage} 
          alt='Home-Banner'
          text={
            <>
            Chez vous,<br className="line-break"/> partout et ailleurs
            </>
          }
          />
         <Gallery appartements = {logements}/>
        </>
    )
}
export default Home