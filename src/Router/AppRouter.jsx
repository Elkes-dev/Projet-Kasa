import {Routes, Route,} from 'react-router-dom'
import Home from '../pages/Home/index'
import About from '../pages/About/index'
import Error from '../pages/Error404'
import Logement from '../pages/Logement'

function AppRouter(){

    return(
        <>
            < Routes >
                 < Route path='/' element={<Home /> } />
                 < Route path='/about' element={<About />} />
                 < Route path='/logement/:id' element={<Logement />}  />
                 < Route path="*" element={<Error />} />
            </ Routes>
        </>
    )
}

export default AppRouter