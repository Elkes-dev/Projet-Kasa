import AppRouter from './Router/AppRouter.jsx'
import logement from './logement.json' 
import Header from './components/Header/index.jsx'
import Footer from './components/Footer/index.jsx'

function App() {
  console.log( logement)
  return (
    <>
      <div>
        <Header />
        <AppRouter />
        <Footer />
      </div>
     
    </>
  )
}

export default App


