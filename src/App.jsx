import {Routes, Route} from 'react-router-dom'
import logement from './logement.json' 
import Header from './components/Header'
import Banner from './components/Banner'


function App() {
  console.log( logement)
  return (
    <>
      <div>
        <Header />
        <Banner />
      </div>
     
    </>
  )
}

export default App
